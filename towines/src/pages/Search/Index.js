import React, {useEffect, useState} from "react"
import {Header} from "../../components/Header/Index"
import { SearchBar } from "../../components/SearchBar"

export const SearchPage = () => {

    const [search, setSearch] = useState('')


return(
    <div>
        <Header/>
        <SearchBar/>
    </div>
)
}