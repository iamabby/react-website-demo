import React, {
	Component
} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.less';

import Tab from "./component/Tab/Tab";
import Home from "./component/Home/Home";
import Rank from "./component/Rank/Rank";
import Draw from "./component/Draw/Draw";
class App extends Component {
	render() {
		return(
			<Router>
	     <div>
	      <Tab />
	     	<Route exact path="/Home" component={Home} />
	     	<Route path="/Rank" component={Rank} />
	     	<Route path="/Draw" component={Draw} />
	     </div>
     </Router>

		);
	}
}

export default App;