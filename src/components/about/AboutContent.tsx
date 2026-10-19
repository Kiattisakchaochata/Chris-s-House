"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const galleryImages = [
  "/images/about-1.jpg",
  "/images/about-2.jpg",
  "/images/about-3.jpg",
  "/images/about-4.jpg",
];

const highlights = [
  {
    number: "01",
    icon: "⌂",
    title: "อบอุ่นเหมือนอยู่บ้าน",
    description:
      "มุมพักผ่อนที่ชวนให้ใช้เวลาอย่างไม่เร่งรีบ ไม่ว่าจะมากับครอบครัว เพื่อน หรือคนพิเศษ",
  },
  {
    number: "02",
    icon: "☕",
    title: "อาหาร กาแฟ และเบเกอรี่",
    description:
      "เติมเต็มช่วงเวลาดี ๆ ด้วยอาหาร เครื่องดื่ม และเบเกอรี่ ในบรรยากาศสบาย ๆ ของบ้านคริส",
  },
  {
    number: "03",
    icon: "✦",
    title: "เที่ยววัดและแวะคาเฟ่",
    description:
      "ร้านอยู่ติดกับวัดวรเชษฐ์ สามารถเดินเที่ยวชมวัดและแวะมารับประทานอาหารหรือจิบกาแฟได้ในทริปเดียว",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
};

export default function AboutContent() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage]);

  return (
    <main className="overflow-hidden bg-[#F8F3EB] text-[#2D1B12]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#2D1B12] py-24 text-[#FFF8EE] md:min-h-[620px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about-cover.jpg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1B1009]/90 via-[#2D1B12]/65 to-[#2D1B12]/25" />

        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#E2C79B] sm:text-sm">
              OUR STORY · CHRIS&apos;S HOUSE
            </p>

            <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] font-semibold leading-[1.08] tracking-tight">
              เรื่องราวของ
              <span className="mt-2 block text-[#E2C79B]">
                บ้านคริส อยุธยา
              </span>
            </h1>

            <div className="my-7 h-px w-24 bg-[#C49A5A]" />

            <p className="max-w-2xl text-base leading-9 text-[#FFF8EE]/90 sm:text-lg">
              ร้านอาหารและคาเฟ่บรรยากาศอบอุ่น
              ที่อยากให้ทุกคนได้แวะมาพักผ่อน
              ใช้เวลาร่วมกับคนที่รัก และเพลิดเพลินกับอาหาร
              กาแฟ และเบเกอรี่
            </p>

            <a
              href="#our-story"
              className="mt-9 inline-flex min-h-12 items-center justify-center rounded-xl border border-[#D9B57A]/50 bg-[#8B5A35] px-8 py-3 text-sm font-semibold tracking-wide text-[#FFF8EE] shadow-[0_6px_18px_rgba(45,27,18,0.16)] transition-all duration-300 hover:bg-[#6B3F20] hover:shadow-[0_10px_24px_rgba(45,27,18,0.22)]"
            >
              ทำความรู้จักบ้านคริส
              
            </a>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="bg-[#F8F3EB] px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
              WELCOME TO CHRIS&apos;S HOUSE
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-[#2D1B12] sm:text-5xl">
              บ้านเล็ก ๆ
              <span className="block text-[#8B5A35]">
                ที่เต็มไปด้วยความอบอุ่น
              </span>
            </h2>

            <div className="mt-7 h-px w-20 bg-[#C49A5A]" />

            <p className="mt-8 text-base leading-9 text-[#786454] sm:text-lg">
              Chris&apos;s House บ้านคริส อยุธยา
              เป็นร้านอาหารและคาเฟ่ที่ตั้งใจมอบบรรยากาศสบาย ๆ
              ให้ทุกคนได้ใช้เวลาพักผ่อนอย่างเป็นกันเอง
              ไม่ว่าจะมารับประทานอาหาร จิบกาแฟ
              หรือเลือกชิมเบเกอรี่
            </p>

            <p className="mt-5 text-base leading-9 text-[#786454] sm:text-lg">
              อีกหนึ่งเสน่ห์ของบ้านคริสคือทำเลที่อยู่ติดกับวัดวรเชษฐ์
              สามารถเดินเที่ยวชมวัดแล้วแวะมานั่งพักที่ร้านได้อย่างสะดวก
              เหมาะสำหรับการเที่ยวอยุธยาแบบสบาย ๆ
              ที่ได้ทั้งเที่ยววัดและแวะคาเฟ่ในคราวเดียวกัน
            </p>

            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#C49A5A]/35 bg-[#EFE4D5] px-5 py-3 text-sm font-semibold text-[#6B3F20]">
              <span aria-hidden="true">✦</span>
              เที่ยววัด · อิ่มอร่อย · พักผ่อน
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                aria-label={`เปิดภาพบรรยากาศบ้านคริส ${index + 1}`}
                className={`group relative overflow-hidden rounded-[24px] border border-[#C49A5A]/25 bg-[#EFE4D5] shadow-[0_12px_32px_rgba(45,27,18,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(45,27,18,0.16)] ${
                  index % 2 === 1 ? "translate-y-6" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`บรรยากาศบ้านคริส ${index + 1}`}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 lg:h-64"
                />
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LOCATION FEATURE */}
      <section className="bg-[#EFE4D5] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[32px] border border-[#C49A5A]/25 bg-[#FFFAF3] shadow-[0_16px_50px_rgba(45,27,18,0.08)] lg:grid-cols-2 lg:gap-0">
          <div className="relative min-h-[320px] overflow-hidden bg-[#2D1B12] sm:min-h-[420px]">
            <img
              src="/images/about-cover.jpg"
              alt="บรรยากาศบ้านคริส อยุธยา"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B12]/70 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <span className="inline-flex rounded-full border border-[#E2C79B]/40 bg-[#2D1B12]/65 px-5 py-2.5 text-sm font-semibold text-[#FFF8EE] backdrop-blur-sm">
                CHRIS&apos;S HOUSE · AYUTTHAYA
              </span>
            </div>
          </div>

          <motion.div
            {...fadeUp}
            className="flex flex-col justify-center px-7 pb-10 pt-2 sm:px-10 lg:px-14 lg:py-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
              EXPLORE & RELAX
            </p>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#2D1B12] sm:text-4xl md:text-5xl">
              เที่ยววัด อิ่มอร่อย
              <span className="mt-2 block text-[#8B5A35]">
                ครบในทริปเดียว
              </span>
            </h2>

            <div className="mt-7 h-px w-20 bg-[#C49A5A]" />

            <p className="mt-7 text-base leading-9 text-[#786454] sm:text-lg">
              บ้านคริสตั้งอยู่ติดกับวัดวรเชษฐ์
              หลังจากเที่ยวชมวัดแล้ว
              สามารถเดินมาแวะรับประทานอาหาร
              จิบกาแฟ หรือพักผ่อนที่ร้านได้อย่างสะดวก
            </p>

            <p className="mt-4 text-base leading-9 text-[#786454]">
              เพิ่มอีกหนึ่งจุดแวะพักในวันเที่ยวอยุธยา
              ด้วยบรรยากาศอบอุ่นที่เหมาะกับครอบครัวและเพื่อนฝูง
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex min-h-12 w-fit items-center justify-center rounded-xl border border-[#8B5A35] bg-[#8B5A35] px-8 py-3 text-sm font-semibold tracking-wide text-[#FFF8EE] shadow-[0_6px_18px_rgba(45,27,18,0.12)] transition-all duration-300 hover:bg-[#6B3F20] hover:shadow-[0_10px_24px_rgba(45,27,18,0.18)]"
            >
              ดูข้อมูลการเดินทาง
              
            </a>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#F8F3EB] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
              THE LITTLE THINGS
            </p>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#2D1B12] sm:text-4xl md:text-5xl">
              เสน่ห์เล็ก ๆ ของบ้านคริส
            </h2>

            <div className="mx-auto mt-7 h-px w-20 bg-[#C49A5A]" />

            <p className="mx-auto mt-7 text-base leading-8 text-[#786454] sm:text-lg">
              เพราะช่วงเวลาดี ๆ ไม่จำเป็นต้องซับซ้อน
              แค่มีสถานที่สบาย ๆ อาหารที่ชอบ
              และคนที่อยากใช้เวลาด้วย
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[28px] border border-[#C49A5A]/25 bg-[#FFFAF3] p-8 shadow-[0_8px_30px_rgba(45,27,18,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C49A5A]/60 hover:shadow-[0_16px_40px_rgba(45,27,18,0.12)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C49A5A]/25 bg-[#EFE4D5] text-3xl text-[#6B3F20]">
                    {item.icon}
                  </span>

                  <span className="font-serif text-2xl text-[#C49A5A]/65">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-2xl font-semibold leading-snug text-[#6B3F20]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#786454]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFF9F0] px-6 pb-24 pt-8 md:px-10 md:pb-28">
        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#C49A5A]/25 bg-[#F1E5D4] px-7 py-16 text-center shadow-[0_12px_40px_rgba(45,27,18,0.06)] sm:px-12 md:py-20"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#C49A5A]/25" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#C49A5A]/25" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
              SEE YOU AT CHRIS&apos;S HOUSE
            </p>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-[#2D1B12] sm:text-4xl md:text-5xl">
              แล้วพบกันที่บ้านคริส
            </h2>

            <div className="mx-auto mt-7 h-px w-20 bg-[#C49A5A]" />

            <p className="mx-auto mt-7 max-w-2xl text-base leading-9 text-[#786454] sm:text-lg">
              มาเที่ยวอยุธยาครั้งหน้า
              แวะเที่ยววัดวรเชษฐ์
              แล้วมาพักผ่อนพร้อมรับประทานอาหาร
              จิบกาแฟ และใช้ช่วงเวลาดี ๆ ที่บ้านคริสกันนะครับ
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#8B5A35] bg-[#8B5A35] px-8 py-3 text-sm font-semibold tracking-wide text-[#FFF8EE] shadow-[0_6px_18px_rgba(45,27,18,0.12)] transition-all duration-300 hover:bg-[#6B3F20] hover:shadow-[0_10px_24px_rgba(45,27,18,0.18)]"
              >
                ดูแผนที่ร้าน
                
              </a>

              <a
                href="/gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#C49A5A]/60 bg-[#FFFAF3] px-8 py-3 text-sm font-semibold tracking-wide text-[#6B3F20] transition-all duration-300 hover:border-[#8B5A35] hover:bg-[#EFE4D5]"
              >
                ชมบรรยากาศบ้านคริส
                
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1B1009]/95 px-4"
          onClick={() => setActiveImage(null)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] max-w-5xl"
            role="dialog"
            aria-modal="true"
            aria-label="ภาพบรรยากาศบ้านคริส"
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImage(null);
              }}
              className="absolute -top-14 right-0 rounded-full border border-[#E2C79B]/40 bg-[#6B3F20] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8B5A35]"
            >
              ปิด ✕
            </button>

            <img
              src={activeImage}
              alt="ภาพขยายบรรยากาศบ้านคริส"
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
