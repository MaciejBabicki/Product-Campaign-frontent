import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListCampaignComponents from './component/ListCampaignComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<ListCampaignComponents/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
