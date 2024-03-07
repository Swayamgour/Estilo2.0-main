import Image from "next/image";
import { Inter } from "next/font/google";
import { HomePage, Login, Navbar, Cart, CartEmpty, Footer, TermsCondition, HelpSupport, Sort, FAQS, Address } from "@/component/Index";
import Slider from '../component/Slider'
import style from '../styles/Navbar.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <div className={style.navbarForindexFile}>
        <Navbar />
      </div> */}
      <div><HomePage /></div>
      {/* <Slider /> */}
      {/* <Login/> */}
      {/* <About/> */}
      {/* <Cart/> */}
      {/* <CartEmpty/> */}
      {/* <Footer/>  */}
      {/* <TermsCondition/> */}
      {/* <HelpSupport/> */}
      {/* <Sort/> */}
      {/* <FAQS/> */}
      {/* <Address/> */}
    
    </>
  );
}
