import s from './RemoteWork.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleBGCololType, textH2Black} from '../App';

export const RemoteWork: React.FC<StyleBGCololType> = (props) => {
    return (
        <div style={props.style} className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <Tittle text={'Consider remote work'} style={textH2Black}/>
                <a className={s.viewBtn} href=''>Look</a>
            </div>
        </div>
    )
}