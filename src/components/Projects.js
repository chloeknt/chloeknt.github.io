import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PI-1.png";
import projImg2 from "../assets/img/PI-2.png";
import projImg3 from "../assets/img/PI-3.png";
import projImg4 from "../assets/img/PI-4.png";
import projImg5 from "../assets/img/PI-5.png";
import projImg6 from "../assets/img/PI-6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Pi-Invoicing",
      description: "Homepage",
      imgUrl: projImg2,
    },
    {
      title: "Pi-Invoicing",
      description: "Dashboard",
      imgUrl: projImg3,
    },
    {
      title: "Pi-Invoicing",
      description: "Invoice Validation",
      imgUrl: projImg1,
    },
    {
      title: "Pi-Invoicing",
      description: "Invoice Creation",
      imgUrl: projImg4,
    },
    {
      title: "Pi-Invoicing",
      description: "Invoice Conversion, Photo to XML",
      imgUrl: projImg5,
    },
    {
      title: "Pi-Invoicing",
      description: "Invoice Upload",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "EcoData",
      description: "Homepage",
      imgUrl: projImg2,
    },
    {
      title: "EcoData",
      description: "Dashboard",
      imgUrl: projImg3,
    },
    {
      title: "EcoData",
      description: "Invoice Validation",
      imgUrl: projImg1,
    },
    {
      title: "EcoData",
      description: "Invoice Creation",
      imgUrl: projImg4,
    },
    {
      title: "EcoData",
      description: "Invoice Conversion, Photo to XML",
      imgUrl: projImg5,
    },
    {
      title: "EcoData",
      description: "Invoice Upload",
      imgUrl: projImg6,
    },
  ];

  const projects3 = [
    {
      title: "PillPal",
      description: "Homepage",
      imgUrl: projImg2,
    },
    {
      title: "PillPal",
      description: "Dashboard",
      imgUrl: projImg3,
    },
    {
      title: "PillPal",
      description: "Invoice Validation",
      imgUrl: projImg1,
    },
    {
      title: "PillPal",
      description: "Invoice Creation",
      imgUrl: projImg4,
    },
    {
      title: "PillPal",
      description: "Invoice Conversion, Photo to XML",
      imgUrl: projImg5,
    },
    {
      title: "PillPal",
      description: "Invoice Upload",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are the projects I have worked on throughout the years as a software engineering student. Have a look!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Pi-Invoicing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">EcoData</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PillPal (WIP)</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>For more information, check out our landing page: https://seng-apple-pie.github.io/landing-page/</p>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
