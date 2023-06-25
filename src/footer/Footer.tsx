import s from './Footer.module.scss'
import React from 'react';
import {svgSocials} from '../assets/svgContacts/svgSocials';

export const Footer: React.FC = () => {

    const socials = [
        {
            url: 'https://github.com/sonyhero',
            img: {backgroundImage: `url(${svgSocials.github})`}
        },
        {
            url: 'https://instagram.com/o.an_ton',
            img: {backgroundImage: `url(${svgSocials.instagram})`}
        },
        {
            url: 'https://t.me/o_an_ton',
            img: {backgroundImage: `url(${svgSocials.telegram})`}
        },
        {
            url: 'https://www.linkedin.com/in/anton-acharatniuk',
            img: {backgroundImage: `url(${svgSocials.linkedin})`}
        }
    ]

    const mappedSocials = socials.map((el, index) => {
        return (
            <a
                key={index}
                href={el.url}
                style={el.img}
                className={s.social}
                target="_blank"
                rel="noreferrer"
            ></a>
        )
    })

    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                    <h3 className={s.title}>YOU CAN FIND ME HERE</h3>
                    <div className={s.socialContainer}>
                        {mappedSocials}
                    </div>
                <div className={s.titleFoot}><h6>2023 All rights reserved</h6></div>
            </div>
        </div>
    )
}