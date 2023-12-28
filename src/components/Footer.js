import React from "react";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import {Link} from "react-router-dom";
import sphere from "../assets/sphere-unscreen.gif";

const navText = "text-slate-50 mb-3";
const navUndertext = "text-slate-50 opacity-60 mt-1 hover:text-slate-400";

export default function Footer() {
  return (
    <div className="bg-[#030303] flex w-full flex-col justify-center items-center max-md:w-full max-md:px-5">
      <section className="grid grid-cols-4 grid-rows-1 w-[80%] pb-5 px-16 pt-20 justify-between gap-4 max-md:grid-cols-2 max-md:grid-rows-2 max-md:mt-10 max-md:px-5 max-md:w-full">
        <div className="flex flex-col">
          <p className={navText}>Products</p>
          <Link to="#" className={navUndertext}>Pro ctrl care</Link>
          <Link to="#" className={navUndertext}>Self care</Link>
        </div>
        <div className="flex flex-col">
          <p className={navText}>About</p>
          <Link to="#" className={navUndertext}>FAQ</Link>
          <Link to="#" className={navUndertext}>Our Mission</Link>
          <Link to="#" className={navUndertext}>Terms & Conditions</Link>
        </div>
        <div className="flex flex-col">
          <p className={navText}>Contact</p>
          <Link to="#" className={navUndertext}>Careers</Link>
          <Link to="#" className={navUndertext}>Customer Support</Link>
        </div>
        <div className="flex flex-col">
          <p className={navText}>Help</p>
          <Link to="#" className={navUndertext}>Shipping and Delivery</Link>
          <Link to="#" className={navUndertext}>Returns</Link>
          <Link to="#" className={navUndertext}>Privacy Policy</Link>
        </div>
      </section>
      <footer className="flex flex-col items-center mt-24 p-16 max-md:mt-10 max-md:px-5">
        <div className="flex gap-4">
          <Link to='#' className="w-8 hover:mix-blend-overlay">
            <img
              loading="lazy"
              src={Instagram}
              className="object-cover object-center w-8"
              alt="Instagram"
            />
          </Link>
          <Link to='#' className="w-8 hover:mix-blend-overlay">
            <img
              loading="lazy"
              src={Facebook}
              className="object-cover object-center w-8"
              alt="Facebook"
            />
          </Link>
        </div>
        <p className="text-slate-50 text-center mt-5">
          © 2023 Qiqi Skincare. Forged in the future.
        </p>
      </footer>
      <div className="flex flex-col items-center mt-20 p-14 max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          src={sphere}
          className="object-contain object-center w-[70px] h-[70px]"
          alt="Rights Reserved Logo"
        />
        <div className="text-slate-50 text-center mt-7">
          All Rights Reserved
        </div>
      </div>
    </div>
  );
}
