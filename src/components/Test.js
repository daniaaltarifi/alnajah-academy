
import React from "react";
import Slider from "react-slick";
function CardCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "#0074d9",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "30px",
          cursor: "pointer",
          color: "white"
        }}
      >
        {i + 1}
      </div>
    )
  };

  const cards = [
    {
      id: 1,
      imageUrl: "image-url-1.jpg",
      title: "Card 1",
      description: "Description for Card 1"
    },
    {
      id: 2,
      imageUrl: "image-url-2.jpg",
      title: "Card 2",
      description: "Description for Card 2"
    },
    {
      id: 3,
      imageUrl: "image-url-3.jpg",
      title: "Card 3",
      description: "Description for Card 3"
    },
    {
      id: 4,
      imageUrl: "image-url-4.jpg",
      title: "Card 4",
      description: "Description for Card 4"
    },
    {
      id: 5,
      imageUrl: "image-url-5.jpg",
      title: "Card 5",
      description: "Description for Card 5"
    }
  ];

  return (
    <div className="card-carousel">
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="card">
            <img
              src={card.imageUrl}
              alt={`Slide ${card.id}`}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardCarousel;


