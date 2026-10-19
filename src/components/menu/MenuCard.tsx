import Image from "next/image";

type Props = {
  nameTh: string;
  nameEn: string;
  price: number;
  image: string;
};

export default function MenuCard({
  nameTh,
  nameEn,
  price,
  image,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#C49A5A]/25 bg-[#FFFAF3] shadow-[0_6px_22px_rgba(45,27,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C49A5A]/60 hover:shadow-[0_14px_32px_rgba(45,27,18,0.12)]">

      {/* รูป (ลดความสูงลง) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE4D5]">
        <Image
          src={image}
          alt={nameTh}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="p-3.5 sm:p-4">

        <p className="text-[14px] font-semibold leading-snug text-[#2D1B12] sm:text-[15px]">
          {nameTh}
        </p>

        <p className="mt-1.5 text-[11px] leading-5 text-[#786454] sm:text-xs">
          {nameEn}
        </p>

        <p className="mt-3 text-[15px] font-bold text-[#6B3F20] sm:text-base">
          ฿{price}
        </p>

      </div>
    </div>
  );
}