import { createStore } from "redux";

export const addToCart = (payload) => {
  return {
    type: "productsInCart/addToCart",
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: "productsInCart/removeFromCart",
    payload,
  };
};

export const updateQuantityIncrementation = (payload) => {
  return {
    type: "productsInCart/updateQuantityIncrementation",
    payload,
  };
};

export const updateQuantityDecrementation = (payload) => {
  return {
    type: "productsInCart/updateQuantityDecrementation",
    payload,
  };
};

const initialState = {
  productsInCart: [
    {
      id: 666,
      image: "https://placebear.com/300/300",
      name: "Example Beer",
      price: 1.0,
      quantityInCart: 1,
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "productsInCart/addToCart":
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    case "productsInCart/removeFromCart":
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "productsInCart/updateQuantityIncrementation":
      return {
        ...state,
        productsInCart: state.productsInCart.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                quantityInCart: el.quantityInCart + 1,
              }
            : el
        ),
      };
    case "productsInCart/updateQuantityDecrementation":
      return {
        ...state,
        productsInCart: state.productsInCart.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                quantityInCart:
                  el.quantityInCart === 0 ? 0 : el.quantityInCart - 1,
              }
            : el
        ),
      };
    default:
      return state;
  }
};

export const store = createStore(
  productsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
