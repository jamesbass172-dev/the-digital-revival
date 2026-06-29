import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alfagems Secondary School" },
      { name: "description", content: "Alfagems Academy is a Catholic, independent secondary school providing outstanding college-preparatory education to young women and boys." },
      { property: "og:title", content: "About Alfagems Secondary School" },
      { property: "og:description", content: "Catholic, independent secondary school in Morogoro, Tanzania." },
      { property: "og:image", content: "https://alfashule.ac.tz/images/img9.jpg" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHeader title="Our School" subtitle="Excellence, character and Catholic values — at the heart of every classroom." />
      <article className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-foreground/90 leading-relaxed">
        <img src="https://alfashule.ac.tz/images/img9.jpg" alt="Students at Alfagems" className="rounded-xl shadow-md w-full" />
        <p>
          The Academy is at an exciting time in its over 10-year history, and we
          continue the founding mission of offering outstanding education to
          both young women and boys of the 21st century.
        </p>
        <p>
          As a Catholic, independent school the Academy provides an outstanding
          college-preparatory education. Caring teachers, small classes, a rich
          and varied curriculum, and lively, enthusiastic students make the
          Academy unique.
        </p>
        <p>
          Along with its quality academic program, the Academy focuses on
          character and values, cooperation, mutual respect and service. Our
          school is a place where young students learn to listen, question,
          challenge, probe and gain the knowledge and confidence that will
          allow them to think for themselves and make good decisions.
        </p>
        <p>
          We believe that excellence in education enables students to value
          themselves as individuals, while at the same time, prepares them to
          participate with confidence in a complex and changing society.
        </p>
        <img src="https://alfashule.ac.tz/images/img5.jpg" alt="" className="rounded-xl shadow-md w-full" />
        <p>
          It is given that the students at our school will receive an
          outstanding academic education, but most important, we value the fact
          that the students are surrounded by people who care about them and
          care about one another.
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-4">
          {[
            { title: "Goal", body: "Make our Catholic secondary schools available, accessible and affordable to most students, including those who are poor and middle class." },
            { title: "Mission", body: "Provide the best Catholic schools for the greatest number of children throughout Tanzania." },
            { title: "Vision", body: "An outstanding Catholic education that equips our young people with knowledge, skills, hope and optimism to live meaningful lives and shape the world around them." },
          ].map((b) => (
            <div key={b.title} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-bold text-primary">{b.title}</h3>
              <p className="text-sm mt-2 text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>

        <p>We intend to create an education system that offers a synthesis among:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Humanistic culture.</li>
          <li>Scientific culture and technological know-how.</li>
          <li>The values of the Gospel proclaimed by the Catholic Church.</li>
        </ul>

        <img src="https://alfashule.ac.tz/images/news1.jpg" alt="" className="rounded-xl shadow-md w-full" />

        <p>
          Our education proposal is addressed to Christian families and students
          and also to families and students of other religions who share the
          universal values of the Gospel.
        </p>

        <h3 className="text-xl font-bold pt-4">Values</h3>
        <p>
          The values we get inspiration from in our daily work and that we teach
          to our students are the values of the Gospel and include:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Solidarity with all people.</li>
          <li>Service to people in need.</li>
          <li>Love for all people, particularly for the poor, weak and needy.</li>
          <li>Respect for one another.</li>
          <li>Respect and love for all creatures, for nature and for the environment.</li>
          <li>Openness to students and families of other religions, welcomed to join our school.</li>
          <li>Integration between faith values, culture and life.</li>
        </ul>
        <img src="https://alfashule.ac.tz/images/img8.jpg" alt="" className="rounded-xl shadow-md w-full" />
      </article>
    </div>
  );
}
