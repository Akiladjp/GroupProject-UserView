import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./routes/UserHome";
import MainItems from "./routes/MainItems";
import DrinksItems from "./routes/DrinkItems";
import DessertsItems from "./routes/DessertItem";
import MainCart from "./routes/MainCart";
import ItemView from "./routes/ItemView";
import SubMenuCard from "./routes/SubMenuCard";
import UserProfile from "./routes/UserProfile";
import FinalBill from "./routes/FinalBill";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/mainitems" element={<MainItems />} />
        <Route path="/drinksitems" element={<DrinksItems />} />
        <Route path="/dessertitems" element={<DessertsItems />} />
        <Route path="/maincart" element={<MainCart />}></Route>
        <Route path="/itemview" element={<ItemView />}></Route>
        <Route path="/submenucart" element={<SubMenuCard />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/finalbill" element={<FinalBill />}></Route>
       
      </Routes>
    </>
  );
}

export default App;
