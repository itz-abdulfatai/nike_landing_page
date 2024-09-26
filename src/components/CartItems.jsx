import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { trash } from "../assets/icons";

const CartItems = ({ product }) => {
    const {cart, removeFromCart} = useContext(CartContext)

  return (
    <div className="p-0 md:p-4 rounded-3xl bg-white shadow-sm grid grid-cols-4 items-center ">
      <div className=" bg-white border col-span-1 overflow-hidden  flex justify-center items-center ">
        <img
          className="cover max-h-[90%] max-w-[90%] "
          src={product.imgURL}
          alt=""
        />
      </div>
      <div className=" col-span-2 flex flex-col p-1 md:p-3 justify-around items-start font-montserrat text-slate-gray">
        <h3 className=" line-clamp-1  font-bold text-sm md:text-base ">{product.name}</h3>
        <p className=" line-clamp-1 text-sm md:text-base">{product.description}</p>
      </div>
      <div className=" col-span-1 flex flex-col md:flex-row justify-around items-center font-montserrat text-slate-gray">
        <span className=" text-sm md:text-base">${product.price.toFixed(2)}</span>
        <button onClick={()=> removeFromCart(product)}>
          <img src={trash} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
