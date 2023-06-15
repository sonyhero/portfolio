import s from './SkillsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleBGCololType, textH2Black} from '../App';
import {svgSkills} from './svgSkills';

export const SkillsBlock: React.FC<StyleBGCololType> = (props) => {

    const skills = [
        {id:1, title: 'JavaScript', description: '', img: svgSkills.javaScript},
        {id:4, title: 'React', description: '', img: svgSkills.react},
        {id:5, title: 'TypeScript', description: '', img: svgSkills.typeScript},
        {id:6, title: 'Git', description: '', img: svgSkills.git},
        {id:7, title: 'ReduxToolkit', description: '', img: svgSkills.reduxToolkit},
        {id:8, title: 'ReduxSaga', description: '', img: svgSkills.reduxSaga},
        {id:9, title: 'Storybook', description: '', img: svgSkills.storyBook},
        {id:10, title: 'Postman', description: '', img: svgSkills.postman},
        {id:11, title: 'ReactQuery', description: '', img: svgSkills.reactQuery},
        {id:12, title: 'RestAPI', description: '', img: svgSkills.restAPI},
        {id:13, title: 'Swagger', description: '', img: svgSkills.swagger},
        {id:14, title: 'UnitTest', description: '', img: svgSkills.unitTest},
        {id:15, title: 'Jest', description: '', img: svgSkills.jest},
        {id:2, title: 'HTML', description: '', img: svgSkills.html},
        {id:3, title: 'CSS', description: '', img: svgSkills.css},
        ]

    const mappedSkills = skills.map(s=>{
        return(
            <Skill key={s.id} title={s.title} description={s.description} img={s.img} />
        )
    })


    return (
        <div style={props.style} className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Tittle text={'Skills'} style={textH2Black}/>
                <div className={s.skills}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    )
}