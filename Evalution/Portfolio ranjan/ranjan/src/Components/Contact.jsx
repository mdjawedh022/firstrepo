import React from "react";
import "./Contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="contactor">
      <p>Contact Me</p>
      <br />
      <hr />
      <div className="contact1">
        <div>
          <div className="section">
            <p>Call : +91 7260989506</p>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ranjankumar91234153@gmail.com" target="_blank">
              <p>Mail : ranjankumar9134153@gmail.com</p>
            </a>
          </div>
          <div className="image">
            <a href="https://www.linkedin.com/in/ranjan-kumar-a8590a237/" target="_blank">
              <BsLinkedin />
            </a>
            <a href="https://github.com/ranjankumar9" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="design">
        <p>Design and Devloped By Ranjan Kumar</p>
        <p>© 2023 All copyright reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
