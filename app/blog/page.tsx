import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBasket } from "lucide-react";

const articles = [
  {
    date: "2026.05.12",
    tag: "產地知識",
    title: "芒果的產地與品種：從愛文到金煌，你分得清楚嗎？",
    excerpt:
      "台灣芒果品種眾多，光是市場常見的就有愛文、金煌、玉文、凱特好幾種，風味與產季各有不同。",
    body: [
      "台灣是芒果的重要產地之一，從南部台南、高雄到屏東，都有各具特色的芒果產區。市面上最常見的「愛文芒果」果肉細滑、纖維少，帶有淡淡的果酸香氣，是外銷與內銷都受歡迎的品種。",
      "「金煌芒果」則是台灣自行培育的品種，果實碩大、甜度高，果肉呈現濃郁的金黃色，適合喜歡濃厚甜味的人。而產季較晚的「玉文芒果」與「凱特芒果」，則以清爽的甜度和較長的保存期著稱。",
      "了解品種差異，不只能挑到更合口味的芒果，也能更準確掌握產季——通常 4 月到 8 月是台灣芒果的盛產期，這段期間的芒果風味也最為飽滿。",
    ],
  },
  {
    date: "2026.05.20",
    tag: "選購技巧",
    title: "挑對芒果不失手：4 個關鍵，帶你選出最甜的一顆",
    excerpt:
      "看色澤、聞香氣、摸軟硬、看果蒂，四個步驟就能大幅提高挑到甜芒果的機率。",
    body: [
      "第一，看色澤。成熟的芒果表皮顏色會轉為飽滿的黃紅色，若還帶有大片深綠色，通常代表尚未完全成熟。",
      "第二，聞香氣。靠近蒂頭聞一聞，成熟的芒果會散發自然的果香，香氣越濃通常代表越熟、越甜。",
      "第三，摸軟硬。用手輕輕按壓果肉較厚的部位，若有微微的彈性回彈，代表熟度剛好；太硬代表還沒熟，太軟則可能已經過熟。",
      "第四，看果蒂。新鮮的果蒂周圍飽滿無凹陷，若果蒂處有滲出汁液或發黑，則要避免購買。掌握這四點，下次挑芒果就不用再靠運氣了。",
    ],
  },
  {
    date: "2026.06.03",
    tag: "食譜分享",
    title: "在家也能做：3 道簡單消暑芒果甜點",
    excerpt:
      "芒果糯米、芒果冰沙、芒果優格杯，三道零失敗甜點，夏天在家就能做出消暑好滋味。",
    body: [
      "芒果糯米：將糯米蒸熟後拌入椰漿與少許糖，放涼後鋪上切塊芒果，淋上剩餘椰漿即可，是最經典的東南亞風味甜點。",
      "芒果冰沙：把冷凍芒果塊、少許牛奶或優格放入果汁機打勻，濃稠綿密的口感，不加糖也自然香甜，是夏天消暑的快速選擇。",
      "芒果優格杯：新鮮芒果切丁，與無糖優格、燕麥交錯疊層放入杯中，冰鎮後享用，健康又有飽足感，很適合當作早餐或午後點心。",
    ],
  },
];

export default function BlogPage() {
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
            <Link href="/blog" className="text-accent">
              芒果專欄
            </Link>
            <Link href="/game" className="transition hover:text-accent">
              小遊戲
            </Link>
            <Link href="/#about" className="transition hover:text-accent">
              關於我們
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

      <section className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent"
        >
          <ArrowLeft size={14} />
          回到首頁
        </Link>

        <p className="mt-8 font-serif italic text-accent">Mango Journal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          芒果專欄
        </h1>
        <p className="mt-4 text-base text-muted">
          從產地品種、挑選技巧到食譜分享，三篇文章帶你更懂芒果。
        </p>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl shadow-xl shadow-black/10">
          <Image
            src="/images/mango.jpg"
            alt="新鮮芒果"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="object-cover"
          />
        </div>

        <div className="mt-16 divide-y divide-line">
          {articles.map((article) => (
            <article key={article.title} className="py-12 first:pt-0">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full border border-line px-2.5 py-1 font-mono uppercase tracking-wider">
                  {article.tag}
                </span>
                <span>{article.date}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                {article.title}
              </h2>
              <p className="mt-3 font-serif italic text-muted">
                {article.excerpt}
              </p>
              <div className="mt-6 space-y-4">
                {article.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-foreground/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
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
