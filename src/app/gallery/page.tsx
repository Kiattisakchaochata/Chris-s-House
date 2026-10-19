import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import GalleryContent from "@/components/gallery/GalleryContent";

const description =
  "ชมภาพบรรยากาศ Chris's House บ้านคริส อยุธยา ร้านอาหารและคาเฟ่บรรยากาศอบอุ่น พร้อมมุมพักผ่อนและมุมถ่ายภาพสวย ๆ สำหรับทุกช่วงเวลาพิเศษ";

export const metadata: Metadata = {
  title: "บรรยากาศร้านและแกลเลอรี",
  description,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `บรรยากาศร้านและแกลเลอรี | ${SITE.name}`,
    description,
    url: `${SITE.url}/gallery`,
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

export default function GalleryPage() {
  return <GalleryContent />;
}
