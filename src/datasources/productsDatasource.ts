/* eslint-disable no-console */

import { API_BASE_URL } from 'config/config';
import { Product } from 'types/Product';

export async function getProducts(): Promise<Product[]> {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

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
