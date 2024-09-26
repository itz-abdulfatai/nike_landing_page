import { useContext, useEffect, useRef } from "react";
import { arrowRight, cheveronRight, star, x } from "../assets/icons";
import Button from "./Button";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Modal({ activeProduct, onClose }) {
  const modal = useRef();
  const {addToCart, cart, removeFromCart} = useContext(CartContext)
  // disable scrolling
  const disableScroll = (event) => {
    event.preventDefault(); // Prevents mouse wheel scrolling
  };

  const added =  cart.includes(activeProduct)
  useEffect(() => {

    if (activeProduct) {
      window.addEventListener("wheel", disableScroll, { passive: false });
      return () => {
        window.removeEventListener("wheel", disableScroll);
      };
    }
  }, [activeProduct]);

  useEffect(() => {
    if (activeProduct) {
      window.addEventListener("touchmove", disableScroll, { passive: false });
      return () => {
        window.removeEventListener("touchmove", disableScroll);
      };
    }
  }, [activeProduct]);

  const disableArrowScroll = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault(); // Prevents scrolling with arrow keys
    }
  };

  useEffect(() => {
    if (activeProduct) {
      window.addEventListener("keydown", disableArrowScroll);
      return () => {
        window.removeEventListener("keydown", disableArrowScroll);
      };
    }
  }, [activeProduct]);

  return activeProduct ? (
    <div
      className="fixed top-0 bottom-0   left-0 right-0  bg-black z-50 bg-opacity-70  flex justify-center items-center"
      onClick={(e) => {
        if (e.target == modal.current) {
          onClose();
        }
      }}
      ref={modal}
    >
      <div className="bg-hero bg-cover sm:w-3/5 md:w-3/5 lg:w-2/5 h-[90%] md:h-[85%] z-40 flex flex-col justify-stretch items-stretch w-4/5 relative">
        <div className=" h-[60%] md:h-[70%] flex-grow bg-cover relative flex justify-center items-center">
          <div
            className="cursor-pointer absolute top-4 right-4"
            onClick={onClose}
          >
            <img src={x} alt="" width={50} height={50} />
          </div>
          <img
            src={activeProduct.imgURL}
            alt=""
            className="max-w-[85%] border border-coral-red max-h-[85%] object-cover"
          />
        </div>
        <div className="h-[40%] pb-5 md:pb-0 rounded-t-3xl  bg-white flex flex-col justify-around items-start px-5 gap-1">
          <div className=" flex gap-2.5">
            <img src={star} alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
              ({activeProduct.rating / 10})
            </p>
          </div>
          <h3 className=" text-2xl leading-normal font-semibold font-palanquin">
            {activeProduct.name}
          </h3>
          <p className=" font-montserrat text-sm capitalize line-clamp-5">{activeProduct.description}</p>
          <p className=" font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            ${activeProduct.price.toFixed(2)}
          </p>
          {/* <Link to={`/products/${encodeURIComponent(activeProduct.name)}`}>
            
          </Link> */}

          <Button onClick={()=> {
            if (added) {
              removeFromCart(activeProduct)

            } else {
              addToCart(activeProduct)
            }
          }}
              label={added? 'Remove Cart':"Add to Cart"}
              iconURL={arrowRight}
              className={"absolute -bottom-7 shadow hover:bg-[#f16454] right-5"}
            />
        </div>
      </div>
    </div>
  ) : null; // Return null if inactiveProduct
}

export default Modal;
