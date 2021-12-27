import React from 'react'
import * as styles from './experience.module.css'

export default function Experience({title, location, date, descriptions}) {
    return (
        <div className={styles.block}>
            <p className={styles.title}>{title}</p>
            <p className={styles.location}>{location}</p>
            <p className={styles.date}>{date}</p>
            <ul>
                {
                    descriptions.map(description =>{
                        return <li>{description}</li>
                    })
                }
            </ul>
        </div>
    )
}