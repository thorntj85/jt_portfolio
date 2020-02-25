import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Projects from "./pages/projects/projects.component";
import Contact from "./pages/contact/Contact.component";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/projects' component={Projects} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</div>
	);
}

export default App;
