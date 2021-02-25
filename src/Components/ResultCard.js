import React from 'react'

export default function ResultCard(title,year,poster) {
    return (
        <div>
            <p>{title}</p>
            <p>{year}</p>
            <img src={poster}></img>
        </div>
    )
}
