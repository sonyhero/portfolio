import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleBGCololType, textH2White} from '../App';
import {contactsImg} from './contactsImg';

export const Contacts: React.FC<StyleBGCololType> = (props) => {
    return (
        <div style={props.style} className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Tittle text={'Contacts'} style={textH2White}/>
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
                        <div className={s.social}><a href={'https://github.com/sonyhero'}><img src={contactsImg.github}
                                                                                               alt="github"/></a></div>
                        <div className={s.social}><a href={'mailto:27anton06@gmail.com'}><img src={contactsImg.email}
                                                                                              alt="email"/></a></div>
                        <div className={s.social}><a href={'https://t.me/o_an_ton'}><img src={contactsImg.telegram}
                                                                                         alt="telegram"/></a></div>
                        <div className={s.social}><a href={'https://www.linkedin.com/in/anton-acharatniuk'}><img
                            src={contactsImg.linkedin} alt="linkedin"/></a>
                        </div>
                </div>
            </div>
        </div>
    )
}