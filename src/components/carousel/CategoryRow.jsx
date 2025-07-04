import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/CategoryRow.css";

const CategoryRow = ({ title, data, onClick }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (data.length > 0) {
    return (
      <div className="category-row">
        <h4 className="category-title">{title}</h4>
        {
          data.length > 1 ?
            (<Slider {...settings} className="carousel-slider">
              {data.map((item, index) => (
                <div
                  className="thumbnail"
                  key={index}
                  onClick={() => onClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    alt={`thumb-${index}`}
                    className="thumbnail-img"
                  />
                  {item.tag && <span className="tag-label">{item.tag}</span>}
                </div>
              ))}
            </Slider>)
            : (
              
              <div className="single-thumbnail-container">
                <div
                  className="thumbnail"
                  onClick={() => onClick(data[0])}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + data[0].poster_path}
                    alt={`thumb-0`}
                    className="thumbnail-img"
                  />
                  {data[0].tag && <span className="tag-label">{data[0].tag}</span>}
                </div>
              </div>
            )
        }
      </div>
    );
  }
  return null;
};

export default CategoryRow;
