import s from './Contacts.module.scss'
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {Fade} from 'react-awesome-reveal';

export const Contacts: React.FC = () => {
    return (
        <div className={s.contactsBlock}>
            <Fade duration={1000}>
            <div className={s.contactsContainer}>
                <Fade direction={'down'} duration={1500} delay={500}><Tittle text={'Contacts'}/></Fade>
                <form className={s.formContainer}>
                    <input className={s.formArea} type={'text'} name={'name'} placeholder={'Your Name'}
                    />
                    <input className={s.formArea} type={'email'} name={'email'} placeholder={'Your E-mail'}/>
                    <textarea className={s.commentArea} name={'comment'} placeholder={'Type your message'}/>
                    <Fade direction={'down'} duration={1500} delay={500}><span>
                        <button className={s.sbtBtn} type={'submit'}>Sand Message</button>
                    </span></Fade>
                </form>
            </div>
        </Fade>
        </div>
    )
}