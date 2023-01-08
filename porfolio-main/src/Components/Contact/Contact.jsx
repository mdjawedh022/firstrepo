import React from "react";
import "./contact.css";
// import git from "../image/git.png";

export const Contact = () => {
  const click = (url) => {
    window.open(url, "_blank");
  };
  const year = new Date().getFullYear();
  return (
    <div className={"contDiv"}>
      <h1>Contact me</h1>
      <div className={"mobile"}>
        <p>
          Call : <span>+91 8271766683</span>{" "}
        </p>
        <p>
          Mail : <span style={{cursor:"pointer"}}   onClick={() =>
            click("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=jawedhilmand022@gmail.com")}>jawedhilmand022@gmail.com</span>{" "}
        </p>
      </div>
      <div className={"logodiv"}>
        <div
          onClick={() =>
            click("https://www.linkedin.com/in/md-jawed-hussain-3404b3248/")
          }
        >
          <i className="fa-brands fa-linkedin"></i>{" "}
        </div>
        <div onClick={() => click("https://github.com/mdjawedh022")}>
          <i className="fa-brands fa-github"></i>
        </div>
        {/* <div onClick={() => click("https://instagram.com/i_am_mj4?igshid=YmMyMTA2M2Y=")}>
        <i class="fa-brands fa-instagram"></i>
        </div>
        <div onClick={() => click("https://www.facebook.com/mj.hussain.92560")}>
        <i class="fa-brands fa-square-facebook"></i>
        </div> */}
      </div>

      <div className={"copyright"}>
        <p>Design and devloped by MJ Hussain</p>
        <p>© {year} All copyright reserved.</p>
      </div>
    </div>
  );
};
