import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { getAriticleById } from "../api"


const Detail = ()=> {
	let {id} = useParams();

  const [detail,setDetail] = useState()
	
  useEffect(()=>{
    setDetailData()
  },[id])

  async function setDetailData() {
    const data = await getAriticleById(id)
    setDetail(data)
  }
  

	return(
		
		<div>
			{	detail ?
				<div className="detail_wrap">
				<div className="detail_title">{detail.title}</div>
				<div className="detail_author">By {detail.author}</div>
				<div className="detail_description_long">{detail.description_long}</div>
				<img className="detail_img" alt="" src={detail.image}></img>
				<div className="button">
					<div className="like" onClick>
						<img className="like-icon" alt="" src></img>
						<div className="cont.like">1</div>
					</div>
					<div className="comm" onClick>
						<img className="comm-icon" alt="" src></img>
						<div className="cont.comm">1</div>
					</div>
				</div>
			</div>
				: <></>
			}
		</div>
	)
}
export default Detail