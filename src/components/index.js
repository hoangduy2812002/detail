import React, { useEffect, useState } from 'react';
import "./index.scss"
import PageOne from './PgaeOne/PageOne';
import PageTwo from './PageTwo/PageTwo';
import PageThree from './PageThree/PageThree';
import PageFour from './PageFour/PageFour';

export default function Home() {
    const [activeDiv, setActiveDiv] = useState(1);
    const [page, setPage] = useState(1);
    const [activeNav, setActiveNav] = useState(true);



    const handleNavClick = (divNumber) => {
        setActiveDiv(divNumber);
        const element = document.getElementById(`div${divNumber}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    useEffect(() => {
        // Hàm kiểm tra xem một phần tử có nằm trong phạm vi màn hình không
        const handleScroll = () => {
            const elementDivOne = document.getElementById('div1');

            const clientHeight = document.documentElement.clientHeight;
            let rectOne = elementDivOne.getBoundingClientRect();
            const rectHeightOne = rectOne.bottom + rectOne.y;

            const elementDivTwo = document.getElementById('div2');
            let rectTwo = elementDivTwo.getBoundingClientRect();
            const rectHeightTwo = rectTwo.bottom + rectTwo.y;

            const elementDivThree = document.getElementById('div3');
            let rectThree = elementDivThree.getBoundingClientRect();
            const rectHeightThree = rectThree.bottom + rectThree.y;

            const elementDivFour = document.getElementById('div4');
            let rectFour = elementDivFour.getBoundingClientRect();
            const rectHeightFour = rectFour.bottom + rectFour.y;

            if (rectHeightOne > clientHeight / 2 && rectHeightTwo > 0 && rectHeightThree > 0 && rectHeightFour > 0) {
                setPage(1)
            }

            if (rectHeightOne < 0 && rectHeightTwo > 0 && rectHeightThree > 0 && rectHeightFour > 0) {
                setPage(2)
            }

            if (rectHeightTwo < 0 && rectHeightThree > 0 && rectHeightFour > 0) {
                setPage(3)
            }

            if (rectHeightThree < 0) {
                setPage(4)
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => {

            window.removeEventListener("scroll", handleScroll);
        };
    },);

    useEffect(() => {
        let timer;
        setTimeout(() => {
            setActiveNav(false)
        }, 2000)
        const handleMouseMove = () => {
            resetTimer();
        };

        const handleScroll = () => {
            resetTimer();
        };

        const resetTimer = () => {
            setActiveNav(true)
            clearTimeout(timer);
            timer = setTimeout(() => {
                setActiveNav(false)
            }, 2000);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <nav
                className='nav'
            >
                {activeNav && <>
                    <button className={activeDiv === 1 || page === 1 ? `btnNav ${page === 1 ? 'active' : ''}` : 'btnNav'} onClick={() => handleNavClick(1)}>1</button>
                    <button className={activeDiv === 2 || page === 2 ? `btnNav ${page === 2 ? 'active' : ''}` : 'btnNav'} onClick={() => handleNavClick(2)}>2</button>
                    <button className={activeDiv === 3 || page === 3 ? `btnNav ${page === 3 ? 'active' : ''}` : 'btnNav'} onClick={() => handleNavClick(3)}>3</button>
                    <button className={activeDiv === 4 || page === 4 ? `btnNav ${page === 4 ? 'active' : ''}` : 'btnNav'} onClick={() => handleNavClick(4)}>4</button>
                </>
                }

            </nav>
            <div id="div1" >
                <PageOne handleNavClick={handleNavClick} />
            </div>
            <div id="div2">
                <PageTwo handleNavClick={handleNavClick} />
            </div>
            <div id="div3">
                <PageThree />
            </div>
            <div id="div4">
                <PageFour />
            </div>

        </>
    );
}
