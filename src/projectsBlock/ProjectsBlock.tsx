import s from './ProjecktsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleBGCololType, textH2White} from '../App';



export const ProjectsBlock: React.FC<StyleBGCololType> = (props) => {

    // const todoList = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };
    //
    // const myMoney = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };
    //
    // const socialNetwork = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };
    //
    // const cloneSpotify = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };

    const projects = [
        {id:1, title: 'Todolist', text: 'Complex project that using React-hooks, Redux, Axios and Rest API'},
        {id:2, title: 'My Money', text: 'Handy application for family budgeting'},
        {id:3, title: 'Social network', text: 'Developers social network. Many features still in progress. But you can use base functions of any social network'},
        {id:4, title: 'Clone Spotify', text: 'Digital music service that gives you access to millions of songs'},
    ]

    const mappedProjects = projects.map(p=>{
        return (
            <Project key={p.id} title={p.title} description={p.text}/>
        )
    })

    return (
        <div style={props.style} className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Tittle text={'Projects'} style={textH2White}/>
                <div className={s.projects}>
                    {mappedProjects}
                    {/*<Project title={'Todolist'} description={'description'}/>*/}
                    {/*<Project title={'My Money'} description={'description'}/>*/}
                    {/*<Project title={'Social network'} description={'description'}/>*/}
                    {/*<Project title={'Clone Spotify'} description={'description'}/>*/}
                </div>
            </div>
        </div>
    )
}