import Products from "../src/pages/Products";
import { render } from "@testing-library/react-native";

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

    it("Renderização do componente FlatList", () => {
        const mockNavigation = { navigate: jest.fn() };
        const { getByTestId } = render(
            <Products navigation={mockNavigation} />
        );
        expect(getByTestId("flatlist")).toBeTruthy();
    });
});
