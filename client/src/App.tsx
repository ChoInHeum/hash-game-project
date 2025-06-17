import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header_/Header";
import Footer from "./components/footer_/Footer";
import MainPage from "./pages/MainPage_/MainPage";
import LoginPage from "./pages/AuthPage_/LoginPage";


export default function App() {
  return(
    <Router>
        <Header/>
        <Routes>
          <Route path="" element={<MainPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}