import s from './ProjecktsBlock.module.scss'
import {Project} from './Project/Project';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {svgProjects} from './svgProjects';
import {Fade} from 'react-awesome-reveal';

export const ProjectsBlock: React.FC = () => {

    const projects = [
        {
            title: 'Task tracker',
            link: 'https://sonyhero.github.io/todo-list',
            codeLink: 'https://github.com/sonyhero/todo-list',
            bgImg: {backgroundImage: `url(${svgProjects.todolist})`},
            text: 'Complex project that using React-hooks, Redux, Axios and Rest API'
        },
        {
            title: 'Inctagram',
            link: 'https://project-inctagram.vercel.app/',
            codeLink: 'https://github.com/sonyhero/project-inctagram',
            bgImg: {backgroundImage: `url(${svgProjects.inctagram})`},
            text: 'Project Inctagram is a social network application built on the NextJS framework with a microservices architecture'
        },
        {
            title: 'Developer network',
            link: 'https://sonyhero.github.io/samurai-way',
            codeLink: 'https://github.com/sonyhero/samurai-way',
            bgImg: {backgroundImage: `url(${svgProjects.social})`},
            text: 'Developers social network. Many features still in progress. But you can use base functions of any social network'
        },
        {
            title: 'Learning cards',
            link: 'https://cards-sonyhero.vercel.app/',
            codeLink: 'https://github.com/sonyhero/cards',
            bgImg: {backgroundImage: `url(${svgProjects.cards})`},
            text: 'Complex project that using React, RTK Query, Storybook, RadixUI and Rest API'
        },
    ]

    const mappedProjects = projects.map((p, index) => {
        return (
            <Project key={index} title={p.title} description={p.text}
                     style={p.bgImg} link={p.link} codeLink={p.codeLink}/>
        )
    })

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Fade direction={'down'} duration={1500}><Tittle text={'Projects'}/></Fade>
                <Fade duration={1500} delay={300}>
                <div className={s.projects}>
                    {mappedProjects}
                </div>
                </Fade>
            </div>
        </div>
    )
}