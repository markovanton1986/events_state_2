import React from "react";
import './main.css';

function ShopItem(props) {
  let { products } = props;
  let id = 0;
  let productsArr = products.map((value) => (
    <div className="store__shop-cards-line" key={++id}>
        <img src={value.img} className="shop-cards__img-line" alt=""/>
      <span className="shop-cards__title">{value.name}</span>
      <span className="shop-cards__color">{value.color}</span>
      
      <div className="shop-cards__conteiner-line">
        <span className="shop-cards__price">${value.price}</span>
        <span className="shop-cards__btn">Add to cart</span>
      </div>
    </div>
  ));
  return (
      <div className="store__conteiner-line">
          {productsArr}
      </div>
  );
}

export default ShopItem;