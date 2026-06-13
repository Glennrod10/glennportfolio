"use client";

import { motion } from "framer-motion";
import { useState, useCallback, useRef, useEffect } from "react";
import { Sparkles, ListTodo, Gamepad2, BookOpen, Coins, HandMetal, CircleHelp } from "lucide-react";

function TodoApp() {
  const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>(() => [
    { id: 1, text: "Pet the cat (urgent)", done: false },
    { id: 2, text: "Pretend to be productive", done: true },
    { id: 3, text: "Refactor the entire codebase for fun", done: false },
    { id: 4, text: "Watch a tutorial, never finish it", done: false },
    { id: 5, text: "Come up with funny todo items", done: true },
  ]);
  const [input, setInput] = useState("");

  const addTodo = useCallback(() => {
    if (!input.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  }, [input]);

  return (
    <>
      <div className="space-y-1.5 mb-4">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setTodos(prev => prev.map(t => t.id === todo.id ? { ...t, done: !t.done } : t))}
              className={`font-mono text-sm flex-shrink-0 ${
                todo.done ? "text-green-400" : "text-white/40"
              } hover:text-cyan-400 transition-colors`}
            >
              {todo.done ? "[x]" : "[ ]"}
            </button>
            <span className={todo.done ? "line-through text-white/30" : "text-white/80"}>
              {todo.text}
            </span>
            <button
              onClick={() => setTodos(prev => prev.filter(t => t.id !== todo.id))}
              className="text-white/20 hover:text-red-400 transition-colors ml-auto text-xs"
            >
              rm
            </button>
          </div>
        ))}
      </div>
      {todos.length > 0 && (
        <div className="text-xs text-white/20 mb-4">
          {todos.filter(t => t.done).length}/{todos.length} done
        </div>
      )}
      <div className="flex items-center gap-2 border-t border-white/5 pt-3">
        <span className="text-green-400 text-sm">$</span>
        <span className="text-white/30 text-sm">add</span>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
          placeholder="new task..."
          aria-label="New todo task"
          className="flex-1 bg-transparent border-b border-white/10 text-white text-sm placeholder:text-white/15 outline-none focus:border-cyan-400/50 transition-colors font-mono"
        />
      </div>
    </>
  );
}

