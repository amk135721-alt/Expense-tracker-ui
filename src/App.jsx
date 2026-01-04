import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './assets/pages/View'
import Error from './assets/pages/Error'
import Add from './assets/pages/Add'
import Edit from './assets/pages/Edit'
import { ToastContainer, toast } from 'react-toastify';
// import './App.css'

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<View/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/update/:id" element={<Edit/>}> </Route>

      {/* not found page*/}
      <Route path="*" element={<Error/>}>ERROR </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
