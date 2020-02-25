import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./NavHome.styles.scss";

class ProjIcon extends Component {
	redirectToProj = () => {
		const { history } = this.props;
		if (history) history.push("/projects");
	};

	render() {
		const { history } = this.props;

		return history ? (
			<div className='paths-hp' onClick={this.redirectToProj}>
				<i className='fas fa-folder-open'></i>{" "}
				<span className='title'>Projects</span>
			</div>
		) : (
			<div>Ubable to redirect</div>
		);
	}
}

export default withRouter(ProjIcon);
