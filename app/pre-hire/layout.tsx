import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Hire Forms | Arcadia Home Care Careers",
  description:
    "Complete Arcadia Home Care pre-hire forms for PSW, RN/RPN, and support roles. Submit your application, skills assessment, and credentials online.",
  alternates: {
    canonical: "https://arcadiahomecare.ca/pre-hire/",
  },
};

export default function PreHireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
