import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thank You | Arcadia Home Care",
    description:
        "Thank you for submitting a professional referral to Arcadia Home Care.",
    alternates: {
        canonical: "https://www.arcadiahomecare.ca/referral-form/thank-you/",
    },
};

export default function ReferralThankYouPage() {
    return (
        <main
            style={{
                padding: "120px 24px 80px",
                maxWidth: 1000,
                margin: "0 auto",
            }}
        >
            <section
                style={{
                    borderRadius: 20,
                    border: "1px solid #E5E0D8",
                    background: "#FAFAF8",
                    padding: "36px 28px",
                    textAlign: "center",
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
                    Referral Submitted
                </p>

                <h1
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                        fontWeight: 600,
                        color: "#1C2B3A",
                        marginBottom: 14,
                    }}
                >
                    Thank You for Your Referral
                </h1>

                <p
                    style={{
                        fontSize: 15,
                        color: "#4B5563",
                        lineHeight: 1.8,
                        maxWidth: 700,
                        margin: "0 auto 18px",
                    }}
                >
                    We have received your submission. Our team will review the referral
                    details and follow up based on urgency, care complexity, and
                    discharge timing.
                </p>

                <p
                    style={{
                        fontSize: 15,
                        color: "#4B5563",
                        lineHeight: 1.8,
                        maxWidth: 700,
                        margin: "0 auto 24px",
                    }}
                >
                    If the case is time-sensitive, please also contact Arcadia directly so
                    our team can coordinate next steps as quickly as possible.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 12,
                        marginTop: 8,
                    }}
                >
                    <a
                        href="/contact/"
                        style={{
                            display: "inline-block",
                            padding: "12px 18px",
                            borderRadius: 8,
                            border: "none",
                            background: "#1C2B3A",
                            color: "#FFFFFF",
                            fontSize: 15,
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Contact Arcadia
                    </a>

                    <a
                        href="/"
                        style={{
                            display: "inline-block",
                            padding: "12px 18px",
                            borderRadius: 8,
                            border: "1px solid #E5E0D8",
                            background: "#FFFFFF",
                            color: "#1C2B3A",
                            fontSize: 15,
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Go to Home Page
                    </a>
                </div>
            </section>

            <section
                style={{
                    marginTop: 18,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 16,
                }}
            >
                <div
                    style={{
                        borderRadius: 16,
                        border: "1px solid #E5E0D8",
                        background: "#FFFFFF",
                        padding: 24,
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 28,
                            color: "#1C2B3A",
                            marginBottom: 10,
                        }}
                    >
                        What happens next
                    </h2>
                    <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75 }}>
                        We review referral information, determine urgency, and identify the
                        most appropriate support pathway for the patient and family.
                    </p>
                </div>

                <div
                    style={{
                        borderRadius: 16,
                        border: "1px solid #E5E0D8",
                        background: "#FFFFFF",
                        padding: 24,
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: 28,
                            color: "#1C2B3A",
                            marginBottom: 10,
                        }}
                    >
                        Helpful follow-up details
                    </h2>
                    <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75 }}>
                        If needed, you may also share discharge date, mobility status,
                        medication considerations, and the primary family contact to support
                        faster triage.
                    </p>
                </div>
            </section>
        </main>
    );
}