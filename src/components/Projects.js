import { Container, Row, Col, Tab, Nav, } from "react-bootstrap"
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";
import bgColor1 from "../assets/img/color-sharp2.png"
import ProjImg1 from "../assets/img/project-img1.png"
import ProjImg2 from "../assets/img/project-img2.png"
import ProjImg3 from "../assets/img/project-img3.png"
import ProjImg4 from "../assets/img/vendor.png"
import ProjImg5 from "../assets/img/animal.png"
import ProjImg6 from "../assets/img/pie.png"

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

  const project1 = [
    {
      title: 'Vendor and Order Tracker',
      description: 'This application prompts users to create a tracker for vendors and allows them to add new vendors and order details.',
      info: <a href='https://github.com/bbakshev/VendorOrderTracker.Solution'>Learn More</a>,
      imgUrl: ProjImg4,
    },

    {
      title: 'Animal Shelter',
      description: 'This application will prompt the user to create a tracker for the animals up for adoption. The User can add a new animal to the database or the user can view all animals currently up for adoption',
      info: <a href='https://github.com/bbakshev/AnimalShelter.Solution'>Learn More</a>,
      imgUrl: ProjImg5,
    },

    {
      title: 'Pierre\'s Sweet and Savory Treats',
      description: 'A website for keeping track of a treats. Users can add, edit, and delete treats/flavors from the database.',
      info: <a href='https://github.com/bbakshev/AnimalShelter.Solution'>Learn More</a>,
      imgUrl: ProjImg6,
    }
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
                          project1.map((project, index) => {
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
                          <p>Coming Soon</p>
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