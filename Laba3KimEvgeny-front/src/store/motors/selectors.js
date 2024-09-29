export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('motors/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['motors/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('motors/removeItem', id);
}

export const addItem = (store, { brand, viscosity, volume, category }) => {
  const { dispatch } = store;
  dispatch('motors/addItem', { brand, viscosity, volume, category });
}

export const updateItem = (store, { id, brand, viscosity, volume, category }) => {
  const { dispatch } = store;
  dispatch('motors/updateItem', { id, brand, viscosity, volume, category });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['motors/itemsByKey'][id] || {};
}
