import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Home.less";


import bgUrl from "../../images/home-top-bg.png";

import SlideShow from "../SlideShow/SlideShow";

class Home extends Component {

	render() {

		return (
			<div className="home-body">
				<div className="home-top" style={{ backgroundImage: "url(" + bgUrl + ")" }}>
					<div className="date">活动时间:10月31日-11月15日</div>
				</div>
				<SlideShow />

				{/* 首页按钮开始 */}
				<div className="home_btn">
					<Link to="/MyPartner">
					<span className="btn_my_partner">我的合伙</span>
					</Link>
					<Link to="/MyPartner">
					<span className="btn_call_partner">召唤合伙人</span>
					</Link>
				</div>
				{/* 首页按钮结束 */}

				<div className="data_statistics">
					<span>合伙 201712</span>
					<b>|</b>
					<span>发起 2112</span>
				</div>

				<div className="copyright">
					关注中国集邮官方服务号，及时了解活动情况
				</div>

				
			</div>
		)
	}
}

export default Home;
