// src/components/HomePage.js
import React, { useState, useEffect } from "react";
import Product from "./Product";
import "../styles/HomePage.css";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const renderRows = () => {
    let rows = [];
    let dataIndex = 0;

    while (dataIndex < data.length) {
      const productsInRow = getRandomNumber(1, 4);
      const rowData = data.slice(dataIndex, dataIndex + productsInRow);

      rows.push(
        <div className="home_row" key={dataIndex}>
          {rowData.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              desc={item.description}
              price={item.price}
              url={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      );

      dataIndex += productsInRow;
    }

    return rows;
  };

  return (
    <div className="homePage">
      <div className="home_container">
        <img
          className="home_image"
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/Image_-_E-Commerce_Website_.jpeg.jpg"
          alt="home_image"
        />
        {renderRows()}
      </div>
    </div>
  );
};

export default HomePage;
