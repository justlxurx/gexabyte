import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import * as S from './style'
import {scrollIcon} from "@public/icons";


const ScrollButton:React.FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false)

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false)
        };
        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, [])

    const arrName = ['main-block', 'stats-block', 'services-block', 'blockchain-block', 'news-block']

    const scrollToElement = () => {
        const elements = arrName.map((item, index) => {
            const element = document.getElementById(item);
            if (element) {
                const cord = element.getBoundingClientRect()
                if (cord.y > 0) {
                    return null
                }
                if (cord.y < -800 && arrName.length - 1 === index) {
                    return 0
                }
                return cord.top + window.pageYOffset - 80
            }
        })
        const filterElem = elements.filter((item) => item !== null)
        window.scrollTo({top: filterElem[filterElem.length - 1] as number, behavior: 'smooth'});
    }

    const handeToScrollTop = () => {
        scrollToElement()
    }
    return (
        <>
            { showButton
                ?   <S.ScrollButton onClick={handeToScrollTop}>
                        <Image src={scrollIcon} alt={'scrollIcon'}/>
                    </S.ScrollButton>
                : null
            }
        </>
    );
};

export default ScrollButton;
