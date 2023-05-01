import s from './RemoteWork.module.css'
import sContainer from '../common/styles/Container.module.css'

export const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <h2 className={s.title}>Consider remote work</h2>
                <div className={s.aContainer}><a href=''>Look</a></div>
            </div>
        </div>
    )
}