import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyle = makeStyles((theme) => ({



}));

const Banner = () => {
  const classes = useStyle();
  return (


<Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
<div>
    <img src="https://fashionpinky.com/wp-content/uploads/2020/10/slide3_bg_h2-1920x700.jpg" />
    <p className="legend">SPRING SUMMER 2021</p>
</div>

<div>
    <img src="https://fashionpinky.com/wp-content/uploads/2020/10/slide2_bg_h2-1920x700.jpg" />
    <p className="legend">HOT TRENDING</p>
</div>
</Carousel>
  );
};

export default Banner;
