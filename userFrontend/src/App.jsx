import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./routes/UserHome";
import MainItems from './routes/MainItems'
import DrinksItems from './routes/DrinkItems'
import DessertsItems from './routes/DessertItem'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/mainitems" element={<MainItems/>} />
        <Route path="/drinksitems" element={<DrinksItems />} />
        <Route path="/dessertitems" element={<DessertsItems />} />
      </Routes>
    </>
  );
}

export default App;
