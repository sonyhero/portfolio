import s from './Header.module.scss'
import {Navigation} from './navigation/Navigation';
import {BurgerNavigation} from './burgerNavigation/BurgerNavigation';
import {useEffect, useState} from 'react';

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={scrolled ? `${s.header} ${s.scrolled}` : s.header}>
            <Navigation/>
            <BurgerNavigation/>
        </div>
    )
}