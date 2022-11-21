import axios from "axios"

const URL = "https://wk10python1.up.railway.app"

export const getAllAriticle = async() => {
  try {
    const request = await axios.get(`${URL}/api/articles/all`)
    return request.data
  }catch(err) {
    console.log(err)
  }
}

export const getAriticleById = async(id) => {
  try {
    const request = await axios.get(`${URL}/api/articles/id/${id}`)
    return request.data
  }catch(err) {
    console.log(err)
  }
}