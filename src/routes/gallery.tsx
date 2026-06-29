import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Alfagems Secondary School" },
      { name: "description", content: "Scenes from Alfagems Secondary School: church services, sports, laboratories, graduation and more." },
      { property: "og:title", content: "Photo Gallery — Alfagems" },
      { property: "og:description", content: "Photos from school life at Alfagems Academy." },
      { property: "og:image", content: "https://alfashule.ac.tz/images/image14.png" },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: "https://alfashule.ac.tz/images/image12.png", caption: "Service conducted at school's church" },
  { src: "https://alfashule.ac.tz/images/IMG-20221105-WA0041.jpg", caption: "Lugha adhimu ya Kiswahili" },
  { src: "https://alfashule.ac.tz/images/image1.png", caption: "Students playing Netball at school grounds" },
  { src: "https://alfashule.ac.tz/images/image14.png", caption: "Students at school's church service" },
  { src: "https://alfashule.ac.tz/images/image18.png", caption: "School scouts" },
  { src: "https://alfashule.ac.tz/images/image5.png", caption: "Students at Chemistry Laboratory" },
  { src: "https://alfashule.ac.tz/images/image29.png", caption: "Students receiving Form 6 leaving certificates" },
  { src: "https://alfashule.ac.tz/images/image25.png", caption: "Teachers at Form 6 graduation ceremony" },
  { src: "https://alfashule.ac.tz/images/image23.jpg", caption: "Students using internet facility in the computer lab" },
  { src: "https://alfashule.ac.tz/images/Warsha_wanafunzi.jpg", caption: "Warsha ya wanafunzi" },
  { src: "https://alfashule.ac.tz/images/bible.jpg", caption: "Bible studies" },
  { src: "https://alfashule.ac.tz/images/mission.jpg", caption: "Mission" },
];

function Gallery() {
  return (
    <div>
      <PageHeader title="Photo Gallery" subtitle="Moments from life at Alfagems Academy." />
      <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((p) => (
          <figure key={p.src} className="bg-card border border-border rounded-xl overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <figcaption className="p-3 text-sm text-muted-foreground">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
