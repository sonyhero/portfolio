import s from './MainBlock.module.scss'
import sContainer from '../common/styles/Container.module.scss'


export const MainBlock = () => {
    return (
            <div className={s.mainBlock}>
                <div className={sContainer.container}>
                        <div className={s.greeting}>
                            <div className={s.firstName}><h1>Anton</h1></div>
                            <div className={s.secondName}><span>Acharatniuk</span></div>

                            <div className={s.description}><span>Creative Front-end developer</span></div>
                        </div>
                    {/*<div className={s.photo}>*/}
                    {/*</div>*/}
                </div>
            </div>
    )
}