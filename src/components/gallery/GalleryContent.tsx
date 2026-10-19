"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    title: "บรรยากาศบ้านคริส",
    subtitle: "CHRIS'S HOUSE",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    title: "มุมพักผ่อน",
    subtitle: "RELAX & ENJOY",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    title: "ช่วงเวลาดี ๆ",
    subtitle: "GOOD MOMENTS",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    title: "มุมโปรดของคุณ",
    subtitle: "FAVORITE CORNER",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    title: "เติมความสุขในทุกวัน",
    subtitle: "LITTLE HAPPINESS",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    title: "พื้นที่แห่งความทรงจำ",
    subtitle: "MEMORABLE TIMES",
  },
  {
    id: 7,
    src: "/images/gallery-7.jpg",
    title: "เสน่ห์ของบ้านคริส",
    subtitle: "WARM ATMOSPHERE",
  },
  {
    id: 8,
    src: "/images/gallery-8.jpg",
    title: "ความสุขเรียบง่าย",
    subtitle: "SIMPLE PLEASURES",
  },
];

type GalleryImage = (typeof galleryImages)[number];

export default function GalleryContent() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeImage]);

  return (
    <main className="min-h-screen bg-[#F8F3EB] text-[#2D1B12]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#C49A5A]/20 bg-[#FFF9F0] px-6 pb-16 pt-20 sm:px-8 md:pb-20 md:pt-24">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#C49A5A]/15" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#C49A5A]/15" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8894D] sm:text-sm">
            OUR GALLERY
          </p>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-[#2D1B12] sm:text-5xl md:text-6xl">
            บรรยากาศบ้านคริส
            <span className="mt-2 block text-[#8B5A35]">
              อยุธยา
            </span>
          </h1>

          <div className="mx-auto mt-7 h-px w-24 bg-[#C49A5A]" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-9 text-[#786454] sm:text-lg">
            ชวนมาสัมผัสบรรยากาศอบอุ่นของ Chris&apos;s House
            บ้านคริส อยุธยา ผ่านภาพถ่ายและมุมต่าง ๆ ของร้าน
            ก่อนแวะมารับประทานอาหาร จิบกาแฟ
            และใช้ช่วงเวลาดี ๆ ร่วมกัน
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#C49A5A]/25 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8894D]">
                A GLIMPSE OF CHRIS&apos;S HOUSE
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#2D1B12] sm:text-3xl">
                มุมต่าง ๆ ของบ้านคริส
              </h2>
            </div>

            <p className="text-sm text-[#786454]">
              แตะที่รูปภาพเพื่อดูภาพขนาดใหญ่
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image)}
                aria-label={`ดูภาพ ${image.title}`}
                className="group overflow-hidden rounded-[24px] border border-[#C49A5A]/25 bg-[#FFFAF3] text-left shadow-[0_8px_30px_rgba(45,27,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C49A5A]/60 hover:shadow-[0_16px_40px_rgba(45,27,18,0.13)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EFE4D5]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1009]/85 via-[#2D1B12]/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p className="font-serif text-base font-semibold leading-snug text-[#FFF8EE] sm:text-lg">
                      {image.title}
                    </p>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E2C79B] sm:text-xs">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFF9F0] px-6 pb-24 pt-8 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#C49A5A]/25 bg-[#F1E5D4] px-7 py-14 text-center shadow-[0_12px_40px_rgba(45,27,18,0.06)] sm:px-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
            VISIT CHRIS&apos;S HOUSE
          </p>

          <h2 className="mt-5 font-serif text-3xl font-semibold text-[#2D1B12] sm:text-4xl">
            แล้วมาสัมผัสบรรยากาศจริงกันนะ
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-[#C49A5A]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[#786454]">
            บ้านคริสตั้งอยู่ติดกับวัดวรเชษฐ์
            เที่ยวชมวัดแล้วสามารถเดินมาแวะรับประทานอาหาร
            จิบกาแฟ และพักผ่อนที่ร้านได้ในทริปเดียว
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl border border-[#8B5A35] bg-[#8B5A35] px-8 py-3 text-sm font-semibold tracking-wide text-[#FFF8EE] shadow-[0_6px_18px_rgba(45,27,18,0.12)] transition-all duration-300 hover:bg-[#6B3F20] hover:shadow-[0_10px_24px_rgba(45,27,18,0.18)]"
          >
            ดูข้อมูลการเดินทาง
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1B1009]/95 px-4"
          onClick={() => setActiveImage(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl"
            role="dialog"
            aria-modal="true"
            aria-label={`ภาพ ${activeImage.title}`}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setActiveImage(null);
              }}
              className="absolute -top-14 right-0 rounded-xl border border-[#E2C79B]/40 bg-[#6B3F20] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8B5A35]"
            >
              ปิด ✕
            </button>

            <div
              className="overflow-hidden rounded-[24px] border border-[#C49A5A]/30 bg-[#FFFAF3]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-[#EFE4D5]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="border-t border-[#C49A5A]/20 px-5 py-5 md:px-7">
                <p className="font-serif text-xl font-semibold text-[#2D1B12]">
                  {activeImage.title}
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5A35]">
                  {activeImage.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
