import s from './SkillsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Tittle} from "../common/components/title/Title";

export const SkillsBlock = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Tittle text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'description'}/>
                    <Skill title={'CSS'} description={'description'}/>
                    <Skill title={'CSS'} description={'description'}/>
                    <Skill title={'React'} description={'description'}/>
                </div>
            </div>
        </div>
    )
}