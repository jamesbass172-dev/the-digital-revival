import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum (Mitaala) — Alfagems Secondary School" },
      { name: "description", content: "Alfagems follows the Tanzania national curriculum from Form 1 to Form 6, with Catholic values and English as medium of instruction." },
      { property: "og:title", content: "Curriculum — Alfagems" },
      { property: "og:description", content: "Form 1–6 curriculum, taught in English, with Religious Education." },
      { property: "og:image", content: "https://alfashule.ac.tz/images/img4.jpg" },
    ],
  }),
  component: Curriculum,
});

function Curriculum() {
  return (
    <div>
      <PageHeader title="Mitaala" subtitle="Mtaala wa Serikali ya Tanzania, mafundisho ya Kanisa Katoliki, na lugha ya Kiingereza darasani." />
      <article className="max-w-4xl mx-auto px-4 py-12 space-y-5 leading-relaxed">
        <img src="https://alfashule.ac.tz/images/img4.jpg" alt="" className="rounded-xl shadow-md w-full" />
        <p>
          Asubuhi shule yetu inafuata mitaala iliyotolewa na Serikali ya Jamhuri
          ya Muungano wa Tanzania (kidato cha kwanza hadi kidato cha sita), kwa
          kuzingatia imani na maadili ya Kanisa Katoliki, pamoja na mila njema
          za Watanzania ili nchi iweze kujengwa kwa uimara.
        </p>
        <p>
          Masomo ya <strong>Bible Knowledge</strong> na <strong>Divinity</strong> ni ya
          lazima kwa Wakristo wote. Aidha, masomo ya Dini yanafundishwa kadiri
          ya imani ya wanafunzi na utayari wa walimu wa kujitolea kutoka dini
          husika.
        </p>
        <p>
          Lugha ya Kiingereza ndiyo itakayotumika kufundishia kwa kuzingatia
          maelekezo ya Wizara ya Elimu na Mafunzo ya Ufundi.
        </p>
        <p>
          Shule yetu ni ya sekondari kuanzia kidato cha 1 hadi cha 6. Kuanzia
          mwaka 2010 asubuhi imekuwa na mikondo 24 (6×4).
        </p>
        <img src="https://alfashule.ac.tz/images/img6.jpg" alt="" className="rounded-xl shadow-md w-full" />
        <p>
          Shule yetu inapokea hata watu waliochelewa kupata elimu (wanandoa,
          wafanyakazi n.k.); madarasa 32 yanatumika hata jioni na Jumamosi kwa
          kozi za haraka kuliko kawaida. Kwa hiyo, wanafunzi ni zaidi ya
          3,000. Karibu nusu wanaishi katika mabweni ya shule, na wengine
          wanatokea nyumbani.
        </p>
      </article>
    </div>
  );
}
