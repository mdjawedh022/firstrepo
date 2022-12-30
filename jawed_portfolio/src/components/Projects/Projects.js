import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import first from "../../Assets/Projects/1.JPG";
import second from "../../Assets/Projects/2.JPG";
import third from "../../Assets/Projects/3.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={first}
              isBlog={false}
              title="KFC clone"
              description="We have clone the kfc website with react framework, This is my colaborative project we are team of 6 peeps worked on it and did complete it in 6 days. We tried to build all the page and implement all the funtionality for the pages."
              link="https://mellow-froyo-f88246.netlify.app/"
              link2="https://github.com/GUDDU434/kfc-clone-react.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={second}
              isBlog={false}
              title="Expedia.com"
              description="This is clone of expedia.com. The entire project where buid on HTML,CSS and JavaScript. This is my colaboirative project. We are 6 people dedicatedly work and colaborated on it and completed it in 6 days."
              link="https://epic-babbage-48d7bc.netlify.app/index.html"
              link2="https://github.com/GUDDU434/Expedia_CW_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={third}
              isBlog={false}
              title="Mamaearth clone"
              description="This is clone of Mamaearth. The entire project build with html, javascript and css. Its a colaborative project colaborated by 6 peeps and completed it in six days. We have implemented all the fuctionality as much as possible."
              link="https://calm-sawine-27b8ed.netlify.app/"
              link2="https://github.com/GUDDU434/MamaEarthclone"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
