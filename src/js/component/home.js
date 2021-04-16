import React from "react";
import {
	Navbar,
	Container,
	Jumbotron,
	Nav,
	Card,
	Button
} from "react-bootstrap";
import PropTypes from "prop-types";

//create your first component
export function MyFooter() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container className="justify-content-center">
				<Navbar.Text>Copyright 2021 Website</Navbar.Text>
			</Container>
		</Navbar>
	);
}

export function MyNav() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-end">
					<Nav>
						<Nav.Link href="#deets">Home</Nav.Link>
						<Nav.Link href="#deets">Abaut</Nav.Link>
						<Nav.Link href="#deets">Services</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
export function MyJumbo() {
	return (
		<Container>
			<Jumbotron className="bg-cover">
				<h1 className="text-light">Hello, world!</h1>
				<p className="text-light">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
			</Jumbotron>
			<Container fluid></Container>
		</Container>
	);
}
export function MyCard(props) {
	return (
		<Card style={{ width: "18rem" }} className="mb-4">
			<Card.Img variant="top" src={props.img} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="primary">learn more!</Button>
			</Card.Body>
		</Card>
	);
}

MyCard.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	text: PropTypes.string
};
