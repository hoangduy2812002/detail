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
        <TitleNav title={'Dự án cá nhân'}
          language={'React.js & java & node.js'}
          description={'Mạng xã hội giống facebook: Tạo bài viết, kết bạn, comment, nhắn tin, share,... '}
        />
        <p className={pageStyle['down-the-line']}></p>
        <div id='divOne' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divOne') ? 'out' : 'running']}`} >
          Thiết kế giao diện
        </div>
        <div id='divTwo' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divTwo') ? 'out' : 'running']}`} >
          Dùng socket làm chức năng nhắn tin, like, comment, thông báo, tạo bài viết real time
        </div>
        <div id='divThree' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divThree') ? 'out' : 'running']}`} >
          Backend dùng java và node.js làm server socket
        </div>
        <div id='divFour' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divFour') ? 'out' : 'running']}`}>
          Responsive web design (RWD), Desktop ,Tablet, Mobile
        </div>
        <div className={pageStyle['end']}>
          <div>Contact: </div> &nbsp; 
          <div className={pageStyle['end-email']}>hoangduy2812002@gmail.com</div>
        </div>
      </div>
    </>
  )
}