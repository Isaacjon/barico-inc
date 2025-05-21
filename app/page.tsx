// import Image from "next/image";
import { 
  AboutCompany, 
  Contact, 
  Header, 
  Navbar, 
  Products,
} from "./components";
import Script from 'next/script';

export default function Home() {
  return (
    <>
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BARICHEM INC.",
          "url": "https://barichem.com",
          "logo": "https://barichem.com/barichem-banner.jpg",
          "description": "BARICHEM INC. — ведущий производитель углекислого бария (BaCO3) для керамической, стекольной, строительной и химической промышленности в России и Узбекистане.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "RU"
          },
          "sameAs": [
            // Add your social media profiles here
          ]
        })
      }}
    />
    <Navbar />
    <main className="font-[family-name:var(--font-montserrat)]">
      <Header />
      <AboutCompany />
      <Products />
      <Contact />
    </main>
    </>
  );
}
