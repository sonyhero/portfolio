import s from './Projeckt.module.css'
import React from 'react';

type SkillPropsType = {
    title: string
    description: string
}

export const Project: React.FC<SkillPropsType> = (props) => {
    const {title, description} = props
    return (

        <div className={s.project}>
            <div className={s.icon}>
                <div className={s.aContainer}><a href="">Look</a></div>
            </div>

                <h3>{title}</h3>
                <span className={s.description}>
                {description}
            </span>
            </div>
    )
}