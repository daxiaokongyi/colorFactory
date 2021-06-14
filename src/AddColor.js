import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import "./AddColor.css";

const AddColor = ({addColor}) => {
    const initialState = {
        colorName: "",
        colorValue: "#ffffff"
    }

    const [formData, setFormData] = useState(initialState);

    let history = useHistory();

    const handleChange = evt => {
        let {name, value} = evt.target;
        setFormData(data => ({...data, [name]:value}));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        addColor({[formData.colorName]:formData.colorValue});
        history.push('/colors');
        setFormData(initialState);
    }

    return (
        <div className="color-container">
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="colorName">Color Name: </label>
                <input 
                    type="text"
                    id="colorName"
                    name="colorName"
                    value={formData.colorName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="colorValue">Color Value: </label>
                <input 
                    type="color" 
                    id="colorValue"
                    name="colorValue"
                    value={formData.colorValue}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Add this color"/>
            </form>
        </div>
    )
}

export default AddColor;