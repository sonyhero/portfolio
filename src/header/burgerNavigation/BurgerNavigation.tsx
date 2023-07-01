import React, {useState} from 'react';
import s from "./BurgerNavigation.module.scss";
import { Link } from "react-scroll";
import burger from "../../assets/burger.svg";

export const BurgerNavigation = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link to="main" activeClass={s.active} spy={true} smooth={true} offset={-70} duration={500}>
                    Main
                </Link>
                <Link to="skills" activeClass={s.active} spy={true} smooth={true} offset={-70} duration={500}>
                    Skills
                </Link>
                <Link to="projects" activeClass={s.active} spy={true} smooth={true} offset={-70} duration={500}>
                    Projects
                </Link>
                <Link to="contacts" activeClass={s.active} spy={true} smooth={true} offset={-70} duration={500}>
                    Contacts
                </Link>
            </div>
            <div className={s.burgerBtn} onClick={onBurgerBtnClick}>
                <img src={burger} alt="burger" />
            </div>
        </div>
    );
};