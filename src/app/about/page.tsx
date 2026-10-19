import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import AboutContent from "@/components/about/AboutContent";

const description =
  "รู้จัก Chris's House บ้านคริส อยุธยา ร้านอาหารและคาเฟ่บรรยากาศอบอุ่น ที่ตั้งใจมอบความอร่อยและช่วงเวลาดี ๆ ผ่านอาหาร เครื่องดื่ม และการต้อนรับอย่างเป็นกันเอง";

export const metadata: Metadata = {
  title: "เกี่ยวกับร้าน",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `เกี่ยวกับร้าน | ${SITE.name}`,
    description,
    url: `${SITE.url}/about`,
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Chris's House บ้านคริส อยุธยา",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
