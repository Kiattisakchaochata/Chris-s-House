import Link from "next/link";

export default function ReviewSection() {
  return (
    <section className="bg-[#FFF9F0] px-6 pb-16 pt-0 md:px-10 md:pb-20 md:pt-0">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[32px] border border-[#C49A5A]/25 bg-[#F1E5D4] px-6 py-14 text-center shadow-[0_12px_40px_rgba(45,27,18,0.06)] sm:px-10 md:py-20">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#C49A5A]/25"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#C49A5A]/25"
          />

          <div className="relative mx-auto max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8894D]">
              YOUR MOMENTS MATTER
            </p>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#2D1B12] sm:text-4xl md:text-5xl">
              ความประทับใจจากผู้มาเยือน
            </h2>

            <div className="mx-auto mt-6 h-px w-20 bg-[#C49A5A]" />

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#786454] sm:text-lg">
              ทุกช่วงเวลาที่บ้านคริสมีความหมายสำหรับเรา
              ไม่ว่าจะเป็นมื้ออาหารแสนอร่อย
              กาแฟแก้วโปรด หรือช่วงเวลาดี ๆ กับคนพิเศษ
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#786454]">
              หากคุณเคยมาเยือน Chris&apos;s House
              เราอยากรับฟังเรื่องราวและความประทับใจของคุณ
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 max-w-full items-center justify-between gap-5 rounded-full border border-[#D8AE73] bg-gradient-to-r from-[#80502F] to-[#98643B] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[#FFF9F0] shadow-[0_12px_28px_rgba(107,63,32,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E5C18E] hover:from-[#6B3F20] hover:to-[#86552F] hover:shadow-[0_18px_36px_rgba(107,63,32,0.28)] sm:gap-8 sm:pl-8 sm:text-base"
              >
                <span className="text-left">
                  ติดต่อและแบ่งปันประสบการณ์
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E6C48F] bg-gradient-to-br from-[#FFF4DE] to-[#E9C996] text-[#6B3F20] shadow-[0_2px_8px_rgba(45,27,18,0.12)] transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
