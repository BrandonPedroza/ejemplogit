import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Agregar } from '../pages/Agregar';
import { Inicio } from '../pages/Inicio';
import { Reporte } from '../pages/Reporte';
export const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/home" component={Inicio} />
          <Route path="/individual" component={Reporte} />
          <Route path="/agregar" component={Agregar} />
          <Route path="/" component={Agregar} />
        </Switch>
      </div>
    </Router>
  );
};
