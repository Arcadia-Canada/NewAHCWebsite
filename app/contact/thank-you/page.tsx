import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us Thank You | Arcadia Home Care",
    description:
        "Thank you for contacting Arcadia Home Care. Our team will review your request and follow up shortly.",
    alternates: {
        canonical: "https://www.arcadiahomecare.ca/contact/thank-you/",
    },
};

export default function ContactThankYouPage() {
    const cardStyle = {
        borderRadius: 16,
        border: "1px solid #E5E0D8",
        background: "#FFFFFF",
        padding: 24,
    };

    const headingStyle = {
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: 28,
        color: "#1C2B3A",
        margin: "0 0 12px",
        lineHeight: 1.2,
    };

    const textStyle = {
        fontSize: 15,
        color: "#4B5563",
        lineHeight: 1.8,
        margin: 0,
    };

    return (
        <main
            style={{
                padding: "100px 20px 60px",
                maxWidth: 1000,
                margin: "0 auto",
            }}
        >
            <section
                style={{
                    borderRadius: 16,
                    border: "1px solid #E5E0D8",
                    background: "#FAFAF8",
                    padding: "32px 24px",
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        fontSize: 22,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#C8302A",
                        margin: "0 0 12px",
                    }}
                >
                    Thank You
                </p>

                <h1
                    style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                        fontWeight: 600,
                        color: "#1C2B3A",
                        margin: "0 0 14px",
                        lineHeight: 1.1,
                    }}
                >
                    Your Consultation Request Has Been Sent
                </h1>

                <p
                    style={{
                        ...textStyle,
                        maxWidth: 700,
                        margin: "0 auto 14px",
                    }}
                >
                    Thank you for reaching out to Arcadia Home Care. Our team has received
                    your message and will review your request shortly.
                </p>

                <p
                    style={{
                        ...textStyle,
                        maxWidth: 700,
                        margin: "0 auto 14px",
                    }}
                >
                    If your situation is urgent, including a recent hospital discharge or
                    a fast-changing care need, please call us directly so we can respond
                    as quickly as possible.
                </p>

                <p
                    style={{
                        ...textStyle,
                        maxWidth: 700,
                        margin: "0 auto 24px",
                    }}
                >
                    Arcadia Home Care provides personalized in-home care services across Ontario,
                    including senior care, post-hospital recovery support, dementia care, and
                    24/7 live-in assistance. Our team works closely with families, hospitals,
                    and healthcare providers to ensure safe and compassionate transitions home.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 12,
                    }}
                >
                    <a
                        href="tel:8449770050"
                        style={{
                            display: "inline-block",
                            padding: "12px 18px",
                            borderRadius: 8,
                            background: "#C8302A",
                            color: "#FFFFFF",
                            fontSize: 15,
                            fontWeight: 600,
                            textDecoration: "none",
                        }}
                    >
                        Call Arcadia
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
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 16,
                }}
            >
                <div style={cardStyle}>
                    <h2 style={headingStyle}>What happens next</h2>
                    <p style={textStyle}>
                        We review your message, understand your care needs, and follow up
                        with the most relevant next step based on your situation and timing.
                    </p>
                </div>

                <div style={cardStyle}>
                    <h2 style={headingStyle}>Helpful resources</h2>
                    <p style={textStyle}>
                        While you wait, you can explore our services, care process, and
                        common support situations to better understand how Arcadia can help.
                    </p>
                </div>
            </section>

            <section
                style={{
                    marginTop: 18,
                }}
            >
                <div style={cardStyle}>
                    <h2 style={headingStyle}>Who We Support</h2>
                    <p style={textStyle}>
                        We support seniors, individuals recovering from surgery, and families
                        needing reliable home care solutions. Whether short-term or long-term,
                        our care plans are tailored to each individual’s needs.
                    </p>
                </div>
            </section>

            <section
                style={{
                    marginTop: 18,
                }}
            >
                <div style={cardStyle}>
                    <h2 style={headingStyle}>Frequently Asked Questions</h2>

                    <div style={{ marginBottom: 18 }}>
                        <h3
                            style={{
                                fontSize: 18,
                                color: "#1C2B3A",
                                margin: "0 0 8px",
                                lineHeight: 1.4,
                            }}
                        >
                            How quickly will someone contact me?
                        </h3>
                        <p style={textStyle}>
                            Most inquiries are reviewed within a few hours, and our team typically
                            follows up the same day or next business day.
                        </p>
                    </div>

                    <div>
                        <h3
                            style={{
                                fontSize: 18,
                                color: "#1C2B3A",
                                margin: "0 0 8px",
                                lineHeight: 1.4,
                            }}
                        >
                            What if my situation is urgent?
                        </h3>
                        <p style={textStyle}>
                            For urgent care needs, we recommend calling directly to ensure immediate
                            coordination with our care team.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}