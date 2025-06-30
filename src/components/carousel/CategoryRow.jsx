// src/components/CategoryRow.jsx
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../styles/CategoryRow.css";

// function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ right: "-10px", zIndex: 1 }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ left: "-10px", zIndex: 1 }}
//       onClick={onClick}
//     />
//   );
// }

// const CategoryRow = ({ title, products }) => {
//   const settings = {
//     dots: false,
//     // infinite: products.length > 6, // only allow infinite scroll if enough items
//     infinite:false,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 2,
//     // arrows: true,
//     // swipeToSlide: true,
//     // nextArrow: <SampleNextArrow />,
//     // prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1400,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="category-row">
//       <h4 className="category-title">{title}</h4>
//       <Slider {...settings} className="carousel-slider">
//         {products.map((item, index) => (
//           <div className="thumbnail" key={index}>
//             <img
//               src={item.image}
//               alt={`thumb-${index}`}
//               className="thumbnail-img"
//             />
//             {item.tag && <span className="tag-label">{item.tag}</span>}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CategoryRow;

import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '../../styles/CategoryRow.css';

const CategoryRow = ({ title, products }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    className: "center",
    centerPadding: "10px",
    slidesToScroll: 2,
    arrows: true,
    // swipeToSlide: true,

  };

  return (
    <div className="category-row">
      <h4 className="category-title">{title}</h4>
      <Slider {...settings} className="carousel-slider">
        {products.map((item, index) => (
          <div className="thumbnail" key={index}>
            <img src={item.image} alt={`thumb-${index}`} className="thumbnail-img" />
            {item.tag && <span className="tag-label">{item.tag}</span>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryRow;
