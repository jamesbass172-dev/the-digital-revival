import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { FileDown } from "lucide-react";

export const Route = createFileRoute("/almanac")({
  head: () => ({
    meta: [
      { title: "School Calendar — Alfagems Secondary School" },
      { name: "description", content: "Official school almanac (calendar) for the academic year 2021/2022 at Alfagems Secondary School." },
      { property: "og:title", content: "School Calendar — Alfagems" },
      { property: "og:description", content: "Official school calendar." },
      { property: "og:image", content: "https://alfashule.ac.tz/images/kalenda.jpg" },
    ],
  }),
  component: Almanac,
});

function Almanac() {
  return (
    <div>
      <PageHeader title="School Almanac" subtitle="Academic year 2021 / 2022 calendar." />
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <a
          href="https://alfashule.ac.tz/docs/KALENDA_2021-2022.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block group"
        >
          <img
            src="https://alfashule.ac.tz/images/kalenda.jpg"
            alt="School calendar 2021-2022"
            className="rounded-xl shadow-lg mx-auto group-hover:shadow-2xl transition"
          />
          <span className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold">
            <FileDown size={16} /> Download Kalenda 2021–2022 (PDF)
          </span>
        </a>
      </div>
    </div>
  );
}
