import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import MenuContent from "@/components/menu/MenuContent";

const description =
  "สำรวจเมนูอาหารและเครื่องดื่มของ Chris's House บ้านคริส อยุธยา ทั้งอาหารจานอร่อย กาแฟ และเบเกอรี่ ในบรรยากาศร้านอาหารและคาเฟ่แสนอบอุ่น";

export const metadata: Metadata = {
  title: "เมนูอาหารและเครื่องดื่ม",
  description,
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: `เมนูอาหารและเครื่องดื่ม | ${SITE.name}`,
    description,
    url: `${SITE.url}/menu`,
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

export default function MenuPage() {
  return <MenuContent />;
}
