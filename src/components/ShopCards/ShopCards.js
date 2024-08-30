import React from "react";
import './ShopCards.css';

function ShopCards(props) {
  let { products } = props;
  let id = 0;
  let productsArr = products.map((value) => (
    <div className="store__shop-cards" key={++id}>
      <span className="shop-cards__title">{value.name}</span>
      <span className="shop-cards__color">{value.color}</span>
      <img src={value.img} className="shop-cards__img" alt=""/>
      <div className="shop-cards__conteiner">
        <span className="shop-cards__price">${value.price}</span>
        <span className="shop-cards__btn">Add to cart</span>
      </div>
    </div>
  ));
  return (
      <div className="store__conteiner">
          {productsArr}
      </div>
  );
}

export default ShopCards;