import type { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from '@/components/ui/AnimatedHero';

export const metadata: Metadata = {
  title: "Home Care FAQs | Arcadia Home Care | Toronto & GTA",
  description:
    "Answers to common questions about home care costs, caregiver matching, dementia support, hospital discharge planning, and getting started with Arcadia Home Care.",
  alternates: {
    canonical: "https://www.arcadiahomecare.ca/faqs/",
  },
};

const faqs = [
  {
    q: "How quickly can home care start?",
    a: "In many situations, care can begin within 24 to 72 hours after your initial consultation. Timing depends on urgency, care complexity, and caregiver matching needs.",
  },
  {
    q: "Do you support dementia and Alzheimer's care at home?",
    a: "Yes. Arcadia specializes in dementia and Alzheimer's home care, including routine-based support, supervision, communication approaches, and caregiver consistency.",
  },
  {
    q: "Can you help after a hospital discharge?",
    a: "Yes. We coordinate discharge transitions, home setup, personal care, mobility support, and follow-through so families are not left managing recovery alone.",
  },
  {
    q: "How are caregivers matched to my family?",
    a: "We match based on care needs, clinical context, personality fit, communication style, and scheduling reliability. The goal is both safe care and a trusted relationship.",
  },
  {
    q: "Is home care available overnight or 24 hours?",
    a: "Yes. Arcadia provides overnight and around-the-clock care for families who need continuous support or supervision.",
  },
  {
    q: "Is there public funding for home care in Ontario?",
    a: "Some families qualify for publicly funded services through Ontario Health atHome programs. We can help you understand options and where private care may still be needed.",
  },
  {
    q: "Which areas do you serve?",
    a: "Arcadia serves Toronto and the GTA, including York, Peel, Durham, and Halton regions.",
  },
  {
    q: "How do we get started?",
    a: "Call (844) 977-0050 or book a free consultation through our contact page. We will discuss your situation, assess needs, and recommend a practical next step.",
  },
  {
    q: "Who should I call if my parent suddenly needs home care in Toronto?",
    a: "Start by calling a home care provider that can assess urgency quickly and coordinate a safe first step. Arcadia can usually begin planning immediately and, when appropriate, start care within 24 to 72 hours.",
  },
  {
    q: "How much does home care cost per hour in Toronto and the GTA?",
    a: "Rates vary based on care complexity, schedule, and whether support is daytime, overnight, or 24-hour. The clearest way to get accurate pricing is a short consultation based on your family's real needs.",
  },
  {
    q: "Can someone stay overnight with my mom or dad at home?",
    a: "Yes. Overnight care is available for families who need supervision, safety monitoring, or support with night routines so primary caregivers can rest.",
  },
  {
    q: "Can you help if my parent has dementia and does not want a caregiver?",
    a: "Yes. We often start with a gradual introduction and a personality-based match so support feels familiar instead of disruptive. Building trust slowly is usually more effective than forcing change.",
  },
  {
    q: "What is the fastest way to set up post-hospital care at home?",
    a: "The fastest path is to call right away with discharge details, medications, mobility needs, and follow-up appointments. We can then coordinate a practical transition plan and caregiver schedule.",
  },
  {
    q: "Is Arcadia available on weekends and holidays?",
    a: "Care can be arranged seven days a week, including weekends and holidays, based on your schedule and care requirements.",
  },
  {
    q: "Do you only serve downtown Toronto or the full GTA?",
    a: "Arcadia serves families across Toronto and the Greater Toronto Area, including York, Peel, Durham, and Halton regions.",
  },
  {
    q: "Can I book a free consultation before making any decisions?",
    a: "Absolutely. Consultations are no-obligation and designed to give families clarity, options, and a realistic care plan before they commit.",
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <main style={{ background: "#FFFFFF" }}>
        <AnimatedHero
          eyebrow="Frequently Asked Questions"
          title={<>Clear Answers for Families<br />Exploring Home Care</>}
          subtitle="If your family is navigating dementia, discharge recovery, or caregiver burnout, these are the questions we hear most often."
          imageSrc="/images/heroes/faqs.jpg"
          imageAlt="Family discussing home care options together"
        />

        <section style={{ padding: "72px 24px 40px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            {faqs.map((faq) => (
              <article
                key={faq.q}
                style={{
                  border: "1px solid #E5E0D8",
                  borderRadius: 14,
                  background: "#FAFAF8",
                  padding: "24px 24px 20px",
                  marginBottom: 16,
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.35rem, 2.6vw, 1.8rem)",
                    color: "#1C2B3A",
                    marginBottom: 10,
                  }}
                >
                  {faq.q}
                </h2>
                <p style={{ color: "#4B5563", lineHeight: 1.75, fontSize: 15 }}>
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section style={{ padding: "24px 24px 88px" }}>
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              background: "#1C2B3A",
              borderRadius: 14,
              padding: "30px 24px",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C8302A",
                marginBottom: 12,
              }}
            >
              Need Personal Guidance?
            </p>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#FFFFFF",
                fontSize: "clamp(1.7rem, 3.6vw, 2.5rem)",
                marginBottom: 14,
              }}
            >
              Book a Free Consultation
            </h3>
            <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
              Speak with our team about your family&apos;s situation and get a
              clear next step.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 18,
              }}
            >
              <a
                href="tel:8449770050"
                style={{
                  background: "#C8302A",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  padding: "12px 20px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Call (844) 977-0050
              </a>
              <Link
                href="/contact/"
                style={{
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  padding: "12px 20px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
