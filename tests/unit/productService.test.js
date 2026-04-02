const {
  calculateTotalPrice,
  applyDiscount,
  filterByCategory,
  sortByPrice,
  checkStock
} = require('../../src/productService');

describe('Product Service', () => {
  test('should calculate total price correctly', () => {
    const products = [
      { price: 100 },
      { price: 200 }
    ];
    expect(calculateTotalPrice(products)).toBe(300);
  });

  test('should apply discount correctly', () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  test('should throw error for invalid discount', () => {
    expect(() => applyDiscount(100, 200)).toThrow();
  });

  test('should filter products by category', () => {
    const products = [
      { category: 'food' },
      { category: 'drink' }
    ];
    expect(filterByCategory(products, 'food').length).toBe(1);
  });

  test('should sort products by price ascending', () => {
    const products = [
      { price: 200 },
      { price: 100 }
    ];
    const sorted = sortByPrice(products);
    expect(sorted[0].price).toBe(100);
  });

  test('should check stock availability', () => {
    expect(checkStock({ stock: 5 })).toBe(true);
  });
});