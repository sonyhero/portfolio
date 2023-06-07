import s from './SkillsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleBGCololType, textH2Black} from '../App';
import {skillsImg} from './skillsImg';

export const SkillsBlock: React.FC<StyleBGCololType> = (props) => {

    const skills = [
        {id:1, title: 'JavaScript', description: '', img: skillsImg.javaScript},
        {id:4, title: 'React', description: '', img: skillsImg.react},
        {id:5, title: 'TypeScript', description: '', img: skillsImg.typeScript},
        {id:6, title: 'Git', description: '', img: skillsImg.git},
        {id:7, title: 'ReduxToolkit', description: '', img: skillsImg.reduxToolkit},
        {id:8, title: 'ReduxSaga', description: '', img: skillsImg.reduxSaga},
        {id:9, title: 'Storybook', description: '', img: skillsImg.storyBook},
        {id:10, title: 'Postman', description: '', img: skillsImg.postman},
        {id:11, title: 'ReactQuery', description: '', img: skillsImg.reactQuery},
        {id:12, title: 'RestAPI', description: '', img: skillsImg.restAPI},
        {id:13, title: 'Swagger', description: '', img: skillsImg.swagger},
        {id:14, title: 'UnitTest', description: '', img: skillsImg.unitTest},
        {id:15, title: 'Jest', description: '', img: skillsImg.jest},
        {id:2, title: 'HTML', description: '', img: skillsImg.html},
        {id:3, title: 'CSS', description: '', img: skillsImg.css},
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