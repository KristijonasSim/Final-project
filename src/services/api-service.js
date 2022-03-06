import axios from 'axios';


const annonymousInstance = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  // timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'no-cors',
});



const fetchItems = async () => {
  const response = await annonymousInstance.get('/products');
  return response.data.products;
};


const fetchedItems = async () => {
  const products = await fetchItems();
  const formatedItems = products.map(({
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
  fetchItems,
  fetchedItems,
};

export default APIService