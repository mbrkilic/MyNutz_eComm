import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ali',
    email: 'ali@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Efe',
    email: 'efe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
