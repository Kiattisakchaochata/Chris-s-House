import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import ReviewSection from "@/components/home/ReviewSection";
import TiktokSection from "@/components/home/TiktokSection";

export const metadata: Metadata = {
  title: {
    absolute: SITE.title,
  },
  description: SITE.description,
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <FeatureSection />
      <GalleryPreviewSection />
      <TiktokSection />
      <ReviewSection />
    </main>
  );
}