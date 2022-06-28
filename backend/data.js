import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Silva',
      rut: '123456789',
      email: 'decoralaser@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'maria',
      rut: '123456789',
      email: 'makeup1@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'alejandro',
      rut: '123456789',
      email: 'makeup2@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'frangel',
      rut: '123456789',
      email: 'makeup3@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'eve',
      rut: '123456789',
      email: 'makeup4@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'jocelyn',
      rut: '123456789',
      email: 'makeup5@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'guerra',
      rut: '123456789',
      email: 'makeup6@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'elizabeth',
      rut: '123456789',
      email: 'makeup7@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'natalia',
      rut: '123456789',
      email: 'makeup8@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'jenniffer',
      rut: '123456789',
      email: 'makeup9@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      nombre: 'Relojes',
      slug: 'relojes-decoralaser',
      precio: 200,
      imagen1: '/imagenes/Reloj1.jpg',
      descripcion: 'relojes con motivos customizables y de diferentes tamaños',
      inStock: 10,
    },

    {
      //_id: '2',
      nombre: 'Murales',
      slug: 'murales-decoralaser',
      precio: 20000,
      imagen1: '/imagenes/murales.jpg',
      descripcion: 'murales con motivos customizables y de diferentes tamaños',
      inStock: 0,
    },

    {
      //_id: '3',
      nombre: 'Aros',
      slug: 'aros-decoralaser',
      precio: 3000,
      imagen1: '/imagenes/aros1.jpg',
      descripcion: 'Bonitos aros con motivos y diseños a la medida',
      inStock: 20,
    },
  ],
};

export default data;
