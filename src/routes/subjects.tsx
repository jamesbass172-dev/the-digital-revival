import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/subjects")({
  head: () => ({
    meta: [
      { title: "Subjects & Combinations — Alfagems Secondary School" },
      { name: "description", content: "O-Level and A-Level subjects offered at Alfagems Secondary School, including PCB, CBG, HGK, HGL, HKL combinations." },
      { property: "og:title", content: "Subjects & Combinations — Alfagems" },
      { property: "og:description", content: "Subjects taught from Form 1 to Form 4 and A-Level combinations for Form 5 and Form 6." },
    ],
  }),
  component: Subjects,
});

const oLevel = [
  "Bible Knowledge", "Biology", "Chemistry", "Civics", "Computer", "Divinity",
  "English", "Geography", "History", "Kiswahili", "Literature in English",
  "Mathematics", "Physical Education", "Physics", "Theatre Art",
];
const combos = ["CBG", "HGK", "HGL", "HKL", "PCB"];
const formLinks = [
  { label: "Form 1", href: "https://alfashule.ac.tz/form1.php" },
  { label: "Form 2", href: "https://alfashule.ac.tz/form2.php" },
  { label: "Form 3", href: "https://alfashule.ac.tz/form3.php" },
  { label: "Form 4", href: "https://alfashule.ac.tz/form4.php" },
  { label: "Form 5", href: "https://alfashule.ac.tz/form5.php" },
  { label: "Form 6", href: "https://alfashule.ac.tz/form6.php" },
];

function Subjects() {
  return (
    <div>
      <PageHeader title="Masomo na Michepuo" subtitle="Subjects taught from Form 1–4 and A-Level combinations for Form 5 & 6." />
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Masomo Yafundishwayo (Form 1 – Form 4)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {oLevel.map((s) => (
              <div key={s} className="bg-card border border-border rounded-lg px-4 py-3 text-sm font-medium hover:border-primary">
                {s}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Michepuo (Form 5 & 6 — A-Level)</h2>
          <div className="flex flex-wrap gap-3">
            {combos.map((c) => (
              <span key={c} className="bg-primary/10 text-primary font-bold px-5 py-3 rounded-full text-lg">{c}</span>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Subject notes</h2>
          <p className="text-muted-foreground mb-4">Gusa kiungo kupata notes za masomo mbalimbali:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {formLinks.map((f) => (
              <a key={f.href} href={f.href} target="_blank" rel="noreferrer" className="bg-card border border-border rounded-lg py-4 text-center font-semibold hover:border-primary hover:text-primary">
                {f.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <a href="https://alfashule.ac.tz/A-level.php" target="_blank" rel="noreferrer" className="text-primary font-medium">ACSEE past papers →</a>
            <a href="https://alfashule.ac.tz/0-level.php" target="_blank" rel="noreferrer" className="text-primary font-medium">CSEE past papers →</a>
          </div>
        </section>
      </div>
    </div>
  );
}
