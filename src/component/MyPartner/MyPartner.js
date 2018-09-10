import React from "react";
import "./MyPartner.less";
import tx from "../../images/1.jpg";


class MyPartner extends React.Component{

constructor(){
    super();
    this.state={
        items:[{
            id:1,
            imgUrl:tx,
            name:"我就是我"
        },
        {
            id:2,
            imgUrl:tx,
            name:"abby"
        },{
            id:3,
            imgUrl:tx,
            name:"bick"
        },
        {
            id:4,
            imgUrl:tx,
            name:"vicky"
        },
        {
            id:5,
            imgUrl:tx,
            name:"天山暮雪"
        },
        {
            id:6,
            imgUrl:tx,
            name:"斗破苍穹"
        },
        ]
    }
}
    
render(){
    

    return(
        <div className="">
			


            	<div className="my_partner">
				<table border="0" cellSpacing="0" cellPadding="0">
					<thead>
                    <tr>
						<th>序号</th>
						<th>头像</th>
						<th>昵称</th>
					</tr>
                    </thead>
					<tbody>
                        {
                            this.state.items.map((item,index)=>{ 
                               return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td><img src={item.imgUrl} alt="" /></td>
                                        <td>{item.name}</td>
                                    </tr>
                               )
                           })
                        }
                    
                    </tbody>
				
				</table>
			</div>
				
				


        </div>
    )
}
}


export default MyPartner;