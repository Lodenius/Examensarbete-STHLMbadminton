import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './pages/Start'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
