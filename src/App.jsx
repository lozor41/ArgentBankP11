import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/index/Index'
import SignIn from './pages/signin/SignIn'
import User from './pages/user/User'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<div>Error404</div>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
