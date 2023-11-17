import React from 'react'
import './skills.css';
import UIDesign from '../../images/ui-design.png';
import webDesign from '../../images/website-design.png';
import AppDesign from '../../images/app-design.png';

const Skills = () => {
  // Skills components to showcase skills  
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className="skillDesc">I am an aspiring Software Developer with having 2.5+ Yrs of experience in Full Stack Web Development (MERN stack) and SDE. I have a strong understanding of frontend and backend development. I am proficient in React, Node and MongoDB, as well as full stack development softwares such as VS Code Editor, Postman & Git</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} className='skillBarImg' alt="UIDesign" />
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>I used to create frontend of web applications using HTML,CSS, JS & React.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDesign} className='skillBarImg' alt="WebDesign" />
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>I used to create backend of web applications using NodeJS & Express</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} className='skillBarImg' alt="AppDesign" />
                <div className="skillBarText">
                    <h2>Full Stack Web Development</h2>
                    <p>I used to develope full stack web applications using MERN stack.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills