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
            </div>
            <div className={s.projectInfo}>
                <div className={s.viewBtn}><a href="">{title}</a> </div>
                <div className={s.description}><span >{description}</span></div>
            </div>
        </div>
    )
}