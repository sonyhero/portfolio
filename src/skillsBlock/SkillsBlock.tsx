import s from './SkillsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleType, textH2Black} from '../App';

export const SkillsBlock: React.FC<StyleType> = (props) => {

    return (
        <div style={props.style} className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Tittle text={'Skills'} style={textH2Black}/>
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