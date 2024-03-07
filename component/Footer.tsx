
import React from 'react'
import Style from '@/styles/Footer.module.css'
import Image from 'next/image'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={Style.Footer}>

            <div style={{ position: "relative" , width:'100vw' , height:'100%' , display:'flex' }}>
                <Image
                    src={"/Footer/footer.png"}
                    alt={"Picture of the author"}
                    width={500}
                    height={500}
                    layout='responsive'
                />
            </div>
            <div className={Style.Logo} >
                <Image
                    src={"/Footer/estiloLogo1.png"}
                    alt={"Picture of the author"}
                    width={500}
                    height={500}
                    layout='responsive'
                />
            </div>
            <p className={Style.Text_Paragraph}>
                It can be a group of sentences or a single sentence that forms a unit, and length and appearance do not determine whether a section in a paper is a paragraph
            </p>
            <div className={Style.Contacts1}>
                <p>We  are here</p>
                <p>TEXT ADDRESS</p>
                <p className={Style.Location} > <FaMapMarkerAlt /> View on map</p>
            </div>
            <div className={Style.Contacts2}>
                <p>Contact us</p>
                <p>9999999999</p>
                <p> swayam@gmail.com </p>
            </div>
            <div className={Style.Contacts3}>
                <p>Get us on Social</p>
                <p className={Style.icons}><FaFacebookF /><FaXTwitter /><FaInstagram /><FaLinkedinIn /></p>
              
            </div>


        </div>
    )
}
