import React from 'react';
import s from './Button.module.scss';

type ButtonType = {
    name: string,
    link?: string
}

export const Button: React.FC<ButtonType> = ({name, link}) => {
    return (
        <><a className={s.btn} href={link}>{name}</a></>
    )
}