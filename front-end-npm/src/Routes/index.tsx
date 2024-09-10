import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to={"/"} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
