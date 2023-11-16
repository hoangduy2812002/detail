import { useEffect, useState } from "react";
import pageStyle from "./index.module.scss";
import TitleNav from "../TitleNav";

export default function PageFour() {

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
      <div className={pageStyle["pageFour"]}>
        <TitleNav title={'Individual projects'}
          language={'React.js & java & node.js'}
          description={'Social networks like Facebook: Create posts, make friends, comment, text, share,...'}
        />
        <p className={pageStyle['down-the-line']}></p>
        <div id='divOne' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divOne') ? 'out' : 'running']}`} >
          User interface (UI) design
        </div>
        <div id='divTwo' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divTwo') ? 'out' : 'running']}`} >
          Use the dock to message, like, comment, notify and create posts in real time
        </div>
        <div id='divThree' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divThree') ? 'out' : 'running']}`} >
          The back-end uses java and node.js as server sockets
        </div>
        <div id='divFour' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divFour') ? 'out' : 'running']}`}>
          Responsive web design: Desktop ,Tablet, Mobile
        </div>
        <div className={pageStyle['footer']}>
          <div className={pageStyle['footer-content-email']}>
            <div>Email: </div> &nbsp;
            <div className={pageStyle['footer-content-link']}>hoangduy2812002@gmail.com</div>
          </div>
          <div className={pageStyle['footer-content-tiktok']}
            onClick={() => {
              window.open("https://www.tiktok.com/@dtapcode", "_blank");
            }}
          >
            <div>Tiktok: </div> &nbsp;
            <div className={pageStyle['footer-content-link']}
            >
              https://www.tiktok.com/@dtapcode
            </div>
          </div>
        </div>
      </div>
    </>
  )
}