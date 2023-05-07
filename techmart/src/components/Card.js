// import React, { useState, useEffect } from 'react';
// import './Card.css';

// const Card = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//     {
//       src: 'https://cdn.shopify.com/s/files/1/0082/3102/6743/products/4738f0df360c4f56869fa9079ea35384_6bd22db5-9af0-47aa-833f-5d0c08002d07_1024x1024.jpg?v=1619886904',
//       effect: 'shake',
//     },
//     {
//       src: 'https://th.bing.com/th/id/OIP.wTwiM8hAW8UwabIVLeh3mAAAAA?pid=ImgDet&rs=1',
//       effect: 'rotate',
//     },
//     {
//       src: "https://th.bing.com/th/id/OIP.GVNlMTlp2WwdILsKqTx2ZQHaHa?pid=ImgDet&rs=1",
//       effect: 'zoom-in',
//     },
//     {
//       src: "https://th.bing.com/th/id/R.21d510c705ff6c5a42635df623e83eb7?rik=yGYG9ccuosfsew&pid=ImgRaw&r=0",   
//       effect: 'brighten',
//     },
//     {
//       src: "https://th.bing.com/th/id/R.b3f4c2aae53d60c805bbba8c16799bd8?rik=n%2fXC7ZJCkTzk8A&pid=ImgRaw&r=0",
//       effect: 'fade',
//     },
//     {
//       src: "https://th.bing.com/th/id/OIP.a0coMKwjBPs7GRn__-4zKgHaEK?pid=ImgDet&rs=1",
//       effect: 'shake',
//     },
//     {
//       src: "https://1.bp.blogspot.com/-cukLdi1VWBI/VxfG3t1VRKI/AAAAAAAAADQ/qKQ6hAosdQoJdDMRVGcqfpKPuMuMZ_JNgCLcB/s1600/Adobe%2BPhotoshop%2BCC%2B2014.jpg",
//       effect: 'rotate',
//     },
//     {
//       src: "https://th.bing.com/th/id/R.ac5952437a445306e1747fc7fcaeecf5?rik=la8%2bXcdt9yl1Qw&pid=ImgRaw&r=0",
//       effect: 'zoom-in',
//     },
//     {
//       src: "https://th.bing.com/th/id/R.ccf08ec86453e1c6b6f378027b24d632?rik=hQw8MhMjX6GO4A&riu=http%3a%2f%2fwww.gadgetreview.com%2fwp-content%2fuploads%2f2014%2f08%2fxbox-360.jpg&ehk=cTJA94i%2f1IhXr8sA9ZPqBgegOoLh7f1S59mlm53qH9k%3d&risl=&pid=ImgRaw&r=0",
//       effect: 'brighten',
//     },
//     {
//       src: "https://th.bing.com/th/id/R.47116046c8df92c8cd361bd2bbc9f176?rik=i4kJSC4jNzFUsg&riu=http%3a%2f%2f4.bp.blogspot.com%2f__j_LwpsJjMM%2fTI1ZTGocN2I%2fAAAAAAAAAAU%2f2RPQ2-Q7sKY%2fs1600%2fPS3-slim-console.png&ehk=3VwFjLwyAjkhrP7Ve%2fBAbR7hp5fvTPdUDo%2bqqlEIZYI%3d&risl=&pid=ImgRaw&r=0",
//       effect: 'fade',
//     },
//     {
//       src: "https://cdn.wccftech.com/wp-content/uploads/2019/09/switch-lite-wccftech-2.jpg",
//       effect: 'shake',
//     },
//     {
//       src: "https://web-build.info/wp-content/uploads/2018/01/Xbox-One-X-The-future-of-Microsoft-is-spectacular-but-not-for-everyone.jpg",
//       effect: 'rotate',
//     },
//     {
//       src: "https://th.bing.com/th/id/R.3e36dae44a44aede3997844746e8c106?rik=rLbmtqrueTQqpw&riu=http%3a%2f%2fcdn1.expertreviews.co.uk%2fsites%2fexpertreviews%2ffiles%2f2016%2f11%2fps4_pro_with_controller.jpg%3fitok%3d1aC8EZzd&ehk=F7zFAbFpU8H76ku1wGLnSZYicYKi3up%2bygl1xMZhQEk%3d&risl=&pid=ImgRaw&r=0",
//       effect: 'zoom-in',
//     },
//     {
//       src: "https://i1.wp.com/www.freshouttatime.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-22-at-10.10.38-AM.png?fit=630%2C478&ssl=1",
//       effect: 'brighten',
//     },
//     {
//       src: "https://magazineclonerepub.blob.core.windows.net/mcepub/1766/208600/image/0eb32da6-7452-4e94-8778-56bd58c81bb9.jpg",
//       effect: 'fade',
//     },
//     {
//       src: "https://www.gizmochina.com/wp-content/uploads/2020/09/PlayStation-5.jpg",
//       effect: 'shake',
//     },
//     {
//       src: "https://th.bing.com/th/id/OIP.whb1ydm2xQip6SaDch5m3wHaFT?pid=ImgDet&rs=1",
//       effect: 'rotate',
//     },
//     {
//       src: "https://th.bing.com/th/id/R.8059b4d3fac00bb7831433a13f833d69?rik=ktquEpf39jXqjw&riu=http%3a%2f%2fic.tweakimg.net%2fext%2fi%2f1262188518.jpeg&ehk=vkwmWFMeGD70QPAkNQ7otQqxi78EHBxh90DBL2V0jso%3d&risl=&pid=ImgRaw&r=0",
//       effect: 'zoom-in',
//     },
//     {
//       src: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6445/6445416_sd.jpg",
//       effect: 'brighten',
//     },
//     {
//       src: "https://m.media-amazon.com/images/I/71APeKv8zhL._AC_UY218_.jpg",
//       effect: 'fade',
//     },
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setActiveIndex((activeIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, [activeIndex]);

//   const getClassName = (index) => {
//     const activeImageIndices = getActiveImageIndices();
//     if (activeImageIndices.includes(index)) {
//       return `card-image active-image active-effect-${images[index].effect}`;
//     }
//     return 'card-image';
//   };

//   const getActiveImageIndices = () => {
//     const activeIndices = [];
//     for (let i = activeIndex; i < activeIndex + 5; i++) {
//       activeIndices.push(i % images.length);
//     }
//     return activeIndices;
//   };

//   return (
//     <div className="card">
//       <h2>Welcome to our online store! Get ready to discover the best deals on the web.</h2>
//       <div className="card-image-container">
//         {images.map((image, index) => (
//           <img
//             className={getClassName(index)}
//             src={image.src}
//             alt={`Image ${index + 1}`}
//             key={index}
//           />
//         ))}
//       </div>
//       <div className="card-text">
//         <h2 className="card-title">Techmart online store</h2>
//         <p className="card-description">
          
//         </p>
//         <a href="#" className="card-link">
//           Learn More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;










import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <h2>Welcome to our online store! Get ready to discover the best deals on the web.</h2>
      <img
        className="card-img"
        src="https://blog.zoho.com/wp-content/uploads/2017/01/happy-customers-stay.gif" 
        alt="Card Image"
      />
      <div className="card-text">
        <h2 className="card-title">Techmart online store</h2>
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




