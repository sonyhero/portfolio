import s from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <div className={s.nav}>
            <a className={s.btn} href="">Main</a>
            <a className={s.btn} href="">Skills</a>
            <a className={s.btn} href="">Projects</a>
            <a className={s.btn} href="">Contacts</a>
        </div>
    )
}