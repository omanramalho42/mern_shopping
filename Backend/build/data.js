import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Oman',
      email: 'omanapple42@hotmail.com',
      password: bcrypt.hashSync('oman120600'),
      isAdmin: false
    },
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('password'),
      isAdmin: true
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '../assets/images/nike_tshirt.png',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality shirt.'
    },
    {
      // _id: '2',
      name: 'Nike Slim Hat',
      slug: 'nike-slim-hat',
      category: 'Hat',
      image: '../assets/images/nike_hat.png',
      price: 80,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.3,
      numReviews: 12,
      description: 'High quality hat.'
    },
    {
      // _id: '3',
      name: 'Nike Slim Pants',
      slug: 'nike-slim-pants',
      category: 'Pants',
      image: '../assets/images/nike_pants.png',
      price: 160,
      countInStock: 18,
      brand: 'Nike',
      rating: 4.9,
      numReviews: 16,
      description: 'High quality Pants.'
    },
    {
      // _id: '4',
      name: 'Nike Slim Shoes',
      slug: 'nike-slim-shoes',
      category: 'Shoes',
      image: '../assets/images/nike_shoes.png',
      price: 150,
      countInStock: 5,
      brand: 'Nike',
      rating: 3.9,
      numReviews: 7,
      description: 'High quality shoes.'
    },
  ],
};

export default data;