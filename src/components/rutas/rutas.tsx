import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import About from "../about/about";
import Home from "../home/home";
import Pelicula from "../pelicula/pelicula";

const Rutas: React.FC = () => {
  return (
    <IonRouterOutlet id="main">
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/pelicula/:id/:title">
        <Pelicula />
      </Route>
    </IonRouterOutlet>
  );
};

export default Rutas;