function MiniGame() {
  const [target] = useState(() => Math.floor(Math.random() * 50) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 50");
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);
  const [gameId, setGameId] = useState(0);

  const handleGuess = () => {
    const n = parseInt(guess);
    if (isNaN(n) || n < 1 || n > 50) return;
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (n === target) {
      setMessage(`Correct! You got it in ${newAttempts} attempts!`);
      setWon(true);
    } else {
      setMessage(n < target ? "Too low! Try a higher number." : "Too high! Try a lower number.");
    }
    setGuess("");
  };

  const reset = () => {
    setGameId(prev => prev + 1);
    setGuess("");
    setMessage("Guess a number between 1 and 50");
    setAttempts(0);
    setWon(false);
  };

  return (
    <div key={gameId}>
      <div className="text-white/50 text-sm mb-1">Attempts: <span className="text-cyan-400">{attempts}</span></div>
      <div className="text-white/80 text-sm mb-5 leading-relaxed">{message}</div>
      {!won ? (
        <div className="flex items-center gap-2">
          <span className="text-green-400 text-sm">$</span>
          <span className="text-white/30 text-sm">guess</span>
          <input
            value={guess}
            onChange={e => setGuess(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleGuess()}
            placeholder="1-50"
            type="number"
            min="1"
            max="50"
            aria-label="Your guess"
            className="w-16 bg-transparent border-b border-white/20 text-white text-sm placeholder:text-white/15 outline-none focus:border-cyan-400 transition-colors text-center font-mono"
          />
          <button
            onClick={handleGuess}
            aria-label="Submit guess"
            className="text-white/40 hover:text-white/80 transition-colors text-xs font-mono"
          >
            ↵
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-green-400 text-sm">$</span>
          <span className="text-white/50 text-sm">Congratulations!</span>
          <button
            onClick={reset}
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono underline underline-offset-2 decoration-white/20"
          >
            play again
          </button>
        </div>
      )}
    </div>
  );
}

function StoryGame() {
  const [prompt, setPrompt] = useState("");
  const [stage, setStage] = useState<"input" | "story" | "ended">("input");
  const [story, setStory] = useState<{ text: string; isChoice: boolean }[]>([]);
  const [choices, setChoices] = useState<{ text: string; outcome: string }[]>([]);

  const startStory = () => {
    if (!prompt.trim()) return;
    setStory([{ text: `Once upon a time, in a world of ${prompt.trim()}...`, isChoice: false }]);
    setChoices([
      { text: "Explore the unknown", outcome: "You venture into the unknown and discover a hidden path glimmering with light." },
      { text: "Stay and observe", outcome: "You wait patiently and notice subtle patterns emerging all around you." },
    ]);
    setStage("story");
  };

  const makeChoice = (choice: { text: string; outcome: string }) => {
    const newStory = [...story, { text: `> ${choice.text}`, isChoice: true }, { text: choice.outcome, isChoice: false }];
    setStory(newStory);
    if (newStory.length > 6) {
      setStory(prev => [...prev, { text: "The adventure continues beyond this page...", isChoice: false }, { text: "The End", isChoice: false }]);
      setStage("ended");
      setChoices([]);
    } else {
      setChoices([
        { text: "Continue forward", outcome: "You press on and the world shifts around you revealing new wonders." },
        { text: "Look around carefully", outcome: "You notice intricate details you previously missed, clues hidden in plain sight." },
      ]);
    }
  };

  const resetStory = () => {
    setPrompt("");
    setStory([]);
    setChoices([]);
    setStage("input");
  };

  return (
    <>
      {stage === "input" && (
        <div>
          <div className="text-white/50 text-sm mb-4">Enter a theme to begin your adventure</div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-sm">$</span>
            <span className="text-white/30 text-sm">prompt</span>
            <input
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={e => e.key === "Enter" && startStory()}
              placeholder="enchanted forest, cyberpunk city..."
              aria-label="Story theme prompt"
              className="flex-1 bg-transparent border-b border-white/10 text-white text-sm placeholder:text-white/15 outline-none focus:border-cyan-400/50 transition-colors font-mono"
            />
          </div>
        </div>
      )}
      {stage !== "input" && (
        <div>
          <div className="space-y-2 mb-5 max-h-48 overflow-y-auto pr-1">
            {story.map((s, i) => (
              <p key={i} className={`text-sm leading-relaxed ${s.isChoice ? "text-cyan-400/80 font-medium" : "text-white/70"}`}>
                {s.text}
              </p>
            ))}
          </div>
          {stage === "story" && choices.length > 0 && (
            <div className="space-y-1.5">
              {choices.map((c, i) => (
                <button
                  key={i}
                  onClick={() => makeChoice(c)}
                  className="block w-full text-left text-sm text-white/50 hover:text-cyan-400 transition-colors font-mono"
                >
                  {i + 1}. {c.text}
                </button>
              ))}
            </div>
          )}
          {stage === "ended" && (
            <button
              onClick={resetStory}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-mono underline underline-offset-2 decoration-white/20"
            >
              $ ./new-story.sh
            </button>
          )}
        </div>
      )}
    </>
  );
}

function CoinFlip() {
  const [state, setState] = useState<"idle" | "flipping" | "result">("idle");
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [won, setWon] = useState(false);
  const [stats, setStats] = useState({ w: 0, l: 0 });

  const flip = (bet: "heads" | "tails") => {
    setState("flipping");
    setTimeout(() => {
      const flipResult = Math.random() < 0.5 ? "heads" : "tails";
      setResult(flipResult);
      setWon(bet === flipResult);
      setStats(s => bet === flipResult ? { ...s, w: s.w + 1 } : { ...s, l: s.l + 1 });
      setState("result");
    }, 600);
  };

  const reset = () => {
    setState("idle");
    setResult(null);
  };

  return (
    <div>
      {state === "idle" && (
        <>
          <div className="text-white/50 text-sm mb-4">Heads or tails?</div>
          <div className="flex gap-4">
            <button onClick={() => flip("heads")} className="text-sm text-white/70 hover:text-cyan-400 transition-colors font-mono">$ heads</button>
            <button onClick={() => flip("tails")} className="text-sm text-white/70 hover:text-cyan-400 transition-colors font-mono">$ tails</button>
          </div>
        </>
      )}
      {state === "flipping" && <div className="text-cyan-400/80 text-sm animate-pulse">Flipping coin...</div>}
      {state === "result" && (
        <div>
          <div className="text-sm mb-1">
            <span className="text-white/50">Result: </span>
            <span className={won ? "text-green-400" : "text-red-400"}>{result}</span>
          </div>
          <div className={`text-sm mb-2 ${won ? "text-green-400" : "text-red-400"}`}>
            {won ? "You win!" : "You lose!"}
          </div>
          <div className="text-xs text-white/30 mb-4">W: {stats.w} / L: {stats.l}</div>
          <button onClick={reset} className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono underline underline-offset-2 decoration-white/20">
            flip again
          </button>
        </div>
      )}
    </div>
  );
}

function RPS() {
  const [player, setPlayer] = useState<"rock" | "paper" | "scissors" | null>(null);
  const [computer, setComputer] = useState<"rock" | "paper" | "scissors" | null>(null);
  const [result, setResult] = useState<"win" | "lose" | "draw" | null>(null);
  const [score, setScore] = useState({ w: 0, l: 0, d: 0 });

  const play = (choice: "rock" | "paper" | "scissors") => {
    const choices = ["rock", "paper", "scissors"] as const;
    const cpu = choices[Math.floor(Math.random() * 3)];
    setPlayer(choice);
    setComputer(cpu);
    if (choice === cpu) {
      setResult("draw");
      setScore(s => ({ ...s, d: s.d + 1 }));
    } else if (
      (choice === "rock" && cpu === "scissors") ||
      (choice === "paper" && cpu === "rock") ||
      (choice === "scissors" && cpu === "paper")
    ) {
      setResult("win");
      setScore(s => ({ ...s, w: s.w + 1 }));
    } else {
      setResult("lose");
      setScore(s => ({ ...s, l: s.l + 1 }));
    }
  };

  const reset = () => {
    setPlayer(null);
    setComputer(null);
    setResult(null);
  };

  return (
    <div>
      {!player ? (
        <>
          <div className="text-white/50 text-sm mb-4">Rock, paper, or scissors?</div>
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => play("rock")} className="text-sm text-white/70 hover:text-cyan-400 transition-colors font-mono">$ rock</button>
            <button onClick={() => play("paper")} className="text-sm text-white/70 hover:text-cyan-400 transition-colors font-mono">$ paper</button>
            <button onClick={() => play("scissors")} className="text-sm text-white/70 hover:text-cyan-400 transition-colors font-mono">$ scissors</button>
          </div>
        </>
      ) : (
        <div>
          <div className="text-sm text-white/50 mb-1">You: <span className="text-white/80">{player}</span></div>
          <div className="text-sm text-white/50 mb-2">CPU: <span className="text-white/80">{computer}</span></div>
          <div className={`text-sm mb-2 font-medium ${result === "win" ? "text-green-400" : result === "lose" ? "text-red-400" : "text-yellow-400"}`}>
            {result === "win" ? "You win!" : result === "lose" ? "You lose!" : "Draw!"}
          </div>
          <div className="text-xs text-white/30 mb-4">W: {score.w} / L: {score.l} / D: {score.d}</div>
          <button onClick={reset} className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono underline underline-offset-2 decoration-white/20">
            play again
          </button>
        </div>
      )}
    </div>
  );
}

