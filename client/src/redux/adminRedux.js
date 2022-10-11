import { createSlice } from "@reduxjs/toolkit"

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    currentAdmin: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    adminloginStart: (state) => {
      state.isFetching = true
    },
    adminloginSuccess: (state, action) => {
      state.isFetching = false
      state.currentAdmin = action.payload
    },
    adminloginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    adminregisterStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    adminregisterSuccess: (state, action) => {
      state.isFetching = false
      state.currentAdmin = action.payload
    },
    adminregisterFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    adminlogout: (state) => {
      state.currentAdmin = null
    },
  },
})

export const {
  adminloginStart,
  adminloginSuccess,
  adminloginFailure,
  adminregisterStart,
  adminregisterSuccess,
  adminregisterFailure,
  adminlogout,
} = adminSlice.actions
export default adminSlice.reducer
