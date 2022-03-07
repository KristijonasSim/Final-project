import axios from 'axios';


const annonymousInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
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
    const product = {
      ...rest,
      id,
      price: `${price}`,
    };
    return product;
  });
  return formatedItems;
};



const APIService = {
  fetchItems,
  fetchedItems,
};

export default APIService