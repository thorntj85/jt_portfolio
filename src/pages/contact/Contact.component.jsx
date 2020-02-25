import React from "react";
import ReactDOM from "react-dom";
import history from "../../history";

import ContactForm from "../contact/ContactForm.component";

import "./Contact.styles.scss";
import "../../components/Background/Background.styles.scss";

const Contact = (props) => {
	return ReactDOM.createPortal(
		<div
			className='contact__container background'
			onClick={() => history.goBack()}
		>
			<div
				className='contact__container-form'
				onClick={(e) => e.stopPropagation()}
			>
				<span className='l1'></span>
				<span className='l2'></span>
				<span className='l3'></span>
				<span className='l4'></span>
				<ContactForm />
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export default Contact;
