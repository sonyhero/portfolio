import s from './RemoteWork.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Tittle} from "../common/components/title/Title";
import React from 'react';
import {StyleType} from '../App';

export const RemoteWork: React.FC<StyleType> = (props) => {
    return (
        <div style={props.style} className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <Tittle text={'Consider remote work'}/>
                <div className={s.aContainer}><a href=''>Look</a></div>
            </div>
        </div>
    )
}