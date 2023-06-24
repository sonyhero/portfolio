import './App.css';
import {Header} from './header/Header';
import {MainBlock} from './mainBlock/MainBlock';
import {SkillsBlock} from './skillsBlock/SkillsBlock';
import {ProjectsBlock} from './projectsBlock/ProjectsBlock';
import {RemoteWork} from './remoteWork/RemoteWork';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer'

export const App = () => {

    return (
        <div className={'App'}>
            <Header/>
            <MainBlock/>
            <SkillsBlock/>
            <ProjectsBlock/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    )
}
