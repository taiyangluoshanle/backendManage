// src/Routes.tsx
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export const ROUTES = [
  // {
  //   path: "/",
  //   element: <Home />,
  //   key: "1",
  //   label: '首页'
  // },
  {
    path: "/product",
    element: <Product />,
    key: "1",
  },
];

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
