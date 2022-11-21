import axios from "axios"

const URL = "http://127.0.0.1:5000"

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