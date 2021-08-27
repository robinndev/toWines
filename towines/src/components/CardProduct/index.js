import React from "react"
import styled from "./styled.module.scss"
import teste from "../../assets/teste.png"

export const CardProduct = () => {
    return (
        <div>
            <div className={styled.cardContainer}>

                <div className={styled.wineContainer}>
                    <img src={teste} className={styled.wineImg} />
                </div>

                <div className={styled.atributesContainer}>
                    <p>Wine:</p>
                    <p>Winery:</p>
                    <p>Location:</p>
                </div>


                <div className={styled.revierContainer}>
                    <p>review:</p>
                    <p>average:</p>
                </div>


            </div>
        </div>
    )
}