import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div name="contact" className="contactor">
      <p>Contact Me</p>
      <hr />
      <div className="contact1">
        <div>
          <div className="section">
            <p>Call: +91 7260989506</p>
            <p>Mail: ranjankumar9134153@gmail.com</p>
          </div>
          <div className="image">
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              alt=""
            />
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png"
              alt=""
            />
          </div>
        </div>
        <div className="form">
            <input type="text" placeholder="Enter Name..." />
            <input type="text" placeholder="Enter Email..." />
            <input type="text" placeholder="Enter Description..." />
            <button>Submit</button>
        </div>
      </div>
      <div className="last">
        <p>Devloped By Ranjan Kumar</p>
        <p>© 2023 All copyright reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
