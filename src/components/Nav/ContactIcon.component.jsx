import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./NavHome.styles.scss";

class ContactIcon extends Component {
	redirectToContact = () => {
		const { history } = this.props;
		if (history) history.push("/contact");
	};

	render() {
		const { history } = this.props;

		return history ? (
			<div className='paths-hp' onClick={this.redirectToContact}>
				<i className='fas fa-at'></i>
				<span className='title'>Contact</span>
			</div>
		) : (
			<div>Unable to redirect</div>
		);
	}
}

export default withRouter(ContactIcon);
