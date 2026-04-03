import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Home Care Starts | Arcadia Home Care",
  description:
    "Learn how care starts with Arcadia: consultation, assessment, caregiver matching, funding guidance, and ongoing family support across Toronto and the GTA.",
  alternates: {
    canonical: "https://www.arcadiahomecare.ca/how-care-starts/",
  },
};

export default function HowCareStartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
