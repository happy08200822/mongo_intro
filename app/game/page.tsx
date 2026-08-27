import Link from "next/link";
import { ArrowLeft, ShoppingBasket } from "lucide-react";
import CatchMangoGame from "./CatchMangoGame";

export default function GamePage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-serif text-2xl italic tracking-tight text-foreground"
          >
            果實日常
          </Link>
          <div className="hidden gap-10 text-sm text-foreground/70 sm:flex">
            <Link href="/#products" className="transition hover:text-accent">
              精選水果
            </Link>
            <Link href="/blog" className="transition hover:text-accent">
              芒果專欄
            </Link>
            <Link href="/game" className="text-accent">
              小遊戲
            </Link>
          </div>
          <Link
            href="/#products"
            className="flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition hover:opacity-90"
          >
            <ShoppingBasket size={16} />
            立即選購
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent"
        >
          <ArrowLeft size={14} />
          回到首頁
        </Link>

        <div className="mt-8 text-center">
          <p className="font-serif italic text-accent">Just for Fun</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            接芒果小遊戲
          </h1>
          <p className="mt-4 text-base text-muted">
            純粹娛樂，15 秒內移動籃子接住掉落的芒果，看看你能拿到幾分！
          </p>
        </div>

        <div className="mt-12">
          <CatchMangoGame />
        </div>
      </section>

      <footer className="bg-brand py-12 text-brand-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-xl italic">果實日常</p>
            <p className="mt-1 text-xs text-brand-foreground/60">
              © {new Date().getFullYear()} Fruithouse. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-brand-foreground/70">
            <Link href="/#products" className="transition hover:text-accent">
              精選水果
            </Link>
            <Link href="/blog" className="transition hover:text-accent">
              芒果專欄
            </Link>
            <Link href="/game" className="transition hover:text-accent">
              小遊戲
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
