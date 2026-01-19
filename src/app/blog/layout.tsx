import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Driving tips, oral lesson guidance, practical driving skills, and success stories from A Plus Driving School in Bulawayo.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | A Plus Driving School",
    description:
      "Driving tips, oral lesson guidance, practical driving skills, and success stories from A Plus Driving School in Bulawayo.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/Images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "A Plus Driving School Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | A Plus Driving School",
    description:
      "Driving tips, oral lesson guidance, practical driving skills, and success stories from A Plus Driving School in Bulawayo.",
    images: ["/Images/hero.jpg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
