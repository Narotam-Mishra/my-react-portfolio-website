import React from 'react'
import './works.css';
import portfolio1 from '../../images/portfolio-1.png';
import portfolio2 from '../../images/portfolio-2.png';
import portfolio3 from '../../images/portfolio-3.png';
import portfolio4 from '../../images/portfolio-4.png';
import portfolio5 from '../../images/portfolio-5.png';
import portfolio6 from '../../images/portfolio-6.png';


const Works = () => {
  return (
    // Works component for my projects and work experience details
    <section id='works'>
        <h2 className='worksTitle'>My Projects</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and make sure that my work is perfect. I am excited to bring my skills and experience to help organizations and businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
          <div className='img-container'>
              <img src={portfolio1} alt="portfolio_image" className="wrkImg" onClick={() => {
                const pUrl1 = 'https://earnest-pithivier-cebd65.netlify.app/';
                window.open(pUrl1, "_blank");
              }}/>
              <h3 className="img-content">Click on image to view sample</h3>
          </div>
          <div className='img-container'>
          <img src={portfolio2} alt="portfolio_image" className="wrkImg" onClick={() => {
              const pUrl2 = 'https://react-ecommerce-app-frontend-naru.vercel.app/';
              window.open(pUrl2, "_blank");
            }}/>
            <h3 className="img-content">Click on image to view sample</h3>
          </div>
          <div className='img-container'>
          <img src={portfolio3} alt="portfolio_image" className="wrkImg" onClick={() => {
              const pUrl3 = 'https://job-api-temp.onrender.com/api-docs/';
              window.open(pUrl3, "_blank");
            }}/>
            <h3 className="img-content">Click on image to view sample</h3>
          </div>
          <div className='img-container'>
          <img src={portfolio4} alt="portfolio_image" className="wrkImg" onClick={() => {
              const pUrl4 = 'https://stellular-malabi-cca70c.netlify.app/';
              window.open(pUrl4, "_blank");
            }}/>
            <h3 className="img-content">Click on image to view sample</h3>
          </div>
          <div className='img-container'>
          <img src={portfolio5} alt="portfolio_image" className="wrkImg" onClick={() => {
              const pUrl5 = 'https://incomparable-queijadas-2a9dbb.netlify.app/';
              window.open(pUrl5, "_blank");
            }}/>
            <h3 className="img-content">Click on image to view sample</h3>
          </div>
          <div className='img-container'>
          <img src={portfolio6} alt="portfolio_image" className="wrkImg" onClick={() => {
              const pUrl6 = 'https://react-admin-dashboard-ts-orcin.vercel.app/';
              window.open(pUrl6, "_blank");
            }}/>
            <h3 className="img-content">Click on image to view sample</h3>
          </div>
        </div>
        <button className="worksBtn" onClick={() => {
          window.open('https://github.com/Narotam-Mishra', '_blank')
        }}>See More</button>
    </section>
  )
}

export default Works