import React from "react";

import HomeIcon from "./HomeIcon.component";
import ProjIcon from "./ProjIcon.component";
import ContactIcon from "./ContactIcon.component";

import "./NavHome.styles.scss";

const Nav = () => {
	return (
		<div className='homepage__nav'>
			<ul className='homepage__nav-links'>
				<li className='homepage__nav-path'>
					{window.location.pathname === "/" ? <ProjIcon /> : <HomeIcon />}
				</li>
				<li className='homepage__nav-path'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/john-thornton-2006681a3/'
					>
						<i className='fab fa-linkedin'></i>{" "}
						<span className='title'>LinkedIn</span>
					</a>
				</li>
				<li className='homepage__nav-path'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/thorntj85'
					>
						<i className='fab fa-github'></i>{" "}
						<span className='title'>Github</span>
					</a>
				</li>
				<li className='homepage__nav-path'>
					<ContactIcon />
				</li>
			</ul>
		</div>
	);
};

export default Nav;
