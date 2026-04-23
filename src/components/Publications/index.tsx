import SectionTitle from "@/components/Common/SectionTitle";
import publicationsData from "./publicationsData";

const Publications = () => {
  return (
    <section id="publications" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Selected Publications"
          paragraph="Selected research papers describing the concepts, architecture, and application of Mainzelliste in medical informatics."
          center
        />

        <div className="flex flex-col gap-5">
          {[...publicationsData].sort((a, b) => b.year - a.year).map((pub) => (
            <a
              key={pub.doi}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-stroke bg-white p-6 shadow-one transition-all duration-200 hover:border-primary hover:shadow-two dark:border-stroke-dark dark:bg-dark dark:shadow-none dark:hover:border-primary sm:flex-row sm:items-start sm:gap-6"
            >
              {/* Year badge */}
              <div className="flex-shrink-0">
                <span className="inline-block rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                  {pub.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="mb-1.5 text-base font-semibold leading-snug text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  {pub.title}
                </h3>
                <p className="mb-2 text-sm text-body-color">
                  {pub.authors} &mdash; <span className="italic">{pub.journal}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stroke px-2.5 py-0.5 text-xs text-body-color dark:border-stroke-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* External link icon */}
              <div className="flex-shrink-0 self-center text-body-color transition-colors group-hover:text-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
