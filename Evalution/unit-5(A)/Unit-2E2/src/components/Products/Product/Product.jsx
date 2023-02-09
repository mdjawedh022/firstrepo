
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  updateCart,
} from "../../../redux/cart/cart.actions";

const Product = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    console.log(state.cart.data);
    return (
      state.cart.data.find((item) => item.productId === id) || { count: 0 }
    );
  });

  const handAd = () => {
    dispatch(
      addItem({
        productId: id,
        count: 1,
      })
    );
  };
  const handUP = (newCount) => {
    if (newCount === 0) {
      dispatch(removeItem(cart.id));
    } else {
      dispatch(updateCart(cart.id, { count: newCount }));
    }
  };

  return (
    <div
      data-cy={`product-${id}`}
      style={{
        border: "1px solid black",
        borderRadius: "16px",
        padding: "20px",
        minWidth: "200px",
      }}
    >
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {cart.count === 0 ? (
        <button data-cy="product-add-item-to-cart-button" onClick={handAd}>
          Add To Cart
        </button>
      ) : (
        <div>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => handUP(cart.count + 1)}
          >
            +
          </button>
          <span data-cy="product-count">{cart.count}</span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => handUP(cart.count - 1)}
          >
            -
          </button>
          <button
            data-cy="product-remove-cart-item-button"
            onClick={() => handUP(0)}
          >
            Remove from cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
