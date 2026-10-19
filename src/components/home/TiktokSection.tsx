import Image from "next/image";
import { tiktokVideos } from "@/data/tiktokVideos";

export default function TiktokSection() {
  return (
    <section className="bg-[#FFF9F0] px-6 pb-14 pt-6 md:px-10 md:pb-16 md:pt-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
            CHRIS&apos;S HOUSE MOMENTS
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#2D1B12] sm:text-4xl md:text-5xl">
            เรื่องราวดี ๆ จากบ้านคริส
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#786454]">
            สัมผัสบรรยากาศอบอุ่นและช่วงเวลาน่าประทับใจ
            ผ่านวิดีโอจาก Chris&apos;s House บ้านคริส อยุธยา
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiktokVideos.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`รับชม ${video.title} บน TikTok (เปิดแท็บใหม่)`}
              className="group relative block aspect-[9/12] overflow-hidden rounded-[28px] border border-[#C49A5A]/20 bg-[#2D1B12] shadow-[0_10px_30px_rgba(45,27,18,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(45,27,18,0.16)]"
            >
              <Image
                src={video.thumbnail}
                alt={`ภาพหน้าปก ${video.title}`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-[#2D1B12]/35 text-3xl text-white shadow-xl backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-[#8B5A35]/90"
                >
                  ▶
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
