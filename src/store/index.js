import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialCartState = [];

const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.punkapi.com/v2/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "beers?page=3&per_page=80",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

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
    [productsApi.reducerPath]: productsApi.reducer,
    productsInCart: productsInCartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
