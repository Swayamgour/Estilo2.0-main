import React from 'react'
import Style from '../styles/Address.module.css'
import { PiShoppingCartFill } from "react-icons/pi";
import { LiaTagSolid } from "react-icons/lia";
import { MdArrowForwardIos } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image'

export default function Address() {
  return (
    <div className={Style.Container}>
      <p className={Style.First_heading}>ESTILO</p>
      <div className={Style.One}>
        <p className={Style.Left}>
          <PiShoppingCartFill style={{ fontSize: "1.5em" }} />
          <span className={Style.show_summary}>Show order summary</span>
        </p>
        <p className={Style.Right}>
          ₹ 4,789.00
        </p>
      </div>

      <div className={Style.two}>
        <div className={Style.sec1}>
          <Image
            src="/Bag/BagImg2.jpg"
            width={150}
            height={80}
            alt="Picture of the author"
          />
          <div className={Style.WATERFOWL}>
            <p className={Style.WATERFOWL_P}>WATERFOWL CRYSTAL CLUTCH</p>
            <div className={Style.Gold}>
              <div className={Style.Gold_Left}>
                <p style={{ fontSize: ".6em" }}>GOLD</p>
                <p><LiaTagSolid /></p>
              </div>
              <div className={Style.Gold_Right}>
                <p style={{
                  textDecoration: "line-through",
                  color: "gray", fontSize: ".6em"
                }}> ₹4800.00</p>
                <p style={{ fontSize: ".8em", fontWeight: 600 }}> ₹4320.00</p>
              </div>
            </div>
            <p style={{ fontSize: ".5em" }}>SHOP10 - 10% DISCOUNT APPLIED !  <span style={{ fontWeight: 700 }}>(-₹480.00)</span></p>
          </div>
        </div>
        <div className={Style.sec2}>
          <input type="text"
            placeholder='Discount code'
            className={Style.Input} />

          <button className={Style.btn}><MdArrowForwardIos /></button>
        </div>

        <div className={Style.sec3}>
          <div className={Style.sec3_subtitle}>
            <p style={{ fontSize: ".7em" }}>Subtotal</p>
            <p style={{ fontSize: ".7em", fontWeight: "700" }}>₹ 4,320.00</p>
          </div>
          <div className={Style.sec3_shopping}>
            <p style={{ fontSize: ".7em" }}>Shipping</p>
            <p style={{ fontSize: ".6em" }}>Calculated at next step</p>
          </div>
          <div className={Style.sec3_total}>
            <div>
              <p style={{
                fontWeight: "700",
                fontSize: ".9em"
              }}>Total</p>
              <p style={{ fontSize: ".5em", marginTop: "3px" }}>Including ₹6558.96 in taxes</p>
            </div>
            <p style={{ fontSize: ".9em", fontWeight: "700" }}>₹ 4,320.00</p>
          </div>
        </div>
      </div>

      <div className={Style.three}>

        <div className={Style.three_one}>
          <p className={Style.three_one_cart}>Cart</p>
          <p className={Style.three_one_cart_arrow}><MdArrowForwardIos /></p>
          <p className={Style.three_one_cart}>information</p>
          <p className={Style.three_one_cart_arrow}> <MdArrowForwardIos /></p>
          <p className={Style.three_one_cart}>Shopping</p>
          <p className={Style.three_one_cart_arrow}><MdArrowForwardIos /></p>
          <p className={Style.three_one_cart}>Payment</p>
        </div>

        <div className={Style.three_two}>
          <div className={Style.three_two_contact}>
            <p className={Style.three_two_contact_1st_p}>Contact</p>
            <p className={Style.three_two_contact_2st_p}>Already have an account? <span style={{ color: "green" }}>Log in</span></p>
          </div>

          <div className={Style.three_two_contact_input_filed}>
            <input
              className={Style.three_two_contact_input}
              placeholder='Email or mobile number'
              type="text" />

            <div className={Style.three_two_contact_checkbox}>
              <input 
              className={Style.checkbox}
              type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label 
              className={Style.checkbox_label}
              htmlFor="vehicle1"> Email me with news and offers</label><br />
            </div>

            <div className={Style.Shipping_address}>
              <p className={Style.Shipping_P}>Shipping address</p>
              <input 
              className={Style.Shipping_address_single_all_input}
              type="text" placeholder='Country/Religion'/>

              <div className={Style.Shipping_address_single_Name}>
                <input className={Style.Shipping_address_single_Name_First} type="text" placeholder='First Name' />
                <input className={Style.Shipping_address_single_Name_Last} type="text" placeholder='Last Name' />
              </div>

              <input
               className={Style.Shipping_address_single_all_input}
               type="text" placeholder='Company(Optional)' />
              <div className={Style.Shipping_address_search_div}>
              <input
               className={Style.Shipping_address_search} 
              type="text" placeholder='Address' />
              <BsSearch style={{color:"gray"}}/>
              </div>
              <input 
              className={Style.Shipping_address_single_all_input}
              type="text" placeholder='Apartment Suit etc.' />
              <div className={Style.Shipping_address_city}>
                <input className={Style.city_} type="text" placeholder='City'/>
                <input className={Style.city_} type="text" placeholder='State'/>
                <input className={Style.city_} type="text" placeholder='PIN Code'/>
              </div>
              <div className={Style.phone_input}>
                <input 
                className={Style.Shipping_address_search} 
                type="text" placeholder='Phone'/>
                <HiOutlineQuestionMarkCircle style={{color:"gray"}}/>
              </div>
            </div>

            <div className={Style.last_tow_checkBox}>
            <div className={Style.three_two_contact_checkbox}>
              <input 
              className={Style.checkbox}
              type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label 
              className={Style.checkbox_label}
              htmlFor="vehicle1"> Save this information for next time</label><br />
            </div>

            <div className={Style.three_two_contact_checkbox}>
              <input 
              className={Style.checkbox}
              type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label 
              className={Style.checkbox_label}
              htmlFor="vehicle1"> Text me with news and offers</label><br />
            </div>

            </div>

            <div className={Style.return_div}>
              <div className={Style.return_flied}>
              <p className={Style.return_flied_arrow}><IoIosArrowBack /></p>
              <p className={Style.return_flied_P}>Return to cart</p>
              </div>

              <button className={Style.continue_btn}>Continue to shipping</button>
            </div>

            <p className={Style.reversed}>All rights reserved Estilo Bags</p>

          </div>
        </div>
      </div>

    </div>
  )
}
