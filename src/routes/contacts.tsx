import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Phone, MapPin, Mail, Landmark } from "lucide-react";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contacts — Alfagems Secondary School" },
      { name: "description", content: "Contact Alfagems Secondary School in Morogoro, Tanzania — phone numbers, postal address and bank details for school fees." },
      { property: "og:title", content: "Contacts — Alfagems Secondary School" },
      { property: "og:description", content: "Phone, address and bank details for Alfagems Secondary School, Morogoro." },
    ],
  }),
  component: Contacts,
});

function Contacts() {
  return (
    <div>
      <PageHeader title="School Contacts" subtitle="Get in touch with Alfagems Secondary School." />
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <MapPin /> <h2 className="font-bold text-lg">Location</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Alfagems Secondary School, Morogoro, Tanzania.
            </p>
            <a
              href="https://www.google.com/maps/place/Alfagems+Secondary+School/@-6.8024344,37.6773136,15z/data=!4m5!3m4!1s0x0:0x533e222871748cd7!8m2!3d-6.8024344!4d37.6773136"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-sm font-medium mt-2 inline-block"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <Phone /> <h2 className="font-bold text-lg">Contacts</h2>
            </div>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between gap-4 border-b border-border pb-2">
                <span className="text-muted-foreground">P.O. Box</span>
                <span className="font-medium">6083 — Morogoro</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-2">
                <span className="text-muted-foreground">Ofisi ya Taaluma</span>
                <a href="tel:+255689783630" className="font-medium hover:text-primary">(+255) 689 783 630</a>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-2">
                <span className="text-muted-foreground">Airtel Money Wakala</span>
                <a href="tel:+255789978886" className="font-medium hover:text-primary">(+255) 789 978 886</a>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-2">
                <span className="text-muted-foreground">Bweni la Wavulana (Patrons)</span>
                <a href="tel:+255689782670" className="font-medium hover:text-primary">(+255) 689 782 670</a>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted-foreground">Bweni la Wasichana (Matrons)</span>
                <a href="tel:+255689783672" className="font-medium hover:text-primary">(+255) 689 783 672</a>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <Landmark /> <h2 className="font-bold text-lg">Bank accounts (school fees)</h2>
            </div>
            <ul className="text-sm space-y-3">
              <li>
                <p className="text-muted-foreground">Mkombozi Bank — Morogoro Branch</p>
                <p className="font-mono font-semibold">120603517801</p>
              </li>
              <li>
                <p className="text-muted-foreground">CRDB Bank — Morogoro</p>
                <p className="font-mono font-semibold">01J2077746000</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              title="Alfagems Secondary School location"
              src="https://www.google.com/maps?q=Alfagems+Secondary+School+Morogoro&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/place/Alfagems+Secondary+School/@-6.8024344,37.6773136,15z"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Mail size={16} /> Get directions on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
