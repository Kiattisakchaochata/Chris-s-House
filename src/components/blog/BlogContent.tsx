"use client";

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "รู้จัก Chris's House บ้านคริส อยุธยา ร้านอาหารและคาเฟ่บรรยากาศอบอุ่น",
    excerpt:
      "ชวนทำความรู้จักบ้านคริส ร้านอาหารและคาเฟ่ในอยุธยา ที่เหมาะสำหรับการพักผ่อน รับประทานอาหาร จิบกาแฟ และใช้เวลาดี ๆ ร่วมกับคนที่คุณรัก",
    image: "/images/blog-1.jpg",
    category: "เรื่องราวของบ้านคริส",
    label: "OUR STORY",
  },
  {
    id: 2,
    title: "บรรยากาศบ้านคริส มุมพักผ่อนที่ชวนให้นั่งนานขึ้น",
    excerpt:
      "สัมผัสบรรยากาศสบาย ๆ ของบ้านคริส ผ่านมุมต่าง ๆ ของร้าน ที่พร้อมต้อนรับทุกคนในวันพักผ่อน",
    image: "/images/blog-2.jpg",
    category: "บรรยากาศร้าน",
    label: "ATMOSPHERE",
  },
  {
    id: 3,
    title: "แวะบ้านคริส เติมความสุขด้วยอาหาร กาแฟ และเบเกอรี่",
    excerpt:
      "ไม่ว่าจะมารับประทานอาหาร จิบกาแฟ หรือพักเบรกระหว่างวัน บ้านคริสก็เป็นอีกหนึ่งจุดแวะพักสำหรับวันสบาย ๆ",
    image: "/images/blog-3.jpg",
    category: "อาหารและเครื่องดื่ม",
    label: "FOOD & DRINKS",
  },
  {
    id: 4,
    title: "เที่ยววัดวรเชษฐ์ แล้วแวะบ้านคริส ครบในทริปเดียว",
    excerpt:
      "บ้านคริสตั้งอยู่ติดกับวัดวรเชษฐ์ สามารถเดินเที่ยวชมวัดแล้วแวะมารับประทานอาหารหรือจิบกาแฟที่ร้านได้อย่างสะดวก",
    image: "/images/blog-4.jpg",
    category: "เที่ยวอยุธยา",
    label: "AYUTTHAYA GUIDE",
  },
  {
    id: 5,
    title: "เที่ยวอยุธยาแบบไม่เร่งรีบ กับจุดแวะพักที่บ้านคริส",
    excerpt:
      "ไอเดียสำหรับวันพักผ่อนในอยุธยา เริ่มจากเที่ยวชมวัด แล้วเติมพลังด้วยอาหารและเครื่องดื่มในบรรยากาศอบอุ่น",
    image: "/images/blog-5.jpg",
    category: "ไลฟ์สไตล์",
    label: "TRAVEL & RELAX",
  },
  {
    id: 6,
    title: "ช่วงเวลาดี ๆ เริ่มต้นได้ที่โต๊ะอาหาร",
    excerpt:
      "บางครั้งความสุขก็เรียบง่าย เพียงได้ใช้เวลาร่วมกับครอบครัวหรือเพื่อนฝูง พร้อมอาหารที่ชอบและบรรยากาศสบาย ๆ",
    image: "/images/blog-6.jpg",
    category: "เรื่องราวและแรงบันดาลใจ",
    label: "GOOD MOMENTS",
  },
];

