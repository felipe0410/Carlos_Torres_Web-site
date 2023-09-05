"use client";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { imgCarousel2 } from "../../../Components/arraysCarousel";

const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      // customLeftArrow={<Row/>}
      // customRightArrow={<ArrowBackIosIcon />}
      swipeable={false}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      {imgCarousel2.map((slide, index) => (
        <div key={index} style={{ width: "80%", margin: "0 auto" }}>
          <Box
            sx={{ margin: "0 auto", width: "100%", borderRadius: "40px" }}
            component="img"
            src={slide}
            alt={`slide- ${index}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
