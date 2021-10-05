import { createStore } from "redux";

export const addProduct = (payload) => {
  return {
    type: "products/add",
    payload,
  };
};

export const removeProduct = (payload) => {
  return {
    type: "products/remove",
    payload,
  };
};

const initialState = {
  products: [
    {
      id: 666,
      image: "https://placebear.com/200/300",
      name: "Example Beer",
      price: 1.0,
      quantity: 1,
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products/add":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "products/remove":
      return {};
    default:
      return state;
  }
};

export const store = createStore(productsReducer);
