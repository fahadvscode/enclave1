import type { Metadata } from "next";
import Link from "next/link";
import { StockImage } from "@/components/StockImage";
import { LocationSection } from "@/components/LocationSection";
import { HomeLeadForm } from "@/components/HomeLeadForm";
import { HomeFaq, homeFaqItems } from "@/components/HomeFaq";
import { siteData, SITE_URL } from "@/lib/floor-plans";
import { IMAGES } from "@/lib/images";
import { homeFaqSchema, projectOfferSchema, webPageSchema } from "@/lib/schema";
import styles from "./page.module.css";

const PAGE_TITLE = "The Enclave Milton | Freehold Townhomes by Sundial Homes";
const PAGE_DESCRIPTION =
  "The Enclave Milton by Sundial Homes — freehold townhomes in southeast Milton, Ontario. 15 models, no monthly maintenance fees, occupancy 2027. From $599,990.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  keywords: [
    "The Enclave Milton",
    "The Enclave",
    "new townhomes Milton Ontario",
    "freehold townhomes Milton",
    "Sundial Homes Milton",
    "townhomes no maintenance fees Milton",
    "new homes southeast Milton",
    "Milton townhomes 2027",
    "Britannia Road townhomes",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    images: [{ url: IMAGES.hero, width: 1200, height: 630, alt: "The Enclave Milton new townhomes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [IMAGES.hero],
  },
};

const highlights = [
  {
    title: "Freehold ownership",
    text: "No monthly maintenance fees on Village and Park collections — rare for new townhomes in Milton.",
  },
  {
    title: "15 home designs",
    text: "From 953 sq ft back-to-back townhomes to 2,843 sq ft corner residences across two collections.",
  },
  {
    title: "Southeast Milton",
    text: "Britannia Road between James Snow Parkway & Fourth Line. Target occupancy 2027.",
  },
];

const trustPoints = [
  "Freehold · $0 maintenance",
  "15 floor plans",
  "By Sundial Homes",
];

export default function HomePage() {
  const { project, collections } = siteData;
  const totalModels = collections.reduce((n, c) => n + c.models.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectOfferSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema(PAGE_TITLE, PAGE_DESCRIPTION)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema(homeFaqItems)) }}
      />

      <section className={styles.hero} aria-labelledby="hero-heading">
        <StockImage
          src={IMAGES.hero}
          alt="The Enclave Milton — new freehold townhomes by Sundial Homes in southeast Milton, Ontario"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
          fallbackLabel="The Enclave Milton"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              {project.city} · By {project.builder}
            </p>
            <h1 id="hero-heading">
              The Enclave Milton — <span className={styles.heroAccent}>Freehold Townhomes</span>
            </h1>
            <p className={styles.tagline}>
              Freehold townhomes in southeast Milton with no monthly maintenance fees. Register
              below for instant floor plans and current pricing.
            </p>
            <p className={styles.from}>From {project.startingFrom}</p>

            <ul className={styles.trustPills} aria-label="Community highlights">
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className={styles.ctas}>
              <a href="#register" className="btn btn-gold">
                Get floor plans &amp; pricing
              </a>
              <Link href="/floor-plans" className="btn btn-outline">
                Browse {totalModels} models
              </Link>
            </div>
          </div>

          <HomeLeadForm />
        </div>
      </section>

      <section className={styles.stats} aria-label="The Enclave Milton at a glance">
        <div className="container">
          <ul className={styles.statsList}>
            <li>
              <strong>{totalModels}</strong>
              <span>Floor plans</span>
            </li>
            <li>
              <strong>{project.startingFrom}</strong>
              <span>Starting from</span>
            </li>
            <li>
              <strong>{project.occupancy}</strong>
              <span>Occupancy</span>
            </li>
            <li>
              <strong>$0</strong>
              <span>Maintenance fees</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="collections-heading">
        <div className="container">
          <h2 id="collections-heading" className="section-title">
            Two collections. Fifteen Milton townhome models.
          </h2>
          <p className="lead">
            The Enclave by Sundial Homes brings freehold back-to-back and traditional townhomes to
            southeast Milton — explore every layout from compact first-home designs to
            Milton&apos;s largest traditional townhome at 2,843 sq ft.
          </p>
          <div className={styles.collections}>
            {collections.map((c) => (
              <Link key={c.id} href={`/floor-plans#${c.id}`} className={styles.collectionCard}>
                <div className={styles.collectionIcon} aria-hidden="true">
                  {c.id === "village" ? "V" : "P"}
                </div>
                <div className={styles.collectionBody}>
                  <span className="badge">{c.tagline}</span>
                  <h3>{c.name}</h3>
                  <p>{c.type}</p>
                  <span className={styles.collectionCta}>{c.models.length} models →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.seoBlock}`} aria-labelledby="about-heading">
        <div className="container">
          <h2 id="about-heading" className="section-title">
            New townhomes in Milton, Ontario — built for how you live today
          </h2>
          <div className={styles.prose}>
            <p>
              <strong>The Enclave Milton</strong> is a master-planned community of new freehold
              townhomes on Britannia Road in southeast Milton. Developed by{" "}
              <strong>{project.builder}</strong>, The Enclave combines attainable entry pricing
              from {project.startingFrom} with larger family-sized layouts — all without monthly
              maintenance fees on both the Village and Park collections.
            </p>
            <p>
              Whether you are comparing <strong>new townhomes in Milton</strong> for a first
              purchase, upgrading for a growing family, or investing in Halton Region, The Enclave
              offers 15 distinct floor plans: five back-to-back designs in the Village Collection
              and ten traditional two- and three-storey homes in the Park Collection.
            </p>
            <p>
              Register using the form above to receive PDF floor plans, elevation options, and
              current model pricing. Occupancy is targeted for <strong>{project.occupancy}</strong>.
              Limited release phases — register early for lot preference and deposit details.
            </p>
          </div>
          <a href="#register" className="btn btn-primary">
            Register for floor plans &amp; pricing
          </a>
        </div>
      </section>

      <LocationSection />

      <section className="section section-alt" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading" className="section-title">
            Why buyers choose The Enclave Milton
          </h2>
          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <div className={styles.whyCtas}>
            <Link href="/#location" className="btn btn-outline-dark">
              Schools &amp; amenities
            </Link>
            <a href="#register" className="btn btn-gold">
              Get pricing now
            </a>
          </div>
        </div>
      </section>

      <HomeFaq />

      <section className={styles.stickyCta} aria-label="Register for pricing">
        <div className={`container ${styles.stickyInner}`}>
          <p>
            <strong>Ready to compare layouts?</strong> Register for all {totalModels} floor plans.
          </p>
          <a href="#register" className="btn btn-gold">
            Register free
          </a>
        </div>
      </section>
    </>
  );
}
