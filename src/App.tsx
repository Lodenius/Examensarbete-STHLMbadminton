import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './pages/Start'
import Prices from './pages/Prices'
import About from './pages/About'
import Booking from './pages/Booking'
import Events from './pages/Events'
import Admin from './pages/Admin'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/about' element={<About />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/events' element={<Events />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
