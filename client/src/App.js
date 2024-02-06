import "./App.css"
import ItemSelection from "./components/itemSelection";

const App = () => {
  return (
    <div className="page">
      <div className="appContents">
        <ItemSelection category={"Appetizer"}/>
        <ItemSelection category={"Main"}/>
        <ItemSelection category={"Dessert"}/>
      </div>
    </div>
  );
};

export default App;
