import React, { useRef } from "react";
import "./contact.css";
import liImg from '../../images/linkedIn_img.png'
import gmImg from '../../images/gmail_icon-icons.com_62758.png'
import gt from '../../images/github_PNG47.png';
import soLogo from '../../images/so_logo.png';
import rjs_Img from '../../images/react_logo_img.png';
import njsImg from '../../images/Nodejs_logo_img.jpg';
import ejsImg from '../../images/express_js_logo_img.png';
import mdbImg from '../../images/MongoDB_Logo.png';
import emailjs from "@emailjs/browser";

const Contact = () => {
  // used emil JS library to send email from Contact me section
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_26qsz4y",
        "template_z2pzuyp",
        form.current,
        "PkBr0Bpm_yWd0vYL7"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Your email sent!!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    // Contact component contains two parts - contact section & tech stack used for my projects
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Tech Stack</h1>
        <p className="clientDesc">
        MERN Stack is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications. It is designed to make the development process smoother and easier.
        </p>
        <div className="clientImgs">
          <img src={rjs_Img} alt="ReactJs_logo" className="clientImg" onClick={() => {
            window.open('https://react.dev/', "_blank");
          }}/>
          <img src={njsImg} alt="Nodejs_logo" className="clientImg" onClick={() => {
            window.open('https://nodejs.org/en', "_blank");
          }}/>
          <img src={ejsImg} alt="expressJS_logo" className="clientImg" onClick={() => {
            window.open('https://expressjs.com/', "_blank");
          }}/>
          <img src={mdbImg} alt="mongoDB_logo" className="clientImg" style={{'backgroundColor': '#fff'}} onClick={() => {
            window.open('https://www.mongodb.com/', "_blank");
          }}/>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="icons">
            <img src={liImg} alt="LinkedIn_logo" className="iconImg" onClick={() => {
              window.open('https://www.linkedin.com/in/narotam-mishra-889854154/', '_blank')
            }}/>
            <img src={gmImg} alt="gmail_logo" className="iconImg" onClick={() => {
              window.open('https://accounts.google.com/b/0/AddMailService', '_blank')
            }}/>
            <img src={gt} alt="gh_logo" className="iconImg" style={{'backgroundColor':'#fff', 'borderRadius':'50%'}} onClick={() => {
              window.open('https://github.com/Narotam-Mishra', '_blank')
            }}/>
            <img src={soLogo} alt="stackOverflow_logo" className="iconImg" onClick={() => {
              window.open('https://stackoverflow.com/', '_blank')
            }}/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
