import "./itemSelection.css";
import { Button, List, ListSubheader  } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAppetizers, getMains, getDesserts } from "../api/api";
import DishItem from "./dishItem";

const ItemSelection = ({ category }) => {
  let dishApi;

  if (category === "Appetizer") {
    dishApi = getAppetizers;
  } else if (category === "Main") {
    dishApi = getMains;
  } else if (category === "Dessert") {
    dishApi = getDesserts;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [category],
    queryFn: dishApi,
  });

  if (isError) {
    console.log(`Error fetching Todo list: ${error}`);
    return <div>An error occured!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="selectionContainer">
      <div className="selectionHeader">
        <div>Counter</div>
        <Button variant="contained" className="addButton">
          Add
        </Button>
        <div className="category">{category}</div>
      </div>
      {/* <List className="selectionList">
        {data.map((apps) => (
          <DishItem dish={apps} />
        ))}
      </List> */}
      <List className="selectionList">
        {data.map((app) => (
          <DishItem dish={app}/>
        ))}
      </List>
    </div>
  );
};

export default ItemSelection;
