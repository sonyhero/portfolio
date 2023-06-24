import s from './RemoteWork.module.scss'
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {Button} from '../common/components/Button/Button';

export const RemoteWork: React.FC = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.remoteContainer}>
                <Tittle text={'Consider remote work'}/>
                <div className={s.viewBtn}>
                    <Button name={'Look'}/>
                </div>
            </div>
        </div>
    )
}