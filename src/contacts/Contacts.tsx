import s from './Contacts.module.scss'
import {Tittle} from '../common/components/title/Title';
import React from 'react';

export const Contacts: React.FC = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Tittle text={'Contacts'}/>
                <form className={s.formContainer}>
                    <input type={'text'} name={'name'} placeholder={'Your Name'}
                    />
                    <input type={'email'} name={'email'} placeholder={'Your E-mail'}/>
                    <textarea name={'comment'} placeholder={'Type your message'}/>
                    <span>
                        <button className={s.sbtBtn} type={'submit'}>Sand Message</button>
                    </span>
                </form>

            </div>
        </div>
    )
}