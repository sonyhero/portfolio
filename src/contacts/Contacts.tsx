import s from './Contacts.module.scss'
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {SubmitHandler, useForm} from 'react-hook-form';
import axios from 'axios';
import {toast} from 'react-toastify';

type ContactsType = {
    name: string
    email: string
    comment: string
}

export const Contacts: React.FC = () => {

    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm<ContactsType>({mode: 'onBlur'})

    const onSubmit: SubmitHandler<ContactsType> = (data) => {
        axios
            .post("https://gmail-node-js-ten.vercel.app/sendMessage", data, {headers: {
                    'Content-Type': 'application/json'
                }})
            .then(() => {
                toast.success("Thank you for your letter!");
                reset();
            })
            .catch(() => {
                toast.error("Sorry, there's been an error");
            });

    }

    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <Fade duration={1000}>
                <div className={s.contactsContainer}>
                    <Fade direction={'down'} duration={1500} delay={500}><Tittle text={'Contacts'}/></Fade>
                    <form className={s.formContainer} onSubmit={handleSubmit(onSubmit)}>
                        <input className={s.formArea} placeholder={'Your Name'}
                               {...register('name',
                                   {
                                       required: 'Field required',
                                       minLength: 2,
                                   }
                               )}
                        />
                        <div className={s.errorMessage}>{errors?.name &&
                            <p>{errors?.name?.message || 'Some error!'}</p>}</div>
                        <input className={s.formArea} placeholder={'Your E-mail'}
                               {...register('email',
                                   {
                                       required: 'Field required',
                                       pattern: {
                                           value: /^\S+@\S+\.\S+$/,
                                           message: 'Invalid email address'
                                       }
                                   }
                               )}
                        />
                        <div className={s.errorMessage}>{errors?.email &&
                            <p>{errors?.email?.message || 'Some error!'}</p>}</div>
                        <textarea className={s.commentArea} placeholder={'Type your message'}
                                  {...register('comment',
                                      {required: 'Message is require field'}
                                  )}
                        />
                        <div className={s.errorMessage}>{errors?.comment &&
                            <p>{errors?.comment?.message || 'Some error!'}</p>}</div>
                        <Fade direction={'down'} duration={1500} delay={500}><span>
                        <button disabled={!isValid} className={s.sbtBtn} type={'submit'}>Send Message</button>
                    </span></Fade>
                    </form>
                </div>
            </Fade>
        </div>
    )
}