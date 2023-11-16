import { useEffect, useState } from "react";
import pageStyle from "./index.module.scss";
import TitleNav from "../TitleNav";



export default function PageThree() {

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


  return <>
    <div className={pageStyle["pageThree"]}>
      <TitleNav title={'Quản lý nhân sự cho công ty'}
        language={'React.js'}
        description={'Quản lý tiến độ công việc, điểm danh cho nhân viên, báo cáo chấm công, quản lý task'}
      />
      <p className={pageStyle['down-the-line']}></p>
      <div id='divOne' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divOne') ? 'out' : 'running']}`} >
        Thiết kế giao diện trang chủ, thống kê, đăng nhập, quản lý tài khoản cá nhân,
        thêm người dùng, phân quyền,
        một số biểu đồ,..
      </div>
      <div id='divTwo' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divTwo') ? 'out' : 'running']}`} >
        Có thêm thành viên và kéo thả tiến độ task như các phần mềm quản lý dự án, làm việc nhóm, ví dụ như trello
      </div>
      <div id='divThree' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divThree') ? 'out' : 'running']}`} >
        Đổi màu theme light và dark
      </div>
      <div id='divFour' className={`${pageStyle["square"]} ${pageStyle[visibleDivs.includes('divFour') ? 'out' : 'running']}`}>
        Responsive web design (RWD), Desktop ,Tablet, Mobile
      </div>
    </div>
  </>
}