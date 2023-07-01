import s from './MainBlock.module.scss'
import {Fade} from 'react-awesome-reveal';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const MainBlock = () => {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={s.container}>
                <Fade direction={'left'}
                      duration={1500}
                >
                    <div className={s.greeting}>
                        <div className={s.firstName}><h1>Anton</h1></div>
                        <div className={s.secondName}><span>Acharatniuk</span></div>
                        <div className={s.description}>
                            <ReactTypingEffect speed={200} text={['Creative Front-end developer']}/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}