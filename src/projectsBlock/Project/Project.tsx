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
            <div className={s.image}>
                <a className={s.viewBtn} href="">Look</a>
            </div>
            <div className={s.projectInfo}><h3 className={s.projectTitle}>{title}</h3>
                <span className={s.description}>
                {description}
            </span></div>
        </div>
    )
}