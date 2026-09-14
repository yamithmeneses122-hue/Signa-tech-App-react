import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../src/Routes/PublicLayout";

import HomeView from "./Features/Public/Homeview";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<PublicLayout />}>

                    <Route path="/home" element={<HomeView />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;