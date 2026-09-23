import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HeaderHomeLayout from "./Routes/HeaderHome";
import HeaderProductoLayout from "./Routes/HeaderProducto";

import HomeView from "./Features/Public/view/Homeview";
import ProductView from "./Features/Public/view/Productview";
import SupportView from "./Features/Public/view/SupportView";
import interpreterRoutes from "./Features/Interpreter/InterpreterRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderHomeLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
        </Route>

        <Route element={<HeaderProductoLayout />}>
          <Route path="/product" element={<ProductView />} />
          <Route path="/support" element={<SupportView />} />
        </Route>

        {interpreterRoutes}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
