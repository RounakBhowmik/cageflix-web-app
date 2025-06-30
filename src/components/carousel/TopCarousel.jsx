import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const products = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    movie_name:"abcd",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg",
    movie_name:"efgh",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg",
    movie_name:"ijkl",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg",
    movie_name:"mnop",
  },
];

const TopCarousel=()=>{
  return (
    <Carousel>
      {products.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`Slide ${item.id}`}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h1>{item.movie_name}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default TopCarousel;
