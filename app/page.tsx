import Image from "next/image";
import Link from "next/link";
import { Leaf, ShoppingBasket, Snowflake, Truck } from "lucide-react";
import LuckyDraw from "./components/LuckyDraw";
import WelcomeGate from "./components/WelcomeGate";

const fruits = [
  {
    img: "strawberry",
    name: "草莓",
    en: "Strawberry",
    desc: "酸甜多汁、香氣濃郁，維生素 C 含量比柑橘還高。",
    price: 180,
    unit: "盒",
  },
  {
    img: "mango",
    name: "台灣芒果33333",
    en: "Mango",
    desc: "熱帶水果之王，果肉細滑香甜，夏天消暑首選。",
    price: 150,
    unit: "份",
  },
  {
    img: "watermelon",
    name: "西瓜",
    en: "Watermelon",
    desc: "含水量超過九成，消暑解渴，夏日野餐必備。",
    price: 299,
    unit: "顆",
  },
  {
    img: "blueberry",
    name: "藍莓",
    en: "Blueberry",
    desc: "小巧的抗氧化寶庫，富含花青素的超級食物。",
    price: 220,
    unit: "盒",
  },
  {
    img: "grape",
    name: "葡萄",
    en: "Grape",
    desc: "一口一顆，甜度集中，帶皮吃更能攝取花青素。",
    price: 160,
    unit: "串",
  },
  {
    img: "apple",
    name: "蘋果",
    en: "Apple",
    desc: "清脆多汁，富含膳食纖維，一年四季都合適。",
    price: 120,
    unit: "份",
  },
  {
    img: "orange",
    name: "橘子",
    en: "Orange",
    desc: "酸甜平衡、香氣清爽，冬季最受歡迎的柑橘。",
    price: 130,
    unit: "份",
  },
  {
    img: "pineapple",
    name: "鳳梨",
    en: "Pineapple",
    desc: "酸甜帶勁，富含鳳梨酵素，幫助消化又解膩。",
    price: 90,
    unit: "顆",
  },
  {
    img: "kiwifruit",
    name: "奇異果",
    en: "Kiwifruit",
    desc: "維生素 C 含量驚人，籽粒口感獨特又飽足。",
    price: 140,
    unit: "份",
  },
  {
    img: "banana",
    name: "香蕉",
    en: "Banana",
    desc: "香甜綿密、鉀含量高，補充體力的天然能量棒。",
    price: 60,
    unit: "串",
  },
];

const features = [
  {
    icon: Truck,
    title: "產地直送",
    desc: "清晨採收，當日出貨，鎖住最新鮮的風味。",
  },
  {
    icon: Snowflake,
    title: "全程冷藏",
    desc: "低溫配送不斷鏈，抵達時依然清脆多汁。",
  },
  {
    icon: Leaf,
    title: "嚴選果農",
    desc: "與在地契作果園合作，顆顆用心把關。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <WelcomeGate />

      {/* nav */}
      <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="font-serif text-2xl italic tracking-tight text-foreground">
            果實日常
          </div>
          <div className="hidden gap-10 text-sm text-foreground/70 sm:flex">
            <a href="#products" className="transition hover:text-accent">
              精選水果
            </a>
            <Link href="/blog" className="transition hover:text-accent">
              芒果專欄
            </Link>
            <Link href="/game" className="transition hover:text-accent">
              小遊戲
            </Link>
            <a href="#about" className="transition hover:text-accent">
              關於我們
            </a>
          </div>
          <a
            href="#products"
            className="flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition hover:opacity-90"
          >
            <ShoppingBasket size={16} />
            立即選購
          </a>
        </nav>
      </header>

      {/* hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:grid-cols-2 sm:py-28">
        <div>
          <p className="font-serif text-lg italic text-accent">
            Fresh from the farm
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-6xl">
            當季鮮果，
            <br />
            直送到你家門口。
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            我們與在地果農契作合作，清晨採摘、當日配送，
            把最新鮮飽滿的果實，原汁原味地送到你手上。
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#products"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:scale-105"
            >
              瀏覽本週鮮果
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-foreground/70 underline decoration-line underline-offset-4 transition hover:text-accent"
            >
              認識我們
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
            <Image
              src="/images/strawberry.jpg"
              alt="新鮮草莓"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-xl">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/images/orange.jpg"
                alt="新鮮橘子"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">100% 新鮮採摘</p>
              <p className="font-serif text-xs italic text-muted">
                Picked this morning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* features band */}
      <section className="bg-brand py-14 text-brand-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <f.icon size={28} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-brand-foreground/70">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-serif italic text-accent">Our Selection</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            本週精選鮮果
          </h2>
          <p className="mt-3 text-sm text-muted">
            十種當季人氣水果，每一顆都經過果農與我們雙重把關。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fruits.map((fruit) => (
            <div
              key={fruit.name}
              className="group overflow-hidden rounded-3xl border border-line bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/${fruit.img}.jpg`}
                  alt={fruit.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{fruit.name}</h3>
                  <span className="font-serif text-sm italic text-muted">
                    {fruit.en}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {fruit.desc}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-serif text-xl font-semibold text-accent">
                    NT$ {fruit.price}
                    <span className="ml-1 text-xs font-sans font-normal text-muted">
                      / {fruit.unit}
                    </span>
                  </span>
                  <button className="flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-medium text-brand-foreground transition hover:opacity-90">
                    <ShoppingBasket size={14} />
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* about */}
      <section id="about" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 sm:grid-cols-2">
          <div className="relative sm:order-2">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-xl shadow-black/10">
              <Image
                src="/images/watermelon.jpg"
                alt="新鮮西瓜"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 h-32 w-32 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-36 sm:w-36">
              <Image
                src="/images/grape.jpg"
                alt="新鮮葡萄"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>

            <div className="absolute -right-4 -top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-accent text-center text-white shadow-lg sm:h-24 sm:w-24">
              <span className="font-serif text-lg font-bold italic sm:text-xl">
                since
              </span>
              <span className="text-xl font-bold sm:text-2xl">2018</span>
            </div>
          </div>

          <div className="sm:order-1">
            <span className="font-serif text-6xl italic leading-none text-accent/25">
              &ldquo;
            </span>
            <p className="-mt-4 font-serif italic text-accent">Our Story</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              我們相信，
              <br />
              好水果值得被好好對待。
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              果實日常成立的初衷，是希望縮短果園到餐桌的距離。
              我們親自走訪果園、確認採收時機，並用最短的時間完成配送，
              讓每一份鮮果送到你手上時，都還帶著清晨的溫度。
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-accent">8</p>
                <p className="mt-1 text-xs text-muted">年產地經驗</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent">
                  32
                </p>
                <p className="mt-1 text-xs text-muted">契作果園</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent">
                  12k+
                </p>
                <p className="mt-1 text-xs text-muted">服務顧客</p>
              </div>
            </div>
          </div>
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
            <a href="#products" className="transition hover:text-accent">
              精選水果
            </a>
            <Link href="/blog" className="transition hover:text-accent">
              芒果專欄
            </Link>
            <Link href="/game" className="transition hover:text-accent">
              小遊戲
            </Link>
            <a href="#about" className="transition hover:text-accent">
              關於我們
            </a>
          </div>
        </div>
      </footer>

      <LuckyDraw />
    </div>
  );
}
