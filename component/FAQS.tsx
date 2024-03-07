import React from 'react'
import Style from '../styles/FAQS.module.css'

export default function FAQS() {
  return (
    <div className={Style.container}>
      <h2 className={Style.H1}>FAQs</h2>
      <div className={Style.one}>
        <p className={Style.Heading}>Why Should I Register Myself With Treaso Closet?</p>
        <p className={Style.Paragraph}>Hey! We'd encourage you to register with us so you're the first one know about our new collections, limited edition products and event our flash sales!</p>
      </div>
      <div className={Style.one}>
      <p className={Style.Heading}>how can I Register Myself At Treaso closet?</p>
        <p className={Style.Paragraph}>You can register yourself by clicking on the New User Button on the top right hand corner of the web page and selecting login/register. You will be redirected to a page wherein you can enter your email and password and that's it - you'e registered!</p>
      </div>
      <div className={Style.one}>
      <p className={Style.Heading}>How Can I Edit My Account Details?</p>
        <p className={Style.Paragraph}>To edit your account information login to www.treasocloset.com using your user id and password and click on setting to update all your personal details, addresses and payment information. </p>
      </div>
      <div className={Style.one}>
      <p className={Style.Heading}>How Can I Subscribe To Or Unsubscribe Fashion Alerts?</p>
        <p className={Style.Paragraph}>Subscribe: To subscribe to our fashion alerts, please enter your email address in the bar at end of our homepage. you are now in the loop so wait for your first Treaso Closet email!</p>
      </div>
      <div className={Style.Last}>
      <p className={Style.Heading}>Unsubscribe?</p>
        <p className={Style.Paragraph}>To unsubscribe scroll to the button of any our email and click on "Unsubscribe" button.</p>
      </div>
    </div>
  )
}
