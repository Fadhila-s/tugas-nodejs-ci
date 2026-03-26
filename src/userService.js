export const userService = {
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

  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return emailRegex.test(email);
  },

  formatName: (name) => {
    return name.trim().split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  },

  calculateAge: (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
};