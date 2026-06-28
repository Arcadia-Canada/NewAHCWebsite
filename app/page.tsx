import Image from 'next/image';
import HeroTemplate from '@/components/hero-template';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTAForm from '@/components/home/CTAForm';

const colors = {
  primary: '#1C2B3A',
  accent: '#C8302A',
  warm: '#F7F3EE',
  white: '#FFFFFF',
  text: '#2D2D2D',
  textLight: '#6B7280',
  border: '#E5E0D8',
  surface: '#FAFAF8',
};

const services = [
  { icon: '\uD83E\uDDE0', title: 'Dementia & Alzheimer\'s Home Care', desc: 'Safe, familiar support for people living with cognitive decline, in their own home.', href: '/our-services/dementia-alzheimers-home-care/' },
  { icon: '\uD83E\uDE7B', title: 'Acquired Brain Injury Care', desc: 'Coordinated with your clinical team to support recovery and rebuilding independence.', href: '/our-services/acquired-brain-injury-home-care/' },
  { icon: '\uD83D\uDCAA', title: 'Rehabilitation Support', desc: 'Goal-oriented home care that works alongside your OT, PT, and specialist team.', href: '/our-services/rehabilitation-support/' },
  { icon: '\uD83C\uDFE5', title: 'Hospital Discharge Support', desc: 'A safe, supported transition from hospital to home, coordinated from day one.', href: '/our-services/hospital-discharge-support/' },
  { icon: '\uD83D\uDC99', title: 'Palliative Home Care', desc: 'Comfort-focused care that preserves dignity and supports the whole family.', href: '/our-services/palliative-home-care/' },
  { icon: '\uD83D\uDCCB', title: 'Case Management', desc: 'Coordinated oversight and planning so care stays consistent, well-organized, and responsive as needs change.', href: '/our-services/case-management/' },
];

const conditions: { label: string; slug: string }[] = [
  { label: 'Dementia', slug: 'dementia-care-at-home' },
  { label: 'Stroke Recovery', slug: 'stroke-recovery' },
  { label: 'Parkinson\'s', slug: 'parkinsons-support' },
  { label: 'Brain Injury', slug: 'acquired-brain-injury-support' },
  { label: 'Palliative Care', slug: 'palliative-serious-illness' },
  { label: 'Post-Hospital Recovery', slug: 'post-hospital-recovery' },
  { label: 'Frailty & Falls', slug: 'frailty-fall-prevention' },
  { label: 'Caregiver Burnout', slug: 'caregiver-burnout-support' },
];


const locations = [
  { name: 'Toronto', sub: 'North York \u00B7 Scarborough \u00B7 Etobicoke', href: '/locations/toronto/' },
  { name: 'York Region', sub: 'Markham \u00B7 Richmond Hill \u00B7 Vaughan', href: '/locations/york-region/' },
  { name: 'Peel Region', sub: 'Mississauga \u00B7 Brampton', href: '/locations/peel-region/' },
  { name: 'Durham Region', sub: 'Oshawa \u00B7 Ajax \u00B7 Whitby', href: '/locations/durham-region/' },
  { name: 'Halton Region', sub: 'Oakville \u00B7 Burlington \u00B7 Milton', href: '/locations/halton-region/' },
];

