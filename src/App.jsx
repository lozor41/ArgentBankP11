import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/index/Index'
import Error from './pages/Error/Error'
import Footer from './components/footer/Footer'
import SignIn from './pages/signin/SignIn'
import Profile from './pages/user/User'
import ProtectedRoutes from './components/protectedroute/Protectedroute'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App