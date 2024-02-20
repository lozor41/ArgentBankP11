import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectCurrentToken } from '../../app/userSlice'


function ProtectedRoutes() {
  const token = useSelector(selectCurrentToken)
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes