import type { Metadata } from 'next'
import Link from 'next/link'

const CANONICAL =
  'https://www.arcadiahomecare.ca/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/'
const PUBLISHED = '2026-03-22T09:00:00-04:00'
const MODIFIED = '2026-06-27T12:00:00-04:00'

export const metadata: Metadata = {
  title: 'Early Signs of Dementia in a Parent | Arcadia Home Care',
  description:
    'How to recognize early signs of dementia in a parent: memory changes, executive function decline, personality shifts, and when to talk to a doctor. Written for Toronto families.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'The Changes You Are Starting to Notice in Your Parent',
    description:
      'How to recognize early signs of dementia in a parent: memory changes, executive function decline, personality shifts, and when to talk to a doctor. Written for Toronto families.',
    url: CANONICAL,
    type: 'article',
    locale: 'en_CA',
    siteName: 'Arcadia Home Care',
  },
}

export default function EarlySignsOfDementiaArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Early Signs of Dementia in a Parent',
              alternativeHeadline: 'The Changes You Are Starting to Notice in Your Parent',
              description:
                'How to recognize early signs of dementia in a parent: memory changes, executive function decline, personality shifts, and when to talk to a doctor. Written for Toronto families.',
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
                'early signs of dementia, dementia symptoms in parents, cognitive decline in aging parents, when to see a doctor for dementia, executive function decline, personality changes dementia, memory loss vs normal aging, dementia diagnosis Toronto',
              inLanguage: 'en-CA',
              audience: {
                '@type': 'Audience',
                audienceType:
                  'Adult children and family caregivers of aging parents in Toronto and the Greater Toronto Area',
              },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['.article-summary', '.key-takeaways', 'h1'],
              },
              wordCount: 1500,
              isAccessibleForFree: true,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are the earliest signs of dementia in a parent?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The most common early signs include repeating questions or stories within a short period, difficulty managing tasks that involve multiple steps (like cooking or paying bills), word-finding problems that go beyond the occasional blank, personality changes such as increased suspicion or withdrawal, and confusion about time or familiar places. These patterns tend to be persistent rather than occasional, and they represent a change from how your parent used to function.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How can I tell the difference between normal aging and early dementia?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Normal aging slows recall but does not erase it. You might forget a name but remember it later. Early dementia tends to erase the memory entirely, so the person does not recognize that something was forgotten. Executive function decline (trouble planning, organizing, or completing familiar tasks) is another key differentiator. Our full guide to normal aging vs. dementia covers this in detail.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Should I tell my parent I think something is wrong?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'This depends on the situation and your relationship. Some parents respond well to a direct, caring conversation. Others become defensive or anxious. A common approach is to frame it around a routine checkup rather than a concern: "The doctor suggested a memory screen as part of your annual checkup" removes the implication that something is wrong while still getting the assessment done.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What kind of doctor should I take my parent to?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Start with the family physician. They can run an initial cognitive screen and refer to a specialist if needed. Geriatricians and neurologists handle more detailed assessments. In Toronto, referral wait times vary, so starting the process early gives you more options.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can early-stage dementia be treated?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'There is no cure for most forms of dementia, but early detection opens options that are not available later. Certain medications can help manage symptoms in some cases. More importantly, early awareness allows families to plan legal, financial, and care arrangements while the person can still participate in those decisions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'My parent seems fine most of the time. Should I still be concerned?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Early dementia often shows up inconsistently. A parent may have clear, sharp days followed by noticeable lapses. This inconsistency is itself a pattern worth watching. If you are noticing moments that concern you, even if they are not constant, it is reasonable to mention them to a doctor. You do not need to wait until the pattern is unmistakable.',
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
                { '@type': 'ListItem', position: 4, name: 'Early Signs of Dementia in a Parent', item: CANONICAL },
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
                "Specialized home care for seniors and families across Toronto and the Greater Toronto Area, including dementia and Alzheimer's care, acquired brain injury support, rehabilitation, hospital discharge support, palliative care, and case management. Serving GTA families since 2005.",
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
                reviewCount: '41',
                bestRating: '5',
                worstRating: '1',
              },
            },
          ]),
        }}
      />

      <style>{`
        .article-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }
        .article-hero { background: #1C2B3A; padding: 96px 24px 72px; }
        .article-hero-inner { max-width: 760px; margin: 0 auto; }
        .article-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .article-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 600; color: #fff; line-height: 1.2; margin-bottom: 20px; }
        .article-hero .article-summary { font-size: 1.125rem; color: rgba(255,255,255,0.9); line-height: 1.8; font-style: italic; margin: 0 0 18px; }
        .article-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.85); line-height: 1.8; margin: 0; }

        .article-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 300px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .article-body { grid-template-columns: 1fr; } }

        .key-takeaways { background: #F7F3EE; border-left: 4px solid #C8302A; border-radius: 0 8px 8px 0; padding: 24px 28px; margin: 0 0 36px; }
        .key-takeaways h2 { font-family: 'DM Sans', system-ui, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin: 0 0 14px; }
        .article-content .key-takeaways ul { list-style: none; margin: 0; padding-left: 0; }
        .article-content .key-takeaways li { border-bottom: none; padding: 0 0 0 22px; position: relative; margin-bottom: 12px; font-size: 0.9625rem; color: #4B5563; line-height: 1.6; }
        .article-content .key-takeaways li:last-child { margin-bottom: 0; }
        .article-content .key-takeaways li::before { content: ''; position: absolute; left: 0; top: 9px; width: 7px; height: 7px; border-radius: 50%; background: #C8302A; }

        .article-content h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin: 48px 0 16px; line-height: 1.25; }
        .article-content h2:first-child { margin-top: 0; }
        .article-content p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .article-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }
        .article-content a:hover { text-decoration-color: #C8302A; }

        .article-content .pull { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.25rem; line-height: 1.5; font-style: italic; color: #1C2B3A; border-left: 4px solid #C8302A; padding: 4px 0 4px 20px; margin: 28px 0; }

        .section-divider { text-align: center; color: #C8302A; letter-spacing: 0.5em; font-size: 1rem; margin: 48px 0 32px; }

        .faq-section { margin-top: 56px; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        .related-links { margin-top: 48px; padding-top: 40px; border-top: 1px solid #E5E0D8; }
        .related-links h3 { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .related-link { display: flex; align-items: center; gap: 8px; color: #1C2B3A; text-decoration: none; font-size: 14px; font-weight: 600; padding: 10px 0; border-bottom: 1px solid #F0EBE3; }
        .related-link:last-child { border-bottom: none; }
        .related-link::before { content: '→'; color: #C8302A; }
        .related-link:hover { color: #C8302A; }

        .article-sidebar { position: sticky; top: 100px; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C2B3A; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #F0EBE3; transition: color 0.15s; }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #C8302A; font-size: 13px; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; }
        .sidebar-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.7); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-red-sm { background: #C8302A; color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; display: block; text-align: center; }

        .article-bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .article-bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 600; color: #fff; max-width: 640px; margin: 0 auto 14px; line-height: 1.2; }
        .article-bottom-cta p { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 480px; margin: 0 auto 32px; line-height: 1.75; }
        .article-bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; }
        .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
        .btn-outline { border: 1.5px solid rgba(255,255,255,0.5); background: transparent; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
      `}</style>

      <main className="article-page">
        {/* Hero */}
        <section className="article-hero">
          <div className="article-hero-inner">
            <p className="article-eyebrow">For families navigating dementia care in Toronto</p>
            <h1>Early Signs of Dementia in a Parent</h1>
            <p className="article-summary">
              You have been noticing things. Small things, at first. Your parent repeating the same question
              within a few minutes. A word that should come easily but does not. A bill left unpaid, not
              because of money, but because the task of paying it somehow slipped past. You are not sure yet
              whether this is normal aging or something else, and you are not sure you want to find out.
            </p>
            <p>
              This guide is for that moment. It covers the early signs that something beyond normal aging may
              be happening, what to watch for, and what to do when you are ready to take the next step.
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
                <li>Repeating questions, forgetting recent conversations, and losing track of familiar tasks can be early signs of dementia, not just normal aging.</li>
                <li>Executive function decline (difficulty planning, managing finances, following a recipe) often appears before memory loss becomes obvious.</li>
                <li>Personality and behavioural changes, including withdrawal, suspicion, or uncharacteristic irritability, are among the most overlooked early indicators.</li>
                <li>Normal aging causes slower recall. Dementia causes lost recall. The distinction matters and a doctor can help you tell the difference.</li>
                <li>You do not need a diagnosis to start paying closer attention. Noticing is the first step, not the last.</li>
              </ul>
            </div>

            <h2>The changes that are not just aging</h2>

            <p>Some cognitive changes are expected as a person gets older. Slower recall, the occasional misplaced word, walking into a room and forgetting why. Those are frustrating, but they are normal.</p>

            <p>What follows is different. These are the patterns that families describe to us most often when they look back and say, <em>&quot;I think it started about a year ago.&quot;</em></p>

            <p><strong>Memory changes that disrupt daily life.</strong> Not forgetting where you put the car keys. Forgetting what car keys are for. Not misremembering a detail from last week. Having no memory of the conversation at all. The difference between normal forgetfulness and early dementia is whether the forgotten thing comes back. In normal aging, it usually does. In early dementia, it does not, because the memory was never fully formed.</p>

            <p>Watch for: repeating the same question multiple times in one visit. Forgetting appointments that were confirmed that morning. Relying on notes, labels, or reminders for things that used to be automatic.</p>

            <p className="pull">The difference between normal forgetfulness and early dementia is whether the forgotten thing comes back.</p>

            <p><strong>Executive function decline.</strong> This is the one families miss most often, because it does not look like a &quot;memory problem.&quot; Executive function is the ability to plan, organize, sequence, and manage complexity. When it starts to erode, the signs show up in tasks that require multiple steps.</p>

            <p>A parent who always managed the household finances starts making errors or missing payments. A recipe that has been made dozens of times suddenly becomes confusing. Driving in familiar areas becomes hesitant or erratic, not because of vision or reflexes, but because the decision-making layer is less reliable.</p>

            <p>These changes often appear before the classic memory symptoms. Families sometimes attribute them to stress, distraction, or &quot;just getting older.&quot; They are worth paying attention to.</p>

            <p><strong>Language and communication changes.</strong> Difficulty finding the right word is common in normal aging. In early dementia, the pattern is more persistent. Your parent may stop mid-sentence, unable to retrieve a word they use regularly. They may substitute a wrong but related word (&quot;the thing you cook with&quot; instead of &quot;stove&quot;) or lose the thread of a conversation more easily than before.</p>

            <p>Some people compensate by talking less. A parent who was always talkative becoming noticeably quieter may not be choosing silence. They may be avoiding situations where language failures feel embarrassing.</p>

            <p><strong>Personality and behavioural shifts.</strong> These are often the hardest to name, because personality is not a test you can score. But when a parent&#39;s temperament changes, families feel it before they can explain it.</p>

            <p>A parent who was easygoing becomes suspicious or accusatory. A social person withdraws from activities they used to enjoy. Apathy settles in, not sadness exactly, but a loss of interest that is hard to explain.</p>

            <p className="pull">When a parent&#39;s temperament changes, families feel it before they can explain it.</p>

            <p>Irritability, anxiety, and mood swings that seem out of proportion to the situation can also be early indicators, particularly if the person has no history of mood difficulties.</p>

            <p><strong>Confusion about time, place, or familiar surroundings.</strong> Getting lost on the way home from a familiar shop. Losing track of what day or season it is. Arriving somewhere and not remembering how they got there or why they came. These spatial and temporal changes often prompt the first serious conversation, because they are hard to explain away.</p>

            <h2>When to talk to a doctor</h2>

            <p>You do not need to be certain before making an appointment. In fact, waiting for certainty is one of the most common reasons families delay.</p>

            <p>A family physician or geriatrician can run a cognitive screen. It is a short, structured conversation, not an invasive procedure. The screen does not diagnose dementia on its own, but it establishes a baseline and helps determine whether further assessment is warranted.</p>

            <p>If you are unsure whether what you are seeing is normal aging or something more, our <Link href="/resources/dementia-memory-care/normal-aging-vs-dementia/">guide to normal aging vs. dementia</Link> walks through the comparison in detail.</p>

            <p>What to bring to the appointment: specific examples of changes you have observed (not general impressions), a rough timeline of when you first noticed them, and any family history of dementia or cognitive decline. The more concrete your examples, the more useful the conversation will be.</p>

            <h2>What a diagnosis changes, and what it does not</h2>

            <p>If the assessment leads to a diagnosis, the word &quot;dementia&quot; can feel like the ground shifting. It is worth knowing what the diagnosis actually means in practical terms.</p>

            <p>It does not mean your parent needs full-time care tomorrow. Many people with early-stage dementia continue to live independently for months or years with the right support structure. What changes is the planning horizon. Decisions about legal authority, financial management, and future care preferences are easier to make now, while your parent can still participate in them.</p>

            <p className="pull">Noticing is not a failure. It is the beginning of being able to help.</p>

            <p>It also means you can start thinking about what kind of support might help, not in a crisis, but from a position of clarity. If and when the time comes to <Link href="/resources/dementia-memory-care/introducing-home-care-dementia/">introduce home care to a parent with dementia</Link>, having noticed early gives you more options and more time.</p>

            <p>For families in Toronto and the GTA, Arcadia&#39;s <Link href="/our-services/dementia-alzheimers-home-care/">dementia and Alzheimer&#39;s home care</Link> is designed for exactly this trajectory: support that starts small and adjusts as needs change, guided by people who understand how dementia actually progresses. You can also read more about <Link href="/conditions/dementia-care-at-home/">what dementia care at home looks like</Link> on our condition page.</p>

            {/* Visual divider before the CTA close */}
            <div className="section-divider" aria-hidden="true">· · ·</div>

            <p>You are not expected to diagnose your parent. You are not expected to have all the answers right now. But if you have been noticing changes and wondering whether they mean something, that instinct is worth following.</p>

            <p><Link href="/how-care-starts/">Learn how care starts at Arcadia</Link>, or call us to talk through what you are seeing. No obligation, no pressure. Just a conversation with someone who has helped hundreds of Toronto families navigate this exact moment.</p>

            <p><Link href="/contact/">Book a free consultation</Link> · <a href="tel:8449770050">(844) 977-0050</a></p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about early signs of dementia</h2>

              <div className="faq-item">
                <div className="faq-q">What are the earliest signs of dementia in a parent?</div>
                <div className="faq-a">
                  The most common early signs include repeating questions or stories within a short period,
                  difficulty managing tasks that involve multiple steps (like cooking or paying bills),
                  word-finding problems that go beyond the occasional blank, personality changes such as
                  increased suspicion or withdrawal, and confusion about time or familiar places. These
                  patterns tend to be persistent rather than occasional, and they represent a change from how
                  your parent used to function.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">How can I tell the difference between normal aging and early dementia?</div>
                <div className="faq-a">
                  Normal aging slows recall but does not erase it. You might forget a name but remember it
                  later. Early dementia tends to erase the memory entirely, so the person does not recognize
                  that something was forgotten. Executive function decline (trouble planning, organizing, or
                  completing familiar tasks) is another key differentiator. Our full guide to normal aging vs.
                  dementia covers this in detail.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Should I tell my parent I think something is wrong?</div>
                <div className="faq-a">
                  This depends on the situation and your relationship. Some parents respond well to a direct,
                  caring conversation. Others become defensive or anxious. A common approach is to frame it
                  around a routine checkup rather than a concern: &quot;The doctor suggested a memory screen as
                  part of your annual checkup&quot; removes the implication that something is wrong while still
                  getting the assessment done.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">What kind of doctor should I take my parent to?</div>
                <div className="faq-a">
                  Start with the family physician. They can run an initial cognitive screen and refer to a
                  specialist if needed. Geriatricians and neurologists handle more detailed assessments. In
                  Toronto, referral wait times vary, so starting the process early gives you more options.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Can early-stage dementia be treated?</div>
                <div className="faq-a">
                  There is no cure for most forms of dementia, but early detection opens options that are not
                  available later. Certain medications can help manage symptoms in some cases. More
                  importantly, early awareness allows families to plan legal, financial, and care arrangements
                  while the person can still participate in those decisions.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-q">My parent seems fine most of the time. Should I still be concerned?</div>
                <div className="faq-a">
                  Early dementia often shows up inconsistently. A parent may have clear, sharp days followed by
                  noticeable lapses. This inconsistency is itself a pattern worth watching. If you are noticing
                  moments that concern you, even if they are not constant, it is reasonable to mention them to a
                  doctor. You do not need to wait until the pattern is unmistakable.
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="related-links">
              <h3>You may also find helpful</h3>
              <Link href="/resources/dementia-memory-care/normal-aging-vs-dementia/" className="related-link">
                Normal Aging vs. Dementia: What&#39;s the Difference?
              </Link>
              <Link href="/resources/dementia-memory-care/introducing-home-care-dementia/" className="related-link">
                How to Introduce Home Care to a Parent with Dementia
              </Link>
              <Link href="/resources/family-caregiver-support/talking-to-parent-about-care/" className="related-link">
                The Conversation You Keep Putting Off
              </Link>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-cta">
              <h3>Talk through what you are noticing</h3>
              <p>Arcadia has helped hundreds of Toronto families make sense of early changes in a parent.</p>
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
              <Link href="/resources/dementia-memory-care/normal-aging-vs-dementia/" className="sidebar-link">Normal Aging vs. Dementia</Link>
              <Link href="/resources/dementia-memory-care/introducing-home-care-dementia/" className="sidebar-link">Introducing Home Care</Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="article-bottom-cta">
          <h2>Wondering Whether It Is Time to Pay Closer Attention?</h2>
          <p>
            Arcadia helps Toronto families understand what they are seeing and what comes next. Call us or
            book a free consultation, and we will help you think it through.
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
