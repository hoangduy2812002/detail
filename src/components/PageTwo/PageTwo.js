import { useEffect, useState } from "react";
import pageStyle from "./index.module.scss";
import TitleNav from "../TitleNav";

export default function PageTwo() {

  const [offScreenDivs, setOffScreenDivs] = useState([]);
  const [visibleDivs, setVisibleDivs] = useState([]);

  useEffect(() => {

    // Hàm kiểm tra xem một phần tử có nằm trong phạm vi màn hình không
    const isElementInViewport = (el) => {
      let rect = el.getBoundingClientRect();
      const rectHeight = rect.height / 2 + rect.y;
      const clientHeight = document.documentElement.clientHeight
      return (
        rectHeight > clientHeight
      );
    };

    // Lấy tất cả các div có className là "square"
    const squareDivs = document.getElementsByClassName(pageStyle["square"]);
    // Kiểm tra các div không nằm trong phạm vi hiển thị
    const handleScroll = () => {
      const offScreenDivList = [];
      for (const div of squareDivs) {
        if (isElementInViewport(div)) {
          offScreenDivList.push(div.id);
        }
      }
      setOffScreenDivs(offScreenDivList);
    };

    // Gọi hàm handleScroll khi người dùng kéo scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },);

  useEffect(() => {
    setVisibleDivs(offScreenDivs);
  }, [offScreenDivs]);





  return (
    <>
      <div className={pageStyle["pageTwo"]}>
        <TitleNav title={'Management and supervision'}
          language={'React.js'}
          description={'Manage environmental monitoring data of state agencies'}
        />
        <p className={pageStyle['down-the-line']}></p>
        <div id='divOne' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divOne') ? 'out' : 'running']}`} >
          Design home page interface, configuration, statistics, login, personal account management, system configuration, some charts,...
        </div>
        <div id='divTwo' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divTwo') ? 'out' : 'running']}`} >
          Provides bilingual functions in English and Vietnamese
        </div>
        <div id='divThree' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divThree') ? 'out' : 'running']}`} >
          Change light and dark theme color
        </div>
        <div id='divFour' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divFour') ? 'out' : 'running']}`}>
          Responsive web design: Desktop ,Tablet, Mobile
        </div>
      </div>
    </>
  )
}