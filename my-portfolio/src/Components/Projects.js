import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Laptop, Github, Instagram } from 'react-bootstrap-icons'
import BeHelp from '../assets/BeHelp.jpeg'
import Loading from '../assets/loading.svg'

export default class Projects extends Component {
    render() {
        return (
            <div id="projects" className="page" style={{backgroundColor:"lightgray"}}>
                <Container>
                    <h1 >My Projects</h1>
                    <Row xs={1} md={1} lg={2}>
                        <Col style={{paddingTop: "2rem"}}>
                            <Container>
                                <Image src={BeHelp} alt="BeHelp" style={{width:"100%", paddingTop:"3rem"}} />
                            </Container>
                        </Col>
                        <Col style={{paddingBottom:"3rem", paddingTop: "3rem"}}>
                            <Container>
                                <h4>BeHelp</h4> 
                                <p>BeHelp is an application aimed at helping newcomers in Belgium to find volunteers that can help them with translation, housing, education, etc. <br></br>
                                    BeHelp was our final project in the HackYourFuture program, and it was developed in only 6 weeks. <br></br>
                                    As a web developer, I was mostly focused on frontend tasks.</p>
                                
                                <p>Check out the app demo and its GitHub code:</p>
                                <a href="http://behelp.herokuapp.com"><Laptop className="icon" size={50}/></a>
                                <a href="https://github.com/BeHelp/BeHelp"><Github className="icon" size={50}/></a> <br></br>
                            </Container>
                        </Col>
                    </Row>
                    <Row xs={1} md={1} lg={2}>
                        <Col>
                            <Container style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Loading} />
                            </Container>
                        </Col>
                        <Col>
                            <Container style={{paddingBottom:"3rem"}}>
                                <h4>Work in progress ...</h4> 
                                    <p>Building websites takes time. At the moment, I am working on ... my own personal website to be better presented in the Internet as an artist.</p>
                                    <p>Meanwhile, you can see my works in the Instagram:</p>
                                    <a href="/#"><Instagram className="icon" size={50}/></a>
                                </Container>
                            </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
