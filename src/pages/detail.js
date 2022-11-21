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
			</div>
				: <></>
			}
		</div>
	)
}
export default Detail