export default function BlogContent() {
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1, 3);
  const latestPosts = blogPosts.slice(3);

  return (
    <main className="min-h-screen bg-[#F8F3EB] text-[#2D1B12]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#C49A5A]/20 bg-[#FFF9F0] px-6 pb-10 pt-28 sm:px-8 md:pb-12 md:pt-32">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#C49A5A]/15" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#C49A5A]/15" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8894D] sm:text-sm">
            STORIES & JOURNAL
          </p>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-[#2D1B12] sm:text-5xl md:text-6xl">
            เรื่องราวจากบ้านคริส
            <span className="mt-2 block text-[#8B5A35]">
              อยุธยา
            </span>
          </h1>

          <div className="mx-auto mt-7 h-px w-24 bg-[#C49A5A]" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-9 text-[#786454] sm:text-lg">
            รวมเรื่องราวของ Chris&apos;s House บ้านคริส อยุธยา
            ทั้งบรรยากาศร้าน อาหารและเครื่องดื่ม
            รวมถึงไอเดียเที่ยวอยุธยาและแวะพักผ่อนที่บ้านคริส
          </p>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="px-6 py-10 sm:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8894D]">
              FEATURED STORIES
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2D1B12] sm:text-4xl">
              เรื่องราวที่อยากแบ่งปัน
            </h2>

            <div className="mt-5 h-px w-20 bg-[#C49A5A]" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            {/* MAIN FEATURE */}
            <article className="group overflow-hidden rounded-[28px] border border-[#C49A5A]/25 bg-[#FFFAF3] shadow-[0_8px_30px_rgba(45,27,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C49A5A]/60 hover:shadow-[0_16px_40px_rgba(45,27,18,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE4D5]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 60vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1009]/70 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-lg border border-[#E2C79B]/40 bg-[#FFFAF3]/95 px-4 py-2 text-xs font-semibold text-[#6B3F20] shadow-sm backdrop-blur-sm">
                  {featuredPost.category}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2C79B]">
                    {featuredPost.label}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold leading-snug text-[#2D1B12] sm:text-3xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#786454]">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-7 h-px w-full bg-[#C49A5A]/20" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5A35]">
                  CHRIS&apos;S HOUSE · AYUTTHAYA
                </p>
              </div>
            </article>

            {/* SECONDARY STORIES */}
            <div className="grid gap-6">
              {secondaryPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-[24px] border border-[#C49A5A]/25 bg-[#FFFAF3] shadow-[0_8px_30px_rgba(45,27,18,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C49A5A]/60 hover:shadow-[0_16px_40px_rgba(45,27,18,0.11)]"
                >
                  <div className="grid h-full sm:grid-cols-[220px_1fr] lg:grid-cols-[190px_1fr] xl:grid-cols-[220px_1fr]">
                    <div className="relative min-h-[230px] overflow-hidden bg-[#EFE4D5] sm:min-h-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 639px) 100vw, 220px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-col justify-center p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8894D]">
                        {post.category}
                      </p>

                      <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#2D1B12]">
                        {post.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#786454]">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 h-px w-12 bg-[#C49A5A]" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MORE STORIES */}
      <section className="bg-[#FFF9F0] px-6 py-10 sm:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8894D]">
              MORE STORIES
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#2D1B12] sm:text-4xl">
              เรื่องราวเพิ่มเติม
            </h2>

            <div className="mt-5 h-px w-20 bg-[#C49A5A]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-[24px] border border-[#C49A5A]/25 bg-[#FFFAF3] shadow-[0_8px_30px_rgba(45,27,18,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C49A5A]/60 hover:shadow-[0_16px_40px_rgba(45,27,18,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE4D5]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-lg border border-[#C49A5A]/25 bg-[#FFFAF3]/95 px-3 py-2 text-xs font-semibold text-[#6B3F20] backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B8894D]">
                    {post.label}
                  </p>

                  <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-[#2D1B12]">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#786454]">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 h-px w-14 bg-[#C49A5A]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F3EB] px-6 py-10 sm:px-8 md:py-14">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#C49A5A]/25 bg-[#F1E5D4] px-7 py-14 text-center shadow-[0_12px_40px_rgba(45,27,18,0.06)] sm:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
            VISIT CHRIS&apos;S HOUSE
          </p>

          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#2D1B12] sm:text-4xl">
            อ่านเรื่องราวแล้ว แวะมาสัมผัสบรรยากาศจริงกัน
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-[#C49A5A]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[#786454]">
            Chris&apos;s House บ้านคริส อยุธยา
            อยู่ติดกับวัดวรเชษฐ์
            สามารถเที่ยวชมวัดแล้วเดินมาแวะรับประทานอาหาร
            จิบกาแฟ และพักผ่อนที่ร้านได้
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/about"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#8B5A35] bg-[#8B5A35] px-8 py-3 text-sm font-semibold tracking-wide text-[#FFF8EE] shadow-[0_6px_18px_rgba(45,27,18,0.12)] transition-all duration-300 hover:bg-[#6B3F20]"
            >
              รู้จักบ้านคริส
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#C49A5A]/60 bg-[#FFFAF3] px-8 py-3 text-sm font-semibold tracking-wide text-[#6B3F20] transition-all duration-300 hover:border-[#8B5A35] hover:bg-white"
            >
              ดูข้อมูลการเดินทาง
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
