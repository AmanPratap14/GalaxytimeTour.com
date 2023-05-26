import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import TourDetails from '../pages/TourDetails';
import Tours from '../pages/Tours';
import SearchResultList from '../pages/SearchResultList';

const Routers = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to='/Home'/>} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>

    </Routes>
  )
}

export default Routers;