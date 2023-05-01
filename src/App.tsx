import './App.css'
import {Header} from './header/Header.tsx';
import {MainBlock} from './mainBlock/MainBlock.tsx';
import {SkillsBlock} from './skillsBlock/SkillsBlock.tsx';
import {ProjectsBlock} from './projectsBlock/ProjectsBlock.tsx';

export const App = () => {

  return (
    <div className={'App'}>
        <Header/>
        <MainBlock/>
        <SkillsBlock/>
        <ProjectsBlock/>
    </div>
  )
}
