import React from "react";
import ShopItem from "../ShopItem/ShopItem";

function ListView(props) {
    let {products} = props;

    console.log("list ", products);

    return (
        <ShopItem products={products}/>
    );
}
  
export default ListView;