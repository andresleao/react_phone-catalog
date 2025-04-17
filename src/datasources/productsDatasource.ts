/* eslint-disable no-console */

import { API_BASE_URL } from 'config/config';
import { Product } from 'types/Product';

export async function getProducts(): Promise<Product[]> {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(`${API_BASE_URL}/products.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Product[] = await response.json();

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Unknown error occurred while fetching products';

    console.error('Error in getProducts:', error);
    throw new Error(`An error occurred: ${errorMessage}`);
  }
}

export async function getProductDetails(id: string): Promise<Product> {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(`${API_BASE_URL}/products.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products: Product[] = await response.json();
    const product = products.find(p => p.id === id);

    if (!product) {
      throw new Error(`Product with id "${id}" not found`);
    }

    return product;
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Unknown error occurred while fetching product details';

    console.error('Error in getProductDetails:', error);
    throw new Error(`Failed to load product: ${errorMessage}`);
  }
}

export async function getFavouritesProducts(ids: string[]): Promise<Product[]> {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(`${API_BASE_URL}/products.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products: Product[] = await response.json();
    const favourites = products.filter(product => ids.includes(product.id));

    if (!products && !favourites) {
      throw new Error(`Favourites list not found`);
    }

    return favourites;
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Unknown error occurred while fetching favourites list';

    console.error('Error in getFavouritesProducts:', error);
    throw new Error(`Failed to load favourites: ${errorMessage}`);
  }
}
