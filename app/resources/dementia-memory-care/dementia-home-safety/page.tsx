import type { Metadata } from 'next'
import Link from 'next/link'

const CANONICAL =
  'https://www.arcadiahomecare.ca/resources/dementia-memory-care/dementia-home-safety/'
const PUBLISHED = '2026-07-09T12:00:00-04:00'
const MODIFIED = '2026-07-09T12:00:00-04:00'

export const metadata: Metadata = {
  title: 'How to Keep Someone with Dementia Safe at Home | Arcadia Home Care',
  description:
    'Practical room-by-room safety strategies for Toronto families caring for a parent with dementia at home: wandering prevention, kitchen hazards, bathroom modifications, and when to bring in professional support.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'How to Keep Someone with Dementia Safe at Home',
    description:
      'Practical room-by-room safety strategies for Toronto families caring for a parent with dementia at home: wandering prevention, kitchen hazards, bathroom modifications, and when to bring in professional support.',
    url: CANONICAL,
    type: 'article',
    locale: 'en_CA',
    siteName: 'Arcadia Home Care',
  },
}

export default function DementiaHomeSafetyArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'How to Keep Someone with Dementia Safe at Home',
              alternativeHeadline: 'The Safety Concerns You Cannot Stop Thinking About',
              description:
                'Practical room-by-room safety strategies for Toronto families caring for a parent with dementia at home: wandering prevention, kitchen hazards, bathroom modifications, and when to bring in professional support.',
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
              author: {
                '@type': 'Organization',
                name: 'Arcadia Home Care',
                url: 'https://www.arcadiahomecare.ca/',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Arcadia Home Care',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg',
                },
              },
              mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
              articleSection: 'Dementia & Memory Care',
              keywords:
                'dementia home safety, keeping dementia patient safe at home, dementia wandering prevention, home modifications for dementia, dementia kitchen safety, bathroom safety for dementia, dementia care at home Toronto',
              inLanguage: 'en-CA',
              audience: {
                '@type': 'Audience',
                audienceType:
                  'Adult children and family caregivers of aging parents with dementia in Toronto and the Greater Toronto Area',
              },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['.article-summary', '.key-takeaways', 'h1'],
              },
              wordCount: 1600,
              isAccessibleForFree: true,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are the biggest safety risks for someone with dementia living at home?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The most common risks include wandering (especially at night or in unfamiliar emotional states), falls due to impaired spatial awareness, kitchen hazards like leaving the stove on, medication errors such as double-dosing or skipping doses, and bathroom injuries from wet surfaces or scalding water. These risks tend to increase as the condition progresses, but many can be reduced significantly with simple environmental changes.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I prevent my parent with dementia from wandering?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Start with door alarms or chime sensors that alert you when an exterior door opens. Camouflage exit doors with curtains or paint them to match the surrounding wall. Keep shoes and coats out of sight near exits. For nighttime wandering, motion-sensor lights in hallways can reduce disorientation without fully waking the person. A MedicAlert Safely Home bracelet registered with your local police service provides a safety net if your parent does leave the house.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should I lock the doors to keep my parent from leaving?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'This is a judgment call that depends on the stage of the condition, the layout of your home, and fire safety. Deadbolts that require a key from inside can prevent wandering but also prevent escape in an emergency. Many families find a middle path: door alarms plus a secured backyard or enclosed porch where the person can move freely without accessing the street.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When should I consider bringing in professional help for safety reasons?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Consider professional support when your parent has had a fall or near-miss that could have caused injury, when wandering incidents are becoming more frequent, when you are losing sleep due to nighttime safety concerns, or when the daily monitoring required is affecting your own health or work. A care assessment can help identify which hours of the day carry the most risk and whether a few hours of professional support could address the gap.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What home modifications help someone with dementia?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The most effective modifications include grab bars in bathrooms, non-slip mats on all hard floors, stove-top auto shut-off devices, thermostatic mixing valves to prevent scalding, improved lighting (especially at night), removal of area rugs and trip hazards, contrasting colours on stairs and doorframes to aid spatial perception, and simplified layouts that reduce confusion. Many of these are inexpensive and can be installed in a day.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does Ontario have programs that help with home safety modifications for dementia?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ontario Health atHome (formerly the LHIN/CCAC system) may provide occupational therapy assessments that include home safety recommendations. Some municipalities offer seniors home modification grants. The Alzheimer Society of your region can also direct you to local resources. Eligibility and availability vary, so starting the conversation with your parent\'s care coordinator or family physician is the best first step.',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.arcadiahomecare.ca/resources/' },
                { '@type': 'ListItem', position: 3, name: 'Dementia & Memory Care', item: 'https://www.arcadiahomecare.ca/resources/dementia-memory-care/' },
                { '@type': 'ListItem', position: 4, name: 'Dementia Home Safety', item: CANONICAL },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'HomeHealthCare',
              '@id': 'https://www.arcadiahomecare.ca/#organization',
              name: 'Arcadia Home Care',
              alternateName: 'Arcadia',
              url: 'https://www.arcadiahomecare.ca/',
              logo: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg',
              description:
                'Specialized home care for seniors and families across Toronto and the Greater Toronto Area, including dementia and Alzheimer\'s care, acquired brain injury support, rehabilitation, hospital discharge support, palliative care, and case management. Serving GTA families since 2005.',
              foundingDate: '2005',
              telephone: '+1-844-977-0050',
              email: 'info@arcadiahomecare.ca',
              medicalSpecialty: 'Geriatric',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '302 Bay Street',
                addressLocality: 'Toronto',
                addressRegion: 'ON',
                postalCode: 'M5H 0B6',
                addressCountry: 'CA',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 43.6494, longitude: -79.3795 },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              areaServed: [
                { '@type': 'City', name: 'Toronto' },
                { '@type': 'AdministrativeArea', name: 'York Region' },
                { '@type': 'AdministrativeArea', name: 'Peel Region' },
                { '@type': 'AdministrativeArea', name: 'Durham Region' },
                { '@type': 'AdministrativeArea', name: 'Halton Region' },
                { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '44',
                bestRating: '5',
                worstRating: '1',
              },
            },
          ]),
        }}
      />

      <main className="article-page">
        {/* Hero */}
        <section className="article-hero">
          <div className="article-hero-inner">
            <p className="article-eyebrow">For families navigating dementia care in Toronto</p>
            <h1>How to Keep Someone with Dementia Safe at Home</h1>
            <p className="article-summary">
              You have probably already started doing safety checks without calling them that.
              Scanning the kitchen before you leave. Checking whether the front door is locked.
              Quietly moving the pills to a spot your parent will not accidentally double-dose from.
            </p>
            <p>
              This guide is a practical, room-by-room approach to making the home itself safer, so the
              small adjustments you are already making can become a system rather than a set of worries.
            </p>
          </div>
        </section>

        {/* Body */}
        <div className="article-body">
          <article className="article-content">

            {/* Key Takeaways */}
            <div className="key-takeaways">
              <h2>Key Takeaways</h2>
              <ul>
                <li>The biggest risks are wandering, falls, kitchen hazards, medication errors, and bathroom injuries. Most can be reduced with inexpensive environmental changes.</li>
                <li>Wandering prevention starts with door alarms and visual camouflage, not locked rooms.</li>
                <li>Lighting, contrast, and clutter reduction do more than technology for daily fall prevention.</li>
                <li>Stove auto shut-off devices and thermostatic valves address the two most common kitchen and bathroom dangers.</li>
                <li>When home modifications are no longer enough to keep your parent safe, that is information, not failure. It may be time to bring in professional support for the highest-risk hours.</li>
              </ul>
            </div>

            <h2>Why home safety changes as dementia progresses</h2>

            <p>
              A home that was perfectly safe five years ago may not be today. Dementia does not just affect
              memory. It affects spatial awareness, judgment, reaction time, and the ability to recognize danger.
              A stovetop burner left on is not carelessness. A fall in the bathroom is not clumsiness. These are
              consequences of a brain that is losing its ability to process environment cues it once handled
              automatically.
            </p>

            <p>
              The goal is not to make the home feel like a hospital. It is to quietly reduce the number of
              decisions the environment asks your parent to make, and to catch the moments their judgment
              cannot.
            </p>

            <p className="pull">
              You are not overreacting. If something in the house worries you, it is probably worth changing.
            </p>

            <h2>Room by room: where the risks live</h2>

            <h3>Kitchen</h3>

            <p>
              The kitchen is where the most serious incidents happen. Stove fires, burns from boiling water,
              eating expired food, and attempting to cook in a state of confusion are all common.
            </p>

            <ul>
              <li>Install an automatic stove shut-off device. These turn off the burner after a set time or when no motion is detected. They cost between $100 and $400 and can prevent the worst-case scenario.</li>
              <li>Move cleaning products, sharp knives, and anything toxic to a locked cabinet or a high shelf your parent cannot reach easily.</li>
              <li>Reduce options. A cluttered counter with multiple appliances creates confusion. Keep only what your parent uses daily in plain sight.</li>
              <li>Check the fridge regularly. Expired food is not always obvious to someone whose sense of smell or judgment has declined.</li>
            </ul>

            <h3>Bathroom</h3>

            <p>
              Wet floors, hard surfaces, and scalding water are the three biggest bathroom hazards.
            </p>

            <ul>
              <li>Install grab bars beside the toilet and inside the shower or tub. These should be anchored into studs, not stuck on with suction cups.</li>
              <li>Set the hot water heater to 49&deg;C (120&deg;F) or install a thermostatic mixing valve. Burns are common when someone with dementia cannot gauge water temperature.</li>
              <li>Use non-slip mats both inside and outside the tub or shower stall.</li>
              <li>Remove the lock from the bathroom door. Getting locked inside a bathroom with no ability to figure out how to unlock it is a genuine emergency scenario.</li>
            </ul>

            <h3>Hallways and stairs</h3>

            <p>
              Falls often happen in transition zones: hallways, staircases, and the threshold between rooms.
            </p>

            <ul>
              <li>Remove area rugs and loose mats that can bunch underfoot.</li>
              <li>Add motion-sensor nightlights in every hallway and at the top and bottom of stairs. Darkness and dementia are a dangerous combination.</li>
              <li>Use contrasting colour tape or paint on stair edges. Spatial perception declines with dementia, and stairs can feel like a flat surface in dim light.</li>
              <li>If the bedroom is upstairs, consider moving it to the ground floor before a fall forces the decision.</li>
            </ul>

            <h3>Exterior doors and wandering</h3>

            <p>
              Wandering is one of the most frightening aspects of caring for someone with dementia at home.
              It is also one of the most preventable.
            </p>

            <ul>
              <li>Install door chime alarms on all exterior doors. A simple magnetic sensor costs under $30 and alerts you every time a door opens.</li>
              <li>Camouflage exit doors. Painting a door the same colour as the wall, or hanging a curtain over it, can reduce the impulse to leave.</li>
              <li>Keep coats, shoes, and keys away from door areas. Removing the cues that signal &quot;going outside&quot; can be surprisingly effective.</li>
              <li>Search for &quot;wandering alert registry&quot; or &quot;dementia ID bracelet program&quot; in your area. In Canada, MedicAlert Safely Home and Project Lifesaver are two established options. Your local Alzheimer Society chapter or police division can point you to the programs available in your community.</li>
            </ul>

            <p className="pull">
              Wandering is not defiance. It is a brain searching for something familiar in a world that is
              becoming less recognizable.
            </p>

            <h2>Medication safety</h2>

            <p>
              Missed doses, double doses, and taking the wrong pill at the wrong time are all common when
              someone with dementia manages their own medication. As the condition progresses, self-managed
              medication becomes one of the first things that needs supervision.
            </p>

            <ul>
              <li>Use a pre-filled weekly pill organizer, prepared by someone else.</li>
              <li>Set phone alarms or use a timed pill dispenser that releases the correct dose at the correct time.</li>
              <li>Store all medication in one locked location. Remove old prescriptions, duplicates, and over-the-counter medications that could interact badly with current drugs.</li>
              <li>If your parent cannot reliably take medication on their own, that is a clear signal that some level of daily support is needed.</li>
            </ul>

            <h2>When modifications are not enough</h2>

            <p>
              There is a point where the home environment alone cannot keep your parent safe. That point
              looks different for every family, but common signals include:
            </p>

            <ul>
              <li>A fall that caused injury, or multiple near-misses in a short period.</li>
              <li>Wandering outside the home, especially at night.</li>
              <li>Leaving the stove on despite an auto shut-off device being triggered repeatedly.</li>
              <li>You are losing sleep because you are listening for sounds in the night.</li>
              <li>Your own health or work is being affected by the level of monitoring required.</li>
            </ul>

            <p>
              Reaching that point is not a failure. It is information. It means the level of risk has exceeded
              what one person, or one set of modifications, can manage alone. Many families find that bringing
              in a few hours of professional support during the highest-risk parts of the day (early morning,
              evening, overnight) addresses the safety gap without requiring a move out of the home.
            </p>

            <p>
              If you are starting to wonder whether your parent needs more support than the house itself can
              provide, a <Link href="/how-care-starts/care-assessment/">care assessment</Link> can help you
              understand what level of support matches the current situation.
            </p>

            {/* Visual divider */}
            <div className="section-divider" aria-hidden="true">&middot; &middot; &middot;</div>

            <p>You are not expected to make the home perfectly safe overnight. Start with the highest-risk areas and work outward. If you are unsure where to begin, <Link href="/how-care-starts/">learn how care starts at Arcadia</Link>, or call us to talk through what you are seeing. No obligation, no pressure.</p>

            <p><Link href="/contact/">Book a free consultation</Link> &middot; <a href="tel:8449770050">(844) 977-0050</a></p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about dementia home safety</h2>

              <div className="faq-item">
                <div className="faq-q">What are the biggest safety risks for someone with dementia living at home?</div>
                <div className="faq-a">
                  The most common risks include wandering (especially at night or in unfamiliar emotional states),
                  falls due to impaired spatial awareness, kitchen hazards like leaving the stove on, medication
                  errors such as double-dosing or skipping doses, and bathroom injuries from wet surfaces or
                  scalding water. These risks tend to increase as the condition progresses, but many can be
                  reduced significantly with simple environmental changes.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">How do I prevent my parent with dementia from wandering?</div>
                <div className="faq-a">
                  Start with door alarms or chime sensors that alert you when an exterior door opens.
                  Camouflage exit doors with curtains or paint them to match the surrounding wall. Keep shoes
                  and coats out of sight near exits. For nighttime wandering, motion-sensor lights in hallways
                  can reduce disorientation without fully waking the person. A MedicAlert Safely Home bracelet
                  registered with your local police service provides a safety net if your parent does leave
                  the house.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Should I lock the doors to keep my parent from leaving?</div>
                <div className="faq-a">
                  This is a judgment call that depends on the stage of the condition, the layout of your home,
                  and fire safety. Deadbolts that require a key from inside can prevent wandering but also
                  prevent escape in an emergency. Many families find a middle path: door alarms plus a secured
                  backyard or enclosed porch where the person can move freely without accessing the street.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">When should I consider bringing in professional help for safety reasons?</div>
                <div className="faq-a">
                  Consider professional support when your parent has had a fall or near-miss that could have
                  caused injury, when wandering incidents are becoming more frequent, when you are losing sleep
                  due to nighttime safety concerns, or when the daily monitoring required is affecting your own
                  health or work. A care assessment can help identify which hours of the day carry the most risk
                  and whether a few hours of professional support could address the gap.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">What home modifications help someone with dementia?</div>
                <div className="faq-a">
                  The most effective modifications include grab bars in bathrooms, non-slip mats on all hard
                  floors, stove-top auto shut-off devices, thermostatic mixing valves to prevent scalding,
                  improved lighting (especially at night), removal of area rugs and trip hazards, contrasting
                  colours on stairs and doorframes to aid spatial perception, and simplified layouts that reduce
                  confusion. Many of these are inexpensive and can be installed in a day.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Does Ontario have programs that help with home safety modifications for dementia?</div>
                <div className="faq-a">
                  Ontario Health atHome (formerly the LHIN/CCAC system) may provide occupational therapy
                  assessments that include home safety recommendations. Some municipalities offer seniors home
                  modification grants. The Alzheimer Society of your region can also direct you to local
                  resources. Eligibility and availability vary, so starting the conversation with your
                  parent&apos;s care coordinator or family physician is the best first step.
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="related-links">
              <h3>You may also find helpful</h3>
              <Link href="/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/" className="related-link">
                Early Signs of Dementia in a Parent
              </Link>
              <Link href="/resources/dementia-memory-care/normal-aging-vs-dementia/" className="related-link">
                Normal Aging vs. Dementia: What&#39;s the Difference?
              </Link>
              <Link href="/resources/dementia-memory-care/introducing-home-care-dementia/" className="related-link">
                How to Introduce Home Care to a Parent with Dementia
              </Link>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-cta">
              <h3>Need help with safety at home?</h3>
              <p>Our team can assess risk and match your parent with a caregiver trained in dementia support.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Pages</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia Home Care Service</Link>
              <Link href="/how-care-starts/" className="sidebar-link">How Care Starts</Link>
              <Link href="/locations/toronto/" className="sidebar-link">Care in Toronto</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">More in This Series</div>
              <Link href="/resources/dementia-memory-care/" className="sidebar-link">All Dementia Articles</Link>
              <Link href="/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/" className="sidebar-link">Early Signs of Dementia</Link>
              <Link href="/resources/dementia-memory-care/introducing-home-care-dementia/" className="sidebar-link">Introducing Home Care</Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="article-bottom-cta">
          <h2>You Should Not Have to Monitor Everything Alone</h2>
          <p>
            If the safety concerns are keeping you up at night, a conversation with our team can help you
            understand what support looks like for your situation. No pressure. No obligation.
          </p>
          <a href="tel:8449770050" className="article-bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/our-services/dementia-alzheimers-home-care/" className="btn-outline">Our Dementia Care Service</Link>
          </div>
        </section>
      </main>
    </>
  )
}
