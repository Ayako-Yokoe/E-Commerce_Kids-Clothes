import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
    },
    deleteFavorite: (state, action) => {
      state.products.splice(
        state.products.findIndex(
          (product) => product._id === action.payload._id
        ),
        1
      )

      if (state.quantity > 0) {
        state.quantity -= 1
      }
      state.quantity = state.quantity
    },
  },
})

export const { addFavorite, deleteFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
