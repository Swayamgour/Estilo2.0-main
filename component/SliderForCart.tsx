import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Style from '../styles/Cart.module.css';
import { FaAngleLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { RiMenu2Line } from "react-icons/ri";
import { PiShoppingCartFill } from "react-icons/pi";

import Image from 'next/image';


const drawerWidth = 350;

interface Props {

  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className={Style.Cart}>
      <div className={Style.drawerHeader}>
        <FaAngleLeft onClick={handleDrawerToggle} />
        <p>CART</p>
        <RxCross2 onClick={handleDrawerToggle} />
      </div>
      <div className={Style.T_pice}>
        <p className={Style.P}> 1 Item(s): Total &nbsp;<span className={Style.price}>$ 4,320.00
        </span>
        </p>
        <div className={Style.main}>
          <div className={Style.price_cart_Left}>
            <Image
              src="/Cart/bag.png"
              width={80}
              height={80}
              alt=""
            />
          </div>
          <div className={Style.price_cart_Right}>
            <div className={Style.one}>
              <h4>WATERFOWL CRYSTAL CLUTCH</h4>
              <p style={{ color: "gray" }}>SILVER-GREEN</p>
            </div>
            <div className={Style.two}>
              <p style={{ textDecoration: "line-through", color: "gray" }}>₹48,00.00</p>
              <h3>₹43,320.00</h3>
            </div>
            <div className={Style.three}>
              <p>SHOP10 - 10% Discount Applied !</p>
              <p>(Saved Rs.480)</p>
            </div>
            <div className={Style.removeContainer} >
              <div className={Style.QuantityPlusone}>
                <p>+</p>
                <p>1</p>
                <p>-</p>
              </div>
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

  );

  // Remove this const when copying and pasting into your project.
  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
      <IconButton
        onClick={handleDrawerToggle} sx={{ color: 'black' }}>

        <PiShoppingCartFill />
      </IconButton>

      <Box >
        <Drawer
          // container={container}
          // variant="temporary"
          open={mobileOpen}
          anchor="right"
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{

            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

      </Box>

    </Box>
  );
}