import React, { useEffect, useState } from 'react';
import { getAllAriticle } from "../api"
import Card from '../components/card'
const Home = () => {
  const [article,setArticle] = useState([])
  useEffect(()=>{
    setAllArticle()
  },[])

  async function setAllArticle() {
    const resp = await getAllAriticle()
    console.log(resp)
    setArticle(resp)
  }
    
  return (
    <>
    <div>Home</div>
    {
      article.map((item)=>(
        <Card data={item}/>
      ))
    }
    </>   
  )
}

export default Home