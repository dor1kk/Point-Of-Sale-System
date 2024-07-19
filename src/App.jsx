import React from 'react'
import Home from './pages/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import IngredientList from './pages/IngridientList';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/Ingridients' element={<IngredientList />}></Route>
      </Routes>
    </div>
  )
}

export default App
