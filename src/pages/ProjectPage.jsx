import React from "react";
import HeaderNavBar from "../component/HeaderNavBar";
import Footer from "../component/Footer";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "../css/swiper.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    // window.scrollTo(0, 0);
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log(window.scrollY);
      setScrollPosition(position);
    };

    //建立滾動事件監聽
    window.addEventListener("scroll", handleScroll);
    //卸載元件時清除事件監聽
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative h-[3300px] w-screen overflow-hidden md:h-[4200px]"
        style={{ perspective: "1px" }}
      >
        <div
          className="absolute left-0 top-0 h-[1400px] w-full bg-[url('/cis/bg-cis7.jpeg')] bg-cover md:h-[1700px]"
          // 視差效果
          style={{ transform: `translateY(${scrollPosition * 0.8}px)` }}
        >
          <div className="h-full w-full bg-[#324158]/80"></div>
        </div>
      </div>
      <HeaderNavBar />
      {/* banner */}
      <div className="absolute left-0 right-0 top-0 mx-auto lg:w-[1000px]">
        <div className="pt-10">
          <div className="relative h-full w-full">
            <img src="/banner.gif" alt="banner" />
            <div className="absolute top-0 h-full w-full bg-gray-700/40"></div>
            {/* logo & 主標題 */}
            <div className="absolute bottom-0 flex w-full justify-between px-8">
              <figure className="max-w-[300px] lg:max-w-[400px]">
                <img
                  className="object-contain"
                  src="/cis/CIS-logo1.png"
                  alt="LOGO"
                />
              </figure>
              <h1
                className="hidden text-nowrap  text-[40px] font-medium leading-[120px] tracking-wider text-white md:block lg:text-[60px]"
                style={{ textShadow: "3px 3px 2px black" }}
              >
                台北排球人地圖
              </h1>
            </div>
          </div>
        </div>
        {/* 主要內容區域 */}
        <div className="h-full w-full bg-white/10 pb-16 md:pb-20">
          {/* 網站設計 */}
          <h3 className="px-8 pb-2 pt-8 text-left text-xl tracking-wider text-white md:text-center md:text-[30px]">
            網站設計
          </h3>
          <p className="px-8 text-center text-sm font-thin leading-6 tracking-wide text-white md:text-base md:leading-10 lg:px-40">
            運用藍色和黃色作為網頁的主色調，以捷運的色彩為靈感，將我們網站的核心"地圖"與捷運的代表色系相融合，打造獨特而鮮明的視覺形象。
          </p>
          <div className="px-8 md:px-0">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                depth: 0,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <img src="/cis/index.png" />
                <h3 className="absolute bottom-0 w-full bg-white/20 text-center text-lg font-normal  text-[white] md:text-xl">
                  主視覺
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/cis/web_design.png" />
                <h3 className="absolute bottom-0 w-full bg-white/20 text-center text-xl font-normal text-[white]">
                  網站規劃
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/cis/CIS_Logo.jpg" />
                <h3 className="absolute bottom-0 w-full bg-white/20 text-center text-xl font-normal text-[white]">
                  Logo設計
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/cis/CIS_Brand_colors.jpg" />
                <h3 className="absolute bottom-0 w-full bg-white/20 text-center text-xl font-normal text-[white]">
                  顏色設計
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/cis/CIS_Font.jpg" />
                <h3 className="absolute bottom-0 w-full bg-white/20 text-center text-xl font-normal text-[white]">
                  字體設計
                </h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/cis/map.png" />
                <h3 className="absolute bottom-0 w-full bg-white/20 text-center text-xl font-normal text-[white]">
                  地圖設計
                </h3>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* 登入系統 */}
          <h3 className="px-8 pb-2 pt-8 text-left text-xl tracking-wider text-white  md:pb-2 md:text-center md:text-[30px]">
            登入系統
          </h3>
          <p className="px-8 text-center text-sm font-thin leading-6 tracking-wide text-white md:text-base md:leading-10 lg:px-40">
            利用JWT進行密碼加密，並以LocalStorage來儲存使用者登入資料。同時，使用Joi插件進行資料驗證，給用戶更加精確的輸入錯誤提醒。預設十二種頭像選擇，另使用multer進行檔案上傳，提供給想自行上傳頭像的用戶。
          </p>
          <figure className="mx-8 md:mx-10">
            <img
              className="mt-4 w-full rounded-xl lg:rounded-3xl"
              src="/cis/login.gif"
              alt="login.gif"
            />
          </figure>

          {/* 線 */}
          <div className="mx-auto my-4 hidden h-10 w-[2px] bg-white md:block lg:h-20"></div>

          {/* 球場介紹 */}
          <h3 className="px-8 pt-8 text-left text-xl tracking-wider text-white md:pb-2 md:pt-0 md:text-center md:text-[30px]">
            球場頁面
          </h3>

          {/* 線 */}
          <div className="mx-auto mt-4  hidden h-6 w-[2px] bg-white md:block"></div>
          <div className="mx-[26%] hidden  h-[2px] bg-white md:block"></div>
          <div className="mx-[26%] hidden  h-6 border-l-[2px] border-r-[2px] md:block"></div>

          {/* RWD手機版 */}
          <div className="md:hidden">
            <p className="pt-2 text-center text-base tracking-wider  text-white md:pb-2 md:text-[30px]">
              使用者帳戶
            </p>
            <p className="px-8 text-center text-sm font-thin leading-6 tracking-wide text-white md:text-base md:leading-10 lg:px-40">
              進入球場頁面，可看到目前所有台北市的排球場，地圖上緣有地區按鈕，點擊可滑動到該區域。另有詳細資料按鈕，點擊可進入球場詳細資料頁面。
            </p>
            <figure className="mx-8 md:mx-10">
              <img
                className="mt-4 w-full rounded-xl lg:rounded-3xl"
                src="/cis/map_member.gif"
                alt="map_member.gif"
              />
            </figure>
            <p className="pt-2 text-center text-base tracking-wider  text-white md:pb-2 md:text-[30px]">
              管理員帳戶
            </p>
            <p className="px-8 text-center text-sm font-thin leading-6 tracking-wide text-white md:text-base md:leading-10 lg:px-40">
              如果使用管理員帳號登入，地圖頁面會多出"管理球場"，點擊可進入球場後台，功能包括新建場地、刪除場地、修改場地（重新上傳照片）等。
            </p>
            <figure className="mx-8 md:mx-10">
              <img
                className="mt-4 w-full rounded-xl lg:rounded-3xl"
                src="/cis/map_admin.gif"
                alt="map_admin.gif"
              />
            </figure>
          </div>
          {/* RWD平板版本>768 */}
          <div className="hidden justify-center pt-6 md:flex">
            <div className="w-full lg:pl-8 lg:pr-4">
              <div className="pl-4 pr-2 text-center font-thin tracking-wide text-white lg:px-8">
                <p className="text-nowrap pb-2 text-xl font-normal">
                  使用者帳戶
                </p>
                <p className="text-sm leading-6 md:text-base md:leading-10">
                  進入球場頁面，可看到目前所有台北市的排球場，地圖上緣有地區按鈕，點擊可滑動到該區域。點擊詳細資訊則可進入球場詳細資料頁面。
                </p>
              </div>
              <figure className="ml-2 mr-1">
                <img
                  className="mt-4 w-full rounded-xl lg:mx-auto lg:rounded-3xl"
                  src="/cis/map_member.gif"
                  alt="map_member.gif"
                />
              </figure>
            </div>
            <div className="w-full lg:pl-4 lg:pr-8">
              <div className="pl-2 pr-4 text-center font-thin tracking-wide text-white lg:px-8">
                <p className="text-nowrap pb-2 text-xl font-normal">
                  管理員帳戶
                </p>
                <p className="text-sm leading-6 md:text-base md:leading-10">
                  如果使用管理員帳號登入，地圖頁面會多出"管理球場"，點擊可進入球場後台，功能包括新建場地、刪除場地、修改場地（重新上傳照片）等。
                </p>
              </div>
              <figure className="ml-1 mr-2">
                <img
                  className="mx-auto mt-4 rounded-xl lg:rounded-3xl"
                  src="/cis/map_admin.gif"
                  alt="map_admin.gif"
                />
              </figure>
            </div>
          </div>

          {/* 線 */}
          <div className="mx-[26%] mt-6 hidden h-6 border-l-[2px] border-r-[2px] md:block lg:h-16"></div>
          <div className="mx-[26%] hidden h-[2px] bg-white md:block"></div>
          <div className="mx-auto mb-4 hidden h-6 w-[2px] bg-white md:block lg:h-16"></div>

          {/* 組隊系統 */}
          <h3 className="px-8 pb-2 pt-8 text-left text-xl tracking-wider text-white md:pt-0 md:text-center md:text-[30px]">
            組隊系統
          </h3>
          <p className="px-8 text-center text-sm font-thin leading-6 tracking-wide text-white md:px-10 md:text-base md:leading-10 lg:px-40">
            使用MongoDB建立隊伍、使用者、及球場資料庫，並使用Express進行伺服器架設。非會員用戶僅可查看目前隊伍列表，如想使用加入隊伍或是創建隊伍功能需登入帳戶後，才可操作。
          </p>
          <figure className="lg:px-auto mx-8 md:mx-10">
            <img
              className="mt-4 w-full rounded-xl lg:rounded-3xl"
              src="/cis/team_login.gif"
              alt="team_login.gif"
            />
          </figure>

          {/* 線 */}
          <div className="mt-4 hidden w-full justify-center lg:flex">
            <div className="h-6 w-[30%] lg:h-16"></div>
            <div className="h-6 w-[30%] border-b-[2px] border-l-[2px] border-white lg:h-16"></div>
          </div>
          <div className="hidden w-full justify-center lg:flex">
            <div className="h-6 w-[30%] lg:h-16"></div>
            <div className="h-6 w-[30%] border-r-[2px] border-white lg:h-16"></div>
          </div>

          {/* team-join & create */}
          <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
            <div className="w-full px-8 lg:pl-8 lg:pr-0">
              <img
                className="mx-auto mt-4 rounded-xl lg:rounded-3xl"
                src="/cis/team_joinTeam.gif"
                alt="team_joinTeam.gif"
              />
            </div>
            <div className="px-8 text-center font-thin leading-10 tracking-wide text-white lg:w-[600px]">
              <p className="text-nowrap pb-2 pt-4 text-base font-normal md:text-xl lg:pt-0">
                加入隊伍＆創建隊伍
              </p>
              <p className="text-sm leading-6 md:text-base md:leading-10">
                在已登入的狀態下，可在隊伍列表頁面尋找想加入的隊伍，點擊＋號即可加入該隊伍，如果已在隊伍中則會跳出通知訊息。創建隊伍頁面，除了隊伍資料填寫以外，系統會自動從使用者資料庫中撈取隨機十筆用戶，讓隊長可以從中挑選隊友加入隊伍。
              </p>
            </div>
          </div>

          {/*  線 */}
          <div className="hidden w-full justify-center lg:flex">
            <div className="h-6 w-[30%] lg:h-16"></div>
            <div className="h-6 w-[30%] border-r-[2px] border-white lg:h-16"></div>
          </div>
          <div className="hidden w-full justify-center lg:flex">
            <div className="h-6 w-[30%] border-l-[2px] border-t-[2px] border-white lg:h-16"></div>
            <div className="h-6 w-[30%] border-t-[2px] border-white lg:h-16 "></div>
          </div>

          {/* team-message */}
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="px-8 text-center font-thin leading-10 tracking-wide text-white lg:w-[600px]">
              <p className="pb-2 pt-4 text-base font-normal lg:pt-0 lg:text-xl">
                隊伍通訊
              </p>
              <p className="text-sm leading-6 md:text-base md:leading-10">
                同一隊伍的隊員，可在隊伍管理頁面中，點擊"詳細資訊"按鈕，進入隊伍頁面，底部的留言板可供隊友們進行溝通交流。
              </p>
            </div>
            <div className="w-full px-8 lg:pl-0 lg:pr-8">
              <img
                className="mx-auto mt-4 rounded-xl lg:rounded-3xl"
                src="/cis/team_message.gif"
                alt="team_joinTeam.gif"
              />
            </div>
          </div>
          <div className="mt-16 flex justify-center gap-10 text-white lg:gap-40">
            <button
              onClick={() => {
                window.open("https://tvm-0wj4.onrender.com/", "_blank");
              }}
              className="text-nowrap border-[1px] border-[#FFBC12] bg-[#333B4F] px-4 py-1 text-base text-[#FFBC12] transition duration-300 hover:border-[#333B4F] hover:bg-[#FFBC12] hover:text-[#333B4F] lg:px-8 lg:py-2 lg:text-xl"
            >
              台北排球人地圖
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="text-nowrap border-[1px] border-[#FFBC12] bg-[#333B4F] px-4 py-1 text-base text-[#FFBC12] transition duration-300 hover:border-[#333B4F] hover:bg-[#FFBC12] hover:text-[#333B4F] lg:px-8 lg:py-2 lg:text-xl"
            >
              回到首頁
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectPage;
