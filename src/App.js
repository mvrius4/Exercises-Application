import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './css/main.scss';
import './css/App.css';

const App = () => {
  return (
    <div className='wrapper' width='400px' m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;