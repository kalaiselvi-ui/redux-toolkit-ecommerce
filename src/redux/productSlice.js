import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // products: Products,
  // If Products is constant and won't change (e.g., mock data for a demo), preloading it in initialState is efficient and avoids unnecessary boilerplate.
  products: [],
  searchTerm: "",
  filteredData: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
