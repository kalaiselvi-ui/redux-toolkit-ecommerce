import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        // This map operation again iterates over the products array and checks item.id === newItem.id for each item. This is unnecessary because you already found the item using find. You can directly update the item that was returned by find without iterating again.
        // state.products = state.products.map((item) =>
        //   item.id === newItem.id
        //     ? {
        //         ...item,
        //         quantity: item.quantity + 1,
        //         totalPrice: item.totalPrice + newItem.price,
        //       }
        //     : item
        // );
        itemIndex.quantity += 1;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products = [
          ...state.products,
          {
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            image: newItem.image,
          },
        ];
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    clearCart: (state) => {
      state.products = []; // Clear all products from the cart
    },
    removeFromCart(state, action) {
      const newItem = action.payload;
      console.log(newItem, "newitem");
      const findItem = state.products.find((item) => item.id === newItem.id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter(
          (item) => item.id !== newItem.id
        );
      }
    },
    increaseQuantity(state, action) {
      const newItem = action.payload;
      const findItem = state.products.find((item) => item.id === newItem.id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decreaseQuantity(state, action) {
      const newItem = action.payload;
      const findItem = state.products.find((item) => item.id === newItem.id);
      if (findItem) {
        if (findItem.quantity > 1) {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
          state.totalQuantity--;
          state.totalPrice -= findItem.price;
        } else {
          toast.error("Minimum quantity is 1");
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
