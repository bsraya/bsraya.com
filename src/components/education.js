import React from 'react'
import Line from './line'
import Experience from './experience'
import NTHULogo from '../assets/nthu.png'

export default function Education() {
  return (
    <>
      <h1 style={{marginBottom: `0.25rem`}}>Education</h1>
      <Line />
      <Experience
        title="M. Sc. in Computer Science"
        location="National Tsing Hua University (Hsinchu, Taiwan)"
        date="Feb 2021 - Present"
        descriptions={[
          "Being a TA in the Introduction to C and C++ 2021 class at NTHU EECS Department",
          "Currently working on Distributed Deep Learning System that capable of assessing how much computing resource that a ML/DL model need and assigned the model to multiple GPUs to be run in parallel"
        ]}
        imageLocation={NTHULogo}
        height={50}
        width={200}
        alt="NTHU logo"
      />

      <Experience
        title="B. Sc. in Computer Science"
        location="National Tsing Hua University (Hsinchu, Taiwan)"
        date="Sep 2015 - Jan 2021"
        descriptions={[
          "Experimented on Ultralight Weight Virtual Machine that boots up in 5 seconds and successfully made a prototype of it",
          "Won 3rd place in Taiwan Civil Internet of Things Competition in 2017",
          "Was a TA in the Introduction to C and C++ 2020 class at NTHU EECS Department"
        ]}
        imageLocation={NTHULogo}
        height={50}
        width={200}
        alt="NTHU logo"
      />
    </>
  )
}