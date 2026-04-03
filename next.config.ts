import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/how-care-starts/book-a-consultation/",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/how-care-starts/first-week-of-care/",
        destination: "/how-care-starts/care-begins/",
        permanent: true,
      },
      {
        source: "/how-care-starts/caregiver-matching/",
        destination: "/how-care-starts/matching-caregivers/",
        permanent: true,
      },
      {
        source: "/how-care-starts/pricing-funding/",
        destination: "/how-care-starts/pricing-and-funding/",
        permanent: true,
      },
      {
        source: "/resources/family-caregiving-guides/",
        destination: "/resources/family-caregiver-support/",
        permanent: true,
      },
      {
        source: "/resources/family-caregiving-guides/caring-for-your-loved-one/",
        destination: "/resources/family-caregiver-support/",
        permanent: true,
      },
      {
        source: "/resources/hospital-discharge-guides/transitioning-home-from-hospital/",
        destination: "/resources/navigating-home-care/",
        permanent: true,
      },
      {
        source: "/resources/family-caregiver-support/caregiver-burnout-warning-signs/",
        destination: "/conditions/caregiver-burnout-support/",
        permanent: true,
      },
      {
        source: "/resources/navigating-home-care/when-a-parent-resists-home-care/",
        destination: "/resources/navigating-home-care/",
        permanent: true,
      },
      {
        source: "/locations/toronto/north-york/",
        destination: "/locations/toronto/north-york-home-care/",
        permanent: true,
      },
      {
        source: "/locations/toronto/scarborough/",
        destination: "/locations/toronto/scarborough-home-care/",
        permanent: true,
      },
      {
        source: "/locations/toronto/etobicoke/",
        destination: "/locations/toronto/etobicoke-home-care/",
        permanent: true,
      },
      {
        source: "/locations/york-region/markham/",
        destination: "/locations/york-region/markham-home-care/",
        permanent: true,
      },
      {
        source: "/locations/york-region/richmond-hill/",
        destination: "/locations/york-region/richmond-hill-home-care/",
        permanent: true,
      },
      {
        source: "/locations/peel-region/mississauga/",
        destination: "/locations/peel-region/mississauga-home-care/",
        permanent: true,
      },
      {
        source: "/conditions/alzheimers-care/",
        destination: "/conditions/dementia-care-at-home/",
        permanent: true,
      },
      {
        source: "/for-professionals/",
        destination: "/healthcare-professionals/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;