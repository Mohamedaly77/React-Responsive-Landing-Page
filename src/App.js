import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import New from './components/news/New';
import Popular from './components/Popular';
import Trending from './components/Trending';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<New />} />
        <Route path="/" element={<Popular />} />
        <Route path="/" element={<Trending />} />
        <Route path="/" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
