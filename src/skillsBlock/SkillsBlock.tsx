import s from './SkillsBlock.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Tittle} from '../common/components/title/Title';
import React from 'react';
import {StyleBGCololType, textH2Black} from '../App';
import {skillsImg} from './skillsImg';

export const SkillsBlock: React.FC<StyleBGCololType> = (props) => {

    const skills = [
        {id:1, title: 'JavaScript', descriprion: '', img: skillsImg.javaScript},
        {id:2, title: 'HTML', descriprion: '', img: skillsImg.html},
        {id:3, title: 'CSS', descriprion: '', img: skillsImg.css},
        {id:4, title: 'React', descriprion: '', img: skillsImg.react},
        {id:5, title: 'TypeScript', descriprion: '', img: skillsImg.typeScript},
        {id:6, title: 'Git', descriprion: '', img: skillsImg.git},
        {id:7, title: 'ReduxToolkit', descriprion: '', img: skillsImg.reduxToolkit},
        {id:8, title: 'ReduxSaga', descriprion: '', img: skillsImg.reduxSaga},
        {id:9, title: 'Storybook', descriprion: '', img: skillsImg.storyBook},
        {id:10, title: 'Postman', descriprion: '', img: skillsImg.postman},
        {id:11, title: 'ReactQuery', descriprion: '', img: skillsImg.reactQuery},
        {id:12, title: 'RestAPI', descriprion: '', img: skillsImg.restAPI},
        {id:13, title: 'Swagger', descriprion: '', img: skillsImg.swagger},
        {id:14, title: 'UnitTest', descriprion: '', img: skillsImg.unitTest},
        {id:15, title: 'Jest', descriprion: '', img: skillsImg.jest},
        ]

    const mappedSkills = skills.map(s=>{
        return(
            <Skill key={s.id} title={s.title} description={s.descriprion} img={s.img} />
        )
    })


    return (
        <div style={props.style} className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Tittle text={'Skills'} style={textH2Black}/>
                <div className={s.skills}>
                    {mappedSkills}
                    {/*<Skill title={'CSS'} description={'description'}/>*/}
                    {/*<Skill title={'CSS'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                    {/*<Skill title={'React'} description={'description'}/>*/}
                </div>
            </div>
        </div>
    )
}