import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import MyForm from './pages/MyForm';
import FavoriteColor from './pages/FavoriteColor';
import Car from './pages/Car';
import Timer from './pages/Timer';
import TimerRunOnce from './pages/TimerRunOnce';
import TimerRunOnVariableChange from './pages/TimerRunOnVariableChange';
import TimerClearTimeout from './pages/TimerClearTimeout';
import PropDrillingComponent from './pages/PropDrillingComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="myform" element={<MyForm />} />
          <Route path="favoritecolor" element={<FavoriteColor />} />
          <Route path="car" element={<Car />} />
          <Route path="timer" element={<Timer />} />
          <Route path="timerrunonce" element={<TimerRunOnce />} />
          <Route path="timerrunonvariablechange" element={<TimerRunOnVariableChange />} />
          <Route path="timercleartimeout" element={<TimerClearTimeout />} />
          <Route path="propdrillingcomponent" element={<PropDrillingComponent />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