const TRUST_BAR_ITEMS = [
  { icon: '\uD83C\uDFE0', text: 'GTA Families Since 2005' },
  { icon: '\uD83E\uDE7A', text: 'Clinical Care at Home' },
  { icon: '\uD83D\uDCDE', text: 'Available 7 Days a Week' },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F4B400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function TrustBar() {
  return (
    <div style={{ background: colors.warm, borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        {TRUST_BAR_ITEMS.map(item => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: colors.primary }}>
            <span>{item.icon}</span><span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <HeroTemplate
        eyebrow={`Specialized Home Care ${String.fromCharCode(0xB7)} Toronto & GTA`}
        title={<>Care That Understands<br /><span style={{ color: '#E8867F' }}>What Your Family<br />Is Going Through</span></>}
        body={
            <p>Arcadia brings clinical expertise and genuine compassion to families navigating dementia, brain injury, recovery, and complex aging at home. Serving the GTA since 2005.</p>
        }
        actions={
          <div className="hp-hero-actions">
            <div className="hp-hero-actions-buttons">
              <a href="tel:8449770050" className="hp-hero-call" style={{ background: colors.accent, color: '#fff', padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s' }}>
                {String.fromCodePoint(0x1F4DE)} Call (844) 977-0050
              </a>
              <a href="/contact/" className="hp-hero-consult" style={{ background: 'transparent', color: '#fff', padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1.5px solid rgba(255,255,255,0.3)', transition: 'background 0.2s, border-color 0.2s' }}>
                Book a Free Consultation
              </a>
            </div>
            <a href="/resources/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginTop: 8, transition: 'color 0.2s' }}>
              Not sure where to start? Read our guides for families &rarr;
            </a>
            <a href="https://www.google.com/search?q=arcadia+home+care+toronto" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '8px 16px', textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s' }}>
              <StarRating />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>4.9 {String.fromCharCode(0xB7)} 41 Google Reviews</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </a>
          </div>
        }
        imageSrc="/images/home-hero-caregiver-senior.png"
        imageAlt="Arcadia caregiver supporting an older adult at home"
      />
      <TrustBar />
    </>
  );
}

function DifferenceSection() {
  const pillars = [
    { icon: '\uD83E\uDE7A', title: 'Clinical Insight', body: 'We understand dementia, acquired brain injury, rehabilitation, and complex aging. Our care is guided by clinical knowledge, not just caregiver availability.' },
    { icon: '\uD83E\uDDED', title: 'Guided Care', body: 'From first call to first week of care, we walk with your family every step. No confusion. No handoffs. Just clear, consistent support.' },
    { icon: '\uD83E\uDD1D', title: 'Human Dignity', body: 'We match caregivers to the person: their routines, their preferences, their personality. Because dignity is in every detail of daily life.' },
  ];
  return (
    <section style={{ background: colors.surface, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>Why Arcadia Is Different</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>More Than a Caregiver Agency</h2>
          <p style={{ fontSize: 17, color: colors.textLight, maxWidth: 580, margin: '0 auto', lineHeight: 1.65 }}>Most home care agencies focus on staffing. Arcadia approaches care the way a clinical team would, while delivering the warmth families need at home.</p>
        </div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }} className="pillar-grid">
          {pillars.map((p, i) => (
            <div key={i} className="hp-pillar-card" style={{ flex: '1 1 280px', background: colors.white, borderRadius: 14, padding: '32px', border: `1px solid ${colors.border}`, cursor: 'default' }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 600, color: colors.primary, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section style={{ background: colors.white, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>What We Offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Specialized Care for Complex Situations</h2>
          <p style={{ fontSize: 17, color: colors.textLight, maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>Every service is designed around clinical understanding and human connection, not just availability.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="services-grid">
          {services.map((s, i) => (
            <a key={i} href={s.href} style={{ textDecoration: 'none' }}>
              <div className="hp-service-card" style={{ background: colors.surface, borderRadius: 14, padding: '32px 28px', border: `1px solid ${colors.border}`, height: '100%', cursor: 'pointer' }}>
                <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{s.icon}</span>
                <h3 className="hp-service-title" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 19, fontWeight: 600, color: colors.primary, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                <p className="hp-service-desc" style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.65, marginBottom: 16 }}>{s.desc}</p>
                <span className="hp-service-link" style={{ fontSize: 13, fontWeight: 600, color: colors.accent }}>Learn More &rarr;</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/our-services/" style={{ fontSize: 15, fontWeight: 600, color: colors.primary, textDecoration: 'none', borderBottom: `2px solid ${colors.accent}`, paddingBottom: 2 }}>View All 12 Services &rarr;</a>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'One Conversation', body: 'Call or book online. We listen first. No pressure, no complex forms. Just a real conversation about your family\'s situation.', img: '/images/image 41-435w.webp' },
    { num: '02', title: 'A Personalized Plan', body: 'We assess the situation and carefully match a caregiver chosen for both their clinical skills and their personality.', img: '/images/image 77-435w.webp' },
    { num: '03', title: 'Care Begins', body: 'We coordinate everything, including publicly funded options and insurance, so your family can exhale and focus on what matters.', img: '/images/pexels-anna-shvets-5257342-scaled-640w.webp' },
  ];
  return (
    <section style={{ background: colors.warm, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Starting Care Is Simpler Than You Think</h2>
          <p style={{ fontSize: 17, color: colors.textLight, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>We&apos;ve guided hundreds of families through this. Here&apos;s how care starts with Arcadia.</p>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} style={{ flex: '1 1 280px', textAlign: 'center' }}>
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <Image src={s.img} alt={s.title} width={435} height={220} loading="lazy" style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, display: 'block' }} />
                <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: colors.accent, color: '#fff', width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, boxShadow: '0 4px 12px rgba(200,48,42,0.4)' }}>{s.num}</div>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 21, fontWeight: 600, color: colors.primary, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: colors.textLight, lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="tel:8449770050" className="hp-process-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: colors.primary, color: '#fff', padding: '18px 40px', borderRadius: 8, textDecoration: 'none', fontSize: 17, fontWeight: 700, transition: 'background 0.2s' }}>
            <span>{String.fromCodePoint(0x1F4DE)}</span> Start the Conversation {String.fromCharCode(0xB7)} (844) 977-0050
          </a>
          <p style={{ marginTop: 12, fontSize: 13, color: colors.textLight }}>No obligation. Just a real conversation about what your family needs.</p>
        </div>
      </div>
    </section>
  );
}

function ConditionsSection() {
  return (
    <section style={{ background: colors.primary, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,48,42,0.9)', marginBottom: 12 }}>Conditions We Support</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 600, color: '#fff', marginBottom: 16 }}>We Understand Complex Conditions</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.65 }}>Every care plan starts with understanding the person&apos;s specific condition, not just their tasks.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }} className="conditions-grid">
          {conditions.map(c => (
            <a key={c.slug} href={`/conditions/${c.slug}/`} style={{ textDecoration: 'none' }}>
              <div className="hp-condition-pill" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '10px 22px', color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
                {c.label}
              </div>
            </a>
          ))}
        </div>
        <a href="/conditions/" style={{ display: 'inline-block', marginTop: 36, fontSize: 14, fontWeight: 600, color: '#E8867F', textDecoration: 'none', borderBottom: '1px solid rgba(200,48,42,0.4)', paddingBottom: 2 }}>View All Conditions &rarr;</a>
      </div>
    </section>
  );
}

function ReferralSection() {
  return (
    <section style={{ background: colors.surface, padding: '80px 24px', borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,48,42,0.08)', border: '1px solid rgba(200,48,42,0.2)', borderRadius: 100, padding: '5px 14px', marginBottom: 16 }}>
            <span style={{ color: colors.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>For Referring Professionals</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 600, color: colors.primary, marginBottom: 16, lineHeight: 1.25 }}>A Partner You Can Refer With Confidence</h2>
          <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7, marginBottom: 28 }}>Arcadia works closely with hospital discharge planners, social workers, OTs, and specialist physicians across the GTA. We accept complex referrals and provide clear, timely communication back to your team.</p>
          <a href="/referral-form/" className="hp-referral-btn" style={{ display: 'inline-block', background: colors.primary, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>
            Submit a Referral &rarr;
          </a>
        </div>
        <div style={{ flex: '1 1 280px', background: colors.white, borderRadius: 12, padding: '32px', border: `1px solid ${colors.border}` }}>
          <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, fontWeight: 600, color: colors.primary, marginBottom: 20 }}>We work with:</h4>
          {['Hospital discharge planners', 'Social workers & case managers', 'Occupational therapists', 'Geriatricians & neurologists', 'Long-term care transition teams', 'Retirement home coordinators'].map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ color: colors.accent, fontSize: 16, flexShrink: 0 }}>&#10003;</span>
              <span style={{ fontSize: 14, color: colors.text }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section style={{ background: colors.white, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>Where We Serve</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Serving Families Across the GTA</h2>
          <p style={{ fontSize: 16, color: colors.textLight, maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>From downtown Toronto to Halton Region: local care, regional expertise.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="locations-grid">
          {locations.map((l, i) => (
            <a key={i} href={l.href} style={{ textDecoration: 'none' }}>
              <div className="hp-location-tile" style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 12, padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{String.fromCodePoint(0x1F4CD)}</div>
                <div className="hp-loc-title" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 17, color: colors.primary, marginBottom: 6 }}>{l.name}</div>
                <div className="hp-loc-sub" style={{ fontSize: 12, color: colors.textLight, lineHeight: 1.5 }}>{l.sub}</div>
              </div>
            </a>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 28, fontSize: 13, color: colors.textLight }}>
          Don&apos;t see your area? <a href="tel:8449770050" style={{ color: colors.accent, fontWeight: 600, textDecoration: 'none' }}>Call us</a>. We may still serve you.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: colors.primary, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }} className="cta-grid">
          <div style={{ flex: '1 1 340px' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,48,42,0.9)', marginBottom: 12 }}>Get In Touch</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 600, color: '#fff', marginBottom: 20, lineHeight: 1.2 }}>It Starts With One Conversation</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>There&apos;s no obligation. Just a real conversation about your family&apos;s situation and how we can help. Clinical expertise and genuine care, from the first call.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <a href="tel:8449770050" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                <div style={{ width: 48, height: 48, background: colors.accent, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{String.fromCodePoint(0x1F4DE)}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Call Us</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>(844) 977-0050</div>
                </div>
              </a>
              <a href="mailto:info@arcadiahomecare.ca" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{String.fromCodePoint(0x2709, 0xFE0F)}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>info@arcadiahomecare.ca</div>
                </div>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{String.fromCodePoint(0x1F550)}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Hours</div>
                  <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>Mon&ndash;Fri, 9:00AM &ndash; 5:00PM</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 380px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <CTAForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Arcadia Home Care',
        url: 'https://www.arcadiahomecare.ca/',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.arcadiahomecare.ca/#business',
        name: 'Arcadia Home Care',
        url: 'https://www.arcadiahomecare.ca/',
        telephone: '+1-844-977-0050',
        email: 'info@arcadiahomecare.ca',
        image: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg',
        description:
          "At Arcadia Home Care, we provide compassionate, clinically guided in-home care to support families through aging, illness, and recovery. Our services include dementia and Alzheimer's care, acquired brain injury support, rehabilitation assistance, hospital discharge coordination, and palliative care, along with personal support for daily living, companion care, respite care, overnight and 24-hour care, case management, light housekeeping, and downsizing and transition support. Each care plan is tailored to individual needs, with caregivers thoughtfully matched based on skill and personality, ensuring comfort, dignity, and consistent support at every step.",
        address: {
          '@type': 'PostalAddress',
          streetAddress: '302 Bay Street',
          addressLocality: 'Toronto',
          addressRegion: 'Ontario',
          postalCode: 'M5H 0B6',
          addressCountry: 'CA',
        },
        areaServed: [
          { '@type': 'City', name: 'Toronto' },
          { '@type': 'City', name: 'North York' },
          { '@type': 'City', name: 'Scarborough' },
          { '@type': 'City', name: 'Etobicoke' },
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
        sameAs: [
          'https://facebook.com/arcadiahomecare.ca',
          'https://linkedin.com/company/arcadia-home-care',
          'https://instagram.com/arcadia_homecare',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '41',
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Janet Cuddy' },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            reviewBody:
              'I often needed to cover a shift with very short notice, or on the weekend, and I was always met with a helpful, positive response. They were a lifesaver. The PSWs assigned to my mother were marvellous: skilled, kind and dependable.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Jennifer Kim' },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            reviewBody:
              "Their communication is outstanding. Whenever I send an inquiry, they respond incredibly quickly. I've honestly never worked with a business that gets back to clients this fast. Highly recommended!",
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Alice Gomes' },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            reviewBody:
              'Through a 5+ year battle with dementia, the one thing that remained constant was the care and support provided by the team from Arcadia. Expectations were consistently exceeded. I would, without hesitation, recommend Arcadia.',
          },
        ],
        knowsAbout: [
          'Dementia home care',
          'Alzheimer\u2019s home care',
          'Acquired brain injury care',
          'Rehabilitation support',
          'Hospital discharge support',
          'Palliative home care',
          'Case management',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Home Care Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: "Dementia & Alzheimer's Home Care",
                url: 'https://www.arcadiahomecare.ca/our-services/dementia-alzheimers-home-care/',
                description:
                  'Safe, familiar support for people living with cognitive decline in their own home.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Acquired Brain Injury Care',
                url: 'https://www.arcadiahomecare.ca/our-services/acquired-brain-injury-home-care/',
                description:
                  'Coordinated home care to support recovery and rebuilding independence.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Rehabilitation Support',
                url: 'https://www.arcadiahomecare.ca/our-services/rehabilitation-support/',
                description:
                  'Goal-oriented home care that works alongside OT, PT, and specialist teams.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hospital Discharge Support',
                url: 'https://www.arcadiahomecare.ca/our-services/hospital-discharge-support/',
                description:
                  'A safe, supported transition from hospital to home coordinated from day one.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Palliative Home Care',
                url: 'https://www.arcadiahomecare.ca/our-services/palliative-home-care/',
                description:
                  'Comfort-focused care that preserves dignity and supports the whole family.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Case Management',
                url: 'https://www.arcadiahomecare.ca/our-services/case-management/',
                description:
                  "Coordinated oversight and planning so care stays consistent, well-organized, and responsive as needs change.",
              },
            },
          ],
        },
      },
    ]),
  }}
/>
    <main>
      <Hero/>
      <DifferenceSection />
      <ServicesSection />
      <ProcessSection />
      <ConditionsSection />
      <TestimonialsCarousel />
      <ReferralSection />
      <LocationsSection />
      <CTASection />
    </main>
    </>
  );
}
