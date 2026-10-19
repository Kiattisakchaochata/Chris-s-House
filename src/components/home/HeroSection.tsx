import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "FOOD & DRINKS",
    subtitle: "เมนูอาหารและเครื่องดื่ม",
    image: "/images/hero-card-1.jpg",
    href: "/menu",
  },
  {
    title: "OUR ATMOSPHERE",
    subtitle: "บรรยากาศร้าน",
    image: "/images/hero-card-2.jpg",
    href: "/gallery",
  },
  {
    title: "MAP & CONTACT",
    subtitle: "แผนที่และติดต่อเรา",
    image: "/images/hero-card-3.jpg",
    href: "/contact",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F3EB]">
      {/* HERO BACKGROUND */}
      <div className="relative min-h-[680px] w-full overflow-hidden sm:min-h-[720px] lg:min-h-[760px] min-[1920px]:min-h-[850px] min-[2560px]:min-h-[980px]">
        <Image
          src="/images/hero-main.jpg"
          alt="Chris's House บ้านคริส อยุธยา"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1009]/85 via-[#2D1B12]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1009]/50 via-transparent to-[#1B1009]/10" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 pb-48 pt-20 sm:min-h-[720px] sm:px-10 lg:min-h-[760px] lg:pb-44 min-[1920px]:min-h-[850px] min-[1920px]:max-w-[1680px] min-[2560px]:min-h-[980px] min-[2560px]:max-w-[2100px]">
          <div className="max-w-2xl text-[#FFF8EE] min-[1920px]:max-w-4xl">
            <p className="mb-5 text-xs font-medium tracking-[0.32em] text-[#E2C79B] sm:text-sm">
              WARMTH • TASTE • MEMORIES
            </p>

            <h1 className="font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.95] tracking-tight min-[1920px]:text-[clamp(7rem,6vw,9rem)]">
                Chris&apos;s House
              </h1>

              <h2 className="mt-6 text-2xl font-semibold tracking-wide sm:text-3xl min-[1920px]:text-4xl">
                บ้านคริส อยุธยา
              </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#FFF8EE]/90 sm:text-lg min-[1920px]:max-w-3xl min-[1920px]:text-xl">
              ร้านอาหารและคาเฟ่ บรรยากาศอบอุ่น
              <br />
              ที่รวมความอร่อย ความสุข และความทรงจำดี ๆ ไว้ในที่เดียว
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D9B57A]/40 bg-[#8B5A35] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#A56C3B] sm:text-base"
              >
                <span aria-hidden="true">♨</span>
                ดูเมนูอาหาร
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E2C79B]/60 bg-[#1B1009]/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B1009]/60 sm:text-base"
              >
                <span aria-hidden="true">⌖</span>
                ดูแผนที่ร้าน
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* HERO CARDS */}
      <div className="relative z-20 mx-auto -mt-32 max-w-[1440px] px-4 pb-12 sm:px-6 lg:-mt-36 lg:px-8 min-[1920px]:-mt-40 min-[1920px]:max-w-[1680px] min-[2560px]:-mt-44 min-[2560px]:max-w-[2100px]">
        <div className="rounded-[32px] bg-[#F8F3EB] p-3 shadow-[0_20px_60px_rgba(45,27,18,0.18)] sm:p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative block overflow-hidden rounded-[24px] border border-[#C49A5A]/20 bg-[#2D1B12]"
              >
                <div className="relative h-[220px] overflow-hidden sm:h-[230px] md:h-[190px] lg:h-[210px] min-[1920px]:h-[250px] min-[2560px]:h-[300px]">
                  <Image
                    src={card.image}
                    alt={card.subtitle}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1009]/95 via-[#1B1009]/30 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-medium leading-tight text-[#FFF8EE] lg:text-xl min-[1920px]:text-2xl">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm text-[#F8F3EB]/85">
                        {card.subtitle}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E2C79B]/70 bg-[#2D1B12]/65 text-[#FFF8EE] shadow-[0_4px_18px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 group-hover:border-[#D9B57A] group-hover:bg-[#C49A5A] group-hover:text-[#2D1B12]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}