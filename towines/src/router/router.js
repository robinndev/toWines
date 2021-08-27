import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {SearchPage} from "../pages/Search/Index"
import { HomePage } from "../pages/Home/Index.js";
import { AboutPage } from "../pages/About/Index.js";
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
        <Route exact path={"/search"}>
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )};