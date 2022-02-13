import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Linkedin, Github } from 'react-bootstrap-icons';

export default class Contacts extends Component {
    render() {
        return (
            <div style={{paddingBottom:"7rem", paddingTop:"8rem"}}>
                <Container>
                    <Row>
                        <Col>
                        <h1 id="contacts" style={{paddingBottom:"3rem"}}>Contacts</h1>
                        <Container>
                            <p>You can always reach me by email: <a href="mailto:ekaterina.mamina@gmail.com">ekaterina.mamina@gmail.com</a></p>
                            <p>Or find me in social media:</p> 
                            <a href="https://github.com/katsmamina"><Github className="icon" size={64}/></a> <a href="https://www.linkedin.com/in/ekaterinamamina/"><Linkedin className="icon" size={64}/></a>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
