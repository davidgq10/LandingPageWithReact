//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { MyNav, MyJumbo, MyCard, MyFooter } from "./component/home.js";
import { Container, CardDeck } from "react-bootstrap";

function Home() {
	return (
		<div>
			<MyNav />
			<Container>
				<MyJumbo />
				<CardDeck>
					<MyCard
						title={"Kamloops Art Page"}
						text={
							"Day and Night, by Jiya Singh AE Perry Elementary, Grade 4 I have drawn this picture because it tells a little story about feelings."
						}
						img={
							"https://images.glaciermedia.ca/polopoly_fs/1.24212567.1601479674!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/kamloops-art-page-2.jpg"
						}
					/>
					<MyCard
						title={"Coronavirus inspire"}
						text={
							"How will coronavirus inspire writers, filmmakers, and other creatives? Expect more stories about inequality—and maybe the end of superhero mania, says historian Jennifer Wright."
						}
						img={
							"https://media.vanityfair.com/photos/5e8f9f875752fb00088317c4/16:9/w_1280,c_limit/The-Art-of-Making-Art-About-a-Plague.jpg"
						}
					/>
					<MyCard
						title={"Shine"}
						text={
							"Artist Creates Pencil Drawings That Look Like They’re Lit With Fluorescent Lights"
						}
						img={
							"https://www.paellacreativa.com.ar/wp-content/uploads/2020/01/dibujos_lapiz_luces_fluorescentes_6.jpg"
						}
					/>
					<MyCard
						title={"Visual art"}
						text={
							"Visual arts are a form of art that is being studied all over the world. It has expanded into a career in the recent years. Visual arts are art forms that have many standards."
						}
						img={
							"https://lh3.googleusercontent.com/proxy/422WJ5jU74lcSGme1N6vFXP0DFZ2CYwxki6rt9np1GKEvDZWgyu2GLvqIC5ehXqmsxZH-HvA0n6Pv0e847sE3bO7K2a4rEg4n4V95t6BzqFQh6CEJxqnA5oi4Rw0vNzrBB-RdjuR"
						}
					/>
				</CardDeck>
			</Container>
			<MyFooter />
		</div>
	);
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
