import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { FileDown } from "lucide-react";

export const Route = createFileRoute("/joining")({
  head: () => ({
    meta: [
      { title: "Joining Instructions — Alfagems Secondary School" },
      { name: "description", content: "Download joining instructions (taratibu za kujiunga) for Form 1 and evening classes at Alfagems Secondary School." },
      { property: "og:title", content: "Joining Instructions — Alfagems" },
      { property: "og:description", content: "Download joining instructions and application forms for Alfagems Academy." },
    ],
  }),
  component: Joining,
});

const forms = [
  { title: "Form 1 — 2026", href: "https://alfashule.ac.tz/docs/Taratibu_za_kujiunga_na_Kidato_cha_kwanza_2026.pdf" },
  { title: "Form 1 (Jioni / Evening) — 2026", href: "https://alfashule.ac.tz/docs/Taratibu_Jioni_2026.pdf" },
  { title: "Ombi la Kujiunga Kidato 5 — 2026", href: "https://alfashule.ac.tz/docs/Ombi_la_Kujiunga_Kidato5_2026.pdf" },
  { title: "Ombi la Kuandaliwa Kidato 6 (Mwaka 1) — 2026", href: "https://alfashule.ac.tz/docs/Ombi_la_Kuandaliwa_Kidato6_2026.pdf" },
  { title: "Ombi la Kuhamia — 2026", href: "https://alfashule.ac.tz/docs/Ombi_la_Kuhamia_2026.pdf" },
];

function Joining() {
  return (
    <div>
      <PageHeader title="Joining Instructions" subtitle="Taratibu na fomu za kujiunga shuleni kwetu." />
      <div className="max-w-3xl mx-auto px-4 py-12 grid gap-4">
        {forms.map((f) => (
          <a
            key={f.href}
            href={f.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary hover:shadow-md"
          >
            <span className="font-medium">{f.title}</span>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
              <FileDown size={16} /> Download PDF
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
