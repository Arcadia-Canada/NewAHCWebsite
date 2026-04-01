import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions We Support at Home | Arcadia Home Care",
  description:
    "Explore conditions Arcadia supports at home in Toronto and the GTA, including dementia, stroke recovery, Parkinson's, ABI, frailty, and caregiver burnout.",
  alternates: {
    canonical: "https://arcadiahomecare.ca/conditions/",
  },
};

export default function ConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
