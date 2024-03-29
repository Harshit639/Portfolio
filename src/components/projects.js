import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import logo from "../assets/img/logo.jpeg";
import basketball from "../assets/img/gd.jpeg";
import charity from "../assets/img/charity.webp";
import news from "../assets/img/news.webp"
import poll from "../assets/img/final.jpeg"
import mobile from "../assets/img/mobile.jpeg"
import tic from "../assets/img/tictac.jpeg"
import { JackInTheBox, Roll, Slide } from "react-awesome-reveal";
import infinity from '../assets/img/infinity.png'
import cookbook from '../assets/img/cookbook.jpeg'
import expensify from '../assets/img/expensify.png'
import foursquare from '../assets/img/foursquare.webp'


export const Projects = () =>{
    
    const projects= [ 
        {
            title: "Reflow Website",
            description: "Design & Development",
            imgUrl: logo,
            checkout: "https://reflowtech.in/",
          },
          {
            title: "Infinit-I",
            description: "Design & Development",
            imgUrl: infinity,
            checkout: "https://reflowtech.in/infinity.html",
          },
          {
            title: "Basket Social",
            description: "Design & Development",
            imgUrl: basketball,
            checkout: "http://basketssocial.pythonanywhere.com/",
          },
          
         
    ];

    const andprojects= [ 
        {
            title: "Around the Rim",
            description: "Android App",
            imgUrl: mobile,
            checkout: "https://github.com/Harshit639",
          },
          {
            title: "Air Patrol",
            description: "Android App",
            imgUrl: poll,
            checkout: "https://github.com/Harshit639",
          },
          {
            title: "Hacker News",
            description: "Android App",
            imgUrl: news,
            checkout: "https://github.com/Harshit639",
          },
          {
            title: "Tic Tac Toe",
            description: "Android App",
            imgUrl: tic,
            checkout: "https://github.com/Harshit639",
          },
         
    ];

    const reactnativeprojects =[
      {
        title: "Infinit-I",
        description: "React Native App",
        imgUrl: mobile,
        checkout: "https://github.com/Harshit639",
      },
      {
        title: "Expensify",
        description: "React Native App",
        imgUrl: expensify,
        checkout: "https://github.com/Harshit639",
      },
      {
        title: "Four Square",
        description: "React Native App",
        imgUrl: foursquare,
        checkout: "https://github.com/Harshit639",
      },
      {
        title: "CookPad",
        description: "React Native App",
        imgUrl: cookbook,
        checkout: "https://github.com/Harshit639",
      },

    ]

    const mlprojects= [ 
        {
            title: "Air Patrol",
            description: "AI &  ML",
            imgUrl: poll,
            checkout: "https://github.com/Harshit639",
          },
         
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2> Projects</h2>
                    <p>All the projects available on GitHub</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Android</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">RN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">ML</Nav.Link>
                    </Nav.Item>
                    
                    </Nav>
                    <Slide triggerOnce="true" >
                    <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first" >
                    
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
                          andprojects.map((project, index) => {
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
                          mlprojects.map((project, index) => {
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
                    <Tab.Pane eventKey="fourth">
                    <Row>
                        {
                          reactnativeprojects.map((project, index) => {
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
                  </Slide>
                 </Tab.Container>
                 
                    </Col>
                    </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )

}