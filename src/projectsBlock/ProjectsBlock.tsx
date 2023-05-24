import s from './ProjecktsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Tittle} from "../common/components/title/Title";

export const ProjectsBlock = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Tittle text={'Projects'}/>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'description'}/>
                    <Project title={'My Money'} description={'description'}/>
                    <Project title={'Social network'} description={'description'}/>
                    <Project title={'Clone Spotify'} description={'description'}/>
                </div>
            </div>
        </div>
    )
}