import s from './Footer.module.scss'
import React from 'react';
import {svgContacts} from '../contacts/svgContacts';
import {Social} from './Social/Social';

export const Footer: React.FC = () => {

    const socials = [
        {
            id: '1',
            link: 'https://github.com/sonyhero',
            img: svgContacts.github,
            alt: 'github'
        },
        {
            id: '2',
            link: 'mailto:27anton06@gmail.com',
            img: svgContacts.email,
            alt: 'email'
        },
        {
            id: '3',
            link: 'https://t.me/o_an_ton',
            img: svgContacts.telegram,
            alt: 'telegram'
        },
        {
            id: '4',
            link: 'https://www.linkedin.com/in/anton-acharatniuk',
            img: svgContacts.linkedin,
            alt: 'linkedin'
        },
    ]

    const mappedSocials = socials.map(s => {
        return (
            <Social key={s.id} link={s.link} alt={s.alt} img={s.img}/>
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