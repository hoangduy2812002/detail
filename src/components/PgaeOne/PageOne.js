
import pageStyle from "./index.module.scss";

export default function PageOne({handleNavClick}) {


    return (
        <>
            <div className={pageStyle['pageOne']}>
                <h1>Welcome To Project</h1>
                <div style={{fontSize:'25px'}}>Đặng Hoàng Duy</div>
                <div className={pageStyle['scrollDown']}>SCROLL DOWN
                <i className={`${pageStyle["icon"]} fa fa-angle-down`} onClick={(e)=>{handleNavClick(2)}}></i></div>
                
            </div>
        </>
    )
}