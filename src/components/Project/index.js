import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	// This imports the information for the current project sent down.
	const { name, description, image, technologies, deployed, github } = props.projects;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		return techArray.join(", ");
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={require(`../../assets/images/${image}`)}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(technologies)}</Card.Text>
					<Card.Link href={deployed} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br />
					<Card.Link href={github} target="_blank" className="card-link">
						{name} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;
