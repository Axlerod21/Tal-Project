import "./dishItem.css"
import React, { useState } from "react"
import { ListItemButton, ListItemText } from '@mui/material';

const DishItem = ({ dish, dishCounter, setDishCounter }) => {
    const [style, setStyle] = useState("unselected")

    const dishSelect = () => {
        if(style === "selected") {
            setDishCounter(dishCounter - 1)
            setStyle("unselected")
        } 
        else if(dishCounter === 3) return;
        else {
            setDishCounter(dishCounter + 1)
            setStyle("selected");
        }
    }

    return (
        <ListItemButton className={`listItem ${style}`} onClick={dishSelect}>
            <ListItemText>{dish.name}</ListItemText>
            <ListItemText>{dish.price}</ListItemText>
        </ListItemButton>
    )
}

export default DishItem