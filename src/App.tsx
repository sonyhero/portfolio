import './App.css';
import {Header} from './header/Header';
import {MainBlock} from './mainBlock/MainBlock';
import {SkillsBlock} from './skillsBlock/SkillsBlock';
import {ProjectsBlock} from './projectsBlock/ProjectsBlock';
import {RemoteWork} from './remoteWork/RemoteWork';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

export type StyleBGCololType = {
    style: {
        backgroundColor: string
    }
}

export const textH2White = {
    // webkitTextStroke: '1px #d5d5d5',
    // color: 'black'
    webkitTextStroke: '1px #000',
    color: '#d5d5d5'
}

export const textH2Black = {
    // webkitTextStroke: '1px #000',
    // color: '#d5d5d5'
    webkitTextStroke: '1px #d5d5d5',
    color: 'black'
}

export const App = () => {

    const styleBackBlack = {
        backgroundColor: '#3d3d3d'
    }
    // const styleBlack = {
    //     backgroundColor: '#2A2A2AFF'
    // }

    const styleBackWhite = {
        backgroundColor: '#d3d3d3'
    }

    return (
        <div className={'App'}>
            <Header/>
            <MainBlock/>
            <SkillsBlock style={styleBackWhite}/>
            <ProjectsBlock style={styleBackBlack}/>
            <RemoteWork style={styleBackWhite}/>
            <Contacts style={styleBackBlack}/>
            <Footer style={styleBackWhite}/>
        </div>
    )
}
