import { useContext, useEffect, useState } from "react";
import { arrowRight, chevronLeft } from "../assets/icons";
import { CartContext } from "../contexts/CartContext";
import CartItems from "../components/CartItems";
import { useLocation, useNavigate } from "react-router-dom";
import { paymentGateways } from "../constants";
import Button from "../components/Button";


function Checkout() {
  const { cart } = useContext(CartContext);

  const [subtotal, setSubTotal] = useState(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  });

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    setSubTotal(total);
  }, [cart]);
  
  const shippingFee = 4;
  
  useEffect(() => {
    setTotal(subtotal + shippingFee);
  }, [subtotal]);
  
  const [total, setTotal] = useState(subtotal + shippingFee);


  const navigate = useNavigate();
  return (
    <main className=" padding max-container min-h-screen flex flex-col lg:flex-row items-stretch ">
      <div className=" flex flex-col items-stretch justify-between px-3 gap-5 py-10">
        <div className=" capitalize flex items-center text-lg gap-3 text-coral-red font-bold leading-normal font-montserrat">
          <button onClick={() => navigate(-1)}>
            <img
              width={30}
              height={30}
              className=" hover:scale-110 transition-all duration-100"
              src={chevronLeft}
              alt=""
            />
          </button>
          continue shopping
        </div>
        <hr className="border-b  border-b-slate-gray" />
        <div>
          <h1 className="font-bold text-xl text-slate-gray">Shopping cart</h1>
          <p className=" text-slate-gray ">
            You have {cart.length} items in your cart
          </p>
        </div>
        <div className=" flex flex-col items-stretch gap-5 max-h-[570px] overflow-y-scroll p-2 custom-scrollbar">
          {cart.map((cartItem, index) => (
            <CartItems key={index} product={cartItem} />
          ))}
        </div>
      </div>

      <div className="bg-slate-gray p-7   capitalize rounded-2xl flex flex-col gap-5 justify-start items-stretch font-montserrat text-white ">
        <div>
          <h3 className=" font-bold text-2xl">Card Details</h3>
        </div>
        <div className=" flex flex-col items-start justify-between gap-3">
          <h4 className="">Card type</h4>
          <div className=" flex py-5 justify-stretch items-stretch gap-3">
            {paymentGateways.map((gateway, index) => (
              <div
                key={index}
                className=" flex justify-center items-center bg-black rounded-xl flex-1 bg-opacity-10"
              >
                <img src={gateway.imgURL} className=" cover" alt="index" />
              </div>
            ))}
          </div>
          <form action="" className=" flex flex-col justify-between items-stretch capitalize gap-4 w-full ">
            <div className=" flex gap-1  flex-col items-stretch justify-between">
              <label className='font-semibold' htmlFor="">name on card</label>
              <input  className=' h-5 px-1 py-5 rounded-md bg-white bg-opacity-20 text-white outline-none ' placeholder="John Doe" type="text" />
            </div>


            <div className=" flex gap-1  flex-col items-stretch justify-between">
              <label className='font-semibold' htmlFor="">card number</label>
              <input placeholder="0000-0000-0000"  className=' h-5 px-1 py-5 rounded-md bg-white bg-opacity-20 text-white outline-none ' type="number" />
            </div>



            <div className=" flex justify-start gap-5 items-center">
            <div className=" flex  flex-col  justify-between">
              <label className='font-semibold text-sm md:text-base' htmlFor="">expiration date </label>
              <input   className=" w-[100px] md:w-[150px] h-5 px-1 py-5 rounded-md bg-white bg-opacity-20 text-white outline-none " type="month" />
            </div>


            <div className=" flex flex-col ">
              <label className=" font-semibold uppercase text-sm md:text-base" htmlFor="">CVV</label>
              <input placeholder="000" maxLength={3} min={0} max={999} pattern="\d{1,3}" inputMode="numeric"  className=" w-[100px] md:w-[150px] h-5 px-1 py-5 rounded-md bg-white bg-opacity-20 text-white outline-none " type="number" />
            </div>
            </div>


            <div className=" w-full flex flex-col justify-between">
              <div className=" flex justify-between items-center"> <span>subtotal</span>  ${subtotal.toFixed(2)}</div>
              <div className=" flex justify-between items-center"> <span>shipping</span>  ${(shippingFee.toFixed(2))}</div>
              <div className=" flex justify-between items-center"> <span>total (tax included)</span>  ${(total).toFixed(2)}</div>
            </div>

            <Button label={`$${total.toFixed(2)} Checkout`} iconURL={arrowRight}/>


          </form>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
