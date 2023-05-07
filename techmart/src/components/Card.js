import React, { useState, useEffect } from 'react';
import './Card.css';

const Card = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: 'https://th.bing.com/th/id/R.c5c0ccacf1a86d1889b4b3b6f77d2dec?rik=gqKuw8EJoq9wFQ&pid=ImgRaw&r=0',
      effect: 'shake',
    },
    {
      src: 'https://crdms.images.consumerreports.org/f_auto,w_598/prod/products/cr/models/400088-black-and-white-laser-printers-hp-laserjet-pro-m404dn-10010573.jpg',
      effect: 'rotate',
    },
    {
      src: 'https://comparetv.net/wp-content/uploads/2020/09/TCL-65R635.jpg',
      effect: 'zoom-in',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.jaug8vP4MNVUmCfEx9Tl0gHaHa?pid=ImgDet&rs=1',
      effect: 'brighten',
    },
    {
      src: 'https://jamaicaclassifiedonline.com/images/2019/02/16/65510/apple-macbook-pro-133-l3t8wgiu_1.jpg',
      effect: 'fade',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.whb1ydm2xQip6SaDch5m3wHaFT?pid=ImgDet&rs=1',
      effect: 'shake',
    },
    {
      src: '',
      effect: 'rotate',
    },
    {
      src: '',
      effect: 'zoom-in',
    },
    {
    src: '',
      effect: 'brighten',
    },
    {
    src: '',
      effect: 'fade',
    },
    {
    src: '',
      effect: 'shake',
    },
    {
    src: '',
      effect: 'rotate',
    },
    {
    src: '',
      effect: 'zoom-in',
    },
    {
      src: '',
      effect: 'brighten',
    },
    {
    src: '',
      effect: 'fade',
    },
    {
      src: '',
      effect: 'shake',
    },
    {
      src: '',
      effect: 'rotate',
    },
    {
      src: '',
      effect: 'zoom-in',
    },
    {
      src: '',
      effect: 'brighten',
    },
    {
      src: '',
      effect: 'fade',
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);
  const getClassName = (index) => {
    const activeImageIndices = getActiveImageIndices();
    if (activeImageIndices.includes(index)) {
      return `card-image active-image active-effect-${images[index].effect}`;
    }
    return 'card-image';
  };
  const getActiveImageIndices = () => {
    const activeIndices = [];
    for (let i = activeIndex; i < activeIndex + 5; i++) {
      activeIndices.push(i % images.length);
    }
    return activeIndices;
  };
  return (
    <div className="card">
      {/* <h2>Welcome to our online store! Get ready to discover the best deals on the web.</h2> */}
      <div className="card-image-container">
        {images.map((image, index) => (
          <img
            className={getClassName(index)}
            src={image.src}
            alt={`Image ${index + 1}`}
            key={index}
          />
        ))}
      </div>
      <div className="card-text">
        {/* <h2 className="card-title">Techmart online store</h2> */}
        <p className="card-description">
        </p>
        <a href="#" className="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;




