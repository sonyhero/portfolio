import React from 'react';
import s from './BuirgerButton.module.scss'

type Props = {
    isOpen: boolean
    setIsOpen: () => void
}

export const BurgerButton = ({isOpen, setIsOpen}: Props) => {
    return (
        <button className={`${s.navToggle} ${isOpen ? s.opened : ''}`} onClick={setIsOpen}>
            <span className={s.barTop}></span>
            <span className={s.barMid}></span>
            <span className={s.barBot}></span>
        </button>
    )
}
