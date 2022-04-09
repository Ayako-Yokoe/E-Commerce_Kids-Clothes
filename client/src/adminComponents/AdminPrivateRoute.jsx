import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const AdminPrivateRoute = () => {
    const user = useSelector(state => state.user.currentUser)

  return (
    user ? <Outlet /> : <Navigate to='/adminlogin' />
  )
}

export default AdminPrivateRoute