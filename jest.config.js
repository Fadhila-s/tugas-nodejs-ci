module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // Roots untuk test files
  roots: ['<rootDir>/tests'],
  
  // Pattern untuk test files
  testMatch: ['**/*.test.js'],
  
  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.js',           // Sesuaikan dengan struktur project Anda
    '!src/**/*.test.js',
    '!src/**/*.spec.js',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  
  // Coverage threshold (minimal 70%)
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  
  // Output coverage report
  coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
  
  // Setup file untuk test
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  
  // Transform files
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};