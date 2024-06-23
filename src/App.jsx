import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListCampaignComponents from './component/ListCampaignComponent'
import CampaignComponent from './component/CampaignComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* //http://localhost:5000/campaign */}
          <Route path='/campaigns' element = {<ListCampaignComponents/>}> </Route>

          {/* //http://localhost:5000/add-campaign */}
          <Route path='add-campaign' element = {<CampaignComponent/>}></Route>

          <Route path='/edit-campaign/:id' element = {<CampaignComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
