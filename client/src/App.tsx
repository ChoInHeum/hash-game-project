import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header_/Header";
import Footer from "./components/footer_/Footer";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/AuthPage/SignInPage";


export default function App() {
  return(
    <Router>
        <Header/>
        <Routes>
          <Route path="" element={<MainPage/>}/>
          <Route path="/auth/signin" element={<SignInPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}