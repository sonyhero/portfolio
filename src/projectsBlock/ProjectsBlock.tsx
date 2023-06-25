import s from './ProjecktsBlock.module.scss'
import {Project} from './Project/Project';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {svgProjects} from './svgProjects';

export const ProjectsBlock: React.FC = () => {

    const projects = [
        {
            link: 'https://t.me/o_an_ton',
            title: 'Todolist',
            bgImg: {backgroundImage: `url(${svgProjects.todolist})`},
            text: 'Complex project that using React-hooks, Redux, Axios and Rest API'
        },
        {
            link: 'https://t.me/o_an_ton',
            title: 'My Money',
            bgImg: {backgroundImage: `url(${svgProjects.myMoney})`},
            text: 'Handy application for family budgeting'
        },
        {
            link: 'https://t.me/o_an_ton',
            title: 'Social network',
            bgImg: {backgroundImage: `url(${svgProjects.social})`},
            text: 'Developers social network. Many features still in progress. But you can use base functions of any social network'
        },
        {
            link: 'https://t.me/o_an_ton',
            title: 'Clone Spotify',
            bgImg: {backgroundImage: `url(${svgProjects.spotify})`},
            text: 'Digital music service that gives you access to millions of songs'
        },
    ]

    const mappedProjects = projects.map((p, index) => {
        return (
            <Project key={index} title={p.title} description={p.text} style={p.bgImg} link={p.link}/>
        )
    })

    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Tittle text={'Projects'}/>
                <div className={s.projects}>
                    {mappedProjects}
                </div>
            </div>
        </div>
    )
}