import axios from 'axios';
import store from '../store/index';

const requester = axios.create({
  baseURL: 'http://localhost:5000/api',
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
  const response = await requester.get(`/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

const fetchFormatedProduct= async (id) => {
  const [product] = await Promise.all([
    fetchProduct(id)
  ]);

  const formattedProduct= {
    ...product,
    price: `${product.price}`
  }

  return formattedProduct;
}
  
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

const ProductService = {
  fetchProducts,
  fetchCategories,
  fetchFilters,
  fetchFormatedProduct
};

export default ProductService;
