import { userService } from '../../src/userService'

// Unit test untuk service/business logic

// Contoh: User service dengan berbagai fungsi
const userService = {
  // Fungsi untuk membuat user baru
  createUser: (name, email) => {
    if (!name || !email) {
      throw new Error('Name and email are required');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    return {
      id: Date.now(),
      name,
      email,
      createdAt: new Date()
    };
  },

  // Fungsi untuk validasi email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Fungsi untuk format nama
  formatName: (name) => {
    return name.trim().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  },

  // Fungsi untuk menghitung umur dari tanggal lahir
  calculateAge: (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  },

  // Fungsi untuk generate username
  generateUsername: (name) => {
    return name.toLowerCase().replace(/\s/g, '.') + Math.floor(Math.random() * 1000);
  }
};

describe('User Service - Unit Tests', () => {
  
  // Test 1: Create user
  test('should create user with valid data', () => {
    const user = userService.createUser('John Doe', 'john@example.com');
    expect(user).toHaveProperty('id');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  // Test 2: Should throw error when name is missing
  test('should throw error when name is missing', () => {
    expect(() => {
      userService.createUser('', 'john@example.com');
    }).toThrow('Name and email are required');
  });

  // Test 3: Should throw error when email is invalid
  test('should throw error when email format is invalid', () => {
    expect(() => {
      userService.createUser('John Doe', 'invalid-email');
    }).toThrow('Invalid email format');
  });

  // Test 4: Validate email format
  test('should validate correct email format', () => {
    expect(userService.validateEmail('test@example.com')).toBe(true);
    expect(userService.validateEmail('invalid-email')).toBe(false);
  });

  // Test 5: Format name properly
  test('should format name to proper case', () => {
    expect(userService.formatName('john doe')).toBe('John Doe');
    expect(userService.formatName('JOHN SMITH')).toBe('John Smith');
  });

  // Test 6: Calculate age from birth date
  test('should calculate correct age', () => {
    const birthDate = '1995-05-15';
    const age = userService.calculateAge(birthDate);
    expect(age).toBeGreaterThan(0);
  });
});