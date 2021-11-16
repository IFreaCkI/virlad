import React, {useState} from 'react';
import { Navbar, Nav, Button, Container, Modal, Form  } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const Styles = styled.div `
	a, .navbar-brand, .navbar-nav .nav-link{
		color: white;
		text-decoration: none;
		&:hover {
			color: white
		}
	}
`
const nstyle = {

  };


export default function NaviBar() {

	const[show, setShow]=useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
	<>
	<Styles>
	<div style={nstyle}>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Brand style={{marginLeft: '50px'}}><Link to="/"> -VirLad GIS- </Link></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link><Link to="/About">О проете</Link></Nav.Link>
						</Nav>
						<Nav>
							<Button variant="warning" className="me-2" onClick={handleShow}>Log In</Button>
							<Button variant="warning" onClick={handleShow}>Sign Out</Button>
						</Nav>
					</Navbar.Collapse>
			</Navbar>
			</div>
		<Modal show={show} onHide={handleClose}>
		 	<Modal.Header closeButton>
				<Modal.Title>Log In</Modal.Title>
			</Modal.Header >
			<Modal.Body >
				<Form>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email Адрес</Form.Label>
						<Form.Control type="email" placeholder="Enter email"/>
						<Form.Text className="text-muted">Введите сюда свой email</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Пароль</Form.Label>
						<Form.Control type="password" placeholder="Enter Password"/>
						<Form.Text className="text-muted">Введите сюда свой пароль</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Не выходить из системы"/>
					</Form.Group>

					<Button variant="primary" type="submit">
	 				Войти
 					</Button>
				</Form>
			</Modal.Body >
		</Modal>
	</Styles>
	</>

)}
