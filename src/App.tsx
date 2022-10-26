import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TopPage } from './components'
import './css/app.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
    </Routes>
  )
}

export default App
