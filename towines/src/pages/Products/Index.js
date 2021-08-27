import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../services/url"
import api from "../../services/api"
import styled from "../Products/styled.module.scss"
import { CardProduct } from "../../components/CardProduct/index"
// import styled from "styled-components";

export const ProductsPage = () => {
    const [wines, setWines] = useState([])

    useEffect(() => {
        api
            .get(BASE_URL)
            .then((res) => setWines(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err)
            })
    }, [])

    console.log(wines)

    return (
        <div className={styled.bodyContainer}>
            <header>
                <h1>Hello World</h1>   
            </header>

            <div className={styled.wineContaienr}>
                <div className={styled.testeContainer}>
                {wines.map((wines, key) => {
                    return (

                        <CardProduct key={key} wines={wines} />

                    )
                })}
                </div>
            </div>
        </div>
    )
}