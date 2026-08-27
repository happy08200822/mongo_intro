"use client";

import { useEffect, useRef, useState } from "react";

const GAME_SECONDS = 15;
const BASKET_WIDTH = 90;
const BASKET_HEIGHT = 60;
const MANGO_SIZE = 40;

type Mango = {
  id: number;
  x: number;
  y: number;
  speed: number;
};

type Phase = "idle" | "playing" | "over";

export default function CatchMangoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [bestScore, setBestScore] = useState(0);

  const basketXRef = useRef(0);
  const mangoesRef = useRef<Mango[]>([]);
  const scoreRef = useRef(0);
  const nextIdRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const endAtRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function getCanvasSize() {
    const wrapper = wrapperRef.current;
    const width = wrapper ? wrapper.clientWidth : 360;
    return { width, height: 480 };
  }

  function startGame() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = getCanvasSize();
    canvas.width = width;
    canvas.height = height;

    basketXRef.current = width / 2 - BASKET_WIDTH / 2;
    mangoesRef.current = [];
    scoreRef.current = 0;
    nextIdRef.current = 0;
    spawnTimerRef.current = 0;
    setScore(0);
    setTimeLeft(GAME_SECONDS);
    setPhase("playing");

    endAtRef.current = performance.now() + GAME_SECONDS * 1000;
    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
  }

  function endGame() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setPhase("over");
    setBestScore((prev) => Math.max(prev, scoreRef.current));
  }

  function loop(now: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
    lastTimeRef.current = now;

    const remainingMs = endAtRef.current - now;
    const remainingSec = Math.max(0, Math.ceil(remainingMs / 1000));
    setTimeLeft(remainingSec);

    if (remainingMs <= 0) {
      endGame();
      return;
    }

    const { width, height } = canvas;

    // spawn mangoes
    spawnTimerRef.current -= dt;
    if (spawnTimerRef.current <= 0) {
      spawnTimerRef.current = 0.55 + Math.random() * 0.4;
      mangoesRef.current.push({
        id: nextIdRef.current++,
        x: Math.random() * (width - MANGO_SIZE),
        y: -MANGO_SIZE,
        speed: 140 + Math.random() * 120,
      });
    }

    // update mangoes
    const basketY = height - BASKET_HEIGHT - 10;
    const basketX = basketXRef.current;

    mangoesRef.current = mangoesRef.current.filter((m) => {
      m.y += m.speed * dt;

      const caught =
        m.y + MANGO_SIZE >= basketY &&
        m.y <= basketY + BASKET_HEIGHT &&
        m.x + MANGO_SIZE > basketX &&
        m.x < basketX + BASKET_WIDTH;

      if (caught) {
        scoreRef.current += 1;
        setScore(scoreRef.current);
        return false;
      }

      return m.y < height + MANGO_SIZE;
    });

    // draw
    ctx.clearRect(0, 0, width, height);

    // background
    ctx.fillStyle = "#faf6ee";
    ctx.fillRect(0, 0, width, height);

    // mangoes
    mangoesRef.current.forEach((m) => {
      ctx.font = `${MANGO_SIZE}px serif`;
      ctx.fillText("🥭", m.x, m.y + MANGO_SIZE);
    });

    // basket
    ctx.font = `${BASKET_HEIGHT}px serif`;
    ctx.fillText("🧺", basketX, basketY + BASKET_HEIGHT);

    rafRef.current = requestAnimationFrame(loop);
  }

  function moveBasketTo(clientX: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const clamped = Math.min(
      Math.max(relativeX - BASKET_WIDTH / 2, 0),
      canvas.width - BASKET_WIDTH
    );
    basketXRef.current = clamped;
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (phase !== "playing") return;
    moveBasketTo(e.clientX);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (phase !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const step = 30;
    if (e.key === "ArrowLeft") {
      basketXRef.current = Math.max(basketXRef.current - step, 0);
    } else if (e.key === "ArrowRight") {
      basketXRef.current = Math.min(
        basketXRef.current + step,
        canvas.width - BASKET_WIDTH
      );
    }
  }

  return (
    <div
      ref={wrapperRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative mx-auto w-full max-w-md outline-none"
    >
      <div className="mb-4 flex items-center justify-between text-sm font-medium">
        <span className="rounded-full bg-brand px-4 py-1.5 text-brand-foreground">
          分數：{score}
        </span>
        <span className="rounded-full border border-line px-4 py-1.5 text-foreground">
          剩餘時間：{timeLeft}s
        </span>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-line shadow-lg">
        <canvas
          ref={canvasRef}
          onPointerMove={handlePointerMove}
          className="block h-[480px] w-full touch-none"
        />

        {phase !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40 text-center backdrop-blur-sm">
            {phase === "idle" && (
              <>
                <p className="text-4xl">🥭</p>
                <h3 className="text-xl font-bold text-white">接芒果小遊戲</h3>
                <p className="max-w-xs text-sm text-white/80">
                  用滑鼠或手指移動籃子，15 秒內盡量接住越多芒果！
                  <br />
                  （鍵盤也可用左右方向鍵）
                </p>
                <button
                  onClick={startGame}
                  className="mt-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                  開始遊戲
                </button>
              </>
            )}
            {phase === "over" && (
              <>
                <p className="text-4xl">🎉</p>
                <h3 className="text-xl font-bold text-white">時間到！</h3>
                <p className="text-white/90">
                  本次分數：
                  <span className="text-2xl font-bold text-accent">
                    {" "}
                    {score}
                  </span>
                </p>
                <p className="text-xs text-white/60">最高紀錄：{bestScore}</p>
                <button
                  onClick={startGame}
                  className="mt-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                  再玩一次
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
