import ItemCard from "./components/ItemCard";
import MainCart from "./components/MainCart";
import SubMenuCard from "./components/SubMenuCard";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ItemView from "./components/ItemView";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <>
      {/* <ItemCard buttonState = "Remove"/>
      <ItemCard buttonState = "Add"/> */}
      {/* <MainCart/>
      <SubMenuCard/> */}
      <Routes>
        <Route path="/" element={<MainCart />}></Route>
        <Route path="/cart" element={<SubMenuCard />}></Route>
        <Route path="/itemview" element={<ItemView />}
        >
          
        </Route>
        {/* meke path eka Cart  */}
      </Routes>
    </>
  );
}

export default App;
