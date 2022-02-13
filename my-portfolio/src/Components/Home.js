import React, { Component } from 'react';
import { Image, Row, Col, Container, Button } from 'react-bootstrap'
import html from '../assets/html5.svg'
import css from '../assets/css-3.svg'
import sass from '../assets/sass.svg'
import node from '../assets/nodejs.svg'
import vue from '../assets/vuejs.svg'
import react from '../assets/react-1.svg'
import bootstrap from '../assets/bootstrap.svg'
import git from '../assets/git.svg'
import photo from '../assets/myphoto.JPEG'
// import { Triangles } from './Triangle.js';

export default class Home extends Component {
    render() {
        return (
            <div className="page" id="start" style={{paddingBottom:"5rem", paddingTop:"6rem"}}>
                <Container>
                    <Row className="justify-content-center" xs={1} md={1} lg={2}>
                        <Col>
                        <div ></div>
                        <h1>Ekaterina Mamina</h1>
                        <p>Junior frontend developer, graduated from <a href="https://hackyourfuture.be">HackYourFuture Belgium</a> in January 2022. I always strive to learn new things and find solutions to the encountered challenges.</p>
                        <div>
                        <h4>My skills</h4>
                            <Container className="homepage__skills">
                                <Row xs={3} lg={4} md={4}>
                                    <Col className="skills-item"><img src={html} alt="HTML5" height="70px" /></Col>
                                    <Col className="skills-item"><img src={css} alt="CSS" height="70px" /></Col>
                                    <Col className="skills-item"><img src={sass} alt="SaSS" height="70px" /></Col>
                                    <Col className="skills-item"><img src={node} alt="NodeJS" height="70px" /></Col>
                                    <Col className="skills-item"><img src={vue} alt="VueJS" height="70px"/></Col>
                                    <Col className="skills-item"><img src={react} alt="ReactJS" height="70px" /></Col>
                                    <Col className="skills-item"><img src={bootstrap} alt="Bootstrap" height="70px" /></Col>
                                    <Col className="skills-item"><img src={git} alt="Git" height="70px" /></Col>
                                </Row>
                            </Container>
                            <Container style={{paddingBottom:"3rem", textAlign:"center", marginTop:"5%"}}>
                                <Row xs={2}>
                                    <Col><Button style={{background:"#311b92", border:"#311b92", padding:"10px"}} href="/#projects">My Projects</Button></Col>
                                    <Col><Button style={{background:'#311b92', border:"#311b92", padding:"10px"}} href="/#contacts">Contact me</Button></Col>
                                </Row>
                            </Container>
                            </div>
                        </Col>

                        <Col className="d-none d-sm-block" style={{position:"relative", maxHeight:"30rem"}}>
                        <Container style={{position: "relative", height:"100%", display:"flex", justifyContent:"center"}}>
                                <div>
                                <Image src={photo} alt="main photo" style={{borderRadius:"10px", position: "relative", maxHeight:"30rem", filter:"grayscale(100%)"}} />
                                {/* <Triangles style={{position: "relative", bottom:"20%"}} /> */}
                                </div>
                        </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}