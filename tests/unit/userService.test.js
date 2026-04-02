const {
  createUser,
  calculateAge
} = require('../../src/userService');

describe('User Service', () => {
  test('should create user with valid data', () => {
    const user = createUser('Budi', 'budi@email.com', 2000);
    expect(user.name).toBe('Budi');
  });

  test('should throw error when name is missing', () => {
    expect(() => createUser('', 'email@test.com', 2000)).toThrow();
  });

  test('should throw error when email format is invalid', () => {
    expect(() => createUser('Budi', 'emailtest.com', 2000)).toThrow();
  });

  test('should calculate correct age', () => {
    const age = calculateAge(2000);
    expect(age).toBeGreaterThan(20);
  });
});