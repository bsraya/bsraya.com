import React from 'react'
import Line from './line'
import Experience from './experience'
import NTHU from '../assets/nthu.png'
import RTK from '../assets/rtk.png'
import MOLDEX from '../assets/moldex.png'
import VPON from '../assets/vpon.png'

export default function Work() {
  return (
    <>
      <h2 style={{marginBottom: `0.25rem`}}>Work Experience</h2>
      <Line />
      <Experience
        title="Teaching Assistant"
        location="National Tsing Hua University (Hsinchu, Taiwan)"
        date="Sep 2020 - Jan 2021 & Sep 2021 - Jan 2022"
        descriptions={[
          "Facilitated and mentored students in the Introduction to C and C++ course"
        ]}
        imageLocation={NTHU}
        height={50}
        width={200}
        alt="NTHU logo"
      />

      <Experience
        title="Software Engineer"
        location="Richtek Technology Corp. (Hsinchu, Taiwan)"
        date="Jul 2021 - Aug 2021"
        descriptions={[
          "Developed and NLP model and an automation model"
        ]}
        imageLocation={RTK}
        height={50}
        width={200}
        alt="Richtek logo"
      />

      <Experience
        title="Front-End Developer"
        location="Moldex3D Inc. (Hsinchu, Taiwan)"
        date="Jul 2020 - Aug 2020"
        descriptions={[
          "Developed user interfaces and automatic testings"
        ]}
        imageLocation={MOLDEX}
        height={50}
        width={200}
        alt="Moldex3D logo"
      />
      
      <Experience
        title="Front-End Developer"
        location="Vpon Big Data Company (Taipei, Taiwan)"
        date="Jul 2018 - Aug 2018"
        descriptions={[
          "Developed user interfaces and automatic testings"
        ]}
        imageLocation={VPON}
        height={50}
        width={200}
        alt="Vpon logo"
      />
    </>
  )
}
