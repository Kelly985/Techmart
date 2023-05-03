import React, { useState, useEffect } from 'react';

function ElectronicsList(){

const [electronics, setElectronics] = useState([]);

useEffect(() => {
        fetch("https://t-mart-data.onrender.com/electronics")
          .then((response) => response.json())
          .then((data) => setElectronics(data))
          .catch((error) => console.log(error));
      }, []);
      return (
        <div>
            <h2> TechMart Electonics </h2>
            {electronics.map((item) => (
            <div key={item.id} className="electrons">
              <h3>{item.name}</h3>
              <img src={item.image_url} alt={`${item.name}'s avatar`} />
              <p>Description: {item.description}</p>
              <p>Price: {item.price_ksh}</p>
              <p>Category: {item.category}</p>
              <p>Condition: {item.condition}</p>
              <button >Add to Cart</button>
            </div>
          ))}
        </div>
      );
}
export default ElectronicsList