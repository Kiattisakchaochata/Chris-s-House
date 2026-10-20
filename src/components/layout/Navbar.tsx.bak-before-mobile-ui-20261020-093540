"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "เกี่ยวกับร้าน", href: "/about" },
  { label: "เมนู", href: "/menu" },
  { label: "บรรยากาศร้าน", href: "/gallery" },
  { label: "บทความ", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={
      pathname === "/"
        ? "absolute inset-x-0 top-0 z-50 bg-transparent"
        : "sticky top-0 z-50 border-b border-[#C49A5A]/20 bg-[#2D1B12]/95 shadow-lg backdrop-blur-xl"
    }>
      <div className="mx-auto flex w-full max-w-[2400px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12 xl:px-16 min-[1920px]:px-20 min-[2560px]:px-24">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Chris's House - หน้าแรก"
        >
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#C49A5A] bg-[#F8F3EB] shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24 lg:h-32 lg:w-32 min-[1920px]:h-36 min-[1920px]:w-36">
            <Image
              src="/images/Logo.jpg"
              alt="Chris's House บ้านคริส อยุธยา"
              fill
              sizes="(max-width: 640px) 80px, (max-width: 1023px) 96px, (min-width: 1920px) 144px, 128px"
              className="object-cover"
              priority
            />
          </div>

        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="เมนูหลัก"
          className="hidden items-center gap-1 rounded-full border border-[#C49A5A]/25 bg-[#1D120D]/65 px-2 py-2 shadow-lg backdrop-blur-xl lg:flex min-[1920px]:gap-2 min-[1920px]:px-4"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-medium transition-all duration-200 xl:px-4 min-[1920px]:px-5 min-[1920px]:text-base",
                  isActive
                    ? "bg-[#C49A5A]/20 text-[#F8F3EB]"
                    : "text-[#E9DCC9] hover:bg-[#C49A5A]/10 hover:text-white",
                ].join(" ")}
              >
                {item.label}

                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[#C49A5A]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex shrink-0 items-center gap-3">
          {/* ยังไม่ทราบเบอร์โทรจริง จึงลิงก์ไปหน้าติดต่อก่อน */}
          <Link
            href="/contact"
            className="hidden items-center gap-3 rounded-full border border-[#D9B57A]/40 bg-[#8B5A35] px-6 py-3.5 text-base font-bold min-[1920px]:px-8 min-[1920px]:py-4 text-[#FFF8EE] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A56C3B] lg:inline-flex"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8F3EB] text-lg text-[#6B3F20]">
              ✆
            </span>
            ติดต่อร้าน
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C49A5A]/30 bg-[#C49A5A]/10 text-xl text-[#F8F3EB] transition hover:bg-[#C49A5A]/20 lg:hidden"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET NAVIGATION */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[#C49A5A]/20 bg-[#2D1B12] lg:hidden"
        >
          <nav
            aria-label="เมนูมือถือ"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#C49A5A]/20 text-[#F8F3EB]"
                      : "text-[#E9DCC9] hover:bg-[#C49A5A]/10",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-[#8B5A35] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#A56C3B]"
            >
              ✆ ติดต่อร้าน
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}