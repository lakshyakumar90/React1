import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../utils/Redux store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div
      style={{ marginTop: "5vw", padding: "2vw" }}
      className="flex flex-col items-center gap-2"
    >
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      <button className="px-4 py-2 bg-black text-white rounded-lg" onClick={() => clearCartHandler()}>
        Clear Cart
      </button>
      <div className="w-[70%] m-auto">
        {cartItems.length === 0 && <h1 className="text-center">No items in cart</h1>} 
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
