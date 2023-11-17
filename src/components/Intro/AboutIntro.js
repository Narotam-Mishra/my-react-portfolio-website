import React from 'react'
import './intro.css';
// import bgImg from '../../images/image.png'
import btnImg from '../../images/hireme.png';
import hcImg from '../../images/hacker_img.avif';
import { Link } from 'react-scroll';

const AboutIntro = () => {
  const getResume = () => {
    const rUrl = 'https://drive.google.com/file/d/19nIBuMikIAqcowPhdqCue2XWKXY_hgjU/view';
    window.open(rUrl, '_blank');
  }
  return (
    // Intro Component for introduction
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Narotam</span><br />Full Stack Web Developer</span>
            <p className="introPara">I am a skilled Full Stack Web Developer with experience in creating <br /> Frontend and Backend of Web Applications</p>
            <Link to='/#'><button className="btn" target="_blank" onClick={getResume}><img src={btnImg} className='btnImg' alt="btn_image" />Get Resume</button></Link>
        </div>
        <img src={hcImg} alt="author_image" className="bg" />
    </section>
  )
}

export default AboutIntro