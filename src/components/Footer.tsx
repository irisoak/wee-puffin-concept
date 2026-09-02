import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#171916] px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-medium tracking-tight">
              {site.name}
            </p>

            <p className="mt-2 text-sm text-white/50">
              {site.footer.location}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60"
            aria-label="Footer navigation"
          >
            <a
              href="#menu"
              className="transition hover:text-white"
            >
              {site.footer.links.menu}
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              {site.footer.links.about}
            </a>

            <a
              href="#visit"
              className="transition hover:text-white"
            >
              {site.footer.links.visit}
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.footer.copyright}
          </p>

          <p>
            Concept website by{" "}
              <a
                href="https://irisoak.dev"
                target="_blank"
                rel="noreferrer"
                className="text-white/55 transition hover:text-white"
              >
                Iris & Oak
              </a>
            </p>
        </div>
      </div>
    </footer>
  );
}