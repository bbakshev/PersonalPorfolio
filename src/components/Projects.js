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
      title: 'Project 1',
      description: 'This is a description of Project 1',
      imgUrl: ProjImg1,
    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2',
      imgUrl: ProjImg2,
    },
    {
      title: 'Project 3',
      description: 'This is a description of Project 3',
      imgUrl: ProjImg3,
    },
    // {
    //   title: 'Project 4',
    //   description: 'This is a description of Project 4',
    //   imgUrl: ''
    // },
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