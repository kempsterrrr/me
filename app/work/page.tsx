import Link from "next/link";

const workHistory = [
  {
    company: "Permanenet Data Solutions, Inc.",
    title: "Head of Ecosystem",
    startDate: "Sep, 2024",
    endDate: "current",
    url: "https://pds.inc",
    descriprtion:
      "Building a duel ecosystem of decentralised Arweave gateways and products on the permanent web.",
  },
  {
    company: "Developer DAO",
    title: "Director, Developer DAO Foundation",
    startDate: "Sep, 2024",
    endDate: "current",
    url: "https://pds.inc",
    descriprtion:
      "Building a duel ecosystem of decentralised Arweave gateways and products on the permanent web.",
  },
  {
    company: "P3RKS",
    title: "Founder",
    startDate: "Sep, 2024",
    endDate: "current",
    url: "https://pds.inc",
    descriprtion:
      "Building a duel ecosystem of decentralised Arweave gateways and products on the permanent web.",
  },
  {
    company: "Talent Point",
    title: "Head of Growth",
    startDate: "Sep, 2024",
    endDate: "current",
    url: "https://pds.inc",
    descriprtion:
      "Building a duel ecosystem of decentralised Arweave gateways and products on the permanent web.",
  },
];

export const metadata = {
  title: "work",
  description: "",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {metadata.title}
      </h1>
      <div>
        {workHistory.map((work, index) => (
          <div className="mb-4">
            <a
              key={work.title}
              className="flex flex-col space-y-1"
              href={work.url}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-0 mb-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {work.startDate}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {work.title + " @ " + work.company}
                </p>
              </div>
              <div>
                <p className="font-extralight">{work.descriprtion}</p>
              </div>
            </a>
            {/* <span className="italic">
                {work.startDate + " - " + work.endDate}
              </span> */}
          </div>
        ))}
      </div>
    </section>
  );
}
