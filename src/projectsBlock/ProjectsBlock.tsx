import s from './ProjecktsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from './Project/Project';

export const ProjectsBlock = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <div className={s.title}>
                    <h2 >My Projects</h2>
                </div>
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