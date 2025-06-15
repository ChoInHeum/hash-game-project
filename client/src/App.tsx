import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header"

export default function App() {
  return(
    <Router>
        <Header/>
        <Routes>
          <Route path="" element={<MainPage/>}/>
        </Routes>
    </Router>
  );
}