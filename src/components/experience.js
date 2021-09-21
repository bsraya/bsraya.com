import React from 'react'
import Line from './line'

export default function Experience() {
  return (
    <>
      <div>
        <h1 className="sectionTitle">Work Experience</h1>
        <Line />
        <div className="position">
          <p className="title">Teaching Assistant</p>
          <p className="location">National Tsing Hua University (Hsinchu, Taiwan)</p>
          <p className="date">Sep 2021 - Present</p>
          <ul>
            <li>Facilitating and mentoring students in the <i>Introduction to C Programming</i> class</li>
            <li>Writing blogs and tutorial posts for students</li>
            <li>Compiling programming weekly quizzes and exams</li>
          </ul>
          <p className="date">Sep 2020 - Jan 2021</p>
          <ul>
            <li>Facilitated and mentored students in the <i>Introduction to C Programming</i> class</li>
            <li>Compiled programming weekly quizzes and exams</li>
          </ul>
        </div>
        <div className="position">
          <p className="title">Software Engineer</p>
          <p className="location">Richtek Technology Corp. (Hsinchu, Taiwan)</p>
          <p className="date">Jul 2021 - Aug 2021</p>
          <ul>
            <li>Developed a NLP model that parses weekly reports</li>
            <li>Developed an automation system that capable of creating up to 45 files of test specification files just from a single input file</li>
          </ul>
        </div>
        <div className="position">
          <p className="title">Front-End Developer</p>
          <p className="location">Moldex3D Inc. (Hsinchu, Taiwan)</p>
          <p className="date">Jul 2021 - Aug 2021</p>
          <ul>
            <li>Developed user interfaces in Angular</li>
            <li>Developed automatic testings on user interfaces with Cypress.js</li>
            <li>Compiled user interfaces' instruction manuals </li>
          </ul>
        </div>
        <div className="position">
          <p className="title">Front-End Developer</p>
          <p className="location">Vpon Big Data Company (Taipei, Taiwan)</p>
          <p className="date">Jul 2021 - Aug 2021</p>
          <ul>
            <li>Developed user interfaces in React.js</li>
            <li>Developed a database searching algorithm using Roaring Bitmaps in Java</li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .position {
          margin-bottom: 3rem;
        }

        .title, .location, .date {
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
        }

        .location {
          color: grey;
        }

        .date {
          font-style: italic;
        }
      `}</style>
    </>
  )
}
