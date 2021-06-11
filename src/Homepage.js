import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Homepage.css"

const Homepage = ({colors}) => {
    const colorsAdded = Object.keys(colors).map(
        colorName => (
            <li key={colorName}>
                <NavLink to={`/colors/${colorName}`}>{colorName}</NavLink>
            </li>
        )
    );

    return (
        <div>
            <div className="welcome">
                <h1>Welcome to the color factory</h1>
                <Link className="add-color" to="/colors/new">Add a color</Link>
            </div>
            <div>
                <p>Please select a color</p>
                <ul>
                    {colorsAdded}
                </ul>
            </div>
        </div>
    )
}

export default Homepage;