import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

function Producto(props) {
  const { producto } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === producto._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/productos/${item._id}`);
    if (data.inStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  return (
    <Card>
      <Link to={`/producto/${producto.slug}`}>
        <img
          src={producto.imagen1}
          className='card-img-top'
          alt={producto.nombre}
        />
      </Link>
      <Card.Body>
        <Link to={`/producto/${producto.slug}`}>
          <Card.Title>{producto.nombre}</Card.Title>
        </Link>
        <Card.Text>${producto.precio}</Card.Text>
        {producto.inStock === 0 ? (
          <Button variant='light' disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(producto)}>
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Producto;
