import s from './Header.module.css'
import {Navigation} from '../navigation/Navigation';
export const Header = () => {
    return (
        <div className={s.header}>
            <Navigation/>
            </div>
    )
}