"use client";

import { useState } from "react";
import { Gift, Sparkles, X } from "lucide-react";

type Result = "idle" | "drawing" | "win" | "lose";

function generateCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `MANGO90-${code}`;
}

export default function LuckyDraw() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<Result>("idle");
  const [code, setCode] = useState("");

  function openModal() {
    setOpen(true);
    setResult("idle");
    setCode("");
  }

  function closeModal() {
    setOpen(false);
  }

  function draw() {
    setResult("drawing");
    setTimeout(() => {
      const isWin = Math.random() < 0.1;
      if (isWin) {
        setCode(generateCode());
        setResult("win");
      } else {
        setResult("lose");
      }
    }, 900);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition hover:scale-105"
      >
        <Gift size={18} />
        抽芒果優惠券
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-line bg-surface p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-muted transition hover:text-foreground"
              aria-label="關閉"
            >
              <X size={20} />
            </button>

            <p className="font-serif italic text-accent">Lucky Draw</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              芒果優惠抽獎
            </h3>

            {result === "idle" && (
              <>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  每人每次有 10% 機率抽中「芒果優惠券 9 折」，
                  點擊下方按鈕試試手氣！
                </p>
                <button
                  onClick={draw}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
                >
                  <Sparkles size={16} />
                  立即抽獎
                </button>
              </>
            )}

            {result === "drawing" && (
              <div className="mt-10 flex flex-col items-center gap-4 py-4">
                <Sparkles size={36} className="animate-spin text-accent" />
                <p className="text-sm text-muted">抽獎中...</p>
              </div>
            )}

            {result === "win" && (
              <>
                <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-6">
                  <p className="text-3xl">🎉</p>
                  <p className="mt-2 font-semibold text-foreground">
                    恭喜中獎！芒果優惠券 9 折
                  </p>
                  <p className="mt-3 font-mono text-lg font-bold tracking-widest text-accent">
                    {code}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    結帳時輸入此代碼即可折抵，優惠僅限芒果商品。
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:opacity-90"
                >
                  太棒了
                </button>
              </>
            )}

            {result === "lose" && (
              <>
                <div className="mt-6 rounded-2xl border border-line bg-background p-6">
                  <p className="text-3xl">🥭</p>
                  <p className="mt-2 font-semibold text-foreground">
                    差一點點，這次沒有中獎
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    謝謝參加，歡迎下次再來試試手氣！
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:opacity-90"
                >
                  好，下次再來
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
