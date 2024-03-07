import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import style from '../styles/Slider.module.css';
import { FaAngleLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { RiMenu2Line } from "react-icons/ri";


const drawerWidth = 300;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
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
    <div>
      <div className={style.drawerHeader}>
        <FaAngleLeft   onClick={handleDrawerToggle}/>
        <p>Bags</p>
        <RxCross2   onClick={handleDrawerToggle}/>
      </div>
      <div className={style.drawerContent}>
        <div>
          <p className={style.OurCollection}>OUR COLLECTION</p>
        </div>
        <hr />
        <div className={style.collectionItems}>
          <p>SLING BAGE</p>
          <p>TOTE BAGE</p>
          <p>HAND BAGE</p>
          <p>CRYSTAL CLUTCHER</p>
          <p>PARTY BAGE</p>
          <p>ETHNIC BAGE</p>
          <p>VANITY BAGE</p>
          <p>WAIST BAGE</p>
          <p className={style.sale}>
            SALE
          </p>
          <hr style={{width:'80%'}} />
          <p className={style.Offer}>BUY 2 GET 1 FREE</p>
          <p className={style.bsetseller}>Best Seller</p>
        </div>
        <div>
        <p className={style.icons}><FaFacebookF /><FaXTwitter /><FaInstagram /><FaLinkedinIn /></p>

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

        <RiMenu2Line />
      </IconButton>

      <Box >
        <Drawer
          // container={container}
          // variant="temporary"
          open={mobileOpen}
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