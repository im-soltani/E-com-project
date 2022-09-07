import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToFavor, removeFromFavor } from "../../actions/favorActions";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import Rating from "../../components/Rating";
import { FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ProductCard = ({ data, setNav }) => {
    const cart = useSelector((state) => state.cart.cartItems);
    const favor = useSelector((state) => state.favor.favorItems);
  
    const { rating, name, image, price, _id } = data;
    const history = useHistory();
    const dispatch = useDispatch();
  
    const handleAddToFavor = (id) => {
      dispatch(addToFavor(id));
    };
  
    const handleRemoveFromFavor = (id) => {
      dispatch(removeFromFavor(_id));
    };
  
    const handleAddToCart = (id) => {
      dispatch(addToCart(id, 1));
    };
  
    const handleRemoveFromCart = (id) => {
      dispatch(removeFromCart(_id));
    };
  
    return (
      <div
        className="productCard"
        style={{
          margin: "16px",
          padding: "8px",
          width: "25em",
          height: "auto",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => {
          setNav("");
          history.push("/product/" + _id);
        }}
      >
        <img
          src={image}
          alt="product"
          width="100%"
          height="250em"
          className="productImage"
        />
  
        <h3
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            padding: "8px 0",
          }}
        >
          {name}
        </h3>
        <div style={{ textAlign: "center" }}>
          <Rating value={rating} />
        </div>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "14px",
            padding: "8px 0",
          }}
        >
          {price} DT
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "10px",
            color: "rgb(255, 255, 255)",
            left: "300px",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                icon={
                  <FavoriteBorder style={{ fontSize: "28px", color: "red" }} />
                }
                checkedIcon={<Favorite style={{ fontSize: "28px" }} />}
                checked={favor.map((el) => el.product).includes(_id)}
                style={{ fontSize: "28px" }}
                name="checkedH"
              />
            }
            label=""
            onClick={(e) => {
             e.stopPropagation();
              !favor.map((el) => el.product).includes(_id)
                ? handleAddToFavor(_id)
                : handleRemoveFromFavor(_id);
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={
                  <ShoppingCartOutlinedIcon
                    style={{ fontSize: "28px", color: "red" }}
                  />
                }
                checkedIcon={<ShoppingCartIcon style={{ fontSize: "28px" }} />}
                checked={cart.map((el) => el.product).includes(_id)}
                style={{ fontSize: "28px" }}
                name="checkedH"
              />
            }
            label=""
            onClick={(e) => {
              e.stopPropagation();
              !cart.map((el) => el.product).includes(_id)
                ? handleAddToCart(_id)
                : handleRemoveFromCart(_id);
            }}
          />
        </div>
      </div>
    );
  };

export default ProductCard
