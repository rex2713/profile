import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const HeaderNavBar = ({
  scrollToProfession,
  scrollToProject,
  scrollToContact,
}) => {
  const [menuOpen, setMenuOpen] = useState();
  const location = useLocation(false);
  return (
    <div className="absolute left-0 top-0 z-20 h-20 w-full bg-white bg-opacity-10 py-5 shadow-md lg:px-40">
      <div className="flex justify-between gap-x-48 px-10 leading-10 text-white/80 lg:px-[200px]">
        <img className="w-10" src="/icon/R-Logo.png" />
        {/* hamburger */}
        <div className="lg:hidden">
          <label
            onClick={() => {
              setMenuOpen(true);
            }}
            htmlFor="hamburger"
          >
            <img className="w-10 opacity-80" src="/icon/hamburger.svg" alt="" />
          </label>
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
            className={`fixed left-0 top-0 w-screen overflow-hidden bg-[#455265]/95 transition duration-500 ${menuOpen ? "h-screen opacity-100" : "h-0 opacity-0"}`}
          >
            <div
              className={`mt-40 flex flex-col justify-start text-nowrap text-center text-2xl ${location.pathname == "/" ? "gap-y-6" : "gap-y-10"} font-normal`}
            >
              <Link
                to="/"
                className="mx-auto hover:cursor-pointer hover:text-[#00D646]"
              >
                HOME
              </Link>
              {location.pathname == "/" && (
                <Link
                  onClick={scrollToProfession}
                  className="mx-auto hover:cursor-pointer hover:text-[#00D646]"
                >
                  PROFESSION
                </Link>
              )}
              {location.pathname == "/" && (
                <Link
                  onClick={scrollToProject}
                  className="mx-auto hover:cursor-pointer hover:text-[#00D646]"
                >
                  PROJECT
                </Link>
              )}
              {location.pathname == "/" && (
                <Link
                  onClick={scrollToContact}
                  className="mx-auto hover:cursor-pointer hover:text-[#00D646]"
                >
                  CONTACT
                </Link>
              )}
              {location.pathname == "/project" && (
                <Link
                  onClick={() => {
                    window.open("https://tvm-0wj4.onrender.com/", "_blank");
                  }}
                  className="mx-auto hover:cursor-pointer hover:text-[#00D646]"
                >
                  台北排球人地圖
                </Link>
              )}
              {location.pathname == "/" && (
                <Link
                  to="/project"
                  className="mx-auto hover:cursor-pointer hover:text-[#00D646]"
                >
                  專案介紹
                </Link>
              )}
            </div>
          </div>
        </div>
        <div
          className={`hidden justify-start text-nowrap lg:flex ${location.pathname == "/" ? "gap-x-6" : "gap-x-10"} font-extralight`}
        >
          <Link to="/" className="hover:cursor-pointer hover:text-[#00D646]">
            HOME
          </Link>
          {location.pathname == "/" && (
            <Link
              onClick={scrollToProfession}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              PROFESSION
            </Link>
          )}
          {location.pathname == "/" && (
            <Link
              onClick={scrollToProject}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              PROJECT
            </Link>
          )}
          {location.pathname == "/" && (
            <Link
              onClick={scrollToContact}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              CONTACT
            </Link>
          )}
          {location.pathname == "/project" && (
            <Link
              onClick={() => {
                window.open("https://tvm-0wj4.onrender.com/", "_blank");
              }}
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              台北排球人地圖
            </Link>
          )}
          {location.pathname == "/" && (
            <Link
              to="/project"
              className="hover:cursor-pointer hover:text-[#00D646]"
            >
              專案介紹
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
