import React, { Component } from "react";
import history from "../../history";

import "./ContactForm.styles.scss";

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
	}

	handleSubmit = (e) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		})
			.then(() =>
				alert(
					"Thanks! I'll get back to you in due course. Click anywhere outside of the form to return to the site."
				)
			)
			.catch((error) => alert(error));

		e.preventDefault();
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
			<form onSubmit={this.handleSubmit} className='center'>
				<div className='form-header'>
					<div className='form__header-button'>
						<i
							className='far fa-arrow-alt-circle-left form__header-close'
							onClick={() => history.goBack()}
						></i>
					</div>
					<div className='form__header-title'>
						<h1>Get in touch</h1>
					</div>
					<div className='form__header-blank'></div>
				</div>
				<p>
					<label>
						<input
							className='form__inputs-small'
							type='text'
							name='name'
							placeholder='Your name...'
							value={name}
							onChange={this.handleChange}
						/>
					</label>
				</p>
				<p>
					<label>
						<input
							className='form__inputs-small'
							type='email'
							name='email'
							placeholder='Your email...'
							value={email}
							onChange={this.handleChange}
						/>
					</label>
				</p>
				<p>
					<label>
						<textarea
							className='form__inputs-large'
							name='message'
							placeholder='Your message...'
							value={message}
							onChange={this.handleChange}
						/>
					</label>
				</p>
				<p>
					<button type='submit' className='form__inputs-btn'>
						Send
					</button>
				</p>
			</form>
		);
	}
}

export default ContactForm;
