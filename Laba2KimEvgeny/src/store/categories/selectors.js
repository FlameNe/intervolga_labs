export const fetchItems = ( store ) => {
  const { dispatch } = store;
  dispatch('categories/fetchItems');
};

export const selectItems = ( store ) => {
  const { getters } = store;
  return getters['categories/items']
}

export const removeItem = ( store, id ) => {
  const { dispatch } = store;
  dispatch('categories/removeItem', id);
}

export const addItem = ( store, { category, description } ) => {
  const { dispatch } = store;
  dispatch('categories/addItem', { category, description });
}

export const updateItem = ( store, { id, category, description }) => {
  const { dispatch } = store;
  dispatch('categories/updateItem', { id, category, description });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['categories/itemsByKey'][id] || {};
}
