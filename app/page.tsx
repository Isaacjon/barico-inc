// import Image from "next/image";
import { 
  AboutCompany, 
  Advantages, 
  Contact, 
  Header, 
  LeaveRequest, 
  Navbar, 
  Products, 
  ProjectCv,
  // Marketing, MarketingStrategy, Markets,  Demand, DemandMarkets, Facilites, 
} from "./components";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="font-[family-name:var(--font-montserrat)]">
      <Header />
      <AboutCompany />
      <Products />
      {/* <LeaveRequest /> */}

      {/* <Demand />
      <Markets />
      <Marketing />
      <MarketingStrategy />
      <Facilites />
      <DemandMarkets /> */}
      <Contact />
    </main>
    </>
  );
}
