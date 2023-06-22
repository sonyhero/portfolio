import s from './Footer.module.scss'
import React from 'react';
import {svgContacts} from '../contacts/svgContacts';

export const Footer: React.FC = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                {/*<Tittle text={'Anton Acharatniuk'} style={textH2White}/>*/}
                <div>
                    <div className={s.title}><h3 >YOU CAN FIND ME HERE</h3></div>
                    <div className={s.socialContainer}>
                        <div className={s.social}><a href={'https://github.com/sonyhero'}><img src={svgContacts.github}
                                                                                               alt="github"/></a></div>
                        <div className={s.social}><a href={'mailto:27anton06@gmail.com'}><img src={svgContacts.email}
                                                                                              alt="email"/></a></div>
                        <div className={s.social}><a href={'https://t.me/o_an_ton'}><img src={svgContacts.telegram}
                                                                                         alt="telegram"/></a></div>
                        <div className={s.social}><a href={'https://www.linkedin.com/in/anton-acharatniuk'}><img
                            src={svgContacts.linkedin} alt="linkedin"/></a>
                        </div>
                    </div>
                </div>

                <div className={s.titleFoot}><h6>All rights reserved</h6></div>
            </div>
        </div>
    )
}