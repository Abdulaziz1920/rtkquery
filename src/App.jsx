import Footer from "./components/TheFooter/Footer";
import Header from "./components/TheHeader/Header";
import Todos from "./pages/todos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Todos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;