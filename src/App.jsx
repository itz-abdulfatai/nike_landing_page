import { Route, Routes } from "react-router-dom";
import { Nav } from "./components";
import { Footer } from "./sections";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";

function App() {
  return (
    <div >
      <Nav />

        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:name" element={<SingleProduct />} />
        <Route path="/checkout"  element={<Checkout />} />
        <Route path="/about"  element={<About />} />
        <Route path="*"  element={<NotFound />} />
      </Routes>

      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
}

export default App;
