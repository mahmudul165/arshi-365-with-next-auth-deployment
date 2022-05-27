import React, { useState, useEffect } from "react";
//import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { useSession, signIn, signOut } from "next-auth/react";
function Header() {
  const { data: session } = useSession();
  // const Button = styled.button`
  //   background-color: #c1706f;
  // `;

  // navbar top
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  // cart item
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <header
      className={`  sticky-top  header-bg    ${
        !show && " shadow-lg  rounded bg-light  nav-scroll"
      }`}
    >
      {/* <!-- navbar --> */}
      <nav className="container navbar navbar-expand-lg p-0" id="navbar-scroll">
        {/* web view */}
        <div className="container-fluid  ">
          {/* logo part  section*/}
          <div className="   ">
            <Link href="/">
              <a className="navbar-brand">
                <Image
                  src="/home/logo.png"
                  alt="ECOMMERCE  LOGO"
                  width={75}
                  height={75}
                />
              </a>
            </Link>
          </div>
          {/* search section */}
          <div className="w-50 d-flex justify-content-center align-items-center  responsive-search pe-4">
            {/* search part */}
            <div className="input-group ">
              <input
                type="text"
                className="form-control  "
                placeholder="Search for products, brands and more"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className=" "
                  type="submit"
                  style={{
                    backgroundColor: "#c1706f",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{
                      fontSize: 30,
                      color: "white",
                      backgroundColor: "#c1706f",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          {/* cart part */}
          <div className="d-flex   ">
            <Image
              src="/home/cart-logo.png"
              alt="CART-LOGO"
              width={55}
              height={52}
              className="d-inline-block align-text-top  "
            />
            <Link href="/cart" passHref>
              <a className="ms-1  text-decoration-none text-dark">
                MY CART ({totalItems})
              </a>
            </Link>
          </div>
          {/*authentication section */}
          {/* login  */}
          {/* start */}
          {session ? (
            // <li>{session.user?.email}</li>
            // start
            <>
              <div className="nav-item dropdown fs-6 ">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="creatorsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={session.user?.image}
                    width="25px"
                    height="25px"
                    className="rounded-circle"
                    alt="Picture of the author"
                  />
                </a>

                <ul
                  className="dropdown-menu    nav-style "
                  aria-labelledby="creatorsDropdown"
                  style={{ marginLeft: "-127px" }}
                >
                  <li>
                    <a className="fs-6  fw-bolder dropdown-item  " href="#">
                      Manage My Account
                    </a>
                    <Link href="/brand/dashboard">
                      <a className="fs-6  fw-bolder dropdown-item">My Orders</a>
                    </Link>
                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      My Reviews
                    </a>

                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      My Returns & cancellation
                    </a>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {/* <a className="fs-6  fw-bolder dropdown-item" href="#">
                      Become a Seller
                    </a>
                    <Link href="/brand/settings">
                      <a className="fs-6  fw-bolder dropdown-item">Settings</a>
                    </Link>

                    <Link href="/brand/channel">
                      <a className="fs-6  fw-bolder dropdown-item">Channel</a>
                    </Link>
                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      Billing NEW
                    </a>
                    <li>
                      <hr className="dropdown-divider" />
                    </li> */}
                    {/* <a className="fs-6  fw-bolder dropdown-item" href="#">
                      English
                    </a>
                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      $ USD
                    </a> */}
                    <a className="fs-6  fw-bolder dropdown-item" href="#">
                      Help & support
                    </a>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <a
                      className="fs-6  fw-bolder dropdown-item"
                      href="#"
                      onClick={signOut}
                    >
                      Logout
                    </a>
                  </li>

                  {/* <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="fs-6  fw-bolder dropdown-item" href="#">
                          WORK
                        </a>
                      </li> */}
                </ul>
              </div>
            </>
          ) : (
            // end
            <>
              <div className="d-flex">
                <Image
                  src="/home/icon-login.png"
                  alt="Picture of the author"
                  width={20}
                  height={20}
                  className="d-inline-block align-text-top  "
                />
                <Link href="/login">
                  <a className="ms-1   text-decoration-none text-dark">LOGIN</a>
                </Link>
              </div>
              <div className="text-center d-flex   ms-1">
                <Image
                  src="/home/icon-register.png"
                  alt="icon-register"
                  width={20}
                  height={20}
                  className=" ms-1"
                />
                <Link href="/signup">
                  <a className="text-decoration-none text-dark">REGISTER</a>
                </Link>
              </div>
            </>
          )}
          {/* end */}
          {/* <div className=" d-flex  ">
            <Image
              src="/home/icon-login.png"
              alt="Picture of the author"
              width={20}
              height={20}
              className="d-inline-block align-text-top  "
            />
            <Link href="/login">
              <a className="ms-1   text-decoration-none text-dark">LOGIN</a>
            </Link>
          </div> */}
          {/* register  */}
          {/* <div className="text-center d-flex   ms-1">
            <Image
              src="/home/icon-register.png"
              alt="icon-register"
              width={20}
              height={20}
              className=" ms-1"
            />
            <Link href="/signup">
              <a className="ms-1   text-decoration-none text-dark">REGISTER</a>
            </Link>
          </div> */}
        </div>
      </nav>
      {/* 2nd navbar */}
      <nav className="container navbar navbar-expand-lg m-auto text-center   ">
        <button
          className="navbar-toggler expand-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faRectangleList}
            style={{
              fontSize: 48,
              color: "#c1706f",
            }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav m-auto   mb-lg-0">
            {/* register  */}

            <li className="nav-item">
              <a
                href="/"
                className="nav-link   active  ms-4 text-dark "
                aria-current="page"
              >
                <Image
                  src="/home/house-solid.png"
                  alt="Picture  house-solid"
                  width={20}
                  height={20}
                  className=" "
                />
              </a>
            </li>
            <Link href="/todayDeals" passHref>
              <a
                className="nav-link   active    text-dark "
                aria-current="page"
              >
                Today Deals
              </a>
            </Link>
            <Link href="/newArrivals" passHref>
              <a className="nav-link ms-1 text-dark">New Arrivals</a>
            </Link>
            <Link href="/tops-collection" passHref>
              <a className="nav-link ms-1 text-dark">Tops</a>
            </Link>
            <Link href="/gift-cards" passHref>
              <a className="nav-link ms-1 text-dark">Gift Cards</a>
            </Link>

            <Link href="/customer-care" passHref>
              <a className="nav-link  ms-1 text-dark" aria-current="page">
                Customer Care
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="nav-link ms-1 text-dark">Contact</a>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
