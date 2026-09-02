import { site } from "@/data/site";

export default function Reviews() {
  return (
    <section className="bg-[#f7f3eb] px-6 py-20 text-[#20231f] md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#756b5c]">
              {site.reviews.eyebrow}
            </p>

            <div className="mt-8">
              <p className="text-6xl font-medium tracking-tight md:text-7xl">
                {site.reviews.rating}
              </p>

              <div
                className="mt-3 text-lg tracking-[0.15em]"
                aria-label={`${site.reviews.rating} out of 5 stars`}
              >
                ★★★★★
              </div>

              <p className="mt-3 text-sm text-[#686359]">
                {site.reviews.platform} · {site.reviews.reviewCount}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {site.reviews.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#4d4b45] md:text-lg md:leading-8">
              {site.reviews.description}
            </p>

            <a
              href="#visit"
              className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#20231f]/30 pb-1 text-sm font-medium transition hover:border-[#20231f]"
            >
              Plan your visit
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}