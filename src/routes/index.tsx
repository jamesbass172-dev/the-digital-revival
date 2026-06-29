import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Download, FileText, GraduationCap, MapPin, Newspaper } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alfagems Secondary School — Morogoro, Tanzania" },
      { name: "description", content: "Catholic, independent secondary school in Morogoro offering outstanding college-preparatory education from Form 1 to Form 6." },
      { property: "og:title", content: "Alfagems Secondary School" },
      { property: "og:description", content: "Catholic, independent secondary school in Morogoro, Tanzania." },
    ],
  }),
  component: Index,
});

const gallery = [
  "https://alfashule.ac.tz/images/events/Alfagems_footbalteam1_boys.jpg",
  "https://alfashule.ac.tz/images/events/Alfagems_footbalteam2_boys.jpg",
  "https://alfashule.ac.tz/images/IMG-20221105-WA0041.jpg",
  "https://alfashule.ac.tz/images/img1.jpg",
  "https://alfashule.ac.tz/images/img2.jpg",
  "https://alfashule.ac.tz/images/img3.jpg",
  "https://alfashule.ac.tz/images/img4.jpg",
  "https://alfashule.ac.tz/images/img5.jpg",
  "https://alfashule.ac.tz/images/img6.jpg",
  "https://alfashule.ac.tz/images/img7.jpg",
  "https://alfashule.ac.tz/images/img8.jpg",
  "https://alfashule.ac.tz/images/img9.jpg",
  "https://alfashule.ac.tz/images/img10.jpg",
  "https://alfashule.ac.tz/images/img11.jpg",
];

const downloads = [
  { label: "Ombi la Kujiunga Kidato 5 — 2026", href: "https://alfashule.ac.tz/docs/Ombi_la_Kujiunga_Kidato5_2026.pdf" },
  { label: "Ombi la Kuandaliwa Kidato 6 (Mwaka 1) — 2026", href: "https://alfashule.ac.tz/docs/Ombi_la_Kuandaliwa_Kidato6_2026.pdf" },
  { label: "Ombi la Kuhamia shuleni kwetu — 2026", href: "https://alfashule.ac.tz/docs/Ombi_la_Kuhamia_2026.pdf" },
  { label: "Taratibu za masomo ya jioni — 2026", href: "https://alfashule.ac.tz/docs/Taratibu_Jioni_2026.pdf" },
  { label: "Nafasi za Masomo (2025)", href: "https://alfashule.ac.tz/docs/Nafasi_za_Masomo2025.pdf" },
  { label: "Application Forms", href: "https://alfashule.ac.tz/application_form_download.php" },
  { label: "Past Papers (ASCEE, SCEE, QT, MOCK, FTNA/FTSEE)", href: "https://alfashule.ac.tz/pastpapers.php" },
  { label: "Alfagems App for Android", href: "https://alfashule.ac.tz/App/Alfagems_App.apk" },
];

