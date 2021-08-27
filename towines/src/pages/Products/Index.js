import React, {useEffect, useState} from "react";
import {BASE_URL} from "../../services/url"
import api from "../../services/api"

export const ProductsPage = () => {
    const [wines, setWines] = useState([])

  useEffect(() => {
    api
    .get(BASE_URL)
    .then((res) => setWines(res.data))
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err)
    })
  },[])

  console.log(wines)

return(
    <div>

    {wines.map((wines, key) => {
        return(
            <div key={key}>
            <h1>{wines.wine}</h1>
            <img src={wines.image}/>
            <h1>{wines.id}</h1>
            </div>
        )
    })}

    <h1>Hello World4</h1>
    </div>
)
}