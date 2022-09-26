import React, { useState, useEffect } from "react";
import Carousel from "./caroussel";
import ProductCard from "./ProductCard";
import Order from "./Order";
import Item from "./Item";
import { cls } from "reactutils";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Example from "../chat";
import supportIcon from "./24-hours-support.png";
import shippingIcon from "./icons8-free-shipping-50.png";
import discountIcon from "./cart_discount_online_sale_shopping_store_tag_icon_123216.png";
import moneyReturnIcon from "./kissclipart-money-return-white-transparent-clipart-computer-ic-bbff750db7834787.png";

const Home = ({ setNav }) => {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [active, setActive] = useState("");
  const [searchKeyword] = useState("");
  const category = "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(category, searchKeyword, active));

    return () => {
      //
    };
  }, [active, dispatch, searchKeyword]);
  return (
    <>
      <Carousel listcat={listcat} />
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "48px 38px 38px",
        }}
      >
        {listItems.map((el, index) => (
          <Item data={el} key={index} />
        ))}
      </div>
      <Order list={list}  />
     
      {error && <div style={{ margin: "8px" }}>{error}</div>}

      <div
        // className="container"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexFlow: "wrap",
          margin: "0 80px",
        }}
      >
        {loading && <div style={{ margin: "8px" }}>Loading ...</div>}
        {products &&
          products.map((prd, index) => (
            <ProductCard key={index} data={prd} setNav={setNav} />
          ))}
      </div>
      <Example />
    </>
  );
};
export default Home;

const listcat = [
  {
    title: "Cat1",
    description: "Une description 1",
    image: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  },
  {
    title: "Cat2",
    description: "Une description 2",
    image: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  },
  {
    title: "Un Titre",
    description: "Une description",
    image: "https://pharma-shop.tn/themes/pharmashop/assets/img/modules/appagebuilder/images/cerave.jpg",
  },
  {
    title: "Un Titre",
    description: "Une description",
    image: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  },
  {
    title: "Un Titre",
    description: "Une description",
    image: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
  },
];


const listItems = [
  {
    title: "Free Shipping",
    image: shippingIcon,
    description: "Free shipping on all order",
  },
  {
    title: "Support 24/7",
    image: supportIcon,
    description: "Free shipping on all order",
  },
  {
    title: "Money Return",
    image: moneyReturnIcon,
    description: "Free shipping on all order",
  },
  {
    title: "Order Discount",
    image: discountIcon,
    description: "Free shipping on all order",
  },
];

const list = [
  {
    label: "Newest",
    key: "",
    onClick: () => {},
  },
  {
    label: "Lowest",
    key: "lowest",
    onClick: () => {},
  },
  {
    label: "Highest",
    key: "highest",
    onClick: () => {},
  },
];




