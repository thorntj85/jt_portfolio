import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./NavHome.styles.scss";

class HomeIcon extends Component {
	redirectToHome = () => {
		const { history } = this.props;
		if (history) history.push("/");
	};

	render() {
		const { history } = this.props;

		return history ? (
			<div className='paths-hp' onClick={this.redirectToHome}>
				<i class='fas fa-home'></i> <span className='title'>Home</span>
			</div>
		) : (
			<div>Unable to redirect</div>
		);
	}
}

export default withRouter(HomeIcon);
