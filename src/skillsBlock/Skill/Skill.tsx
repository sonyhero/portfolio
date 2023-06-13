import s from './Skill.module.css'
import React from 'react';

type SkillPropsType = {
    title: string
    description: string
    img: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    const {title, description, img} = props
    return (
        <div className={s.skill}>
            <div>
                <img src={img} alt="skill" className={s.icon}/>
            </div>
            <h3>{title}</h3>
            <span className={s.description}>
                {description}
            </span>
        </div>
    )
}