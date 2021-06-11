import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './Homepage';
import ShowColor from './ShowColor';
import AddColor from './AddColor';

const Routes = () => {
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red : "#FF0000",
        green: "#00FF00",
        blue: "#0000FF" 
    }

    const [colors, setColors] = useState(initialColors);

    const addColor = (obj) => {
        setColors(currentColors => ({...currentColors, ...obj}));
    }

    // get new color into local storage
    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colors))
    }, [colors]);

    return (
        <Switch>
            <Route exact path='/colors'>
                <Homepage colors={colors}/>
            </Route>
            <Route exact path='/colors/new'>
                <AddColor addColor={addColor}/>
            </Route>
            <Route path='/colors/:color'>
                <ShowColor colors={colors}/>
            </Route>
            <Redirect to="/colors"/>
        </Switch>
    )
}

export default Routes;