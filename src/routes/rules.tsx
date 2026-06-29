import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "School Rules (Sheria za Shule) — Alfagems Secondary School" },
      { name: "description", content: "Sheria za shule za Alfagems Secondary School — kanuni za kiutu, kitaaluma, bweni na adhabu." },
      { property: "og:title", content: "Sheria za Shule — Alfagems" },
      { property: "og:description", content: "Code of conduct and academic rules at Alfagems Academy." },
      { property: "og:image", content: "https://alfashule.ac.tz/images/gavel.jpg" },
    ],
  }),
  component: Rules,
});

const sections = [
  {
    title: "1. Sheria za kiutu",
    items: [
      "Uwahi shuleni muda uliopangwa, uwepo muda wote wa masomo na wa kazi ukifuata ratiba ya shule.",
      "Uheshimu bendera, picha za viongozi na wimbo wa taifa unaotumiwa na shule.",
      "Uwe na tabia njema, heshima na utiifu kwa walimu, wafanyakazi, wanafunzi wenzako na majirani wa shule.",
      "Ukifikiwa au kukutana na mwalimu au mtu yeyote anayekuzidi umri usimame kumsalimia.",
      "Ukiitwa na mwalimu yeyote umuitikie mara.",
      "Uwe daima safi (mwili, nguo na vitu vyote unavyotumia).",
      "Uwe na nywele fupi; usifuge ndevu.",
      "Usijirembe kwa kutia nywele dawa, kujichora, kutia wanja n.k.",
      "Usiache kucha ndefu wala kupaka rangi au hina.",
      "Usivae kofia, jaketi, viatu vya ghorofa wala mapambo yoyote.",
      "Uvae daima sare ukiwa shuleni, kwa shughuli za kishule, hospitalini au safarini kwenda/kutoka shuleni.",
      "Usionekane katika mazingira ya wasiwasi wala kujihusisha na ulevi na uvutaji wa aina yoyote.",
      "Usiwe na urafiki wa kimapenzi.",
      "Darasani ukae mahali pako, pasipo kuhamahama wala kuchanganyikana na jinsia nyingine.",
      "Uthamini kazi za aina zote na kushirikiana na wenzako katika usafi na utunzaji wa mazingira.",
      "Ulinde mali yako binafsi na ya shule.",
      "Usitoe dawati nje ya jengo lake pasipo agizo au ruhusa.",
      "Ni marufuku kuiba, kugombana, kupigana, kutumia lugha chafu, kuchonganisha au kufanya mgomo.",
      "Usitembelee nyumba za walimu wala bweni la jinsia tofauti.",
      "Usitoroke shule; toa taarifa kama utashindwa kuhudhuria masomo.",
      "Usilete shuleni simu, redio n.k. la sivyo utafukuzwa mara moja.",
      "Ukubali mamlaka ya wanafunzi viongozi katika kushauri, kuonya na kuadhibu.",
      "Usikatae adhabu.",
    ],
  },
  {
    title: "2. Sheria za kitaaluma",
    items: [
      "Uwe msikivu na mtekelezaji wa maagizo na mashauri ya walimu.",
      "Ukamilishe kazi zote zinazotolewa kwa wakati unaotakiwa.",
      "Uwe mtulivu muda wote darasani, mwalimu awepo au asiwepo.",
      "Ushirikiane vema na walimu na wanafunzi wenzako.",
      "Ujitahidi kufanya vizuri mitihani ya mara kwa mara — kuepuka kuondolewa shuleni.",
      "Ni kosa kubwa kuibia, kusaidiwa au kusaidia katika mtihani wowote.",
    ],
  },
  {
    title: "3. Sheria za nyongeza kwa wanaokaa bweni",
    items: [
      "Uvae sare muda wote uwapo shuleni au bwenini, bila kuichanganya na vazi lingine.",
      "Ukienda darasani usirudi bwenini wakati wa vipindi bila ruhusa.",
      "Uzingatie muda wa chakula; huruhusiwi kukipeleka bwenini.",
      "Usiende nje bila ruhusa maalumu; ukienda kwenye ibada uvae sare na kurudi shuleni mara.",
      "Usimpokee mgeni yeyote tofauti na walioandikwa na mzazi, wala nje ya siku za kutembelewa.",
      "Usiwasiliane na mtu yeyote bila mkuu wa bweni kujua.",
    ],
  },
  {
    title: "4. Adhabu",
    items: [
      "Kukwepa au kuibia mtihani: utaandikiwa alama sifuri (0%).",
      "Makosa madogo: maonyo mawili yataandamana na adhabu shuleni na barua ya kukiri kosa.",
      "Makosa makubwa: kusimamishwa siku au wiki kadhaa, hadi kufukuzwa shule.",
      "Ukipoteza/kuharibu kitabu au kitu cha shule: utatakiwa kununua kipya au kupoteza fedha za tahadhari.",
      "Hutarudishiwa vitu visivyotakiwa shuleni vikinyang’anywa na uongozi.",
    ],
  },
];

function Rules() {
  return (
    <div>
      <PageHeader title="Sheria za Shule" subtitle="Kanuni za kiutu, kitaaluma, bweni na adhabu zinazotuongoza." />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <img src="https://alfashule.ac.tz/images/gavel.jpg" alt="" className="rounded-xl shadow-md w-full" />
        {sections.map((s) => (
          <section key={s.title} className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-primary mb-3">{s.title}</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-foreground/85">
              {s.items.map((it, i) => <li key={i}>{it}</li>)}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
