import React from 'react'
import Image from "next/image";
import Style from "@/styles/Login.module.css";

export default function Login() {
  return (
    <div className={Style.Container}>
      <div className={Style.Container_Main}>
        <div className={Style.MainLogo}>
          <Image
            src="/logo/main_logo.png"
            alt="Next.js Logo"
            width={900}
            height={900}
            layout="responsive"
          // priority
          />
        </div>
        <div className={Style.Main}>
          <h1 className={Style.H1}> Log In</h1>
          <div className={Style.Input_Main}>
            <div className={Style.Input_Felid}>
              <input className={Style.Felid} type="text" placeholder='E-mail' />
            </div>
            <div className={Style.Input_Felid}>
              <input className={Style.Felid} type="text" placeholder='password' />
            </div>
          </div>
          
          <div className={Style.op}>
            <p className={Style.op_font}>Forget your password?</p>
            <p className={Style.op_font}>Crate account</p>
          </div>
         <div className={Style.BTN}>
         <button
            className={Style.Submit_BTN}
            type='submit'>Sign Up</button>
         </div>
        </div>
      </div>
    </div>
  )
}
