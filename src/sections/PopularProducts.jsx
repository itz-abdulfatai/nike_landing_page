// import { products } from "../constants";
import { PopularProductCard } from "../components";
// import { useState } from "react";
import { popularProduct } from "../constants";

const PopularProducts = ( {setActiveProduct}) => {

  // const [active, setActive] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleCardClick = (product) => {
  //     setSelectedProduct(product);
  //     setActive(true);
  // };

  // const handleClose = () => {
  //     setActive(false);
  //     setSelectedProduct(null);
  // };
  console.log(popularProduct)
  return (
    <section 
    // id='products' 
    className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 pt-10 '>
        {popularProduct.map((product) => (
          <PopularProductCard key={product.name} product={product} setActiveProduct={setActiveProduct}/>
        ))} 
      </div>
    </section>
  );
};

export default PopularProducts;
