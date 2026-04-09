import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
const pageUrl =
    'https://www.arcadiahomecare.ca/resources/spring-home-safety-checklist-for-seniors/'
const featuredImage =
  'https://www.arcadiahomecare.ca/images/spring-home-safety-checklist-seniors-arcadia-home-care.png'

// Update these if your exact Arcadia routes differ.
const internalLinks = {
    contact: '/contact/',
    services: '/our-services/',
    companionCare: '/our-services/companion-care/',
    personalSupport: '/our-services/personal-support-daily-living/',
    hospitalDischarge: '/our-services/hospital-discharge-support/',
    assessmentGuide: '/resources/navigating-home-care/',
}

export const metadata: Metadata = {
    title: 'Spring Home Safety Checklist for Seniors | Arcadia Home Care',
    description:
      'Use this spring home safety checklist for seniors to spot risks at home, notice signs an aging parent may need support, and take the next step with confidence.',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'Spring Home Safety Checklist for Seniors',
      description:
        'A practical guide to spotting home safety risks, recognizing early changes, and knowing when to seek support for an aging parent.',
      url: pageUrl,
      siteName: 'Arcadia Home Care',
      type: 'article',
      images: [
        {
          url: featuredImage,
          width: 1400,
          height: 1000,
          alt: 'Adult daughter reviewing a home safety checklist with her aging parent in a bright living room',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Spring Home Safety Checklist for Seniors',
      description:
        'A practical guide to spotting home safety risks, recognizing early changes, and knowing when to seek support for an aging parent.',
      images: [featuredImage],
    },
  }
const signs = [
    {
        title: 'The Home Feels Less Safe',
        text: 'You may notice loose rugs, cluttered walkways, dim lighting, or stairs that suddenly seem more difficult. Sometimes the concern is not a fall that already happened. It is the way your parent now moves through the home more cautiously or with less confidence.',
    },
    {
        title: 'Meals Are Becoming Inconsistent',
        text: 'A parent who once cooked regularly may now skip meals, rely on snacks, or avoid meal preparation because it feels tiring or overwhelming. Weight loss, low energy, or an empty fridge can all be warning signs.',
    },
    {
        title: 'Medication Is Less Organized',
        text: 'Missed doses, duplicate doses, misplaced pill bottles, or uncertainty about what was taken can suggest that daily routines are becoming harder to manage safely.',
    },
    {
        title: 'Personal Care or Housekeeping Is Slipping',
        text: 'Sometimes families notice laundry piling up, a change in grooming, an untidy bathroom, or household chores no longer being done the way they once were. These changes may reflect fatigue, pain, mobility issues, memory concerns, or simple overwhelm.',
    },
    {
        title: 'Mobility Has Changed',
        text: 'Your parent may use furniture for support, hesitate before stairs, or take longer getting in and out of a chair. Even subtle changes in mobility can increase the risk of falls and make daily life more tiring.',
    },
    {
        title: 'Isolation Is Increasing',
        text: 'Home safety is not only about physical risks. When someone is alone more often, routines can weaken. Appetite, motivation, movement, and mood can all be affected.',
    },
    {
        title: 'You Leave Feeling Uneasy',
        text: 'This matters. Many adult children sense that something is shifting before they can clearly explain why. If you repeatedly leave your parent’s home with a knot in your stomach, it is worth paying attention to that feeling.',
    },
]

const checklistGroups = [
    {
        title: 'Entryways and Hallways',
        items: [
            'Are walkways clear and easy to move through?',
            'Are shoes, cords, bags, or small tables creating tripping hazards?',
            'Is there enough lighting near entrances and along nighttime walking paths?',
            'Are handrails secure?',
        ],
    },
    {
        title: 'Living Room',
        items: [
            'Are rugs stable, or do they slide?',
            'Is furniture spaced in a way that makes movement easy?',
            'Is there a sturdy chair with arms for easier sitting and standing?',
            'Are important items within easy reach?',
        ],
    },
    {
        title: 'Kitchen',
        items: [
            'Is food fresh and easy to access?',
            'Are expired items piling up?',
            'Is the stove, kettle, or microwave still being used safely?',
            'Can your parent prepare simple meals without exhaustion or confusion?',
        ],
    },
    {
        title: 'Bathroom',
        items: [
            'Is getting in and out of the shower or tub becoming harder?',
            'Would grab bars or non-slip supports help?',
            'Is the bathroom easy to reach at night?',
            'Are toiletries and towels within easy reach?',
        ],
    },
    {
        title: 'Bedroom',
        items: [
            'Is the path from bed to bathroom clear?',
            'Is there a lamp within easy reach?',
            'Is getting in and out of bed more difficult than before?',
            'Are glasses, water, medications, and a phone close by if needed?',
        ],
    },
    {
        title: 'Daily Routine and Organization',
        items: [
            'Is laundry being done regularly?',
            'Are appointments being missed?',
            'Is mail piling up?',
            'Are medications and calendars still being managed properly?',
            'Is your parent keeping up with meals, bathing, and other daily routines?',
        ],
    },
]

const homeCareTriggers = [
    'meals and hydration are becoming inconsistent',
    'medication routines are slipping',
    'mobility changes are increasing fall risk',
    'personal care is becoming harder',
    'isolation is affecting overall wellbeing',
    'family caregiving is becoming stressful or unsustainable',
]

const assessmentTriggers = [
    'the home no longer feels consistently safe',
    'your parent is struggling with meals, mobility, or medication',
    'there are signs of memory changes or confusion',
    'family caregiving is becoming difficult to sustain',
    'you know something has changed, but you are not sure what kind of help is needed',
]

function ChecklistGroup({
    title,
    items,
}: {
    title: string
    items: string[]
}) {
    return (
        <div className="checklist-group">
            <h3>{title}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        <span className="box">→</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function SpringHomeSafetyChecklistPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline:
                                'Spring Home Safety Checklist for Seniors: How to Reassess an Aging Parent’s Needs at Home',
                            description:
                                'Use this spring home safety checklist for seniors to spot risks at home, notice signs an aging parent may need support, and take the next step with confidence.',
                            url: pageUrl,
                            mainEntityOfPage: pageUrl,
                            publisher: {
                                '@type': 'Organization',
                                name: 'Arcadia Home Care',
                                url: 'https://www.arcadiahomecare.ca/',
                            },
                            image:featuredImage,
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: 'https://www.arcadiahomecare.ca/',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: 'Resources',
                                    item: 'https://www.arcadiahomecare.ca/resources/',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 3,
                                    name: 'Spring Home Safety Checklist for Seniors',
                                    item: pageUrl,
                                },
                            ],
                        },
                    ]),
                }}
            />

            <style>{`
        .article-page {
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #2D2D2D;
          background: #FFFFFF;
        }

        .hero {
          background: #1C2B3A;
          padding: 113px 24px 80px;
        }

        .hero-inner {
          max-width: 780px;
          margin: 0 auto;
        }

        .eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C8302A;
          margin-bottom: 14px;
        }

        .hero h1 {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: clamp(2.2rem, 4.5vw, 3.4rem);
            font-weight: 600;
            color: #fff;
            line-height: 1.15;
            margin-bottom: 20px;
        }

        .hero p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.86);
          margin: 0;
        }

        .body {
          max-width: 1150px;
          margin: 0 auto;
          padding: 72px 24px;
          display: grid;
          align-items: start;
          grid-template-columns: 1fr 300px !important;
          gap: 64px;
        }

        @media (max-width: 980px) {
          .body {
            grid-template-columns: 1fr;
          }
        }

        .article {
          min-width: 0;
        }

        .article p {
          font-size: 1rem;
          line-height: 1.88;
          color: #4B5563;
          margin: 0 0 18px;
        }

        .article a {
          color: #C8302A;
          font-weight: 600;
          text-decoration:none;
        }
        .nav-inner a:focus-visible{
                    outline: 0 !important;
        }
        .lead {
          font-size: 1.06rem;
          color: #374151;
        }

        .section {
          margin-top: 48px;
        }

        .section h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.7rem, 2.6vw, 2.3rem);
          font-weight: 600;
          line-height: 1.2;
          color: #1C2B3A;
          margin: 0 0 18px;
        }

        .section h3 {
          font-size: 1.08rem;
          font-weight: 700;
          color: #1C2B3A;
          margin: 0 0 10px;
        }

        .numbered-list {
          display: grid;
          gap: 20px;
          margin-top: 18px;
        }

        .numbered-item {
          border: 1px solid #E5E0D8;
          border-radius: 14px;
          background: #FAFAF8;
          padding: 22px 24px;
        }
        .numbered-item:hover {
          border: 1px solid #C8302A;
        }
        .numbered-item-head {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 8px;
        }

        .number {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 999px;
          background: #EEF2F7;
          color: #1C2B3A;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }

        .checklist-wrap {
          display: grid;
          gap: 18px;
          margin-top: 22px;
        }

        .checklist-group {
          border: 1px solid #E5E0D8;
          border-radius: 14px;
          background: #FAFAF8;
          padding: 22px 24px;
        }
        .checklist-group:hover {
          border: 1px solid #C8302A;
        }


        .checklist-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }

        .checklist-group li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #4B5563;
          line-height: 1.75;
        }

        .box {
          color: #C8302A;
          font-weight: 700;
          margin-top: 1px;
        }

        .simple-list {
          margin: 16px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .simple-list li {
          position: relative;
          padding-left: 24px;
          color: #4B5563;
          line-height: 1.8;
        }

        .simple-list li::before {
          content: '•';
          position: absolute;
          left: 8px;
          color: #C8302A;
          font-weight: 700;
        }

        .quote-block {
          margin-top: 18px;
          display: grid;
          gap: 10px;
        }

        .quote-line {
          background: #EEF2F7;
          border-left: 3px solid #C8302A;
          border-radius: 10px;
          padding: 14px 16px;
          color: #1C2B3A;
          font-size: 0.98rem;
          line-height: 1.7;
        }

        .note-card,
        .cta-inline {
          margin-top: 24px;
          background: #EEF2F7;
          border-radius: 12px;
          padding: 20px 22px;
          color: #4B5563;
          line-height: 1.8;
        }

        .cta-inline strong {
          color: #1C2B3A;
        }

        .sidebar {
          position: sticky;
          top: 96px;
        }

        .sidebar-card {
          background: #FAFAF8;
          border: 1px solid #E5E0D8;
          border-radius: 16px;
          padding: 26px;
          margin-bottom: 18px;
        }

        .sidebar-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C8302A;
          margin-bottom: 14px;
        }

        .sidebar-card p {
          font-size: 0.94rem;
          line-height: 1.75;
          color: #4B5563;
          margin: 0 0 14px;
        }

        .sidebar-links {
          display: grid;
        }

        .sidebar-link {
          display: flex;
          gap: 8px;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #F0EBE3;
          color: #1C2B3A;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }
        .hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(
            circle at 20% 20%,
            rgba(255, 255, 255, 0.08),
            transparent 45%
        );
        pointer-events: none;
        z-index: 0;
        }

        .sidebar-link:last-child {
          border-bottom: none;
        }

        .sidebar-link::before {
          content: '→';
          color: #C8302A;
          font-size: 13px;
        }

        .sidebar-link:hover {
          color: #C8302A;
        }

        .sidebar-cta {
          background: #1C2B3A;
          border-radius: 16px;
          padding: 28px 24px;
          text-align: center;
          margin-bottom:20px;
        }

        .sidebar-cta h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem;
          line-height: 1.25;
          color: #FFFFFF;
          margin: 0 0 8px;
        }

        .sidebar-cta p {
          color: rgba(255,255,255,0.76);
          line-height: 1.7;
          margin: 0 0 14px;
          font-size: 0.92rem;
        }

        .phone-link {
          display: block;
          font-size: 1.18rem;
          font-weight: 700;
          color: #C8302A;
          text-decoration: none;
          margin-bottom: 14px;
        }

        .btn-red-sm,
        .btn-red,
        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 700;
        }

        .btn-red-sm {
          width: 100%;
          padding: 11px 18px;
          font-size: 13px;
          background: #C8302A;
          color: #FFFFFF;
        }

        .bottom-cta {
          background: #1C2B3A;
          padding: 76px 24px;
          text-align: center;
        }

        .bottom-cta-inner {
          max-width: 760px;
          margin: 0 auto;
        }

        .bottom-cta h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.9rem, 3.6vw, 2.9rem);
          line-height: 1.16;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 14px;
        }

        .bottom-cta p {
          color: rgba(255,255,255,0.84);
          font-size: 1rem;
          line-height: 1.8;
          margin: 0 auto 26px;
          max-width: 560px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-red {
          background: #C8302A;
          color: #FFFFFF;
          padding: 14px 28px;
          font-size: 15px;
        }

        .btn-outline {
          border: 1.5px solid rgba(255,255,255,0.5);
          color: #FFFFFF;
          padding: 14px 28px;
          font-size: 15px;
          background: transparent;
        }
          .featured-image-wrap {
            margin: 0 0 28px;
            border-radius: 18px;
            overflow: hidden;
            background: #F7F3EE;
            border: 1px solid #E5E0D8;
            }

            .featured-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
            }
      `}</style>

            <main className="article-page">
                <section className="hero">
                    <div className="hero-inner">
                        <p className="eyebrow">RESOURCE CENTRE • NAVIGATING HOME CARE / FAMILY GUIDANCE</p>
                        <h1>
                            Spring Home Safety Checklist for Seniors: How to Reassess an Aging
                            Parent’s Needs at Home
                        </h1>
                        <p>
                            Spring is a natural time to notice what has changed at home. This
                            guide helps families spot safety risks, recognize signs an aging
                            parent may need more support, and decide when to take the next
                            step.
                        </p>
                    </div>
                </section>

                <div className="body">
                    <article className="article">
                    <div className="featured-image-wrap">
                    <Image
                        src="/images/spring-home-safety-checklist-seniors-arcadia-home-care.png"
                        alt="Adult daughter reviewing a home safety checklist with her aging parent in a bright living room"
                        width={1400}
                        height={1000}
                        className="featured-image"
                        priority
                    />
                    </div>
                        <p className="lead">Spring has a way of making things easier to see.</p>

                        <p>
                            The light changes. The house feels different. Small details stand
                            out more clearly. A narrow hallway feels more cluttered than it
                            used to. The stairs seem a little less steady. The unopened mail
                            on the counter has started to pile up. A parent who insists
                            everything is fine may still leave you with the feeling that
                            something has changed.
                        </p>

                        <p>
                            For many families, spring becomes the moment when a quiet concern
                            is harder to ignore.
                        </p>

                        <p>
                            Usually, it is not one dramatic event. It is a series of smaller
                            things. A near fall. Less food in the fridge. Laundry that is no
                            longer being kept up. Medications that seem less organized. A
                            parent who looks more tired, less steady, or simply less like
                            themselves at home.
                        </p>

                        <p>
                            If you have been wondering whether your mother or father may need
                            more support, you are not overreacting. Spring is a practical time
                            to reassess safety at home, notice early changes, and make
                            thoughtful decisions before a crisis forces the issue.
                        </p>

                        <section className="section">
                            <h2>Why Spring Is a Good Time to Reassess Safety at Home</h2>

                            <p>Winter often hides more than families realize.</p>

                            <p>
                                People go out less. Routines get smaller. Balance may decline.
                                Fatigue can build. Household tasks that once felt manageable can
                                quietly become harder. What starts as a bit of clutter or a
                                missed errand can gradually become a pattern.
                            </p>

                            <p>Spring gives families a natural opportunity to pause and take a fresh look.</p>

                            <p>As you open windows, tidy rooms, and move through the home with clearer eyes, it becomes easier to ask honest questions:</p>

                            <ul className="simple-list">
                                <li>Is the home still safe for my parent as things are now?</li>
                                <li>Have everyday routines become harder than they used to be?</li>
                                <li>Are there early signs my parent needs more help at home?</li>
                                <li>Are we relying on hope instead of a plan?</li>
                            </ul>

                            <p>
                                A spring home safety checklist for seniors is not about taking
                                independence away. It is about protecting it. The earlier
                                families notice changes, the more options they usually have.
                            </p>
                        </section>

                        <section className="section">
                            <h2>Signs an Aging Parent May Need More Help at Home</h2>

                            <p>
                                Many families wait for a major event before they act. In
                                reality, the earlier signs are often quieter.
                            </p>

                            <div className="numbered-list">
                                {signs.map((item, index) => (
                                    <div key={item.title} className="numbered-item">
                                        <div className="numbered-item-head">
                                            <span className="number">{index + 1}</span>
                                            <div>
                                                <h3>{item.title}</h3>
                                            </div>
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="section">
                            <h2>A Practical Spring Home Safety Checklist for Seniors</h2>

                            <p>
                                You do not need to turn this into a formal inspection. A calm
                                walkthrough of the home can tell you a great deal.
                            </p>

                            <div className="checklist-wrap">
                                {checklistGroups.map((group) => (
                                    <ChecklistGroup
                                        key={group.title}
                                        title={group.title}
                                        items={group.items}
                                    />
                                ))}
                            </div>

                            <p>
                                This kind of senior home safety checklist helps families
                                understand whether a few changes in the home may be enough, or
                                whether more support is needed.
                            </p>
                        </section>

                        <section className="section">
                            <h2>When Small Changes May Be Enough</h2>

                            <p>
                                Sometimes a few simple adjustments can make a meaningful
                                difference.
                            </p>

                            <p>
                                Better lighting. Fewer tripping hazards. A more supportive
                                bathroom setup. Easier meal routines. More regular family
                                check-ins. In some cases, these small changes improve confidence
                                and reduce immediate risk.
                            </p>

                            <p>
                                But sometimes the issue is not only the house itself. It is that
                                daily life has become harder for your parent to manage alone.
                            </p>

                            <p>
                                That is often the point when families begin asking whether home
                                care should be part of the conversation.
                            </p>
                        </section>

                        <section className="section">
                            <h2>When to Consider Home Care</h2>

                            <p>
                                Aging parent safety at home is not just about equipment or
                                layout. It is also about whether daily routines are still
                                manageable and whether your parent has enough support to live
                                safely and comfortably.
                            </p>

                            <p>Home care may help when:</p>

                            <ul className="simple-list">
                                {homeCareTriggers.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <p>
                                For some families,{' '}
                                <Link href={internalLinks.companionCare}>companion care</Link> is
                                the right place to start. For others,{' '}
                                <Link href={internalLinks.personalSupport}>
                                    personal support and daily living assistance
                                </Link>{' '}
                                may be the better fit. What matters most is choosing the level
                                of help that matches what is actually happening at home.
                            </p>
                        </section>

                        <section className="section">
                            <h2>How to Start the Conversation Without Escalating Fear</h2>

                            <p>This is often the hardest part.</p>

                            <p>
                                Most older adults do not respond well to a conversation that
                                feels like a judgment or an ambush. A calmer, more respectful
                                approach usually works better.
                            </p>

                            <p>You might say:</p>

                            <div className="quote-block">
                                <div className="quote-line">“I noticed the stairs seemed harder this week.”</div>
                                <div className="quote-line">
                                    “I want to make things easier, not take control away from you.”
                                </div>
                                <div className="quote-line">
                                    “Let’s look at what would help you feel safer and less tired.”
                                </div>
                                <div className="quote-line">
                                    “A little support now may help you stay at home longer.”
                                </div>
                            </div>

                            <p>
                                The goal is not to win an argument. The goal is to open a
                                conversation.
                            </p>

                            <p>
                                Families often find that practical, respectful support feels
                                easier to accept than help that sounds drastic. Sometimes one
                                consistent person in the home a few times a week can make daily
                                life feel much more manageable.
                            </p>
                        </section>

                        <section className="section">
                            <h2>
                                When to Book a{' '}
                                <Link href={internalLinks.assessmentGuide}>
                                    home care assessment
                                </Link>
                            </h2>

                            <p>
                                You do not need to wait for a fall, an emergency room visit, or
                                a major crisis before asking for guidance through a{' '}
                                <Link href={internalLinks.assessmentGuide}>
                                    home care assessment
                                </Link>
                                .
                            </p>

                            <p>It may be time to book a home care assessment if:</p>

                            <ul className="simple-list">
                                {assessmentTriggers.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <div className="note-card">
                                If your parent is coming home after a recent hospital stay, you
                                may also want to review{' '}
                                <Link href={internalLinks.hospitalDischarge}>
                                    hospital discharge support
                                </Link>{' '}
                                as part of the planning process.
                            </div>

                            <p>
                                Many families are not deciding between complete independence and
                                full-time care. They are trying to understand what kind of
                                support would make life safer, calmer, and more manageable right
                                now.
                            </p>
                        </section>

                        <section className="section">
                            <h2>A Thoughtful Next Step for Families</h2>

                            <p>
                                If you have started noticing small changes at home, you do not
                                need to figure everything out at once.
                            </p>

                            <p>
                                Start with what you can see. Walk through the home. Notice what
                                feels different. Pay attention to routines that are becoming
                                harder. Then take the next step before the situation becomes
                                urgent.
                            </p>

                            <p>
                                Arcadia Home Care supports families in Toronto and the GTA with
                                thoughtful, personalized care at home. Whether your family needs
                                companion care, personal support, or guidance on what comes
                                next, the first step is often simply a conversation.
                            </p>

                            <div className="cta-inline">
                                <strong>Talk through what you are seeing and what kind of support may help your family most.</strong>
                                <br />
                                <br />
                                <Link href={internalLinks.contact}>Book a Free Consultation</Link>
                            </div>
                        </section>
                    </article>

                    <aside className="sidebar">
                        <div className="sidebar-cta">
                            <h3>Noticing small changes at home?</h3>
                            <p>
                                A calm conversation now can make the next steps clearer and less
                                overwhelming for everyone involved.
                            </p>
                            <a href="tel:8449770050" className="phone-link">
                                (844) 977-0050
                            </a>
                            <Link href={internalLinks.contact} className="btn-red-sm">
                                Book a Free Consultation
                            </Link>
                        </div>

                        <div className="sidebar-card">
                            <div className="sidebar-title">Related Support</div>
                            <div className="sidebar-links">
                                <Link href={internalLinks.companionCare} className="sidebar-link">
                                    Companion Care
                                </Link>
                                <Link href={internalLinks.personalSupport} className="sidebar-link">
                                    Personal Support & Daily Living
                                </Link>
                                <Link href={internalLinks.hospitalDischarge} className="sidebar-link">
                                    Hospital Discharge Support
                                </Link>
                                <Link href={internalLinks.services} className="sidebar-link">
                                    Home Care Services
                                </Link>
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <div className="sidebar-title">Page Notes</div>
                            <p>
                                Featured image alt text: Adult daughter reviewing a home safety
                                checklist with her aging parent in a bright living room.
                            </p>
                            <p>
                                Suggested file name:
                                <br />
                                spring-home-safety-checklist-seniors-arcadia-home-care.jpg
                            </p>
                        </div>
                    </aside>
                </div>

                <section className="bottom-cta">
                    <div className="bottom-cta-inner">
                        <h2>Take the Next Step with More Clarity and Less Stress</h2>
                        <p>
                            If something has started to feel different at home, you do not
                            have to figure it out alone. Arcadia can help you understand what
                            kind of support makes sense right now.
                        </p>

                        <div className="cta-buttons">
                            <Link href={internalLinks.contact} className="btn-red">
                                Book a Free Consultation
                            </Link>
                            <Link href={internalLinks.services} className="btn-outline">
                                Learn More About Our Home Care Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}