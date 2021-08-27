import React from "react"
import styled from "./styled.module.scss"
import teste from "../../assets/teste.png"


export const CardProduct = (props) => {
    return (
        <div className={styled.bodyContainer}>
            <div className={styled.cardContainer}>

                <div className={styled.wineContainer}>
                    <img src={props.wines.image} className={styled.wineImg} />
                </div>

                <div className={styled.atributesContainer}>
                    <p>{props.wines.name}</p>
                    <p>{props.wines.winery}</p>
                    <p>{props.wines.location}</p>
                </div>


                <div className={styled.revierContainer}>
                    <p>{props.wines.rating.reviews}</p>
                    <p>{props.wines.rating.average}</p>
                </div>


            </div>
        </div>
    )
}