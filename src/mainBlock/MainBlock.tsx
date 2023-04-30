import s from './MainBlock.module.css'
import sContainer from '../common/styles/Container.module.css'


export const MainBlock = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.greeting}>
                    <span>Hello There!</span>
                    <h1>I am Anton Acharatniuk</h1>
                    <p>
                        <span>Front-end developer.</span>
                    </p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}