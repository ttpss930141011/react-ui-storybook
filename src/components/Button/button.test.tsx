import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button", () => {
    it("renders button text", () => {
        render(<Button label="Button" />);

        const heading = screen.getByRole("button", {
            name: /Button/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
