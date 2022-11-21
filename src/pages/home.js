import React, { useEffect, useState } from 'react';
import { getAllAriticle } from "../api"
import Card from '../components/card'
const Home = () => {
  const [article,setArticle] = useState([])
  useEffect(()=>{
    setAllArticle()
  },[])

  async function setAllArticle() {
    const data = await getAllAriticle()
    setArticle(data)
  }
    
  return (
    <>
    {
      article.map((item)=>(
        <Card key={item.id} data={item}/>
      ))
    }
    </>   
  )
}

export default Home