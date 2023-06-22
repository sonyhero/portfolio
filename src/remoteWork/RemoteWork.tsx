import s from './RemoteWork.module.scss'
import {Tittle} from '../common/components/title/Title';
import React from 'react';

export const RemoteWork: React.FC = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.remoteContainer}>
                <Tittle text={'Consider remote work'}/>
                <a className={s.viewBtn} href=''>Look</a>
            </div>
        </div>
    )
}