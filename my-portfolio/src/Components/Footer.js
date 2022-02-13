import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
        <Navbar style={{backgroundColor:"#311b92", paddingTop:"3rem", display:"flex", justifyContent:"flex-end"}}>
            <p style={{color:"white", paddingRight:"3rem"}}> © Ekaterina Mamina 2022</p>
        </Navbar>
        )
    }
}
