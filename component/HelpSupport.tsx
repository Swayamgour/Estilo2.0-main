import React from 'react'
import Style from '../styles/HelpSupport.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image'
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";



export default function HelpSupport() {
  return (
    <div className={Style.HelpSupport}>
      <div className={Style.one}>
        <div className={Style.left}>
          <p className={Style.P}>Help &</p>
          <h1 className={Style.H1}>Support</h1>
        </div>
        <div className={Style.right}>
          <Image
            src="/Support/support.png"
            width={150}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className={Style.two}>
        <div style={{position:"relative"}}>
        <Image
          src="/Support/back.png"
          width={999}
          height={500}
          layout="responsive"
          alt="Picture of the author"
        />
        <div className={Style.img_text}>
          <p className={Style.P}><BsEnvelopeFill /> Email: estiloindia22@gmail.com</p>
          <p className={Style.P}><IoLocationSharp /> Address: bhilai supela</p>
          <p className={Style.P}><FaPhone /> Toll Free - 9555283368, 9555283368,</p>
        </div>
        </div>
        
      </div>
      <div className={Style.three}>
        <FaFacebookF />
        <FaTwitter />
        <PiInstagramLogoThin />
        <FaLinkedinIn />
      </div>

      <div className={Style.four}>
       <div className={Style.four_main}>
       <div>
          <label htmlFor="">Your Name</label><br />
          <input
            className={Style.Input}
            type="text" name="" id="" placeholder='Enter Your Name Here....' />
        </div>

        <div>
          <label htmlFor="">Your Email</label><br />
          <input
            className={Style.Input}
            type="text" name="" id="" placeholder='Enter Your Name Here....' />

        </div>

        <div>
          <label htmlFor="">Message</label><br />
          <textarea
            className={Style.msg}
            name="" id="" cols="30" rows="10" placeholder='Enter Your Name Here....'></textarea>
        </div>
       </div>

        <div className={Style.btn}>
          <button className={Style.send}>Send</button>
        </div>
      </div>
    </div>
  )
}
