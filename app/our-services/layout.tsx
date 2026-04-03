import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Care Services in Toronto & GTA | Arcadia",
  description:
    "View Arcadia's specialized home care services in Toronto and the GTA, including dementia care, ABI support, hospital discharge, respite, and 24-hour care.",
  alternates: {
    canonical: "https://www.arcadiahomecare.ca/our-services/",
  },
};

export default function OurServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
