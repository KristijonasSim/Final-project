import axios from 'axios';


/* eslint-disable */
const fakeFetch = ({ email, password }) => new Promise(((success, failure) => {
  setTimeout(() => {
    if(email === 'admin@gmail.com' && password === 'Vilnius123') {
      success({
        token: 'jfsdflkajdsflk',
        user: {
          id: '5165',
          role: 'admin',
          email: 'admin@gmail.com',
        }
      });
    }else {
      failure(new Error('Incorrect email or/and password'));
    }
  }, 2000);
}));


const annonymousInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'no-cors',
});

const fetchUsers = async () => {
  const response = await annonymousInstance.get('/users');
  return response.data;
};

const fetchItems = async () => {
  const response = await annonymousInstance.get('/items');
  return response.data;
};

const fetchCarts = async () => {
  const response = await annonymousInstance.get('/carts');
  return response.data;
};

const fetchCartProducts = async () => {
  const response = await annonymousInstance.get('/cartProducts');
  return response.data;
};

const fetchOrders = async () => {
  const response = await annonymousInstance.get('/orders');
  return response.data;
};

const fetchedItems = async () => {
  const items = await fetchItems();
  
  const formatedItems = items.map(({
    id, price, ...rest
  }) => {
    const item = {
      ...rest,
      id,
      price: `${price.value} ${price.currency}`,
    };
    return item;
  });

  return formatedItems;
};

const APIService = {
  fetchUsers,
  fetchItems,
  fetchCarts,
  fetchCartProducts,
  fetchOrders,
  fetchedItems,
};



const login = async({email, password}) => {
  const response = await fakeFetch({email, password});
  return response;
};

export default {
  login,
  APIService,
}
