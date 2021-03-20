import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },

  border: {
    position: "relative",
    height: "5px",
    backgroundColor: "#333"
  }

}));

const Banner = () => {
  const classes = useStyle();
  return (

<React.Fragment>
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
<div className={classes.border}></div>
<div className={classes.toolbarMargin} />
</React.Fragment>
  );
};

export default Banner;
