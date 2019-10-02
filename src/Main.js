import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AutoCar from './AutoCar';
import CarDetail from './CarDetail';
import Moto from './Moto';
import MotoDetail from './MotoDetail';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/auto" component={AutoCar}/>
                <Route path="/auto/:name" component={CarDetail}/>
                <Route exact path="/moto" component={Moto}/>
                <Route path="/moto/:name" component={MotoDetail}/>
            </Switch>
        </main>
    )
}
export default Main;