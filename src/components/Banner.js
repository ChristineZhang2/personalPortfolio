import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"

const handleConnect = (e) => {
  e.preventDefault();
  window.location.href = "mailto:christiinezcollege@gmail.com";
}

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Programmer", "Entrepreneur", "Data-Scientist"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className = "tagline">Welcome to my Portfolio</span>
            <h1>{`Hi, I'm Christine: `}<span className = "wrap">{text}</span></h1>
            <p>I'm a first year college student at Harvard University concentrating in Computer Science and Statistics on the Data Science track. I'm passionate about entrepreneurship in the GovTech and LifeSciences space, Artificial intelligence, and data-informed consulting. I'm also passionate about STEM advocacy for underrepresented groups such as LGBTQ+ and women, diplomacy, and creating useful and useless apps for fun! Other times you'll find me baking, playing tennis, or exploring new areas.</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src= {headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
