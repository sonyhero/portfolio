import s from './SkillsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {textH2White, Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleType} from '../App';

export const SkillsBlock: React.FC<StyleType> = (props) => {

    return (
        <div style={props.style} className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Tittle text={'Skills'} style={textH2White}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'description'}/>
                    <Skill title={'CSS'} description={'description'}/>
                    <Skill title={'CSS'} description={'description'}/>
                    <Skill title={'React'} description={'description'}/>
                </div>
            </div>
        </div>
    )
}