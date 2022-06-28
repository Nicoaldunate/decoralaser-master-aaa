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
      nombre: 'Aros',
      slug: 'Aros-1',
      precio: '4000',
      imagen1: '/imagenes/aros1.jpg',
      descripcion: 'Bonitos aros de distintos Colores y customizables',
      inStock: 10,
    },
    {
      //_id: '1',
      nombre: 'murales grandes',
      slug: 'murales-l',
      precio: '8000',
      imagen1: '/imagenes/murales.jpg',
      descripcion: 'Bonitos murales de hasta 80x80cm',
      inStock: 10,
    },
    {
      //_id: '1',
      nombre: 'Murales Medianos',
      slug: 'relojes-M',
      precio: '9000',
      imagen1: '/imagenes/Murales.png',
      descripcion: 'Murales desde 40x40 hasta 60x60',
      inStock: 10,
    },

    {
      //_id: '2',
      nombre: 'Murales',
      slug: 'murales-decoralaser',
      precio: '20000',
      imagen1: '/imagenes/murales.jpg',
      descripcion: 'murales con motivos customizables y de diferentes tamaños',
      inStock: 0,
    },

    {
      //_id: '3',
      nombre: 'Murales XL',
      slug: 'Murales-XL',
      precio: '12000',
      imagen1: '/imagenes/aros1.jpg',
      descripcion: 'Murales Customizables de hasta 1.2x1.2m',
      inStock: 20,
    },
    {
      //_id: '3',
      nombre: 'Relojes',
      slug: 'Relojes',
      precio: '8000',
      imagen1: '/imagenes/RelojGrande.png',
      descripcion: 'Relojes Customizables de hasta 60x60cm',
      inStock: 20,
    },
  ],
};

export default data;
