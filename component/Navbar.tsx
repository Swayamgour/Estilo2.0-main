import React from "react";
import style from '@/styles/Navbar.module.css'
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCartFill } from "react-icons/pi";
import Slider from './Slider'
import Link from "next/link";
import SliderForCart from '../component/SliderForCart'



const Navbar = () => {
  return (

    <div className={style.Nav_Container}>
      <div className={style.nanPart_Logo}>
        <div className={style.Icons}>
          <Slider />
        </div>
        <Link className={style.AboutTag} href="/">
          <div className={style.logoImg}>
            <Image
              src="/logo/estilologo.png"
              alt="Next.js Logo"
              width={180}
              height={80}
              layout="responsive"

            // priority
            />
          </div>
        </Link>
      </div>
      <div className={style.nanPart}>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>
      <div className={style.nanPart}>
        <div className={style.Icons}>
          <CiSearch />
        </div>
        <div className={style.Icons}>
          <VscAccount />
        </div>
        <div className={style.Icons}>

         <SliderForCart />

        </div>
      </div>
    </div>

  )

}

export default Navbar;
