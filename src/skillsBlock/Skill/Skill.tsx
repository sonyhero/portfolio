import s from './Skill.module.css'
import React from 'react';

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    const {title, description} = props
    return (
        <div className={s.skill}>
        <div className={s.icon}></div>
            <h3>{title}</h3>
            <span className={s.description}>
                {description}
            </span>
        </div>
    )
}