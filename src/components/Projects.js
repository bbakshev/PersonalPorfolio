import { Container, Row, Col, Tab, Nav, } from "react-bootstrap"
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import bgColor1 from "../assets/img/color-sharp2.png"
import ProjImg1 from "../assets/img/project-img1.png"
import ProjImg2 from "../assets/img/project-img2.png"
import ProjImg3 from "../assets/img/project-img3.png"

export const Projects = () => {

  const projects = [
    {
      title: 'Super Galactic Age Calculator',
      description: 'JavaScript form for a user to input their age in the preset, past and future to receive their age in 5 planets including earth',
      info: <a href='https://github.com/bbakshev/super-galactic-age'>Learn More</a>,
      imgUrl: ProjImg1,
    },
    {
      title: 'Currency Exchanger',
      description: 'JavaScript program that uses exchange Rate API to convert base currency to a desired currency.',
      info: <a href='https://github.com/bbakshev/currency-exchanger'>Learn More</a>,
      imgUrl: ProjImg2,
    },
    {
      title: 'Pig Dice Game',
      description: 'The games UI allows the user/player to roll the dice, add the rolled number to the current score if its not 1, hold the current score to add it to the total score, and switch players if the total score reaches 100 or reset all scores to 0 with Player 1 as the starting player.',
      info: <a href='https://github.com/bbakshev/pig-game'>Learn More</a>,
      imgUrl: ProjImg3,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col> 
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out some of my work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">JavaScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">C#</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                          projects.map((project, index) => {
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
                          projects.map((project, index) => {
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
      <img className="background-image-right" src={bgColor1}></img>
    </section>
  )
}