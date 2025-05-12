import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Coaching.css";
import Coaching_card from "./Coaching_card";
import { coachingData } from "./Coachingdata";
import img1 from '../../Images/C5.png'

const Coaching = () => {
  const [data, setData] = useState(coachingData);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  
  return (
    <>
      <div className="coaching_mainContainer">
        <div className="coaching_flexContainer">
          <div className="coaching_flexDiv1">
            <div className="coaching_textContainer">
              <div className="coaching_headtext">
                What we do
              </div>
              <div className="coaching_subtext">
               <ul>
                <li>Single Window Solution to Mechanical and Electrical Works
                 <li>All types of Fabrications</li> 
<li>Erection of Structures, Plant & Machinery</li>
 <li>Plant Commissioning Assistanceli</li> 
 <li>Operation & Maintenance</li> 
Annual Shutdown & Renovations</li>
               </ul>
              </div>
            </div>
          </div>
          <div className="coaching_flexDiv2">
          <Carousel
  responsive={responsive}
  itemClass="carousel-item-padding"
>
  {coachingData.map((item) => (
    <Coaching_card
      key={item.id}
      background={item.background}
      tittle={item.tittle}
      data={item.data}
    />
  ))}
</Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coaching;