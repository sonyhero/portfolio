import s from './ProjecktsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from './Project/Project';

export const ProjectsBlock = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'description'}/>
                    <Project title={'My Money'} description={'description'}/>
                    <Project title={'Social network'} description={'description'}/>
                </div>
            </div>
        </div>
    )
}