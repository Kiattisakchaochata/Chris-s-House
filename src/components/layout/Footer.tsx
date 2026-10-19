import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const footerLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "เกี่ยวกับร้าน", href: "/about" },
  { label: "เมนูอาหาร", href: "/menu" },
  { label: "บรรยากาศร้าน", href: "/gallery" },
  { label: "บทความ", href: "/blog" },
  { label: "ติดต่อร้าน", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2D1B12] text-[#F8F3EB]">

      {/* GOLD TOP LINE */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C49A5A]/70 to-transparent" />

      {/* DECORATIVE CIRCLES */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C49A5A]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-96 w-96 rounded-full border border-[#C49A5A]/10"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-10 sm:px-8 md:px-10 md:pt-12">

        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-12">

          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-4"
              aria-label="Chris's House หน้าแรก"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#C49A5A]/60 bg-[#F8F3EB] sm:h-24 sm:w-24">
                <Image
                  src="/images/Logo.jpg"
                  alt="Chris's House บ้านคริส อยุธยา"
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-serif text-2xl font-semibold text-[#FFF8EE]">
                  Chris&apos;s House
                </p>
                <p className="mt-1 text-xs font-medium tracking-[0.22em] text-[#D8B47A]">
                  AYUTTHAYA
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-8 text-[#F8F3EB]/70 sm:text-base">
              บ้านคริส อยุธยา ร้านอาหารและคาเฟ่บรรยากาศอบอุ่น
              ที่อยากให้ทุกมื้ออาหารและทุกช่วงเวลาของคุณ
              เต็มไปด้วยความอร่อย ความสุข และความทรงจำดี ๆ
            </p>

            <p className="mt-4 text-xs font-medium tracking-[0.25em] text-[#C49A5A]">
              WARMTH • TASTE • MEMORIES
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#FFF8EE]">
              สำรวจบ้านคริส
            </h3>

            <div className="mt-4 h-px w-12 bg-[#C49A5A]" />

            <nav
              aria-label="เมนูส่วนท้ายเว็บไซต์"
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 md:grid-cols-1"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#F8F3EB]/70 transition-colors duration-300 hover:text-[#E2C79B] sm:text-base"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#FFF8EE]">
              แวะมาหาเรา
            </h3>

            <div className="mt-4 h-px w-12 bg-[#C49A5A]" />

            <p className="mt-6 text-sm leading-8 text-[#F8F3EB]/70 sm:text-base">
              Chris&apos;s House บ้านคริส อยุธยา
              <br />
              จังหวัดพระนครศรีอยุธยา
            </p>

            <p className="mt-4 text-sm leading-8 text-[#F8F3EB]/60">
              สอบถามรายละเอียดร้าน เวลาเปิด–ปิด
              และข้อมูลการเดินทางได้ที่หน้าติดต่อเรา
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-7">
              <h4 className="text-sm font-semibold text-[#FFF8EE]">
                ติดตามบ้านคริส
              </h4>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/people/Chriss-House-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%AA%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2/61574393152976/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Chris's House"
                  title="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C49A5A]/75 text-[#E2C79B] transition-all duration-300 hover:-translate-y-1 hover:border-[#E2C79B] hover:bg-[#C49A5A] hover:text-[#2D1B12]"
                >
                  <FaFacebookF size={19} />
                </a>

                <a
                  href="https://www.instagram.com/explore/locations/1107261692459762/chriss-house/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Chris's House"
                  title="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C49A5A]/75 text-[#E2C79B] transition-all duration-300 hover:-translate-y-1 hover:border-[#E2C79B] hover:bg-[#C49A5A] hover:text-[#2D1B12]"
                >
                  <FaInstagram size={21} />
                </a>

                <a
                  href="https://www.tiktok.com/@chriss.house"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Chris's House"
                  title="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C49A5A]/75 text-[#E2C79B] transition-all duration-300 hover:-translate-y-1 hover:border-[#E2C79B] hover:bg-[#C49A5A] hover:text-[#2D1B12]"
                >
                  <FaTiktok size={19} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#C49A5A]/15 pt-5 text-center text-xs text-[#F8F3EB]/45 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm">

          <p>
            © {new Date().getFullYear()} Chris&apos;s House Ayutthaya.
            All rights reserved.
          </p>

          <p className="tracking-[0.12em] text-[#C49A5A]/80">
            MADE WITH WARMTH
          </p>

        </div>

      </div>
    </footer>
  );
}
