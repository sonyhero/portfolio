import s from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.scss'
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {svgContacts} from './svgContacts';

export const Contacts: React.FC = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Tittle text={'Contacts'}/>
                <form className={s.formContainer}>
                    <div className={s.formGroup}>
                        <input type="text" name="name" placeholder="Your Name"
                        />
                    </div>

                    <div className={s.formGroup}>
                        <input type="email" name="email" placeholder="Your E-mail"/>
                    </div>

                    <div className={s.formGroup}>
                        <textarea name="comment" placeholder="Type your message"/>
                    </div>
                </form>
                <div>
                    <input type="submit" value={'Sand Message'} className={s.submitBtn}/>
                </div>
                <h3 className={s.title}>YOU CAN FIND ME HERE</h3>
                <div className={s.socialContainer}>
                    <div className={s.social}><a href={'https://github.com/sonyhero'}><img src={svgContacts.github}
                                                                                           alt="github"/></a></div>
                    <div className={s.social}><a href={'mailto:27anton06@gmail.com'}><img src={svgContacts.email}
                                                                                          alt="email"/></a></div>
                    <div className={s.social}><a href={'https://t.me/o_an_ton'}><img src={svgContacts.telegram}
                                                                                     alt="telegram"/></a></div>
                    <div className={s.social}><a href={'https://www.linkedin.com/in/anton-acharatniuk'}><img
                        src={svgContacts.linkedin} alt="linkedin"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}