import React from 'react'
import * as styles from './experience.module.css'

export default function Experience({title, location, height, width, date, descriptions, imageLocation, alt}) {
    return (
        <div className={styles.block}>
            <p className={styles.title}>{title}</p>
            <p className={styles.location}>{location}</p>
            <img style={{display: `flex`, margin: `0.75rem auto 0.75rem auto`}} height={height} width={width} src={imageLocation} alt={alt} itemProp="image" />
            <p className={styles.date}>{date}</p>
            <ul>
                {
                    descriptions.map((description, index) => {
                        return <li key={index}>{description}</li>
                    })
                }
            </ul>
        </div>
    )
}