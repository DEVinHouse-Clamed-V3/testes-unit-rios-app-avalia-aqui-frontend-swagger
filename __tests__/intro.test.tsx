import { render } from "@testing-library/react-native";
import Presentation from "../src/pages/Presentation";

describe("Intro page", () => {
    it("Renderização do titulo da aplicação", () => {
        const { getByText } = render(<Presentation />);
        
        expect(getByText("Avalia Aqui")).toBeTruthy();
    });

    it("Renderização do subtitulo da aplicação", () => {
        const { getByText } = render(<Presentation />);
        
        expect(
            getByText(
                " Escolha o produto qu você deseja avaliar e compartilhe sua experiência com outros consumidores"
            )
        ).toBeTruthy();
    });
});
