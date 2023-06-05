import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'
import React from 'react';
import {StyleType} from '../App';

export const Footer: React.FC<StyleType> = (props) => {
    return (
        <div style={props.style} className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                {/*<Tittle text={'Anton Acharatniuk'} style={textH2White}/>*/}
                <h3 className={s.title}>Anton Acharatniuk</h3>
                <div className={s.socialContainer}>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                </div>
                <h6 className={s.titleFoot}>All rights reserved</h6>
            </div>
        </div>
    )
}