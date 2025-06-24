import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import MainLayout from "./conponents/MainLayout";
import Main from "./conponents/Main";
import Login from "./conponents/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Main/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
