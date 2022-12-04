import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { getAriticleById } from "../api"
import heart from '../img/heart-3510.png'
import comm from '../img/comment.png'

const Detail = ()=> {
	let {id} = useParams();

  	const [detail,setDetail] = useState()
	const [isActiveLike,setActiveLike] = useState(false)
	const [isActiveComm,setActiveComm] = useState(false)

	useEffect(()=>{
		setDetailData()
	},[id])

	async function setDetailData() {
		const data = await getAriticleById(id)
		setDetail(data)
	}

	const likeClick = event => {
		setActiveLike(current => !current)
		// console.log("123123")
	}
	const commClick = event => {
		setActiveComm(current => !current)
		// console.log("123123")
	}
	

	return(
		
		<div>
			{	detail ?
				<div className="detail_wrap">
					<div className="left_wrap">
						<div className="detail_title">{detail.title}</div>
						<div className="detail_author">By {detail.author}</div>
						<div className="detail_description_long">{detail.description_long}</div>
						<img className="detail_img" alt="" src={detail.image}></img>
						<div className="button">
							<button className="btn like" onClick={likeClick} >
								<img className="icon like-icon" src={heart}></img>
								<div className="cont-like">1</div>
							</button>
							<button className="btn comm" onClick={commClick}>
								<img className="icon comm-icon" alt="" src={comm}></img>
								<div className="cont-comm">1</div>
							</button>
						</div>
					</div>
					<div className="right_wrap">
						<div className={ isActiveLike ? 'active_like' : 'like_none'}>11231231231212312312331223123123123</div>
						<div className={ isActiveComm ? 'active_comm' : 'comm_none'}>11231231231212312312331223123123123</div>
					</div>
				</div>
				: <></>
			}
		</div>
	)
}
export default Detail