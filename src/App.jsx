import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import SignIn from './pages/SignIn'
import User from './pages/User'
import './App.css'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<div>Error404</div>} />
        </Routes>
      </Router>
    </>
  )
}
