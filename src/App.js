import React, { useState } from "react"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import CatEdit from './pages/CatEdit';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom'

import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)

  const createCat = (cat) => {
    console.log("Cat creation", cat);
  }
  return (
<>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/catindex" element={<CatIndex cats={cats} />} />
  <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
  <Route path="/catnew" element={<CatNew createCat={createCat} />} />
  <Route path="/catedit" element={<CatEdit />} />
  <Route path="*" element={<NotFound />} />
</Routes>
<Footer />
</>
  );
}

export default App;
