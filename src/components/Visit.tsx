import { site } from "@/data/site";

export default function Visit() {
  return (
    <section
      id="visit"
      className="bg-[#20231f] px-6 py-20 text-white md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d8c6a5]">
          {site.visit.eyebrow}
        </p>

        <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              {site.visit.title}
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-sm font-medium text-[#d8c6a5]">
              {site.visit.location}
            </p>

            <p className="mt-5 max-w-md text-base leading-7 text-white/65">
              {site.visit.description}
            </p>

            <div className="mt-8 grid max-w-md gap-2 border-y border-white/15 py-6">
              {site.visit.openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-white/55">{item.day}</span>

                  <span
                    className={
                      item.hours === "Closed"
                        ? "text-white/35"
                        : "text-white/80"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-8">
              <p className="max-w-md text-sm leading-6 text-white/60">
                {site.visit.contact.bookingNote}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+441479873377"
                  className="inline-flex min-w-40 items-center justify-center whitespace-nowrap rounded-full bg-[#efe5d2] px-6 py-3 text-sm font-medium text-[#20231f] transition hover:scale-[1.02]"
                >
                  {site.visit.reservationLabel}
                </a>

                <a
                  href="https://www.google.com/maps/place/The+Wee+Puffin/@57.330511,-3.608875,18.88z/data=!4m15!1m8!3m7!1s0x48858e0541fe45af:0x599e2bb84ea000!2s15+High+St,+Grantown-on-Spey+PH26+3EG!3b1!8m2!3d57.33053!4d-3.6089688!16s%2Fg%2F11c1yn0x_q!3m5!1s0x48858e056a0531f5:0x39eb533111b925d8!8m2!3d57.3304502!4d-3.6089229!16s%2Fg%2F11c0r528qt?entry=ttu&g_ep=EgoyMDI2MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-40 items-center justify-center whitespace-nowrap rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#20231f]"
                >
                  {site.visit.directionsLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 grid overflow-hidden border border-white/15 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-72 flex-col justify-between bg-[#171916] p-8 md:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d8c6a5]">
                Grantown-on-Spey
              </p>

              <h3 className="mt-4 max-w-md text-3xl font-medium leading-tight md:text-4xl">
                Right in the heart of the Highlands.
              </h3>
            </div>

            <div className="mt-12">
              <p className="max-w-sm text-sm leading-6 text-white/55">
                15 High St
                <br />
                Grantown-on-Spey
                <br />
                PH26 3EG
              </p>

              <a
                href="https://www.google.com/maps/place/The+Wee+Puffin/@57.330511,-3.608875,18.88z/data=!4m15!1m8!3m7!1s0x48858e0541fe45af:0x599e2bb84ea000!2s15+High+St,+Grantown-on-Spey+PH26+3EG!3b1!8m2!3d57.33053!4d-3.6089688!16s%2Fg%2F11c1yn0x_q!3m5!1s0x48858e056a0531f5:0x39eb533111b925d8!8m2!3d57.3304502!4d-3.6089229!16s%2Fg%2F11c0r528qt?entry=ttu&g_ep=EgoyMDI2MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-3 border-b border-white/30 pb-1 text-sm font-medium transition hover:border-white"
              >
                Open in Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-72 overflow-hidden bg-[#2a2d28]">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-[18%] top-[22%] h-px w-[55%] rotate-12 bg-white/30" />
            <div className="absolute left-[35%] top-[12%] h-[70%] w-px -rotate-12 bg-white/20" />
            <div className="absolute left-[10%] top-[62%] h-px w-[75%] -rotate-6 bg-white/20" />
          </div>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <div className="h-4 w-4 rounded-full bg-[#d8c6a5] shadow-[0_0_0_8px_rgba(216,198,165,0.12)]" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60">
                The Wee Puffin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}