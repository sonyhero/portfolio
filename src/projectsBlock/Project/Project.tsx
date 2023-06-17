import s from './Projeckt.module.scss'
import React from 'react';

type SkillPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
}

export const Project: React.FC<SkillPropsType> = (props) => {
    const {title, description, style} = props
    return (

        <div className={s.project}>
            <div className={s.image} style={style}>
                <a className={s.viewBtn} href="">Look</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{title}</h3>
                <span className={s.description}>{description}</span></div>
        </div>
    )
}