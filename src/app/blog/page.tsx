import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import BlogContent from "@/components/blog/BlogContent";

const description =
  "ติดตามบทความและเรื่องราวจาก Chris's House บ้านคริส อยุธยา ทั้งเรื่องอาหาร เครื่องดื่ม เบเกอรี่ และบรรยากาศร้านอาหารและคาเฟ่แสนอบอุ่น";

export const metadata: Metadata = {
  title: "บทความและเรื่องราว",
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `บทความและเรื่องราว | ${SITE.name}`,
    description,
    url: `${SITE.url}/blog`,
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

export default function BlogPage() {
  return <BlogContent />;
}
