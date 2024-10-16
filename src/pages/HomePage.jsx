import React from "react";
import HeaderNavBar from "../component/HeaderNavBar";
import Footer from "../component/Footer";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [iconVisible, setIconVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState({
    timeOne: false,
    timeTwo: false,
    timeThree: false,
    timeFour: false,
  });

  const windowWidth = window.innerWidth;

  useEffect(() => {
    // window.scrollTo(0, 0);
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log(window.scrollY);
      setScrollPosition(position);

      const targetScroll = 1140;
      if (position >= targetScroll) {
        setIconVisible(true);
      }
      setTimeVisible({
        timeOne: position >= 2015,
        timeTwo: position >= 2205,
        timeThree: position >= 2460,
        timeFour: position >= 2730,
      });
    };

    //建立滾動事件監聽
    window.addEventListener("scroll", handleScroll);
    //卸載元件時清除事件監聽
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const professionRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  //點擊按鈕滑動到專業技能函式
  const scrollToProfession = () => {
    // if (location.pathname !== "/") {
    //   // 如果不在首页，跳转回首页
    //   navigate("/");
    // }
    if (professionRef.current) {
      professionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  //點擊按鈕滑動到專案時間軸函式
  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  //點擊按鈕滑動到聯絡方式函式
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative w-screen text-center">
      {/* Navbar */}
      <HeaderNavBar
        scrollToProfession={scrollToProfession}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      {/* 主標題 */}
      <div className="absolute left-0 right-0 top-[20vh] z-10 text-[65px] font-black tracking-[0.3em] text-white lg:top-[30vh]">
        <p>
          I<span className="text-[#00D646]">'</span>m
        </p>
        <p className="">REX</p>
        <p className="">
          CHEN<span className="text-[#00D646]">.</span>
        </p>
        <p className="mt-10 text-[30px] font-thin tracking-[0.2em]">
          FRONT-END DEVELOPER
        </p>
      </div>
      {/* 簡介 */}
      <div className=" absolute top-[700px] z-10  bg-[#333B50] p-20 lg:top-[800px] lg:mx-[320px]">
        <section className="flex flex-col gap-14">
          <img src="/icon/R-Logo.png" alt="" className="mx-auto w-20" />
          <p className="h-60 overflow-y-auto text-center text-lg font-light leading-10 tracking-normal text-white xl:h-full">
            ​您好！我是Rex，歡迎來到我的網站。
            <br />
            我畢業於慈濟大學，並任職於Evolution探索教育工作了四年半，在這段期間，我承擔了多樣化的角色，包括規劃營隊、設計教案、廣告投放、課程講師等，這使我不斷挑戰自我，更展現了我對於新事物的快速適應與學習成長能力。
            <br />
            因個人規劃及未來發展等因素，於2023年9月決定轉職，故於2023年11月參與了台北商業大學的互動式前端網頁設計與開發實務班，學習HTML、CSS、JavaScript、TailwindCSS等前端知識，並同步自學相關的後端應用，包含Node.js、Express.js、MongoDB、Mongoose等，並於2024年1月開始第一個ＭERN專案建置，目前已完成此專案的架設（持續更新完善中）。​
            ​
          </p>
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1XmQweZAAiQ88optmXUKdakLwfu1GeZQG/view?usp=drive_link",
                "_blank",
              );
            }}
            className="mx-auto mt-6 border border-[#00D646] px-8 py-3 text-sm font-thin tracking-widest text-white transition duration-[600ms] hover:bg-[#00D646]"
          >
            DOWNLOAD RESUME
          </button>
        </section>
      </div>
      {/* Profession skill */}
      <div
        ref={professionRef}
        className="absolute left-0 right-0 top-[1400px] z-10 flex flex-col gap-5 lg:top-[1700px]"
      >
        <h2 className="text-[24px] font-extrabold tracking-[0.2em] text-white lg:text-[50px]">
          01 PROFESSIONAL
        </h2>
        <p className="text-[14px] font-normal tracking-[0.2em] text-white lg:text-[30px] lg:font-thin">
          MY KNOWLEDGE IN SOFTWARE
        </p>
        <div className="mx-8 flex justify-around gap-y-10 rounded-3xl bg-white/45 px-4 py-16 lg:mx-[320px] lg:flex-col lg:p-20">
          <ul className="flex flex-col justify-between gap-y-8 lg:flex-row">
            <li
              className={`h-28 w-28  bg-[url('/icon/profession-1.png')] bg-contain  bg-center bg-no-repeat delay-100 duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
            <li
              className={`h-28 w-28  bg-[url('/icon/profession-2.png')] bg-contain bg-center bg-no-repeat delay-300 duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
            <li
              className={`h-28 w-28  bg-[url('/icon/profession-3.png')] bg-contain bg-center bg-no-repeat delay-500 duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
            <li
              className={`h-28 w-28  bg-[url('/icon/profession-4.png')] bg-contain bg-center bg-no-repeat delay-700 duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
            <li
              className={`h-28 w-28  bg-[url('/icon/profession-5.png')] bg-contain bg-center bg-no-repeat delay-[900ms] duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
          </ul>
          <ul className="flex flex-col justify-around lg:flex-row lg:px-10">
            <li
              className={`h-28 w-28 bg-[url('/icon/profession-6.png')] bg-contain bg-center bg-no-repeat delay-[200ms] duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
            <li
              className={`h-28 w-28 bg-[url('/icon/profession-7.png')] bg-contain bg-center bg-no-repeat delay-[400ms] duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "5s", transition: "" }}
            ></li>
            <li
              className={`h-28 w-28 bg-[url('/icon/profession-8.png')] bg-contain bg-center  bg-no-repeat delay-[600ms] duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
            <li
              className={`h-28 w-28 bg-[url('/icon/profession-9.png')] bg-contain bg-center  bg-no-repeat delay-[800ms] duration-[2s] ${
                iconVisible ? "opacity-100" : "opacity-0"
              }`}
            ></li>
          </ul>
        </div>
      </div>
      {/* Project */}
      <div
        ref={projectRef}
        className="absolute left-0 right-0 top-[2500px] z-10 flex flex-col gap-5"
      >
        <h2 className="text-[24px] font-extrabold tracking-[0.2em] text-white lg:text-[50px]">
          02 PROJECT
        </h2>
        <p className="text-[20px] font-extrabold tracking-[0.2em] text-[#FFD96D] lg:text-[30px]">
          台北排球人地圖
          <br />
          TAIPEI VOLLEYBALL MAP
        </p>
        <p className="mb-10 text-[16px] font-thin tracking-[0.2em] text-white lg:text-[22px]">
          讓煩擾找球友變成輕鬆交朋友
        </p>
        {/* timeLine */}
        <div
          className={`duration-[2s]xw relative left-10 h-[650px] w-[2px] bg-[#00D646] lg:left-0 lg:mx-auto
          ${timeVisible.timeOne ? "opacity-100" : "opacity-0"}`}
        >
          {/* 時間1 */}
          <div
            className={`absolute -left-2 h-4 w-4 rounded-full bg-[#00D646] duration-[2s]
            ${timeVisible.timeOne ? "opacity-100" : "opacity-0"}`}
          >
            <article
              className={`absolute -top-2 left-8 w-[280px] text-left duration-[2s] lg:left-14 lg:w-[400px]
              ${timeVisible.timeOne ? "translate-x-0" : "-translate-x-full"}`}
            >
              <p className="text-sm tracking-wider text-[#00D646] lg:text-base">
                2023.11~2023.12
              </p>
              <p className="my-2 text-nowrap text-xl tracking-wider text-white lg:text-2xl">
                ​學習網站基礎
              </p>
              <p className="text-nowrap text-base font-light tracking-wider text-white lg:text-lg">
                HTML、CSS、JavaScript
              </p>
              <p className="text-base font-thin tracking-wider text-white">
                ​參加台北商業大學互動式網頁前端設計與網頁開發實務班，於課程中學習網頁開發基礎知識。
              </p>
            </article>
          </div>
          {/* 時間2 */}
          <div
            className={`absolute -left-2 top-48 h-4 w-4 rounded-full bg-[#00D646] duration-[2s]
            ${timeVisible.timeTwo ? "opacity-100" : "opacity-0"}`}
          >
            <article
              className={`absolute -top-2 left-8 w-[280px] text-left duration-[2s] lg:-left-[440px] lg:w-[400px] lg:text-right
              ${timeVisible.timeTwo ? "translate-x-0" : windowWidth > 1080 ? "translate-x-full" : "-translate-x-full"}`}
            >
              <p className="text-sm tracking-wider text-[#00D646] lg:text-base">
                2023.12-2024.01
              </p>
              <p className="my-2 text-xl tracking-wider text-white lg:text-2xl">
                ​自學基礎後端＆專案前期調研
              </p>
              <p className="text-base font-light tracking-wider text-white lg:text-lg">
                專案前期調研、同步自學基礎後端（Node.js、Express.js、MongoDB）
              </p>
              <p className="text-justify text-base font-thin tracking-wider text-white">
                因為想讓最後的專案成果有更多的實用性與交互功能，故決定開始自學後端相關知識來進行專案開發，同時也同步進行專案主題的前期調研工作，詳情簡報可點選此連結：
                <a
                  className="text-[#44BB43]"
                  href="https://pse.is/5lgdgb"
                  target="_blank"
                >
                  https://pse.is/5lgdgb
                </a>
              </p>
            </article>
          </div>
          {/* 時間3 */}
          <div
            className={`absolute -left-2 top-[500px] h-4 w-4 rounded-full bg-[#00D646] duration-[2s] lg:top-[440px]
            ${timeVisible.timeThree ? "opacity-100" : "opacity-0"}`}
          >
            <article
              className={`absolute -top-2 left-8 w-[280px] text-left duration-[2s] lg:left-14 lg:w-[400px]
            ${timeVisible.timeThree ? "translate-x-0" : "-translate-x-full"}`}
            >
              <p className="text-sm tracking-wider text-[#00D646] lg:text-base">
                2024.01~2023.02.22(持續更新中)
              </p>
              <p className="my-2 text-nowrap text-xl tracking-wider text-white lg:text-2xl">
                ​專案製作
              </p>
              <p className="text-nowrap text-base font-light tracking-wider text-white lg:text-lg">
                完整的MERN專案​
              </p>
              <p className="text-base font-thin tracking-wider text-white">
                ​使用React及TailwindCSS進行前端切版及樣式規劃，後端則使用Express和資料庫MongoDB進行交互。
              </p>
            </article>
          </div>
          {/* 時間4 */}
          <div
            className={`absolute -left-2 top-[650px] h-4 w-4 rounded-full bg-[#00D646] duration-[2s]
        ${timeVisible.timeFour ? "opacity-100" : "opacity-0"}`}
          ></div>
        </div>
        <h2
          className={`ml-8 mt-4 text-left text-xl font-medium tracking-widest text-white duration-[2s] lg:ml-0  lg:mt-8 lg:text-center lg:text-2xl
        ${timeVisible.timeFour ? "opacity-100" : "opacity-0"}`}
        >
          設計理念
        </h2>
        <div
          className={`overflow-hidden transition-all delay-[1s] duration-[2s] ease-in-out
          ${timeVisible.timeFour ? "h-[800px]" : "h-0"}
          `}
        >
          <div
            className={` transition-all delay-[1s] duration-[2s]
          ${timeVisible.timeFour ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col gap-5">
              <div className="mx-8 flex flex-col gap-y-4 rounded-2xl bg-white/45 px-4 py-2 lg:mx-[280px] lg:gap-y-8 lg:rounded-[80px] lg:px-20 lg:py-10">
                <p className="text-justify text-sm font-light leading-8 tracking-widest text-white lg:text-xl lg:font-normal">
                  ​我和夥伴（兩人小組）都是排球運動背景，​因此對排球圈的功能需求非常了解，在經過詳細的調研和問券調查驗證後，我們決定打造一個快速組隊及尋找球場的平台，專為需要尋找隊友的排球愛好者而設，我們的目標是消除揪團組隊所帶來的阻礙，讓出門運動變得更加順暢！
                </p>
                <button
                  onClick={() => {
                    navigate("/project");
                  }}
                  className="mx-auto rounded-lg border-[1px] border-[#FFD96D] bg-[#333B4F] px-2 py-1 text-sm text-[#FFD96D] transition duration-300 hover:border-[#333B4F] hover:bg-[#FFBC12] hover:text-[#333B4F] lg:px-4 lg:py-1 lg:text-lg"
                >
                  專案介紹{" >"}
                </button>
                <div className="overflow-hidden rounded-[14px] lg:rounded-[40px]">
                  <img src="/homePage.gif" alt="展示首頁操作" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div
        ref={contactRef}
        className="absolute left-0 right-0 top-[4000px] z-10 mx-10 bg-[#333B4F] pb-10 pt-0 text-center lg:top-[4450px] lg:mx-[300px] lg:h-[500px] lg:pt-10 "
      >
        <h2 className="py-8 text-2xl font-semibold tracking-[0.1em] text-white lg:text-[40px]">
          CONTACT
        </h2>
        <div className="mx-6 flex flex-col items-center text-base font-thin leading-6 tracking-wider text-white/70 lg:mx-0 lg:text-lg lg:leading-10">
          <p>
            歡迎任何工作邀約或接案機會！
            <br />
            若您有任何合作計畫或專案需求，請隨時與我聯繫
          </p>
          <div className="text-left tracking-widest text-white">
            <a
              className="hover:text-yellow-300"
              href="mailto:rex2713@gmail.com"
            >
              Gmail: rex2713@gmail.com
            </a>
            <p>Tel: 0937675528</p>
          </div>
          <br />
          <div className="flex gap-8">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chenyenwen940522"
              className="w-12"
            >
              <img src="/icon/Link-In.png" alt="Link-In-icon" />
            </a>
            {/* <a
              target="_blank"
              href="https://github.com/rex2713"
              className="w-12"
            >
              <img src="/icon/GitHub.png" alt="" />
            </a> */}
            <a
              target="_blank"
              href="https://line.me/ti/p/78gvfuhpP6"
              className="w-12"
            >
              <img src="/icon/Line.png" alt="" />
            </a>
          </div>
          <br />
          <p>期待與您的合作！</p>
        </div>
      </div>

      {/* 視差背景1-I'M REX CHEN. */}
      <div
        className="relative h-[1200px] min-w-full overflow-hidden"
        style={{ perspective: "1px" }}
      >
        <div
          className="absolute left-0 top-0 h-[1200px] w-full bg-[url('/IMG_6856.jpeg')] bg-cover"
          // 視差效果
          style={{ transform: `translateY(${scrollPosition * 0.6}px)` }}
        >
          <div className="absolute left-0 top-0 h-full w-full bg-[#324158] opacity-50"></div>
        </div>
      </div>

      {/* 視差背景2-Profession */}
      <div className="relative h-[1200px] w-screen overflow-hidden">
        <div
          className="h-[1200px] w-full bg-[url('/bg-1.jpg')] bg-cover blur-[3px]"
          style={{ transform: `translateY(${scrollPosition * 0.6 - 800}px)` }}
        >
          <div className="h-full w-full bg-[#333B50]/50"></div>
        </div>
      </div>
      {/* 視差背景3-Project timeLine */}
      <div className="relative h-[1700px] w-screen overflow-hidden lg:h-[2200px]">
        <div
          className="h-[1700px] w-full bg-[url('/bg-2.jpeg')] bg-cover lg:h-[2200px]"
          style={{ transform: `translateY(${scrollPosition * 0.6 - 1600}px)` }}
        >
          <div className="h-full w-full bg-[#4D5A79]/90"></div>
        </div>
      </div>
      {/* 視差背景4-Contact */}
      <div className="relative h-[360px] w-screen overflow-hidden lg:h-[500px]">
        <div
          className="h-[1000px] w-full bg-[url('/bg-3.jpg')] bg-cover lg:h-[1000px]"
          style={{ transform: `translateY(${scrollPosition * 0.6 - 2800}px)` }}
        >
          <div className="h-full w-full bg-[#182138]/80"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
