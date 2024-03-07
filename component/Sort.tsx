import React, { useState } from 'react'
import Style from "../styles/Sort.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function Sort() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [activeButton, setActiveButton] = useState('show');
  const [isShown, setIsShown] = useState(false);

  const toggleVisibility = (button:any) => {
    setActiveButton(button);
    setIsShown(button === 'show');
  };


  return (
    <div className={Style.Container}>
      <div className={Style.sort}>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ marginRight: "68%" }}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Sort by
           
          </AccordionSummary>
          
          <AccordionDetails sx={{ display: "flex", justifyContent: "space-around" }}>
            <div className={Style.sortFontSize}>
              <input type="radio" id="html" name="fav_language" value="HTML"
                className={Style.Input} />
              <label htmlFor="html">Recommended</label>
            </div>

            <div className={Style.sortFontSize}>
              <input className={Style.Input}
                type="radio" id="html" name="fav_language" value="HTML" />
              <label htmlFor="html">Low to high</label>
            </div>
            <div className={Style.sortFontSize}>
              <input className={Style.Input}
                type="radio" id="html" name="fav_language" value="HTML" />
              <label htmlFor="html">High to low</label>
            </div>
          </AccordionDetails>
          <AccordionDetails sx={{ display: "flex", justifyContent: "space-around", border: "none", boxShadow: "none" }}>
            <Accordion sx={{ width: "100%", border: "none", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Price
              </AccordionSummary>
              <AccordionDetails sx={{ display: "flex", justifyContent: "space-around" }}>
                <p className={Style.Rupay}>₹ 0</p>
                <p className={Style.Rupay}>₹ 48,00</p>
              </AccordionDetails>
              <Box sx={{ width: 200, padding: "0% 25%" }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  sx={{ width: "70" }}
                />
              </Box>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <div className={Style.Show_Hide}>
      <Button
        className={Style.Show}
        variant="outlined"
        style={{
          borderColor: activeButton === 'show' ? 'black' : 'transparent',
          backgroundColor: activeButton === 'hide' ? 'gray' : 'transparent',
        }}
        onClick={() => toggleVisibility('show')}
      >
        Show
      </Button>
      <Button
        variant="outlined"
        style={{
          borderColor: activeButton === 'hide' ? 'black' : 'transparent',
          backgroundColor: activeButton === 'show' ? 'gray' : 'transparent',
        }}
        className={Style.Hide}
        onClick={() => toggleVisibility('hide')}
      >
        Hide
      </Button>
    </div>
      </div>
      <div className={Style.color}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Color
          </AccordionSummary>
          <AccordionDetails>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. */}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={Style.option}>
        <div className={Style.one}>
          <label htmlFor="scales">Occassion</label>
          <input style={{ marginRight: "7%" }} type="checkbox" id="scales" name="scales" />
        </div>

        <div className={Style.one}>
          <label htmlFor="scales">Casual</label>
          <input style={{ marginRight: "7%" }} type="checkbox" id="scales" name="scales" />
        </div>

        <div className={Style.one}>
          <label htmlFor="scales">Work</label>
          <input style={{ marginRight: "7%" }} type="checkbox" id="scales" name="scales" />
        </div>

        <div className={Style.one}>
          <label htmlFor="scales">Evening</label>
          <input style={{ marginRight: "7%" }} type="checkbox" id="scales" name="scales" />
        </div>

        <div className={Style.one}>
          <label htmlFor="scales">Universel</label>
          <input style={{ marginRight: "7%" }} type="checkbox" id="scales" name="scales" />
        </div>

        <div className={Style.one}>
          <label htmlFor="scales">Active</label>
          <input style={{ marginRight: "7%" }} type="checkbox" id="scales" name="scales" />
        </div>

        <div className={Style.one}>
          <label htmlFor="scales">Travel</label>
          <input style={{ marginRight: "7%" }} type="checkbox" id="scales" name="scales" />
        </div>

      </div>
    </div>
  )
}
