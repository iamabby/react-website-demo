import React from "react";
import {Link} from "react-router-dom";
import "./Draw.less";
import topPic from "../../images/my-draw-top.png";
import backHome from "../../images/icon-back-home.png";


class Draw extends React.Component {
	render() {
		return(
			<div >
				<div className="draw_top" style={{backgroundImage:"url(" + topPic + ")"}} >
					<Link to="/Home" className="back_home" style={{backgroundImage:"url(" + backHome + ")"}}></Link>
				</div>

				{/* 抽奖次数 */}

				<div className="draw_main">
					<div className="draw_num">1<span>次</span></div>
					<div className="draw_chance">今天您有抽奖机会</div>
					<div className="draw_tips">每天转发可获得1次抽奖机会</div>
					<div className="btn_primary">马上试试手气</div>
				</div>
                 


        </div>
		)
	}
}

export default Draw;