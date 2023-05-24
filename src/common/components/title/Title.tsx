import s from './Title.module.css'
import React from "react";

type TitleType = {
    text: string
}

export const Tittle: React.FC<TitleType> = (props) => {

    const{text} = props

    return (
                <div className={s.title}>
                    <h2>{text}</h2>
                </div>
    )
}