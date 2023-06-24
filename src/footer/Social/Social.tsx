import React from 'react';
import s from './Social.module.scss';

type SocialType = {
    link: string,
    img: string,
    alt: string
}

export const Social: React.FC<SocialType> = (props) => {

    const {link, img, alt} = props

    return (
        <div className={s.social}><a href={link}><img src={img} alt={alt}/></a></div>
    )
}