const events = [
  { title: "Ziara ya Askofu Msimbe 2024", img: "https://alfashule.ac.tz/images/events/AskofuMsimbe&FrRicardo.png", href: "https://youtu.be/8xTbonhjcqk" },
  { title: "2021 Bonanza Highlights", img: "https://alfashule.ac.tz/images/events/Alfagems_footbalteam2_boys.jpg", href: "https://www.youtube.com/watch?v=1mwkvy7XHZ8" },
  { title: "2020 Bonanza Trophy for Winners", img: "https://alfashule.ac.tz/images/events/2020_Bonanza_trophy.png", href: "https://www.youtube.com/watch?v=v71pLTm_DEo" },
  { title: "2020 Bonanza Football Match", img: "https://alfashule.ac.tz/images/events/2020_Bonanza.png", href: "https://www.youtube.com/watch?v=-rrXgy3mYzU" },
  { title: "2019 Form IV graduation rehearsals", img: "https://alfashule.ac.tz/images/events/4m42019rehearsals.jpg", href: "https://www.youtube.com/watch?v=3SpeNll5kGo" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://alfashule.ac.tz/images/img9.jpg"
            alt="Alfagems Secondary School campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 text-background">
          <p className="uppercase tracking-widest text-xs text-secondary font-semibold mb-3">
            Morogoro · Tanzania
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Outstanding Catholic education for the 21st century.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-90">
            Caring teachers, small classes, and a rich curriculum from Form 1 to
            Form 6 — preparing young women and men for university and life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-md font-semibold hover:bg-secondary/90"
            >
              About the school <ArrowRight size={16} />
            </Link>
            <Link
              to="/joining"
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur border border-background/30 px-5 py-3 rounded-md font-semibold hover:bg-background/20"
            >
              Joining instructions
            </Link>
          </div>
          <p className="mt-10 italic text-sm opacity-80 max-w-xl border-l-2 border-secondary pl-4">
            “Education is not a way to escape poverty, it is a way to fight it.” — Mwl. J. K. Nyerere
          </p>
        </div>
      </section>

      {/* Quick cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: FileText, title: "School Rules", to: "/rules", desc: "Sheria za shule." },
          { icon: GraduationCap, title: "Curriculum", to: "/curriculum", desc: "Form 1–6 mitaala." },
          { icon: BookOpen, title: "Subjects & Combinations", to: "/subjects", desc: "O-Level & A-Level." },
          { icon: MapPin, title: "Contacts", to: "/contacts", desc: "Find & reach us." },
        ].map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition group"
          >
            <c.icon className="text-primary mb-3" />
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
            <span className="text-primary text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Open <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </section>

      {/* Notifications + Downloads */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Newspaper className="text-accent" />
            <h2 className="text-2xl font-bold">Notifications</h2>
          </div>
          <ul className="space-y-3">
            {downloads.slice(0, 2).map((d) => (
              <li key={d.href} className="flex gap-3 items-start bg-card border border-border rounded-lg p-4">
                <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded font-bold">NEW</span>
                <a href={d.href} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-primary">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://alfashule.ac.tz/notifications.php"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary font-medium mt-4 inline-flex items-center gap-1"
          >
            Angalia zaidi <ArrowRight size={14} />
          </a>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Download className="text-primary" />
            <h2 className="text-2xl font-bold">Downloads</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {downloads.map((d) => (
              <a
                key={d.href}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="bg-card border border-border rounded-lg p-3 text-sm hover:border-primary hover:text-primary"
              >
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-xl md:text-2xl font-serif italic text-foreground/80 leading-relaxed">
            “Educating is not a profession but an attitude, a way of being; in
            order to educate it is necessary to step out of ourselves and be
            among young people, to accompany them in the stages of their
            growth.”
          </p>
          <p className="mt-4 text-sm font-semibold text-muted-foreground">
            — Pope Francis, 7 June 2013
          </p>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">School activities and events</h2>
          <Link to="/gallery" className="text-primary text-sm font-medium inline-flex items-center gap-1">
            View gallery <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {gallery.map((src) => (
            <div key={src} className="aspect-square overflow-hidden rounded-md bg-muted">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* Events / videos */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((e) => (
              <a
                key={e.title}
                href={e.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{e.title}</h3>
                  <span className="text-primary text-sm font-medium mt-1 inline-flex items-center gap-1">Watch video <ArrowRight size={14} /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Calendar className="text-primary mb-3" />
          <h2 className="text-3xl font-bold">School Almanac</h2>
          <p className="text-muted-foreground mt-3">
            View the official school calendar for the academic year.
          </p>
          <Link
            to="/almanac"
            className="inline-flex items-center gap-2 mt-5 bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold hover:bg-primary/90"
          >
            Open calendar <ArrowRight size={16} />
          </Link>
        </div>
        <img src="https://alfashule.ac.tz/images/kalenda.jpg" alt="School calendar" className="rounded-lg shadow-lg w-full" />
      </section>
    </div>
  );
}
