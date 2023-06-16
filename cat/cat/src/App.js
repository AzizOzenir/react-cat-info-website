import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import SingleCat from "./pages/singleCat/singleCat.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/:name" element={<SingleCat />}>

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
