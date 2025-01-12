import React from "react";
import {Row, Container, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        }, 
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Technical Skills
                            </h2>
                            <p>The languages, databases, and programs I know are:</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Python skill level"/>
                                    <h5>Python (Django, Flask)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Java skill level"/>
                                    <h5>Java (Jhipster, Spark)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Web development skill level"/>
                                    <h5>Full Stack, HTML, CSS, Javascript (nodeJs, reactJs)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Swift and Ruby skill level"/>
                                    <h5>Swift and Ruby</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="UI/UX Design skill level"/>
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="AWS Cybersecurity skill level"/>
                                    <h5>AWS Cybersecurity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Database skill level"/>
                                    <h5>Sequel, MongoDB, Firebase</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background decoration" />
        </section>
    )
}
