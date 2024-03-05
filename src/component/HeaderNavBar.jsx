import React from "react";
import { Link } from "react-router-dom";

const HeaderNavBar = () => {
  return (
    <div className="absolute left-0 top-0 z-10 h-20 w-full bg-white bg-opacity-10 px-40 py-5 shadow-md">
      <div className="flex justify-start gap-x-48 px-[200px] leading-10 text-white/80">
        <img className="w-10" src="/icon/R-Logo.png" />
        <ul className="flex justify-start gap-x-6 font-extralight">
          <Link to="/" className="hover:cursor-pointer hover:text-[#00D646]">
            HOME
          </Link>
          <li className="hover:cursor-pointer hover:text-[#00D646]">
            PROFESSION
          </li>
          <li className="hover:cursor-pointer hover:text-[#00D646]">PROJECT</li>
          <li className="hover:cursor-pointer hover:text-[#00D646]">CONTACT</li>
          <Link
            to="/project"
            className="hover:cursor-pointer hover:text-[#00D646]"
          >
            專案介紹
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavBar;
