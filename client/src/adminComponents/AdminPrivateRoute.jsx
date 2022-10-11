import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AdminPrivateRoute = () => {
  const admin = useSelector((state) => state.admin.currentAdmin)

  return admin ? <Outlet /> : <Navigate to="/adminlogin" />
}

export default AdminPrivateRoute
