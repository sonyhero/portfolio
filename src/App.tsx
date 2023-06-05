import './App.css';
import {Header} from './header/Header';
import {MainBlock} from './mainBlock/MainBlock';
import {SkillsBlock} from './skillsBlock/SkillsBlock';
import {ProjectsBlock} from './projectsBlock/ProjectsBlock';
import {RemoteWork} from './remoteWork/RemoteWork';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

export type StyleType = {
    style: {
        backgroundColor: string
    }
}

export const App = () => {

    const styleWhite = {
        backgroundColor: '#d3d3d3'
    }
    const styleBlack = {
        backgroundColor: '#2A2A2AFF'
    }

    return (
        <div className={'App'}>
            <Header/>
            <MainBlock/>
            <SkillsBlock style={styleBlack}/>
            <ProjectsBlock style={styleWhite}/>
            <RemoteWork style={styleBlack}/>
            <Contacts style={styleWhite}/>
            <Footer style={styleBlack}/>
        </div>
    )
}
