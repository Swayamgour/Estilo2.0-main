import React from "react";
import Image from "next/image";
import style from '@/styles/HomePage.module.css';
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';


function HomePPage() {

  let arr = [
    {
      // img:'',
      name: 'Bag And Accessory',
      second_Name: 'Boutiques For Sale',
      color: 'Blue',
      rate: '1250/-'

    },
    {
      // img:'',
      name: 'Bag And Accessory',
      second_Name: 'Boutiques For Sale',
      color: 'Blue',
      rate: '1250/-'

    },
    {
      // img:'',
      name: 'Bag And Accessory',
      second_Name: 'Boutiques For Sale',
      color: 'Blue',
      rate: '1250/-'

    },
    {
      // img:'',
      name: 'Bag And Accessory',
      second_Name: 'Boutiques For Sale',
      color: 'Blue',
      rate: '1250/-'

    },
  ]

  let listOfBags = [
    {
      img: '',
      Discraption: 'Crycta Leather Bag',
      name: 'Persanalised with Name intial',
      rate: '₹1200'
    },
    {
      img: '',
      Discraption: 'Crycta Leather Bag',
      name: 'Persanalised with Name intial',
      rate: '₹1200'
    },
    {
      img: '',
      Discraption: 'Crycta Leather Bag',
      name: 'Persanalised with Name intial',
      rate: '₹1200'
    },
    {
      img: '',
      Discraption: 'Crycta Leather Bag',
      name: 'Persanalised with Name intial',
      rate: '₹1200'
    },
    {
      img: '',
      Discraption: 'Crycta Leather Bag',
      name: 'Persanalised with Name intial',
      rate: '₹1200'
    },
    {
      img: '',
      Discraption: 'Crycta Leather Bag',
      name: 'Persanalised with Name intial',
      rate: '₹1200'
    },
  ]

  return (
    <>
      <div >
        <div className={style.HomePageBanner}>
          <Image
            src="/Banner/BANNER.jpg"
            alt="Next.js Logo"
            width={300}
            height={300}
            layout="responsive"
            className={style.image}
          />
          <button className={style.buttonShop}>Shop Now</button>
        </div>
        <div className={style.SwiperContainerForMobile}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]} >
            <SwiperSlide>
              <div style={{ display: 'flex', width: '100vw', height: '50vh', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  src='/Banner/CardBags.jpg'
                  alt="h"
                  width={250}
                  height={250}
                  layout="responsive"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>


        <div>
          <h1 className={style.NewArrivals}>" New Arrivals."</h1>
          <hr className={style.hrTag} />
          <h3 className={style.NewStyle}>New Style Added weekly</h3>

          <div className={style.CardCantener}>
            {arr.map((e) => {
              return (
                <>
                  <div >
                    <div className={style.CardForBage}>
                      {/* <div style={{width:'130px' }}> */}
                      <Image
                        src='/Bag/BagImg2.jpg'
                        width={150}
                        height={150}
                        alt="photo"
                        // layout="responsive"

                        style={{ borderRadius: '50%' }}
                      />
                      {/* </div> */}
                      <h5 className={style.nametag} >{e.name}</h5>
                      <h5>{e.name}</h5>
                      <p style={{ marginTop: '10px' }}>{e.color}</p>
                      <h5 style={{ paddingBottom: '10px' }}>{e.rate}</h5>

                    </div>
{/* <div style={{border:'1px solid gray' , width:'100vw'}}></div> */}
                    <div className={style.Color}>
                      <p>Color</p>
                      <div className={style.red}></div>
                      <div className={style.blue}></div>
                      <div className={style.lightblue}></div>
                    </div>
                    <div>

                    </div>
                  </div>
                </>

              )
            })}
          </div>

        </div>

        <div  >
          <h1 style={{ marginTop: '20px' }} className={style.NewArrivals}>" Special Discount."</h1>
          <div className={style.PersentCard}>
            <div className={style.OfferBanner_forcard}>
              <Image
                src="/Banner/OfferBanner.jpg"
                alt="Next.js Logo"
                width={300}
                height={300}
                layout="responsive"
                // objectFit=""
                style={{ width: '10%', height: '20vh' }}
              />
            </div>
            <div className={style.OfferBanner_forcard}>
              <Image
                src="/Banner/OfferBanner.jpg"
                alt="Next.js Logo"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
          <hr style={{ marginTop: '20px' }} />
          <h1 style={{ marginTop: '0px', fontFamily: 'Monospace' }} className={style.NewArrivals}>Related Bags</h1>
          <div>
            <div className={style.MainBestSeller}>
              {listOfBags.map((e) => {
                return (
                  <div className={style.RelatedPart}>

                    <div  >
                      <Image
                        src='/Banner/CardBags.jpg'
                        alt="h"
                        width={250}
                        height={250}
                        layout="responsive"
                        style={{ borderRadius: '8px' }}
                      />
                      <p style={{ marginTop: '10px', marginLeft: '10px' }}>{e.Discraption}</p>
                      <h2 style={{ marginTop: '5px', marginLeft: '10px', fontSize: '15px' }}>{e.name}</h2>
                      <div style={{ display: 'flex', alignItems: 'center', border: 'none', justifyContent: 'space-between', paddingRight: '15px', marginBottom: '25px' }}>
                        <p style={{ marginTop: '5px', marginLeft: '10px' }}>{e.rate}</p>
                        <IoMdHeartEmpty style={{ fontSize: '25px' }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <hr style={{ marginTop: '0px' }} />
        </div>

        <div>
          <h1 style={{ marginTop: '0px', fontFamily: 'Monospace' }} className={style.NewArrivals}>BEST SELLING PRODUCT</h1>
          <hr className={style.HRTAGforBestSeller} />
          <div className={style.MainBestSeller}>
            {listOfBags.map((e) => {
              return (
                <div className={style.RelatedPart}>

                  <div  >
                    <Image
                      src='/Banner/CardBags.jpg'
                      alt="h"
                      width={250}
                      height={250}
                      layout="responsive"
                      style={{ borderRadius: '8px' }}
                    />
                    <p style={{ marginTop: '10px', marginLeft: '10px' }}>{e.Discraption}</p>
                    <h2 style={{ marginTop: '5px', marginLeft: '10px' }}>{e.name}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', border: 'none', paddingRight: '15px', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <p style={{ marginTop: '5px', marginLeft: '10px' }}>{e.rate}</p>
                      <IoMdHeartEmpty style={{ fontSize: '25px' }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={style.FooterForDeskTop}>
          <div className={style.DiscoverSection} >
            <h1> DISCOVER ESTILO</h1>
            <div className={style.SubCategoryContainer}>
              {/* <p >About Estilo</p> */}
              <Link className={style.AboutTag} href="/About">About Estilo</Link>
              <p> Newsletter</p>
              <p>Faces of Estilo</p>

            </div>
          </div>
          <div style={{ marginTop: '1rem' }} className={style.DiscoverSection} >
            <h1>LET US HELP YOU</h1>
            <div className={style.SubCategoryContainer}>
              <p>Privacy  Policy</p>
              <p>Return & Shipping</p>
              {/* <p>Terms & Condition</p> */}
              <Link className={style.AboutTag} href="/TermandCon">Terms & Condition</Link>

              <p>Track My Order</p>
              <p>FAQs</p>
              <p>Contact Us</p>

            </div>
          </div>
          <div style={{ marginTop: '1rem' }} className={style.DiscoverSection} >
            <h1 >FOLLOW US</h1>
            <div className={style.SubCategoryContainer}>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Pinterest</p>

            </div>
          </div>
          <div style={{ marginTop: '1rem' }} className={style.DiscoverSection} >
            <h1 >CONTACT US</h1>
            <p style={{ color: 'gray', fontFamily: 'var(--font1)' }}>Sign up for exclusive offers, original stories, events and more.</p>
            <div className={style.SubCategoryContainer}>
              <input placeholder="Enter email" className={style.footerinputbox} />
              <button className={style.SubmitButton}>Submit</button>
            </div>
          </div>
        </div >
        <div className={style.footerForWeb}>
          <Footer />
        </div>
      </div >

    </>
  )
}

export default HomePPage
