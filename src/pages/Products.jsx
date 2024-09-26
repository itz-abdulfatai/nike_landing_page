import { Subscribe } from "../sections"
import ProductsGrid from "../sections/ProductsGrid"
import ProductsHero from "../sections/ProductsHero"


function Products() {
  return (
    <>
    
    {/*  hero */}
    <section id='home' className='xl:padding-l wide:padding-r padding-b'>
    <ProductsHero/>

      </section>







    {/*  products */}
    <ProductsGrid/>


    {/* cta */}
    <section id='contact' className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>


    </>
  )
}

export default Products