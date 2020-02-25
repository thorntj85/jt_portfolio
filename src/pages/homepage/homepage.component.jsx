import React from "react";

import Nav from "../../components/Nav/Nav.component";

import "./homepage.styles.scss";
import "../../components/Background/Background.styles.scss";

const Homepage = () => {
	return (
		<div className='homepage background'>
			<div className='homepage__container'>
				<h1 className='homepage__container-showcase'>
					JOHN <span className='neon'>{"<"}</span> THORNTON{" "}
					<span className='neon'>{"/>"}</span>
				</h1>
			</div>
			<h3 className='homepage__container-title'> FRONTEND REACT DEVELOPER </h3>
			<div className='homepage__container-skills'>
				HTML | SCSS | JS | REACTJS | NODEJS
			</div>
			<Nav />
		</div>
	);
};

export default Homepage;
