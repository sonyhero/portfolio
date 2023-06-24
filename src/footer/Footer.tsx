import s from './Footer.module.scss'
import React from 'react';
import {svgContacts} from '../contacts/svgContacts';
import {Social} from './Social/Social';

export const Footer: React.FC = () => {

    const socials = [
        {
            link: 'https://github.com/sonyhero',
            img: svgContacts.github,
            alt: 'github'
        },
        {
            link: 'mailto:27anton06@gmail.com',
            img: svgContacts.email,
            alt: 'email'
        },
        {
            link: 'https://t.me/o_an_ton',
            img: svgContacts.telegram,
            alt: 'telegram'
        },
        {
            link: 'https://www.linkedin.com/in/anton-acharatniuk',
            img: svgContacts.linkedin,
            alt: 'linkedin'
        }
    ]

    const mappedSocials = socials.map((s, index) => {
        return (
            <Social key={index} link={s.link} alt={s.alt} img={s.img}/>
        )
    })

    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                {/*<Tittle text={'Anton Acharatniuk'} style={textH2White}/>*/}
                <div>
                    <div className={s.title}><h3>YOU CAN FIND ME HERE</h3></div>
                    <div className={s.socialContainer}>
                        {mappedSocials}
                    </div>
                </div>
                <div className={s.titleFoot}><h6>2023 All rights reserved</h6></div>
            </div>
        </div>
    )
}