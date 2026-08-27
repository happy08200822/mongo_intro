"use client";

import { useState } from "react";

export default function WelcomeGate() {
  const [name, setName] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(true);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setName(trimmed);
    setShowModal(false);
  }

  return (
    <>
      {name && (
        <div className="bg-brand py-2.5 text-center text-sm text-brand-foreground">
          👋 歡迎回來，{name}！今天想吃點什麼新鮮水果呢？
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-line bg-surface p-8 text-center shadow-2xl">
            <p className="font-serif italic text-accent">Welcome</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              歡迎光臨果實日常
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              可以怎麼稱呼您呢？
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="輸入您的稱呼"
                className="w-full rounded-full border border-line bg-background px-5 py-3 text-center text-sm outline-none transition focus:border-accent"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
              >
                進入網站
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="mt-3 text-xs text-muted underline decoration-line underline-offset-4 transition hover:text-accent"
              >
                先隨便逛逛
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
