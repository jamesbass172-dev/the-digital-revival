import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/our-stand")({
  head: () => ({
    meta: [
      { title: "Our Stand — Alfagems Secondary School" },
      { name: "description", content: "The Catholic identity and educational stand of Alfagems Secondary School — faith, science and the dignity of every human life." },
      { property: "og:title", content: "Our Stand — Alfagems" },
      { property: "og:description", content: "Catholic identity, faith and reason, and the dignity of every human life." },
      { property: "og:image", content: "https://alfashule.ac.tz/images/img10.jpg" },
    ],
  }),
  component: OurStand,
});

function OurStand() {
  return (
    <div>
      <PageHeader title="Our Stand" subtitle="Faith, reason and the dignity of every human life." />
      <article className="max-w-3xl mx-auto px-4 py-12 space-y-5 leading-relaxed text-foreground/90">
        <img src="https://alfashule.ac.tz/images/img10.jpg" alt="" className="rounded-xl shadow-md w-full" />
        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
          “Educating is not a profession but an attitude, a way of being; in
          order to educate it is necessary to step out of ourselves and be among
          young people, to accompany them in the stages of their growth, with
          the sole objective of training and helping to develop mature people
          who are simple, competent and honest, who know how to love with
          faithfulness, who can live life as a response to God’s call, and their
          future profession as a service to society. Without consistency it is
          impossible to educate!”
          <footer className="not-italic font-semibold text-sm mt-2">— Pope Francis, 7 June 2013</footer>
        </blockquote>

        <p>
          Our school is Catholic, so we are committed to teaching truth — not
          propaganda of any kind. No truth can contradict another truth. Faith
          is above reason, but there can never be a contradiction between faith
          and science, because both originate in God.
        </p>
        <p>
          Creationism is not a scientific theory about the beginning of the
          world; it is faith in God’s presence and activity in the whole
          world’s origin and development, which science tries to explain in its
          own ways.
        </p>
        <p>
          Biology alone cannot fully present the specificity of humans among
          animals, because its field of study is the body, while the soul is
          outside its scope. Every human life is to be protected from
          conception to natural end, and sexuality directed toward the full
          growth of both individual and society.
        </p>
        <p>
          While criticising fundamentalism and other perversions of religion,
          we refuse negative presentations of religion shaped by Marxism.
          Despite human weaknesses, Christian missionaries should not be
          classified simply as “agents of colonisation”: their reasons and
          aims were usually very different from those of traders, explorers
          and politicians, and they often came from countries that had not
          colonised the African peoples they served.
        </p>
        <p>
          They offered their lives to share with Africans their own treasure —
          Jesus Christ and his love without borders — to replace superstition,
          tribalism, slavery and the oppression of women.
        </p>
        <p className="text-sm text-muted-foreground border-t border-border pt-4">
          Read the full original statement on the school’s legacy site:{" "}
          <a href="https://alfashule.ac.tz/ourstand.php" target="_blank" rel="noreferrer" className="text-primary font-medium">
            alfashule.ac.tz/ourstand
          </a>
        </p>
      </article>
    </div>
  );
}
