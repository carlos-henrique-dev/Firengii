import { dataMock } from "./dataMock";

export const state = () => ({
  ...dataMock
});

export const getters = {
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  }
};

export const mutations = {
  addItem(state, id) {
    let item = state.products.find(product => product.id == id);
    state.myRentals.push(item);
  }
};
