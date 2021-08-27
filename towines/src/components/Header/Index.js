import React from "react"
import styled from "./styled.module.scss"
import logo from "../../assets/logo.png"

export const Header = () => {
    return (
        <div className={styled.headerContainer}>
            <img className={styled.logoImage} src={logo}/>

            <div className={styled.navbarContainer}>
                <a className={styled.tagA} href="/"><p>HOME</p></a>
                <a className={styled.tagA} href="products"><p>PRODUCTS</p></a>
                <a className={styled.tagA} href="search"><p>SEARCH</p></a>
                <a className={styled.tagA} href="about"><p>ABOUT</p></a>
            </div>
        </div>
    )
}