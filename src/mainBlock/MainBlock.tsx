import s from './MainBlock.module.scss'


export const MainBlock = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <div className={s.firstName}><h1>Anton</h1></div>
                    <div className={s.secondName}><span>Acharatniuk</span></div>
                    <div className={s.description}><span>Creative Front-end developer</span></div>
                </div>
            </div>
        </div>
    )
}