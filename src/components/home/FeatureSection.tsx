import { features } from "@/data/home";

export default function FeatureSection() {
  return (
    <section className="bg-[#F8F3EB] px-6 pb-20 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#2D1B12] sm:text-4xl md:text-5xl">
            ซาวเวอร์โดว์บ้านคริส ส่งความอร่อยถึงบ้านคุณ
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#786454] sm:text-lg">
            อยู่จังหวัดไหน…ก็อร่อยกับซาวเวอร์โดว์บ้านคริสได้ 🤎
            <br />
            อบจากบ้านคริส อยุธยา พร้อมบริการจัดส่งทั่วประเทศ
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#C49A5A]/25 bg-[#FFFCF7] p-8 shadow-[0_8px_30px_rgba(45,27,18,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C49A5A]/60 hover:shadow-[0_16px_40px_rgba(45,27,18,0.12)]"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-[#6B3F20]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[#786454]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}