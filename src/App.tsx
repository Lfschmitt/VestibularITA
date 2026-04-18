import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Provas from './pages/Provas'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/provas" element={<Provas />} />
    </Routes>
  )
}
