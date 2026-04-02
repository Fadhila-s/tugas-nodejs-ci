function calculateTotalPrice(products) {
  return products.reduce((total, p) => total + p.price, 0);
}

function applyDiscount(price, discount) {
  if (discount < 0 || discount > 100) {
    throw new Error('Invalid discount');
  }
  return price - (price * discount / 100);
}

function filterByCategory(products, category) {
  return products.filter(p => p.category === category);
}

function sortByPrice(products) {
  return products.sort((a, b) => a.price - b.price);
}

function checkStock(product) {
  return product.stock > 0;
}

module.exports = {
  calculateTotalPrice,
  applyDiscount,
  filterByCategory,
  sortByPrice,
  checkStock
};