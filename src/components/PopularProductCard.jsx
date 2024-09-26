import { star } from "../assets/icons";

const PopularProductCard = ({product, setActiveProduct }) => {
  return (
    <div className='flex flex-1  flex-col  w-full max-sm:w-full  p-3 shadow-sm cursor-zoom-in rounded-xl bg-hero bg-cover bg-right items-center ' onClick={()=> {setActiveProduct(product)}} >
      <img src={product.imgURL} alt={product.name} className='w-[282px] h-[282px]' />
      <div className=" bg-white w-full bg-opacity-40 md:hover:bg-opacity-50 flex flex-col drop-shadow-sm  items-center ">
      <div className='mt-8 flex  gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({product.rating/10})
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {product.name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        ${product.price.toFixed(2)}
      </p>
      </div>
     
    </div>
  );
};

export default PopularProductCard;
