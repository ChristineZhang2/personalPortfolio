import {Nav, Row, Col, Container, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import React from 'react';
import colorSharp2 from "../assets/img/color-sharp2.png";
import email from "../assets/img/email.png";
import imageeditor from "../assets/img/imageeditor.png";
import chatbot from "../assets/img/chatbot.png";
import scrabble from "../assets/img/scrabble.png";
import duck from "../assets/img/duck.png";
import inheritance from "../assets/img/inheritance.png";
import birthdays from "../assets/img/birthdays.png";
import dna from "../assets/img/dna.png";
import transparent from "../assets/img/transparent.png"
import plurality from "../assets/img/plurality.png"
import finance from "../assets/img/finance.png"
import filter from "../assets/img/filter.png"
import recover from "../assets/img/recover.png"
import spellcheck from "../assets/img/spellcheck.png"
import readability from "../assets/img/readability.png"
import rotunda from "../assets/img/rotunda.png"
import trivia from "../assets/img/trivia.png"
import blockchain from "../assets/img/blockchain.png"
import plan from "../assets/img/planc.png"
import portfolio from "../assets/img/portfolio.png"






import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
      {
        title: "This Portfolio Website!",
        description: "Full Stack Portfolio Website Using HTML, CSS, JavaScript, and Bootstrap",
        imgUrl: portfolio, 
        projectLink: "https://github.com/ChristineZhang2/personalPortfolio",
    },
        {
            title: "Transparent",
            description: "Political Social Media Application using Swift, Ruby, and Firebase",
            imgUrl: transparent, 
            projectLink: "https://www.youtube.com/watch?v=rvdPtYV4aAw",
        },
        {
            title: "Rotunda",
            description: "Allows users to interact, search for their representatives, take a civic engagement test, & access useful resources. Uses HTML, CSS, Flask, Bootstrap, & the Google Civic API",
            imgUrl: rotunda,
            projectLink: "https://github.com/ChristineZhang2/rotunda",
        },
        {
            title: "Finance Website",
            description: "Python, Flask, SQL, HTML, and CSS website where users can buy/sell stocks and manage a portfolio of stocks",
            imgUrl: finance,
            projectLink: "https://github.com/ChristineZhang2/finance",
        },
        {
            title: "Trivia",
            description: "Web application that allows users to answer trivia questions",
            imgUrl: trivia,
            projectLink: "https://github.com/ChristineZhang2/trivia",
        },
        {
            title: "Plan-C",
            description: "Swift created app that provides informative information on female anatomy.",
            imgUrl: plan,
            projectLink: "https://github.com/ChristineZhang2/plan-c",
        },
        {
            title: "Birthday Tracker",
            description: "Python powered website to track friends' birthdays",
            imgUrl: birthdays,
            projectLink: "https://github.com/ChristineZhang2/birthdayTracker",
        },
        {
            title: "Readability",
            description: "C Program that uses Coleman-Liau formula to output the grade level writing skill of inputted text",
            imgUrl: readability,
            projectLink: "https://github.com/ChristineZhang2/readability",
        },
        {
            title: "Scrabble",
            description: " C program that determines the winner of a scrabble like game",
            imgUrl: scrabble,
            projectLink: "https://github.com/ChristineZhang2/scrabble",
        },
        {
            title: "Plurality",
            description: " C program that simulates plurality elections and simulates the winner",
            imgUrl: plurality,
            projectLink: "https://github.com/ChristineZhang2/plurality",
        },
        {
            title: "Inheritance",
            description: "C program that uses data structures to simulate the inheritance of blood types for family members given blood types of parents",
            imgUrl: inheritance,
            projectLink: "https://github.com/ChristineZhang2/inheritance",
        },
        {
            title: "DNA Database",
            description: "Python program that takes a sequence of DNA and a CSV file containing STR counts for individuals and then outputs them to whom the DNA most likely belongs",
            imgUrl: dna,
            projectLink: "https://github.com/ChristineZhang2/dnaDatabase",
        },
        {
            title: "Filter",
            description: "Program to apply filters to BMPS",
            imgUrl: filter,
            projectLink: "https://github.com/ChristineZhang2/filter",
        },
        {
            title: "Recover",
            description: "Program that recovers JPEG images",
            imgUrl: recover,
            projectLink: "https://github.com/ChristineZhang2/recover",
        },
        {
            title: "Java Blockchain",
            description: "simple java blockchain that has a digital signature to chain blocks together, requires proof of mining, and can check if data is valid or unchanged.",
            imgUrl: blockchain,
            projectLink: "https://github.com/ChristineZhang2/javaBlockchain",
        },
        {
            title: "Image Editor",
            description: "Python Automative program that edits images",
            imgUrl: imageeditor,
            projectLink: "https://github.com/ChristineZhang2/imageEditor",
        },
        {
            title: "Email Scraper",
            description: "Chrome Extension that can scrape emails from HTML Web Pages",
            imgUrl: email,
            projectLink: "https://github.com/ChristineZhang2/emailScraper",
        },
        {
            title: "Adaptable Chat Bot",
            description: "Python Chat Bot that learns from the User and stores learnings into JSON database",
            imgUrl: chatbot,
            projectLink: "https://github.com/ChristineZhang2/adaptableChatBot",
        },
        {
            title: "Duck Chrome Extension",
            description: "Javascript chrome extension where a duck can follow mouse around, quacks, also manipulate the screen",
            imgUrl: duck,
            projectLink: "https://github.com/ChristineZhang2/duckChromeExtension",
        },
        
        {
            title: "Speller",
            description: "Spell Checks a file using hash tables",
            imgUrl: spellcheck,
            projectLink: "https://github.com/ChristineZhang2/speller",
        },
    ]

    const projectsTab1 = projects.slice(0,7);
    const projectsTab2 = projects.slice(7, 12);
    const projectsTab3 = projects.slice(12, 19);

    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Here are some of my computer science projects done for work, school, and fun.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Web and Mobile Apps</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">C and Python Programs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Others</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                      <Tab.Pane eventKey="first">
    <Row>
      {projectsTab1.map((project, index) => (
        <ProjectCard key={`tab1-${index}`} {...project} />
      ))}
    </Row>
  </Tab.Pane>
  <Tab.Pane eventKey="second">
    <Row>
      {projectsTab2.map((project, index) => (
        <ProjectCard key={`tab2-${index}`} {...project} />
      ))}
    </Row>
  </Tab.Pane>
  <Tab.Pane eventKey="third">
    <Row>
      {projectsTab3.map((project, index) => (
        <ProjectCard key={`tab3-${index}`} {...project} />
      ))}
    </Row>
  </Tab.Pane>
</Tab.Content>

                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" alt = "background" src={colorSharp2}></img>
        </section>
      )
    }