function Magic8Ball() {
  const answers = [
    "It is certain.", "It is decidedly so.", "Without a doubt.",
    "Yes, definitely.", "You may rely on it.", "As I see it, yes.",
    "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.",
    "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
    "Cannot predict now.", "Concentrate and ask again.",
    "Don't count on it.", "My reply is no.", "My sources say no.",
    "Outlook not so good.", "Very doubtful.",
  ];
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [shaking, setShaking] = useState(false);

  const ask = () => {
    if (!question.trim()) return;
    setShaking(true);
    setAnswer(null);
    setTimeout(() => {
      setAnswer(answers[Math.floor(Math.random() * answers.length)]);
      setShaking(false);
    }, 600);
  };

  const reset = () => {
    setQuestion("");
    setAnswer(null);
  };

  return (
    <div>
      {!answer && !shaking && (
        <div>
          <div className="text-white/50 text-sm mb-4">Ask the magic 8-ball a question</div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-sm">$</span>
            <span className="text-white/30 text-sm">ask</span>
            <input
              value={question}
              onChange={e => setQuestion(e.target.value)}
              onKeyDown={e => e.key === "Enter" && ask()}
              placeholder="will I be productive today?"
              aria-label="Ask a question"
              className="flex-1 bg-transparent border-b border-white/10 text-white text-sm placeholder:text-white/15 outline-none focus:border-cyan-400/50 transition-colors font-mono"
            />
          </div>
        </div>
      )}
      {shaking && <div className="text-cyan-400/80 text-sm animate-pulse">Shaking the 8-ball...</div>}
      {answer && !shaking && (
        <div>
          <div className="text-xs text-white/30 mb-1">Q: {question}</div>
          <div className="text-sm text-white/80 mb-4">A: <span className="text-cyan-400">{answer}</span></div>
          <button onClick={reset} className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono underline underline-offset-2 decoration-white/20">
            ask another
          </button>
        </div>
      )}
    </div>
  );
}

