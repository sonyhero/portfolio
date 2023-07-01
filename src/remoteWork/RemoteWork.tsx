import s from './RemoteWork.module.scss'
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {Button} from '../common/components/Button/Button';
import {Fade} from 'react-awesome-reveal';

export const RemoteWork: React.FC = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.remoteContainer}>
                <Fade direction={'down'} duration={1500}><Tittle text={'Consider remote work'}/></Fade>
                <Fade direction={'up'} duration={1500}>
                    <div className={s.viewBtn}>
                        <Button name={'Look'}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}