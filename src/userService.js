function createUser(name, email, birthYear) {
  if (!name) throw new Error('Name required');
  if (!email.includes('@')) throw new Error('Invalid email');

  return { name, email, birthYear };
}

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

module.exports = {
  createUser,
  calculateAge
};