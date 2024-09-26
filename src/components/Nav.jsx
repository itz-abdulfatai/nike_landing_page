import { Link, useLocation } from "react-router-dom";
import { cartIcon, hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks, navLinksAlt } from "../constants";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Nav = () => {
  // const pathName = useParams()
  const [activeHash, setActiveHash] = useState("");
  const [passed, setPassed] = useState(false);

  const [navActive, setNavActive] = useState(false);

  const { cart } = useContext(CartContext);

  const location = useLocation();

  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setNavActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setNavActive(false);
  }, [location]);

  const isHome = path == "/";

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setPassed(true);
      // console.log('passed: ', )
    } else {
      setPassed(false);
      // console.log('nt passed: ', window.innerHeight)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location]);

  return (
    <header
      className={`px-4 sm:px-16 py-8 z-40 w-full transition-all ${
        passed ? " fixed shadow-sm bg-white" : "absolute"
      }`}
    >
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        {/* desktop nav */}
        <ul className="sm:flex-1 sm:flex sm:justify-center sm:items-center gap-5 sm:gap-16 max-sm:hidden">
          {isHome &&
            navLinks.map((item) => (
              <li key={item.label}>
                {item.hash && <a
                  href={item.href}
                  className={`font-montserrat leading-normal text-lg text-slate-gray  ${
                    passed && activeHash == item.href
                      ? " bg-coral-red text-black px-5 py-2 rounded-full "
                      : ""
                  }  max-sm:h-10`}
                >
                  {item.label}
                </a>}
                {!item.hash && <Link
                  to={item.href}
                  className={`font-montserrat leading-normal text-lg text-slate-gray   max-sm:h-10`}
                >
                  {item.label}
                </Link>}

              </li>
            ))}

          {!isHome &&
            navLinksAlt.map((item) => (
              <li key={item.label}>
                {item.hash && (
                  <a
                    href={item.href}
                    className={`hash font-montserrat leading-normal text-lg text-slate-gray px-5 py-2 rounded-full  ${
                      passed && activeHash == item.href
                        ? " bg-coral-red text-black  "
                        : ""
                    }  max-sm:h-10`}
                  >
                    {item.label}
                  </a>
                )}
                {!item.hash && (
                  <Link
                    to={item.href}
                    className={` font-montserrat leading-normal text-lg text-slate-gray px-5 py-2 rounded-full `}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
        </ul>

        {/* mobile nav  */}
        <ul
          className={`" sm:hidden absolute  h-40 flex flex-col justify-stretch items-stretch transition-all duration-500 ease-in-out left-0 right-0 shadow-md bg-white z-30" ${
            navActive ? "top-[100px] opacity-100" : "top-[-200px] opacity-0"
          }`}
        >
          {isHome &&
            navLinks.map((item) => (
              <li
                key={item.label}
                className=" flex-1 border-b flex items-center pl-2"
              >
                <a
                  href={item.href}
                  className={` font-montserrat leading-normal flex-1 text-lg text-slate-gray`}
                >
                  {item.label}
                </a>
              </li>
            ))}

          {!isHome &&
            navLinksAlt.map((item) => (
              <li
                key={item.label}
                className="flex-1 bg-white flex items-center pl-5  border-b"
              >
                {item.hash && (
                  <a
                    href={item.href}
                    className={`  font-montserrat leading-normal text-lg text-slate-gray `}
                  >
                    {item.label}
                  </a>
                )}
                {!item.hash && (
                  <Link
                    to={item.href}
                    className={`  font-montserrat leading-normal text-lg text-slate-gray  `}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
        </ul>
        {/* mobile nav end */}

        <div className=" flex justify-between items-center group w-24 sm:w-10  sm:absolute right-5 top-5 ">
          <Link
            to="/checkout"
            className="flex justify-center items-center group md:hover:bg-coral-red p-2 cursor-pointer rounded-full md:hover:scale-125 transition-all ease-in-out duration-150 relative"
          >
            <img
              src={cartIcon}
              alt="cart"
              width={25}
              height={25}
              className=""
            />
            <span className=" md:group-hover:text-white   p-1 transition-all duration-150 ease-in-out font-montserrat font-bold text-slate-gray absolute left-0 w-0.5 h-0.5">
              {cart.length}
            </span>
          </Link>
          <img
            src={hamburger}
            onClick={() => setNavActive(!navActive)}
            alt="hamburger icon"
            width={25}
            height={25}
            className=" block sm:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
