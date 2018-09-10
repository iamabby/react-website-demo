import React, {
	Component
} from "react";

import Swiper from 'react-id-swiper/lib/custom';
import banner1 from "../../images/banner_1.jpg";
import banner2 from "../../images/banner_2.jpg";
import banner3 from "../../images/banner_3.jpg";
import banner4 from "../../images/banner_4.jpg";
import banner5 from "../../images/banner_5.jpg";
import banner6 from "../../images/banner_6.jpg";
import banner7 from "../../images/banner_7.jpg";
import banner8 from "../../images/banner_8.jpg";
import banner9 from "../../images/banner_9.jpg";
import banner10 from "../../images/banner_10.jpg";
import banner11 from "../../images/banner_11.jpg";
import banner12 from "../../images/banner_12.jpg";

import "./SlideShow.less";


class SlideShow extends Component {

	constructor(props) {
		super(props);
		this.state={
			items:[{
				id:1,
				url:banner1,
			},
			{
				id:2,
				url:banner2,
			},
			{
				id:3,
				url:banner3,
			},
			{
				id:4,
				url:banner4,
			},
			{
				id:5,
				url:banner5,
			},
			{
				id:6,
				url:banner6,
			},
			{
				id:7,
				url:banner7,
			},
			{
				id:8,
				url:banner8,
			},
			{
				id:9,
				url:banner9,
			},
			{
				id:10,
				url:banner10,
			},
			{
				id:11,
				url:banner11,
			},
			{
				id:12,
				url:banner12,
			},
			
			]
		}
	}

	render() {
		const params = {
			
		autoplay: true,
		loop: true,
		effect: 'coverflow',
		slidesPerView: 1.35,
		centeredSlides: true,
		coverflowEffect: {
			rotate: 5,
			stretch: 100,
			depth: 100,
			modifier: 5,
			slideShadows: false
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		}

		return(

			<div className="swiper-bar">
				<Swiper {...params} className="banner-container">
			         {
			         	this.state.items.map((item,index)=>{
			         		return(
			         			<div key={index}> <img src={item.url} alt=""  /></div>
			         		)
			         	})
			         }
		      	</Swiper>
			</div>
		)
	}
}

export default SlideShow;