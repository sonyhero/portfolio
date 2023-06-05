import s from './Title.module.css'
import React from 'react';

type TitleType = {
    text: string
    style?: {
        webkitTextStroke: string,
        color:string
    }
}

export const textH2Black = {
    webkitTextStroke: '1px #d5d5d5',
    color: 'black'
}

export const textH2White = {
    webkitTextStroke: '1px #000',
    color: '#d5d5d5'
}

export const Tittle: React.FC<TitleType> = (props) => {

    const {text, style} = props

    return (
        <div style={style} className={s.title} >
            <h2 >{text}</h2>
        </div>
    )
}