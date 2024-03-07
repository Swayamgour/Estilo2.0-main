import React from 'react'
import Image from 'next/image'
import Style from '@/styles/CartEmpty.module.css'

export default function CartEmpty() {
    return (
        <div className={Style.empty_card}>
            <h1 className={Style.H1}>CART</h1>
            <p className={Style.P}> 1 Item(s): Total &nbsp;<span className={Style.price}>00.00
            </span>
            </p>
            <Image
                src="/Empty_Card/Empty_bag.png"
                style={{marginTop:"2rem"}}
                width={250}
                height={200}
                alt=""
            />
            <h2 className={Style.H2}>YOUR CART IS EMPTY</h2>
            <h1 className={Style.Shop_now}>Shop Now</h1>
            <h1 className={Style.Save_now}>SAVE LATER FOR(1)</h1>
            <div className={Style.op}>
                <h1 className={Style.shopping}>Continue shopping</h1>
                <h1 className={Style.checkout}>Checkout</h1>
            </div>
        </div>
    )
}
