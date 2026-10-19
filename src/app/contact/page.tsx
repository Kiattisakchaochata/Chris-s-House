import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import ContactContent from "@/components/contact/ContactContent";

const description =
  "ติดต่อ Chris's House บ้านคริส อยุธยา ดูข้อมูลร้าน ช่องทางโซเชียลมีเดีย และรายละเอียดการเดินทาง เพื่อวางแผนแวะมารับประทานอาหารและพักผ่อนที่ร้าน";

export const metadata: Metadata = {
  title: "ติดต่อร้านและการเดินทาง",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `ติดต่อร้านและการเดินทาง | ${SITE.name}`,
    description,
    url: `${SITE.url}/contact`,
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

export default function ContactPage() {
  return <ContactContent />;
}
