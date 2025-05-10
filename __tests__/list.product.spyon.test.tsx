import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import * as ProductActions from "../src/actions/productActions";
import ProductsList from "../src/components/ProductsList";
import { Product } from "../src/types/Product";
import Products from "../src/pages/Products";

const mockProducts: Product[] = [
    { id: 1, name: "Produto 1", description: "Desc 1", price: 10 },
    { id: 2, name: "Produto 2", description: "Desc 2", price: 20 },
];

const mockProductsEmpty: Product[]= []

afterEach(() => {
    jest.restoreAllMocks(); // boa prática
});

describe("ListProducts", () => {
    it("deve exibir o título", () => {
        const mockNavigation = { navigate: jest.fn() };
        const { getByText } = render(<Products navigation={mockNavigation} />);
        expect(getByText("Lista de Produtos")).toBeTruthy();
    });

    it("deve exibir o loader durante o carregamento", () => {
        jest.spyOn(ProductActions, "listProducts").mockImplementation(
            () => new Promise(() => {})
        );

        const { getByText } = render(
            <ProductsList item={mockProducts} handleAction={() => {}} loading={true} />
        );
        expect(getByText("Carregando produtos...")).toBeTruthy();
    });

    it("deve exibir a lista de produtos quando a API retornar dados", async () => {
        jest.spyOn(ProductActions, "listProducts").mockResolvedValue(
            mockProducts
        );

        const { getByText, getByTestId } = render(
            <ProductsList item={mockProducts} handleAction={() => {}} />
        );

        await waitFor(() => {
            expect(getByTestId("flatlist")).toBeTruthy();
            expect(getByText("Produto 1")).toBeTruthy();
            expect(getByText("Produto 2")).toBeTruthy();
        });
    });

    it("deve exibir mensagem de lista vazia se não houver produtos", async () => {
        jest.spyOn(ProductActions, "listProducts").mockResolvedValue([]);

        const { getByText } = render(
            <ProductsList item={mockProductsEmpty} handleAction={() => {}} />
        );

        await waitFor(() => {
            expect(getByText("Nenhum produto cadastrado")).toBeTruthy();
        });
    });
});
