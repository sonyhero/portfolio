import s from './RemoteWork.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Tittle} from "../common/components/title/Title";

export const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sContainer.container} ${s.remoteContainer}`}>
                <Tittle text={'Consider remote work'}/>
                <div className={s.aContainer}><a href=''>Look</a></div>
            </div>
        </div>
    )
}