import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>

                    <h3 className={s.title}>Anton Acharatniuk</h3>

                <div className={s.socialContainer}>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                </div>
                    <h6 className={s.title}>All rights reserved</h6>
            </div>
        </div>
    )
}