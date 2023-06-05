import s from './Title.module.css'
import React from 'react';

type TitleType = {
    text: string
    style?: {
        webkitTextStroke: string,
        color:string
    }
}

export const Tittle: React.FC<TitleType> = (props) => {

    const {text, style} = props

    return (
        <div style={style} className={s.title} >
            <h2 >{text}</h2>
        </div>
    )
}