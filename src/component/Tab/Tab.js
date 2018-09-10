import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./tab.less";


import homePic from "../../images/icon-rule.png";
import drawPic from "../../images/icon-gift.png";
import rankPic from "../../images/icon-rank.png";


class Tab extends React.Component {
	render() {
		return(
			<div className="tab">
			 <ul>
			  <li>
			     <Link to="/Home">
					 <img src={homePic} alt="" />
			     <span>首页</span>
			     </Link>
			  </li>
			  <li>
			     <Link to="/Draw">
					 <img src={drawPic} alt="" />
			      <span>我的抽奖</span>
			     </Link>
			  </li>
			  <li>
			     <Link to="/Rank">
					 <img src={rankPic} alt="" />
			      <span>排行榜</span>
			     </Link>
			  </li>
			 </ul>
			</div>
		)
	}
}

export default Tab;