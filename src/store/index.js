import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = [
  {
    id: 12,
    image: "https://images.punkapi.com/v2/keg.png",
    name: "BuzzEEEEERRRR",
    price: 1.0,
    quantityInCart: 1,
  },
];

export const productsInCartSlice = createSlice({
  name: "productsInCart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
    updateQuantityIncrementation(state, action) {
      return state.map((el) =>
        el.id === action.payload.id
          ? {
              ...el,
              quantityInCart: el.quantityInCart + 1,
            }
          : el
      );
    },
    updateQuantityDecrementation(state, action) {
      return state.map((el) =>
        el.id === action.payload.id
          ? {
              ...el,
              quantityInCart:
                el.quantityInCart === 0 ? 0 : el.quantityInCart - 1,
            }
          : el
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantityIncrementation,
  updateQuantityDecrementation,
} = productsInCartSlice.actions;

export const store = configureStore({
  reducer: {
    productsInCart: productsInCartSlice.reducer,
  },
});

