import { Product } from "../types/Product";

export async function listProducts(): Promise<Product[]> {
    const response = await fetch("https://api.fake.com/produtos");
    return await response.json();
}
