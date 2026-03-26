export const productService = {
  calculateTotal: (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  applyDiscount: (total, discountPercent) => {
    if (discountPercent < 0 || discountPercent > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
    return total * (1 - discountPercent / 100);
  },
  
  filterByCategory: (products, category) => {
    return products.filter(product => product.category === category);
  },
  
  sortByPrice: (products, order = 'asc') => {
    return [...products].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
  },
  
  checkStock: (product, quantity) => {
    if (!product) return false;
    return product.stock >= quantity;
  }
};