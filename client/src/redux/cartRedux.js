import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      )
      if (itemIndex >= 0) {
        state.products[itemIndex].productQty += 1
      } else {
        const tempProduct = { ...action.payload, productQty: 1 }
        state.products.push(tempProduct)
      }

      state.totalQuantity = state.products.length
    },
    deleteProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex(
          (product) => product._id === action.payload._id
        ),
        1
      )

      state.totalQuantity = state.products.length
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload._id
      )

      if (state.products[itemIndex].productQty > 1) {
        state.products[itemIndex].productQty -= 1
      } else if (state.products[itemIndex].productQty === 1) {
        state.products.splice(
          state.products.findIndex(
            (product) => product._id === action.payload._id
          ),
          1
        )
      }

      state.totalQuantity = state.products.length
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.products.reduce(
        (productTotal, product) => {
          const { price, productQty } = product
          const itemTotal = price * productQty

          productTotal.total += itemTotal
          productTotal.quantity += productQty

          return productTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )

      state.totalQuantity = quantity
      state.totalAmount = total
    },
  },
})

export const { addProduct, deleteProduct, decreaseQuantity, getTotal } =
  cartSlice.actions
export default cartSlice.reducer
