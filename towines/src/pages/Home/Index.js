import React from "react"
import logo from "../../assets/logo.png"
import styled from "../Home/styles.module.scss"

export const HomePage = () => {
return(
    <div className={styled.bodyContainer}>
        <header className={styled.headerContainer}>
            <img className={styled.logoImg} src={logo} alt="Logo"/>
        </header>
        <div className={styled.mainContainer}>
            <div className={styled.textContainer}>
                <p className={styled.textPrincipal}>GREAT WINE</p>
                <p className={styled.subtitleText}>he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</p>
                <a className={styled.linkButtonProduct} href="/products"><button className={styled.buttonProducts}>Products</button></a>
                
            </div>
        </div>
    </div>
)
}