const tabs = [
  { label: "Todo", icon: <ListTodo className="w-4 h-4" />, component: <TodoApp />, terminal: "todo.sh" },
  { label: "Guess Game", icon: <Gamepad2 className="w-4 h-4" />, component: <MiniGame />, terminal: "guess-game.sh" },
  { label: "Story Game", icon: <BookOpen className="w-4 h-4" />, component: <StoryGame />, terminal: "story-adventure.sh" },
  { label: "Coin Flip", icon: <Coins className="w-4 h-4" />, component: <CoinFlip />, terminal: "coin-flip.sh" },
  { label: "RPS", icon: <HandMetal className="w-4 h-4" />, component: <RPS />, terminal: "rps.sh" },
  { label: "8-Ball", icon: <CircleHelp className="w-4 h-4" />, component: <Magic8Ball />, terminal: "magic-8ball.sh" },
];

export function PlaygroundSection() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setCanScrollRight(el.scrollWidth > el.clientWidth);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTab = (i: number) => {
    setActiveTab(i);
    const el = scrollRef.current;
    if (!el) return;
    const btn = el.querySelector(`.tab-btn:nth-child(${i + 1})`) as HTMLElement | null;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section id="playground-section" className="py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">Interactive Lab</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Playground & <span className="gradient-text">Experiments</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mini apps, silly games, and experiments. All running right here in your browser.
          </p>
        </motion.div>

        <div className="relative mb-10">
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex gap-2 w-max mx-auto px-4">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => scrollTab(i)}
                  className={`tab-btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                    activeTab === i
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-overlay/5 text-foreground/60 hover:text-foreground hover:bg-overlay/10"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          )}
        </div>

        <div className="rounded-2xl overflow-hidden border border-overlay/10 shadow-2xl shadow-black/50">
          <div className="bg-zinc-800 px-4 py-3 flex items-center gap-3 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-white/30 font-mono">
              glenn@portfolio: {tabs[activeTab].terminal}
            </span>
          </div>

          <div className="bg-zinc-900 p-5 font-mono min-h-[280px] flex flex-col">
            <div className="flex items-center gap-2 text-white/40 mb-5">
              <span className="text-green-400">glenn@portfolio</span>
              <span className="text-white/20">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white/20">$</span>
              <span className="text-white/60">./{tabs[activeTab].terminal}</span>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="flex-1"
            >
              {tabs[activeTab].component}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
