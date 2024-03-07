import React from 'react';
import Style from '../styles/Cart.module.css';
import Image from 'next/image';

export default function Cart() {
    return (
        <div className={Style.Cart}>
            <h1 className={Style.H1}>CART</h1>
            <div className={Style.T_pice}>
                <p className={Style.P}> 1 Item(s): Total &nbsp;<span className={Style.price}>$ 4,320.00
                </span>
                </p>
                <div className={Style.main}>
                <div className={Style.price_cart_Left}>
                    <Image
                        src="/Cart/bag.png"
                        width={390}
                        height={250}
                        alt=""
                    />
                </div>
                <div className={Style.price_cart_Right}>
                    <div className={Style.one}>
                        <h4>WATERFOWL CRYSTAL CLUTCH</h4>
                        <p style={{color:"gray"}}>SILVER-GREEN</p>
                    </div>
                    <div className={Style.two}>
                        <p style={{textDecoration:"line-through",color:"gray"}}>₹48,00.00</p>
                        <h3>₹43,320.00</h3>
                    </div>
                    <div className={Style.three}>
                    <p>SHOP10 - 10% Discount Applied !</p>
                    <p>(Saved Rs.480)</p>
                    </div>
                    <div style={{display:"flex",marginLeft:"1rem",marginTop:"2rem"}}>
                    <p className={Style.plus_minus}>- 1 +</p>
                    <p className={Style.remove}>Remove X</p>
                </div>
                </div>
                </div>
                <h1 className={Style.Shop_now}>Shop Now</h1>
                <h1 className={Style.Save_now}>SAVE LATER FOR(1)</h1>
                <div className={Style.op}>
                <h1 className={Style.shopping}>Continue shopping</h1>
                <h1 className={Style.checkout}>Checkout</h1>
                </div>
            </div>
        </div>
    )
}
