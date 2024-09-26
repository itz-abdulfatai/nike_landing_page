import { star } from "../assets/icons";

function ProductCard({ product, setActiveProduct }) {
  return (
    <div
      onClick={() => {
        setActiveProduct(product);
      }}
      className=" bg-white border border-red-200 h-[400px] sm:h-[345px] flex flex-col justify-stretch items-stretch overflow-hidden cursor-zoom-in"
    >
      <div className="  h-[70%] flex justify-center items-center 
      bg-cover">
        <img src={product.imgURL} alt={product.name} className="object-cover  hover:scale-110 transition-all duration-500 ease-in-out" />
      </div>
      {/* className='w-[282px] h-[282px]' */}
      <div className=" bg-white flex flex-col justify-between items-start p-2 h-[30%] box-border">
        <div className=" flex gap-2">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>({product.rating / 10})</p>
        </div>
        <h3 className=' text-xl leading-normal font-semibold font-palanquin break-words line-clamp-1'>{product.name}</h3>
        <p className='  font-semibold font-montserrat text-coral-red text-xl leading-normal'>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
