import React from 'react';
import {useParams, Link} from 'react-router-dom';
import "./ShowColor.css";

const ShowColor = ({colors}) => {
    const {color} = useParams();

    return (
        <div className="color-wall" style={{backgroundColor: colors[color]}}>
            <h1>This is {color}</h1>
            <p>Is it beautiful? </p>
            <p><Link to="/colors">Go Back</Link></p>
        </div>
    )
}

export default ShowColor;