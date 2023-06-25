import s from './Projeckt.module.scss'
import React from 'react';
import {Button} from '../../common/components/Button/Button';



type SkillPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
    link: string
}

export const Project: React.FC<SkillPropsType> = (props) => {
    const {title, description, style, link} = props
    return (

        <div className={s.project}>
            <div className={s.image} style={style}>
            </div>
            <div className={s.projectInfo}>
                <div className={s.viewBtn}>
                    <Button name={title} link={link}/>
                </div>
                <div className={s.description}><span >{description}</span></div>
            </div>
        </div>
    )
}