import s from './Skill.module.scss'
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
            <div className={s.skillWrap}>
                <div className={s.icon}><img src={img} alt="skill"/></div>
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>
                {description}
            </span>
        </div>
    )
}