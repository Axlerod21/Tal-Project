import "./itemSelection.css";
import { List, Card  } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAppetizers, getMains, getDesserts } from "../api/api";
import DishItem from "./dishItem";
import { useState } from "react";

const ItemSelection = ({ category }) => {
  const [dishCount, setDishCount] = useState(0);

  let dishApi, price;

  if (category === "Appetizer") {
    dishApi = getAppetizers;
    price = "30"
  } else if (category === "Main") {
    dishApi = getMains;
    price = "60"
  } else if (category === "Dessert") {
    dishApi = getDesserts;
    price = "20"
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [category],
    queryFn: dishApi,
  });

  if (isError) {
    console.log(`Error fetching Dish list: ${error}`);
    return <div>An error occured!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="selectionContainer">
      <div className="selectionHeader">
        <div className="category">{category}</div>
        <div className="price">Price: ${price}</div>
        <div className="counter">{dishCount}</div>
      </div>
      <List className="selectionList">
        {data.map((app) => (
          <div>
            <DishItem dish={app} dishCounter={dishCount} setDishCounter={setDishCount}/>
            <div className="divider">* * * * * * *</div>
          </div>
        ))}
      </List>
    </Card>
  );
};

export default ItemSelection;
