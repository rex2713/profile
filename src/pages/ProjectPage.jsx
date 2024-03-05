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
    window.scrollTo(0, 0);
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
        className="relative h-[4000px] w-screen overflow-hidden"
        style={{ perspective: "1px" }}
      >
        <div
          className="absolute left-0 top-0 h-[1500px] w-full bg-[url('/cis/bg-cis7.jpeg')] bg-cover"
          // 視差效果
          style={{ transform: `translateY(${scrollPosition * 0.8}px)` }}
        >
          <div className="h-full w-full bg-[#324158]/80"></div>
        </div>
      </div>
      <HeaderNavBar />
      {/* banner */}
      <div className="absolute left-0 right-0 top-0 mx-auto w-[1000px]">
        <div className="pt-10">
          <div className="relative h-full w-full">
            <img src="/banner.gif" alt="banner" />
            <div className="absolute top-0 h-full w-full bg-gray-700/40"></div>
            {/* logo & 主標題 */}
            <div className="absolute bottom-0 flex w-full justify-between px-8">
              <img src="/cis/CIS-logo1.png" width={400} alt="LOGO" />
              <h1
                className="text-[60px] font-medium leading-[120px] tracking-wider text-white"
                style={{ textShadow: "3px 3px 2px black" }}
              >
                台北排球人地圖
              </h1>
            </div>
          </div>
        </div>
        {/* 主要內容區域 */}
        <div className="h-[3550px] w-full bg-white/10">
          {/* 網站設計 */}
          <h3 className="pt-16 text-center text-[30px] tracking-wider text-white">
            網站設計
          </h3>
          <p className="px-40 text-center font-thin leading-10 tracking-wide text-white">
            運用藍色和黃色作為網頁的主色調，以捷運的色彩為靈感，將我們網站的核心"地圖"與捷運的代表色系相融合，打造獨特而鮮明的視覺形象。
          </p>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              depth: 0,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide>
              <img src="/cis/index.png" />
              <h3 className="absolute bottom-0 w-full bg-white/20 text-center text-xl font-normal text-[white]">
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
          {/* 登入系統 */}
          <h3 className="pt-16 text-center text-[30px] tracking-wider text-white">
            登入系統
          </h3>
          <p className="px-40 text-center font-thin leading-10 tracking-wide text-white">
            利用JWT進行密碼加密，並以LocalStorage來儲存使用者登入資料。同時，使用Joi插件進行資料驗證，給用戶更加精確的輸入錯誤提醒。預設十二種頭像選擇，另使用multer進行檔案上傳，提供給想自行上傳頭像的用戶。
          </p>
          <img
            className="mx-auto mt-4 rounded-3xl"
            src="/cis/login.gif"
            alt="login.gif"
          />

          {/* 線 */}
          <div className="mx-auto my-4 h-20 w-[2px] bg-white"></div>

          {/* 球場介紹 */}
          <h3 className="text-center text-[30px] tracking-wider text-white">
            球場頁面
          </h3>

          {/* 線 */}
          <div className="mx-auto mt-4 h-6 w-[2px] bg-white"></div>
          <div className="mx-[26%] h-[2px] bg-white"></div>
          <div className="mx-[26%] h-6 border-l-[2px] border-r-[2px]"></div>

          <div className="flex justify-center pt-6">
            <div className="w-full pl-8 pr-4">
              <div className="px-8 text-center font-thin leading-10 tracking-wide text-white">
                <p className="pb-2 text-xl font-normal">使用者帳戶</p>
                <p>
                  進入球場頁面，可看到目前所有台北市的排球場，地圖上緣有地區按鈕，點擊可滑動到該區域，另詳細資料按鈕，點擊可進入球場詳細資料頁面。
                </p>
              </div>
              <img
                className="mx-auto mt-4 rounded-3xl"
                src="/cis/map_member.gif"
                alt="map_member.gif"
              />
            </div>
            <div className="w-full pl-4 pr-8">
              <div className="px-8 text-center font-thin leading-10 tracking-wide text-white">
                <p className="pb-2 text-xl font-normal">管理員帳戶</p>
                <p>
                  如果使用管理員帳號登入，地圖頁面會多出"管理球場"，點擊可進入球場後台，功能包括新建場地、刪除場地、修改場地（重新上傳照片）等。
                </p>
              </div>
              <img
                className="mx-auto mt-4 rounded-3xl"
                src="/cis/map_admin.gif"
                alt="map_admin.gif"
              />
            </div>
          </div>

          {/* 線 */}
          <div className="mx-[26%] mt-6 h-16 border-l-[2px] border-r-[2px]"></div>
          <div className="mx-[26%] h-[2px] bg-white"></div>
          <div className="mx-auto mb-4 h-16 w-[2px] bg-white"></div>

          {/* 組隊系統 */}
          <h3 className="text-center text-[30px] tracking-wider text-white">
            組隊系統
          </h3>
          <p className="px-40 text-center font-thin leading-10 tracking-wide text-white">
            使用MongoDB建立隊伍、使用者、及球場資料庫，並使用Express進行伺服器架設。非會員用戶僅可查看目前隊伍列表，如想加入隊伍或是創建隊伍需登入帳戶後可操作。
          </p>
          <img
            className="mx-auto mt-4 rounded-3xl"
            src="/cis/team_login.gif"
            alt="team_login.gif"
          />

          {/* 線 */}
          <div className="mt-4 flex w-full justify-center">
            <div className="h-16 w-[30%]"></div>
            <div className="h-16 w-[30%] border-b-[2px] border-l-[2px] border-white"></div>
          </div>
          <div className="flex w-full justify-center">
            <div className="h-16 w-[30%]"></div>
            <div className="h-16 w-[30%] border-r-[2px] border-white"></div>
          </div>

          {/* team-join & create */}
          <div className="flex items-center justify-between">
            <div className="w-full pl-8">
              <img
                className="mx-auto mt-4 rounded-3xl"
                src="/cis/team_joinTeam.gif"
                alt="team_joinTeam.gif"
              />
            </div>
            <div className="w-[600px] px-8 text-center font-thin leading-10 tracking-wide text-white">
              <p className="pb-2 text-xl font-normal">加入隊伍＆創建隊伍</p>
              <p>
                在已登入的狀態下，可在隊伍列表頁面尋找想加入的隊伍，點擊＋號即可加入該隊伍，如果已在隊伍中則會跳出通知訊息。創建隊伍頁面，除了隊伍資料填寫以外，系統會自動從使用者資料庫中撈取隨機十筆用戶，讓隊長可以從中挑選隊友加入隊伍。
              </p>
            </div>
          </div>

          {/*  線 */}
          <div className="flex w-full justify-center">
            <div className="h-16 w-[30%]"></div>
            <div className="h-16 w-[30%] border-r-[2px] border-white"></div>
          </div>
          <div className="flex w-full justify-center">
            <div className="h-16 w-[30%] border-l-[2px] border-t-[2px] border-white"></div>
            <div className="h-16 w-[30%] border-t-[2px] border-white "></div>
          </div>

          {/* team-message */}
          <div className="flex items-start justify-between">
            <div className="w-[600px] px-8 pt-6 text-center font-thin leading-10 tracking-wide text-white">
              <p className="pb-2 text-xl font-normal">隊伍通訊</p>
              <p>
                同一隊伍的隊員，可在隊伍管理頁面中，點擊"詳細資訊"按鈕，進入隊伍頁面，底部的留言板可供隊友們進行溝通交流。
              </p>
            </div>
            <div className="w-full pr-8">
              <img
                className="mx-auto mt-4 rounded-3xl"
                src="/cis/team_message.gif"
                alt="team_joinTeam.gif"
              />
            </div>
          </div>
          <div className="mt-16 flex justify-center gap-40 text-white">
            <button
              onClick={() => {
                window.open("https://tvm-0wj4.onrender.com/", "_blank");
              }}
              className="border-[1px] border-[#FFBC12] bg-[#333B4F] px-8 py-2 text-xl text-[#FFBC12] transition duration-300 hover:border-[#333B4F] hover:bg-[#FFBC12] hover:text-[#333B4F]"
            >
              台北排球人地圖
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="border-[1px] border-[#FFBC12] bg-[#333B4F] px-8 py-2 text-xl text-[#FFBC12] transition duration-300 hover:border-[#333B4F] hover:bg-[#FFBC12] hover:text-[#333B4F]"
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
