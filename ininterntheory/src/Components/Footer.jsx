import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#446478",
          marginTop:"-2%"
        //   border: "1px solid red",
        }}
      >
        <div
          style={{
            // border: "1px solid pink",
            width: "80%",
            height: "70%",
            margin: " 50px auto",
          }}
        >
          <div style={{ display: "flex" }}>
            <div className="app_link">
              <Link to="">
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to="">
                {" "}
                <i className="fa-brands fa-square-twitter"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-square-instagram"></i>
              </Link>
            </div>
            <div className="likha_hua">
              <div>
                <p>BY PLACE</p>
                <hr />
                <p>Internships In Mumbai</p>
                <p>Internships In Delhi</p>
                <p>Internships In Bangalore</p>
                <p>Internships In Pune</p>
                <p>Internships In Hyderabad</p>
              </div>
              <div>
                <p>BY PROFILE</p>
                <hr />
                <p>Marketing Internships</p>
                <p>Business Development Internships</p>
                <p>Content Writing Internships</p>
                <p>Graphic Designing Internships</p>
                <p>HR Internships</p>
                <p>Engineering Internships</p>
              </div>
              <div>
                <p>BY TYPE</p>
                <hr />
                <p>Full Time Internships</p>
                <p>Part Time Internships</p>
                <p>Work From Home Internships</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_section">
        <div className="bottom_section_footer">
         <p>REFUND & CANCELLATION POLICY</p>
         <p>COURSES</p>
         <p>TERMS AND CONDITIONS</p>
         <p>PRIVACY POLICY</p>
         <p>CONTACT US</p>
         <p>ABOUT US</p>
         <p>SITEMAP</p>
         
        
        </div>
        <hr />
        <div>
            <p style={{textAlign:"center",color:"#fff"}}>2015-2022 INTERNTHEORY.ALL RIGHTS RESERVED.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
