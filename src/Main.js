import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AutoCar from './AutoCar';
import Moto from './Moto';
import CarDetail from './CarDetail';


const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/autocar" component={AutoCar}/>
                <Route path="/autocar/:name" component={CarDetail}/>
                <Route path="/moto" component={Moto}/>
            </Switch>
        </main>
    )
}
export default Main;