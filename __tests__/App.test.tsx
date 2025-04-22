import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App"; // ajuste o caminho conforme necessário

describe("App", () => {
    it("renders correctly", () => {
        const { getByText } = render(<App />);
        // ajuste o texto conforme o conteúdo real do seu App
        expect(getByText("Avalia Aqui")).toBeTruthy();
    });
});
