import s from './Footer.module.scss'
import sContainer from '../common/styles/Container.module.scss'
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                {/*<Tittle text={'Anton Acharatniuk'} style={textH2White}/>*/}

                <h6 className={s.titleFoot}>All rights reserved</h6>
            </div>
        </div>
    )
}