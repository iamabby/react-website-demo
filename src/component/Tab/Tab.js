import React from "react";
import {Link } from "react-router-dom";

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
			     <div className="rule">	 
					<img src={homePic} alt="" />
					<span style={{color:"#fff"}}>活动规则</span>
				 </div>
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