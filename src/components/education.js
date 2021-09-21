import React from 'react'
import Line from './line'

export default function Education() {
  return (
    <>
      <h1 className="sectionTitle">Education</h1>
      <Line />
      <div className="program">
        <p className="title">M. Sc. in Computer Science</p>
        <p className="location">National Tsing Hua University (Hsinchu, Taiwan)</p>
        <p className="date">Feb 2021 - Present</p>
        <ul>
          <li>I'm responsible for being a teaching assistant in the <i>Introduction to C Programming</i> 2021 class at NTHU's EECS Department</li>
          <li>Currently working on Distributed Deep Learning System that capable of assessing how much computing resource that a ML/DL model need and assigned the model to multiple GPUs to be run in parallel</li>
        </ul>
      </div>
      <div className="program">
        <p className="title">B. Sc. in Computer Science</p>
        <p className="location">National Tsing Hua University (Hsinchu, Taiwan)</p>
        <p className="date">Sep 2015 - Jan 2021</p>
        <ul>
          <li>Experimented on Ultralight Weight Virtual Machine that boots up in 5 seconds and successfully made a prototype of it</li>
          <li>Won 3rd place in Taiwan Civil Internet of Things Competition in 2017</li>
          <li>Became a teaching assistant in the Introduction to C Programming 2020 class at NTHU's EECS Department</li>
        </ul>
      </div>
      <style jsx>{`
        .program {
          margin-bottom: 3rem;
        }`
      }</style>
    </>
  )
}