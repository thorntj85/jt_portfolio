import React from "react";
import Fade from "react-reveal/Fade";

import "./projects.styles.scss";
import "../../components/Background/Background.styles.scss";

import Nav from "../../components/Nav/Nav.component";
import Caption from "../../components/Caption/Caption.component";

const Projects = () => {
	return (
		<div className='projects background'>
			<div className='projects__header'>
				<span className='neon'>{"<"}</span> PROJECTS{" "}
				<span className='neon'>{"/>"}</span>
			</div>
			<section className='projects__container'>
				<div className='projects__container-grid'>
					<Fade left collapse>
						<div className='img-1'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://silly-shannon-402fd3.netlify.com/'
							>
								<Caption />
							</a>
						</div>
						<div className='img-2'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://suspicious-hodgkin-ea6090.netlify.com/'
							>
								<Caption />
							</a>
						</div>
						<div className=' img-3'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://crown-live-7777.herokuapp.com/'
							>
								<Caption />
							</a>
						</div>
						<div className=' img-4'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://sleepy-headland-44002.herokuapp.com/login'
							>
								<Caption />
							</a>
						</div>
					</Fade>
				</div>
				<div className='projects__container-grid grid-hide'>
					<Fade right>
						<div className=' img-5'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://githubfinder7777.netlify.com/'
							>
								<Caption />
							</a>
						</div>
						<div className=' img-6'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://serene-morse-a889e2.netlify.com/'
							>
								<Caption />
							</a>
						</div>
						<div className=' img-7'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://awesome-allen-bd5066.netlify.com/'
							>
								<Caption />
							</a>
						</div>
						<div className=' img-8'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://phono-thorntj.netlify.com/'
							>
								<Caption />
							</a>
						</div>
					</Fade>
				</div>
			</section>
			<Nav />
		</div>
	);
};

export default Projects;
