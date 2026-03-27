import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Arcadia Home Care',
  description: 'How Arcadia Home Care collects, uses, and protects your personal information in compliance with PHIPA and PIPEDA.',
  alternates: {
    canonical: 'https://arcadiahomecare.ca/privacy-policy/',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <style>{`
        .privacy-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }
        .privacy-hero { background: #1C2B3A; padding: 96px 24px 72px; }
        .privacy-hero-inner { max-width: 760px; margin: 0 auto; }
        .privacy-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .privacy-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; line-height: 1.2; margin-bottom: 16px; }
        .privacy-hero p { font-size: 0.9375rem; color: rgba(255,255,255,0.75); line-height: 1.7; }
        .privacy-body { max-width: 800px; margin: 0 auto; padding: 72px 24px 96px; }
        .privacy-body h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.4rem, 2.5vw, 1.8rem); font-weight: 600; color: #1C2B3A; margin: 48px 0 14px; line-height: 1.25; }
        .privacy-body h2:first-child { margin-top: 0; }
        .privacy-body p { font-size: 0.9625rem; color: #4B5563; line-height: 1.85; margin-bottom: 16px; }
        .privacy-body ul { margin: 0 0 20px 0; padding: 0; list-style: none; }
        .privacy-body ul li { font-size: 0.9375rem; color: #4B5563; line-height: 1.75; padding: 8px 0 8px 22px; position: relative; border-bottom: 1px solid #F0EBE3; }
        .privacy-body ul li:last-child { border-bottom: none; }
        .privacy-body ul li::before { content: ''; position: absolute; left: 0; top: 17px; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; }
        .privacy-body strong { color: #1C2B3A; }
        .privacy-body a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }
        .privacy-updated { font-size: 13px; color: #9B8E7E; margin-bottom: 40px; padding-bottom: 32px; border-bottom: 1px solid #E5E0D8; }
        .privacy-contact-box { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 12px; padding: 28px 32px; margin-top: 48px; }
        .privacy-contact-box h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #1C2B3A; margin-bottom: 12px; }
        .privacy-contact-box p { font-size: 0.9375rem; color: #4B5563; line-height: 1.75; margin-bottom: 8px; }
        .privacy-contact-box a { color: #C8302A; font-weight: 600; text-decoration: none; }
      `}</style>

      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-hero-inner">
            <p className="privacy-eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p>
              Arcadia Home Care is committed to protecting the privacy and confidentiality of all
              client, family, and employee information. This policy explains how we collect, use,
              store, and protect personal information in compliance with applicable Canadian law.
            </p>
          </div>
        </section>

        <div className="privacy-body">
          <p className="privacy-updated">Last updated: March 2026</p>

          <h2>Our Commitment to Privacy</h2>
          <p>
            At Arcadia Home Care, personal information — including personal health information — is
            collected, stored, and used only for the purpose of delivering safe, effective, and
            personalized care. We comply with Ontario's <strong>Personal Health Information
            Protection Act (PHIPA)</strong>, Canada's <strong>Personal Information Protection
            and Electronic Documents Act (PIPEDA)</strong>, and all other applicable privacy laws.
          </p>
          <p>
            All staff, caregivers, and service providers are bound by confidentiality agreements
            and are trained to handle personal information with the highest degree of care and
            discretion.
          </p>
          <p>
            Arcadia Home Care collects and manages personal health information in accordance with
            the Personal Health Information Protection Act (PHIPA). Depending on the circumstances
            of care, Arcadia may act either as a health information custodian or as an agent of
            another custodian, such as a hospital, physician, or Ontario Health atHome coordinator.
            In all cases, personal health information is handled in accordance with PHIPA and
            applicable professional obligations.
          </p>

          <h2>What Information We Collect</h2>
          <p>
            We collect personal information only when it is necessary to provide care or to respond
            to an inquiry. This may include:
          </p>
          <ul>
            <li><strong>Client information:</strong> name, address, contact details, date of birth, health history, diagnoses, medications, care preferences, and emergency contacts</li>
            <li><strong>Family and substitute decision-maker information:</strong> names and contact information for people involved in a client's care</li>
            <li><strong>Referral information:</strong> clinical summaries or discharge information provided by healthcare professionals</li>
            <li><strong>Website inquiry information:</strong> name, phone number, email address, and any details you provide through our contact or referral forms</li>
            <li><strong>Employment information:</strong> information collected from caregivers and staff during hiring and employment</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>Personal information is used only for the following purposes:</p>
          <ul>
            <li>To assess your loved one's care needs and develop a personalized care plan</li>
            <li>To match caregivers to clients based on clinical needs, schedule, and compatibility</li>
            <li>To communicate with families about care updates, scheduling, and changes in condition</li>
            <li>To coordinate care with other healthcare providers, with your consent</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To respond to inquiries submitted through our website</li>
          </ul>
          <p>
            We do not sell, rent, or trade personal information to third parties for marketing purposes.
          </p>

          <h2>Information Security</h2>
          <p>
            Arcadia Home Care takes the security of personal information seriously. We maintain the
            following safeguards:
          </p>
          <ul>
            <li>Client records are stored securely in electronic systems with access restricted to authorized personnel only</li>
            <li>Any physical documents containing personal information are scanned and securely destroyed</li>
            <li>All staff complete privacy and confidentiality training as part of their onboarding</li>
            <li>Electronic communications involving client information are handled with strict security protocols</li>
          </ul>

          <h2>Privacy Breach Response</h2>
          <p>
            If a privacy breach occurs — meaning unauthorized access to, use, or disclosure of
            personal information — Arcadia Home Care will take immediate steps to contain the breach,
            assess the risk of harm, notify affected individuals as required by law, and take corrective
            action to prevent recurrence. We follow all requirements under PHIPA and PIPEDA regarding
            breach notification.
          </p>

          <h2>Website and Contact Form Data</h2>
          <p>
            When you submit an inquiry through our website contact form or referral form, the information
            you provide is used solely to respond to your inquiry and, if appropriate, to initiate the
            intake process. We do not use website submission data for marketing purposes without your
            explicit consent.
          </p>
          <p>
            Our website may use standard analytics tools (such as Google Analytics) to understand how
            visitors use our site. This data is aggregated and does not identify individuals. You can
            opt out of analytics tracking through your browser settings.
          </p>

          <h2>Sharing Information with Other Providers</h2>
          <p>
            Arcadia may share relevant personal health information with members of a client's
            healthcare team when necessary to provide safe and coordinated care. In many cases
            this occurs under implied consent within the client's circle of care, as permitted
            under PHIPA. When information must be shared outside the circle of care, express
            consent will be obtained, unless disclosure is otherwise authorized or required by law.
          </p>
          <p>
            Examples of circle of care providers may include the client's family physician,
            Ontario Health atHome coordinators, physiotherapists, occupational therapists,
            pharmacists, or specialist physicians involved in the client's treatment.
          </p>

          <h2>Retention of Information</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes for which
            it was collected and to comply with legal requirements. When information is no longer
            required, it is securely destroyed or anonymized.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under PHIPA and PIPEDA, you have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you or your loved one</li>
            <li>Be informed about how your information is collected, used, and disclosed</li>
            <li>Request corrections to inaccurate or incomplete information</li>
            <li>Withdraw consent for the collection or use of information, subject to legal and contractual limitations</li>
            <li>File a complaint with the Information and Privacy Commissioner of Ontario if you believe your privacy rights have been violated</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our services are directed at adults and their families. We do not knowingly collect personal
            information from children under the age of 16 without parental or guardian consent.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time to reflect changes in our practices or
            applicable law. The date of the most recent update is noted at the top of this page. We
            encourage you to review this policy periodically.
          </p>

          <div className="privacy-contact-box">
            <h3>Privacy Questions or Concerns</h3>
            <p>
              If you have questions about this policy, wish to access your personal information, or
              would like to raise a privacy concern, please contact us:
            </p>
            <p>
              <strong>Arcadia Home Care</strong><br />
              302 Bay Street, Toronto, Ontario M5H 0B6<br />
              <a href="mailto:info@arcadiahomecare.ca">info@arcadiahomecare.ca</a><br />
              <a href="tel:+18449770050">(844) 977-0050</a>
            </p>
            <p style={{ marginTop: 16, fontSize: '0.875rem' }}>
              If you are not satisfied with our response, you may contact the{' '}
              <a href="https://www.ipc.on.ca" target="_blank" rel="noopener noreferrer">
                Information and Privacy Commissioner of Ontario
              </a>{' '}
              at www.ipc.on.ca.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
