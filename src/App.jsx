import Todos from "./pages/todos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
