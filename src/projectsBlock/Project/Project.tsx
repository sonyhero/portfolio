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
            <div className={s.imgContainer}>
                <a className={s.aContainer} href="">Look</a>
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>
                {description}
            </span>
        </div>
    )
}