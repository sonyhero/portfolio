import s from './SkillsBlock.module.scss'
import {Skill} from './Skill/Skill';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {svgSkills} from './svgSkills';
import {Fade} from 'react-awesome-reveal';

export const SkillsBlock: React.FC = () => {

    const skills = [
        {title: 'JavaScript', description: '', img: svgSkills.javaScript},
        {title: 'React', description: '', img: svgSkills.react},
        {title: 'TypeScript', description: '', img: svgSkills.typeScript},
        {title: 'Git', description: '', img: svgSkills.git},
        {title: 'ReduxToolkit', description: '', img: svgSkills.reduxToolkit},
        // {title: 'ReduxSaga', description: '', img: svgSkills.reduxSaga},
        {title: 'Storybook', description: '', img: svgSkills.storyBook},
        {title: 'Postman', description: '', img: svgSkills.postman},
        {title: 'ReactQuery', description: '', img: svgSkills.reactQuery},
        {title: 'RestAPI', description: '', img: svgSkills.restAPI},
        {title: 'Swagger', description: '', img: svgSkills.swagger},
        {title: 'UnitTest', description: '', img: svgSkills.unitTest},
        {title: 'Jest', description: '', img: svgSkills.jest},
        {title: 'HTML', description: '', img: svgSkills.html},
        {title: 'CSS', description: '', img: svgSkills.css},
    ]

    const mappedSkills = skills.map((s, index) => {
        return <Skill key={index} title={s.title} description={s.description} img={s.img}/>
    })

    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Fade direction={'down'} duration={1500}><Tittle text={'Skills'}/></Fade>
                <Fade duration={1500} delay={300}>
                    <div className={s.skills}>{mappedSkills}</div>
                </Fade>
            </div>
        </div>
    )
}