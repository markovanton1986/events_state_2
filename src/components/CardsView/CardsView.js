import React from "react";
import ShopCards from "../ShopCards/ShopCards";

function CardsView(props) {
    let {products} = props;

    console.log("card ", products);

    return (
        <ShopCards products={products}/>
    );
}
  
export default CardsView;