import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import style from '../styles/BagDetail.module.css'
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import { FcLike } from "react-icons/fc";
import { CiShare2 } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";

function BagDetail() {

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#DCC2AB",
      // outline: "1px solid red",
    },
  });
  return (
    <div className={style.mainConateanerForDE}>
      <div className={style.bagContainer}>
        <Swiper
          // spaceBetween={30}
          // centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]} >
            {/* <div style={{width:'0%'}}> */}
          <SwiperSlide>
           
              <div className={style.ImageCantaner}>
                <Image
                  src='/Banner/CardBags.jpg'
                  alt="h"
                  width={250}
                  height={10}
                  layout="responsive"
                  style={{ borderRadius: '8px' }}
                />
              </div>

          

          </SwiperSlide>
          {/* </div> */}
         
        </Swiper>
      </div>

      <div className={style.containerSecond}>
        <div className={style.cardBagInfoContainer}>
          <p>TIEUP BAG</p>
          <div>
            <StyledRating name="customized-10" defaultValue={2} />
          </div>
        </div>
        <div className={style.cardBagInfoContaineForLike}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <p>₹ 1200 </p>
            <p className={style.CutRate}>₹ 1700 </p>
          </div>

          <div style={{ display: 'flex', gap: '15px', fontSize: '20px' }}>
            <FcLike />
            <CiShare2 />

          </div>
          {/* <p></p> */}
        </div>
        <hr color="#EAEAEA" style={{ margin: '10px 0px' }}></hr>
        <div className={style.Color}>
          <p>Color</p>
          <div className={style.red}></div>
          <div className={style.blue}></div>
          <div className={style.lightblue}></div>
        </div>
        <div className={style.QuantitySection}>
          Quantity
          <div className={style.QuantityPlusone}>
            <p>+</p>
            <p>1</p>
            <p>-</p>
          </div>
        </div>
        <div className={style.AddToCartButton}>
          <button className={style.AddToCartbuttton}> Add to cart <IoCartSharp /> </button>
        </div>
        <div className={style.ProductDetail}>
          <p>PRODUCT DETAILS:</p>
          <hr color="#EAEAEA" style={{ margin: '10px 0px' }}></hr>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'flex' }}>
              <h5 style={{ width: '50%' }}>METERIAL:</h5>
              <h5>WATER RESISTANT:</h5>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ width: '50%' }}>PU Material</p>
              <p>Yes</p>
            </div>
          </div>



          <hr color="#EAEAEA" style={{ margin: '15px 0px' }}></hr>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'flex' }}>
              <h5 style={{ width: '50%' }}>PATTERN:</h5>
              <h5>COMPARTMENT:</h5>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ width: '50%' }}>Solid</p>
              <p>No</p>
            </div>
          </div>



          <hr color="#EAEAEA" style={{ margin: '15px 0px' }}></hr>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'flex' }}>
              <h5 style={{ width: '50%' }}>DIMENSION(HxLxW):</h5>
              <h5>POCKETS:</h5>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ width: '50%' }}>13x28x9 cm</p>
              <p>Yes</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BagDetail;

