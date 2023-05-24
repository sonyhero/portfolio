import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Tittle} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Tittle text={'Contacts'}/>
                <form className={s.formContainer}>
                    <div className={s.formGroup}>
                        <label id="name-label" htmlFor="name">Имя</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Введите ваше имя"
                        />
                    </div>

                    <div className={s.formGroup}>
                        <label id="email-label" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control"
                               placeholder="Введите ваш Email"/>
                    </div>

                    <div className={s.formGroup}>
                        <p>Вы бы порекомендовали меня другим компаниям?</p>
                        <label>
                            <input name="user-recommend" value="definitely" type="radio" className="input-radio"/>Определенно да</label><br/>
                        <label>
                            <input name="user-recommend" value="maybe" type="radio" className="input-radio"/>Может
                                быть</label><br/>

                        <label><input name="user-recommend" value="not-sure" type="radio" className="input-radio"/>Не
                            уверен</label><br/>
                    </div>

                    <div className={s.formGroup}>
                        <p>Как вы узнали обо мне?</p>
                        <select id="find-us" name="findUs" className="form-control">
                            <option>Выберете вариант</option>
                            <option value="instagram">Instagram</option>
                            <option value="vk">VK</option>
                            <option value="friends">Друзья</option>
                            <option value="other">Другое</option>
                        </select>
                    </div>

                    <div className={s.formGroup}>
                        <p>Хотите добавит комментарий или любое другое предложение</p>
                        <textarea id="comments" className="input-textarea" name="comment"
                                  placeholder="Оставьте их тут..."></textarea>
                    </div>
                </form>
                {/*<div className={s.aContainer}><a href=''>Send</a></div>*/}
                <button type='submit' className={s.submitBtn}>Send</button>
            </div>
        </div>
    )
}