const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.2786433121555!2d100.53021177510144!3d14.353279586104309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27355e6dad3b1%3A0xfd1d0302a821fded!2zQ2hyaXMncyBob3VzZSBheXV0dGF5YSjguJrguYnguLLguJnguITguKPguLTguKop!5e0!3m2!1sth!2sth!4v1792380550216!5m2!1sth!2sth";

export default function ContactContent() {
  return (
    <main className="min-h-screen bg-[#F8F3EB] text-[#2D1B12]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#C49A5A]/20 bg-[#FFF9F0] px-5 pb-10 pt-28 sm:px-8 md:pb-12 md:pt-32">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#C49A5A]/15" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#C49A5A]/15" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
            CONTACT & LOCATION
          </p>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#2D1B12] sm:text-5xl md:text-6xl">
            ติดต่อบ้านคริส
            <span className="mt-2 block text-[#8B5A35]">
              อยุธยา
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-20 bg-[#C49A5A]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#786454] md:text-lg">
            วางแผนแวะมาที่ Chris&apos;s House บ้านคริส อยุธยา
            ร้านอาหารและคาเฟ่บรรยากาศอบอุ่น
            ที่สามารถเที่ยวชมวัดและพักผ่อนที่ร้านได้ในทริปเดียว
          </p>
        </div>
      </section>

      {/* LOCATION & MAP */}
      <section className="px-5 py-10 sm:px-8 md:py-12">
        <div className="mx-auto grid max-w-7xl items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* MAP */}
          <div className="overflow-hidden rounded-[24px] border border-[#C49A5A]/25 bg-[#FFFAF3] shadow-[0_8px_30px_rgba(45,27,18,0.06)]">
            <div className="border-b border-[#C49A5A]/20 px-6 py-6 md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8894D]">
                FIND US
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#2D1B12] md:text-3xl">
                แผนที่บ้านคริส
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#786454]">
                ดูตำแหน่ง Chris&apos;s House บ้านคริส อยุธยา
                เพื่อวางแผนการเดินทาง
              </p>
            </div>

            <div className="relative h-[340px] w-full bg-[#EFE4D5] sm:h-[420px] lg:h-[470px]">
              <iframe
                title="Google Maps - Chris's House บ้านคริส อยุธยา"
                src={mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* INFORMATION */}
          <div className="grid gap-5">
            <div className="rounded-[24px] border border-[#C49A5A]/25 bg-[#FFFAF3] p-6 shadow-[0_8px_30px_rgba(45,27,18,0.05)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B8894D]">
                CHRIS&apos;S HOUSE
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#2D1B12] md:text-3xl">
                บ้านคริส อยุธยา
              </h2>

              <p className="mt-4 text-sm leading-8 text-[#786454] md:text-base">
                ร้านอาหารและคาเฟ่สำหรับแวะรับประทานอาหาร
                จิบกาแฟ และใช้เวลาพักผ่อนร่วมกับครอบครัวหรือเพื่อนฝูง
              </p>
            </div>

            <div className="rounded-[24px] border border-[#C49A5A]/25 bg-[#FFFAF3] p-6 shadow-[0_8px_30px_rgba(45,27,18,0.05)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B8894D]">
                NEARBY ATTRACTION
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-[#2D1B12] md:text-3xl">
                ติดวัดวรเชษฐ์
              </h2>

              <div className="mt-4 h-px w-16 bg-[#C49A5A]" />

              <p className="mt-4 text-sm leading-8 text-[#786454] md:text-base">
                บ้านคริสตั้งอยู่ติดกับวัดวรเชษฐ์
                สามารถเดินเที่ยวชมวัด แล้วแวะมารับประทานอาหาร
                หรือจิบกาแฟที่ร้านได้อย่างสะดวก
                เที่ยววัดและแวะคาเฟ่ได้ในทริปเดียว
              </p>
            </div>

            <div className="rounded-[24px] border border-[#C49A5A]/25 bg-[#F1E5D4] p-6 shadow-[0_8px_30px_rgba(45,27,18,0.05)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B8894D]">
                PLAN YOUR VISIT
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#2D1B12] md:text-3xl">
                วางแผนการเดินทาง
              </h2>

              <p className="mt-4 text-sm leading-8 text-[#786454] md:text-base">
                ใช้แผนที่ Google Maps เพื่อดูเส้นทางมายังบ้านคริส
                และตรวจสอบข้อมูลการเดินทางก่อนออกเดินทาง
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chris%27s%20house%20ayutthaya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border border-[#8B5A35] bg-[#8B5A35] px-7 py-3 text-sm font-semibold tracking-wide text-[#FFF8EE] transition-colors duration-300 hover:bg-[#6B3F20]"
              >
                เปิด Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
