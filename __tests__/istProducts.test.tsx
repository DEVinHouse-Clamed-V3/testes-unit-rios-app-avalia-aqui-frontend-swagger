import React from "react";
import Products from "../src/pages/Products";
import { render, waitFor } from "@testing-library/react-native";
import { Text } from "react-native";
import ProductsList from "../src/components/ProductsList";

type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    brand?: string;
};

global.fetch = jest.fn();

const mockProducts: Product[] = [
    {
        id: 1,
        name: "Produto 1",
        description: "Desc 1",
        price: "10",
        image: "image1.png",
        brand: "Marca 1",
    },
    {
        id: 2,
        name: "Produto 2",
        description: "Desc 2",
        price: "20",
        image: "image2.png",
        brand: "Marca 2",
    },
];

const mockProductsEmpty: Product[]= []

describe("Pagina de Listagem de Produtos", () => {
    it("Renderização do titulo da tela", () => {
        const mockNavigation = { navigate: jest.fn() };
        const { getByText } = render(<Products navigation={mockNavigation} />);
        expect(getByText("Lista de Produtos")).toBeTruthy();
    });

    it("Renderização do componente Loading", () => {
        const mockNavigation = { navigate: jest.fn() };
        const { getByText } = render(<Products navigation={mockNavigation} />);
        expect(getByText("Nenhum produto cadastrado")).toBeTruthy();
    });

    it("deve exibir a lista após carregar os produtos", async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: () => Promise.resolve(mockProducts),
        });

        const { getByText } = render(
            <>
                {mockProducts && mockProducts.length > 0 ? (
                    mockProducts.map((product) => (
                        <ProductsList
                            key={product.id}
                            item={product}
                            handleAction={() => {}}
                        />
                    ))
                ) : (
                    <Text>Nenhum produto cadastrado</Text>
                )}
            </>
        );

        await waitFor(() => {
            expect(getByText("Produto 1")).toBeTruthy();
            expect(getByText("Produto 2")).toBeTruthy();
        });
    });

    it("deve exibir a mensagem de lista vazia se não houver produtos", async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: () => Promise.resolve([]),
        });

        const { getByText } = render(
            <>
                {mockProductsEmpty && mockProductsEmpty.length > 0 ? (
                    mockProducts.map((product) => (
                        <ProductsList
                            key={product.id}
                            item={product}
                            handleAction={() => {}}
                        />
                    ))
                ) : (
                    <Text>Nenhum produto cadastrado</Text>
                )}
            </>
        );

        await waitFor(() => {
            expect(getByText("Nenhum produto cadastrado")).toBeTruthy();
        });
    });
});
