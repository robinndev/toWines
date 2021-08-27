// import React, {useState, useEffect} from "react"
import axios from "axios"
// import { BASE_URL } from "./url"

const api = axios.create({
    baseURL : "https://api.sampleapis.com/wines/rose"
})

export default api; 

// export const request = () => {
    
//     useEffect(() => {
//         axios.get(BASE_URL)
//     }, [])
    
//     return (
//      <div>

//      </div>   
//     )
// } 