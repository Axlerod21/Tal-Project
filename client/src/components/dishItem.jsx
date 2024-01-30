import React from "react"
import { ListItemButton } from '@mui/material';

const DishItem = ({ dish }) => {
    const addDish = () => {
        
    }

    return (
        <ListItemButton onClick={addDish}>{dish.name}</ListItemButton>
        // <div>{dish.name}</div>
    )
}

export default DishItem