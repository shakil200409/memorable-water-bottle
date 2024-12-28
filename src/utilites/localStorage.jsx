const getStoredData = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const addToLS = (id) => {
  const cart = getStoredData();
  cart.push(id);
  // Save to local storage
  saveCartToLS(cart);
};

export { addToLS, getStoredData };
