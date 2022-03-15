import axios from 'axios';
import store from '../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});
const fetchProducts = async (searchParams) => {
  try {
    const { data } = await requester.get(`/products?${searchParams.toString()}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchProduct = async (id) => {
  const { token } = store.getState().auth;
  const response = await requester.get(`/products/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

const fetchFormatedProduct = async (id) => {
  const [product] = await Promise.all([
    fetchProduct(id),
  ]);
  const formattedProduct = {
    ...product,
    price: `${product.price}`,
  };

  return formattedProduct;
};

const fetchFormatedProducts = async () => {
  const products = await fetchProducts();
  const formatedProducts = products.map(({
    id, price, ...rest
  }) => {
    const product = {
      ...rest,
      id,
      price: `${price}`,
    };
    return product;
  });
  return formatedProducts;
};

const fetchFilters = async (categoryId) => {
  let queryParams = '';
  if (categoryId) {
    queryParams = `?category=${categoryId}`;
  }

  try {
    const { data } = await requester.get(`/filters${queryParams}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchCategories = async () => {
  try {
    const { data } = await requester.get('/categories');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addOrder = async (data) => {
  const { token } = store.getState().auth;
  const response = await requester.post('/products/order', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

const ProductService = {
  fetchProducts,
  fetchCategories,
  fetchFilters,
  fetchFormatedProduct,
  fetchFormatedProducts,
  addOrder,
};

export default ProductService;
