import { AppBar, Toolbar, Typography } from "@mui/material";
import ItemSelection from "./components/itemSelection";

const App = () => {
  return (
    <div>
      <AppBar className="appBar" position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Menu 
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="appContents">
        <ItemSelection category={"Appetizer"}/>
        <ItemSelection category={"Main"}/>
        <ItemSelection category={"Dessert"}/>
      </div>
    </div>
  );
};

export default App;
