// import React from "react";
// import { ProductsPage } from "..ProductsPage/pages/Products/ProductsPage"
// import { FaqsPage } from ".FaqsPage./pages/Faqs/FaqsPage";
// import { AboutPage } from ".AboutPage./pages/About/AboutPage"
// import { HomePage } from "../pages/Home/HomePage"
// import { BrowserRouter, Route, Switch } from "react-router-dom"

// export const Rotas = () => {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route path="/" exact component={HomePage} />
//                 <Route path="/FaqsPage" exact component={FaqsPage} />
//                 <Route path="/AboutPage" exact component={AboutPage} />
//                 <Route path="/ProductsPage" exact component={ProductsPage} />
//             </Switch>
//         </BrowserRouter>
//     )
// }


import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {FaqsPage} from "../pages/Faqs/Index"
import { HomePage } from "../pages/Home/Index.js";
import { AboutPage } from "../pages/About/Index";
import {ProductsPage} from "../pages/Products/Index.js"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/about"}>
          <AboutPage />
        </Route>
        <Route exact path={"/products"}>
          <ProductsPage />
        </Route>
        <Route exact path={"/faqs"}>
          <FaqsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )};