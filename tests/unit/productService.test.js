import { productService } from '../../src/productService'

describe('Product Service - Unit Tests', () => {
  const sampleProducts = [
    { id: 1, name: 'Product A', price: 100, category: 'Electronics', stock: 10 },
    { id: 2, name: 'Product B', price: 50, category: 'Books', stock: 5 },
    { id: 3, name: 'Product C', price: 200, category: 'Electronics', stock: 0 }
  ];

  test('should calculate total price correctly', () => {
    const items = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 3 }
    ];
    expect(productService.calculateTotal(items)).toBe(350);
  });

  test('should apply discount correctly', () => {
    expect(productService.applyDiscount(100, 10)).toBe(90);
    expect(productService.applyDiscount(100, 50)).toBe(50);
  });

  test('should throw error for invalid discount', () => {
    expect(() => productService.applyDiscount(100, 101)).toThrow();
    expect(() => productService.applyDiscount(100, -5)).toThrow();
  });

  test('should filter products by category', () => {
    const electronics = productService.filterByCategory(sampleProducts, 'Electronics');
    expect(electronics).toHaveLength(2);
    expect(electronics[0].category).toBe('Electronics');
  });

  test('should sort products by price ascending', () => {
    const sorted = productService.sortByPrice(sampleProducts, 'asc');
    expect(sorted[0].price).toBe(50);
    expect(sorted[2].price).toBe(200);
  });

  test('should check stock availability', () => {
    expect(productService.checkStock(sampleProducts[0], 5)).toBe(true);
    expect(productService.checkStock(sampleProducts[2], 1)).toBe(false);
  });
});