import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyBar from "./MobileStickyBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <MobileStickyBar />
    </>
  );
}
