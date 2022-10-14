import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.products.push(action.payload)
      state.quantity = state.products.length
    },
    deleteFavorite: (state, action) => {
      state.products.splice(
        state.products.findIndex(
          (product) => product._id === action.payload._id
        ),
        1
      )
      state.quantity = state.products.length
    },
  },
})

export const { addFavorite, deleteFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
