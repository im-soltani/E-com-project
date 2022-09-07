import React from "react";
import { Carousel } from "react-responsive-carousel";

export default ({listcat}) => (
  <Carousel
    autoPlay
    className="carouselItems"
    showThumbs={false}
    showStatus={false}
  >
    {
      listcat.map((el, index) => (
        <div className="item" key={index}>
          <img alt="" src={el.image} className="carouselImage" />
          <div
            style={{
              position: "absolute",
              color: "#fff",
              fontWeight: 600,
              top: "200px",
              left: "200px",
            }}
          >
            <h2 style={{ marginBottom: "8px", fontSize: "36px" }}>
              {el.title}
            </h2>
            <p style={{ fontSize: "30px" }}>{el.description}</p>
          </div>
        </div>
      ))}
  </Carousel>
);


