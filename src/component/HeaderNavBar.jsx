import React from "react";

const HeaderNavBar = () => {
  return (
    <div className="flex justify-start gap-x-48 px-[200px] text-base leading-10 text-white/80">
      <img className="w-10" src="/icon/R-Logo.png" />
      <ul className="flex justify-start gap-x-6">
        <li className="hover:cursor-pointer hover:text-[#00D646]">HOME</li>
        <li className="hover:cursor-pointer hover:text-[#00D646]">
          PROFESSION
        </li>
        <li className="hover:cursor-pointer hover:text-[#00D646]">PROJECT</li>
        <li className="hover:cursor-pointer hover:text-[#00D646]">CONTACT</li>
        <li className="hover:cursor-pointer hover:text-[#00D646]">專案介紹</li>
      </ul>
    </div>
  );
};

export default HeaderNavBar;
