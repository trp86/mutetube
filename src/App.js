// import logo from './logo.svg';
import "./App.css";
import Home from "./routes/home/home.component";
import Navigator from "./routes/navigator/navigator.component";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/hamburger-menu/menu.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigator />} />
        </Route>
        <Route path="menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
