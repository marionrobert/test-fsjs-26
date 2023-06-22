import { useState } from 'react'
import './App.css'

// cimport components
import Header from "./components/header"
import Footer from "./components/footer"

// import containers
import Home from "./containers/home"
import Details from "./containers/details"

import {Routes, Route, Navigate} from "react-router-dom"


function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/details/:id" element={<Details/>}/>
          <Route exact path="*" element={<Navigate to="/"/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
