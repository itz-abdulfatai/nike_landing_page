import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../constants";
import Modal from "../components/Modal";

function ProductsGrid() {
  const [activeProduct, setActiveProduct] = useState();
  const closeModal = () => {
    // setModalActive(false);
    setActiveProduct(null);
  };
  return (
    <>
      <Modal
        activeProduct={activeProduct}
        closeModal={closeModal}
        onClose={closeModal}
      />

      <section
        id="products"
        className="padding padding-t   min-h-screen max-container max-sm:mt-12 bg-hero"
      >
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            <span className="text-coral-red"> Browse </span> Our Products
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-sm:px-8">
            {products.map((product, index) => (
              // <p key={index}>{product.imgURL}</p>
              <ProductCard
                product={product}
                key={index}
                setActiveProduct={setActiveProduct}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsGrid;
