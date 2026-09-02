import { site } from "@/data/site";

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="bg-[#20231f] px-6 py-20 text-white md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d8c6a5]">
              {site.menuPreview.eyebrow}
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {site.menuPreview.title}
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/65 md:text-lg md:leading-8">
              {site.menuPreview.description}
            </p>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {site.menuPreview.items.map((item) => (
              <article
                key={item.name}
                className="grid gap-3 py-7 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8"
              >
                <h3 className="text-lg font-medium">
                  {item.name}
                </h3>

                <p className="max-w-md text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
            <p className="py-5 text-xs leading-5 text-white/40">
              Sample dishes shown for this website concept. Menu and availability may change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}