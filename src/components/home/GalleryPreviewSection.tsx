"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/home";

export default function GalleryPreviewSection() {
  return (
    <section className="bg-[#FFF9F0] px-6 pb-6 pt-8 md:px-10 md:pb-8 md:pt-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C49A5A]">
              OUR ATMOSPHERE
            </span>

            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#2D1B12] sm:text-4xl md:text-5xl">
              สัมผัสบรรยากาศบ้านคริส
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#786454]">
              แวะมาจิบกาแฟ ทานอาหารอร่อย ๆ และพักผ่อนในบรรยากาศอบอุ่น
              <br className="hidden md:block" />
              พร้อมเก็บช่วงเวลาดี ๆ ที่ Chris&apos;s House บ้านคริส อยุธยา
            </p>
          </div>

          <Link
            href="/gallery"
            className="group hidden shrink-0 items-center gap-4 rounded-full bg-[#8B5A35] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(107,63,32,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6B3F20] hover:shadow-[0_12px_30px_rgba(107,63,32,0.25)] lg:inline-flex"
          >
            ชมภาพบรรยากาศทั้งหมด
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg transition group-hover:bg-white/30">
              →
            </span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Link
                href="/gallery"
                className="group relative block h-[260px] overflow-hidden rounded-[28px] border border-[#C49A5A]/20 bg-[#EFE4D5] shadow-[0_10px_30px_rgba(45,27,18,0.08)] sm:h-[320px] lg:h-[380px]"
              >
                <Image
                  src={image}
                  alt={`ภาพบรรยากาศบ้านคริส ${index + 1}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B12]/30 via-transparent to-transparent transition duration-300 group-hover:from-[#2D1B12]/10" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-4 rounded-full bg-[#8B5A35] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(107,63,32,0.18)] transition hover:bg-[#6B3F20]"
          >
            ชมภาพบรรยากาศทั้งหมด
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg transition group-hover:bg-white/30">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
