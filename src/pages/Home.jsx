// for modal

import { useState } from 'react';
import Modal from '../components/Modal';
import {
  CustomerReviews,
//   Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from '../sections'




const Home = () => {

  const [activeProduct, setActiveProduct] = useState();
  // const [modalActive, setModalActive] = useState(false);

  // const handleProductClick = (product) => {
  //   setActiveProduct(product);
  //   // setModalActive(true);
  // };

  const closeModal = () => {
    // setModalActive(false);
    setActiveProduct(null);
  };

  return (<>





    <main>
      <section id='home' className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section id='products' className='padding'>
      <Modal activeProduct={activeProduct} closeModal={closeModal} onClose={closeModal}/>
        <PopularProducts setActiveProduct={setActiveProduct}/>

      </section>
      <section id='about' className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
        

      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>

      <section id='contact' className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      
    </main>
  </>
  );
};

export default Home;
