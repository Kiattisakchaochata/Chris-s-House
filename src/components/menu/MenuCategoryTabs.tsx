"use client";

type Category = {
  id: string;
  labelTh: string;
  labelEn: string;
};

export default function MenuCategoryTabs({
  categories,
  activeCategory,
  onChange,
}: {
  categories: Category[];
  activeCategory: string;
  onChange: (id: string) => void;
}) {
  return (
    <section className="border-b border-[#C49A5A]/25 bg-[#FFF9F0]">
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-5">
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

          <div className="flex w-max min-w-full justify-start md:justify-center">
            <div className="flex items-center gap-3">

              {categories.map((cat) => {
                const active = cat.id === activeCategory;

                return (
                  <button
                    key={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={`group shrink-0 rounded-xl border px-4 py-3 transition-all duration-300 ${
                      active
                        ? "border-[#8B5A35] bg-[#8B5A35] shadow-[0_5px_14px_rgba(107,63,32,0.16)]"
                        : "border-[#C49A5A]/30 bg-[#FFFAF3] hover:border-[#C49A5A] hover:bg-[#F1E5D4]"
                    }`}
                  >
                    <div className="text-center min-w-[72px]">

                      <p
                        className={`text-[13px] font-semibold ${
                          active
                            ? "text-[#FFF8EE]"
                            : "text-[#2D1B12] group-hover:text-[#6B3F20]"
                        }`}
                      >
                        {cat.labelTh}
                      </p>

                      <p
                        className={`mt-1 text-[10px] ${
                          active
                            ? "text-[#F1E5D4]"
                            : "text-[#786454]"
                        }`}
                      >
                        {cat.labelEn}
                      </p>

                      <div
                        className={`mx-auto mt-1.5 h-[2px] rounded-full transition-all ${
                          active
                            ? "w-5 bg-[#E2C79B]"
                            : "w-0 group-hover:w-4 group-hover:bg-[#C49A5A]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}