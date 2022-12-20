import { screen, fireEvent, render } from "@testing-library/react";
import Project from "../components/ProjectUser";

window.scroll = jest.fn();

describe("Testando Component Project", () => {
  it("Titulos Cards e Botão Ver Mais", () => {
    render(<Project />);

    let projectOne = screen.getByRole("heading", { name: /Todo List/i });
    let projectTwo = screen.getByRole("heading", { name: /Pokedex/i });
    let projectTh = screen.getByRole("heading", { name: /Rgba Generator/i });
    let buttonViewMore = screen.getByRole("button", { name: /ver mais/i });

    expect(projectOne).toBeInTheDocument();
    expect(projectTwo).toBeInTheDocument();
    expect(projectTh).toBeInTheDocument();
    expect(buttonViewMore).toBeInTheDocument();
  });

  it("Funcionalidade Ver Mais e Voltar", () => {
    render(<Project />);

    let buttonViewMore = screen.getByRole("button", { name: /ver mais/i });
    fireEvent.click(buttonViewMore);

    expect(window.scroll).toHaveBeenCalled();

    let projectOne = screen.getByRole("heading", { name: /Todo List/i });
    let projectTwo = screen.getByRole("heading", { name: /Pokedex/i });
    let projectTh = screen.getByRole("heading", { name: /Rgba Generator/i });
    
    let buttonComeBack = screen.getByRole("button", { name: /voltar/i });

    let elementsTitleCards = [
      projectOne,
      projectTwo,
      projectTh,
    ];

    elementsTitleCards.forEach((title) => expect(title).toBeInTheDocument());

    expect(buttonComeBack).toBeInTheDocument();

    fireEvent.click(buttonComeBack);
    elementsTitleCards
      .slice(0, 2)
      .forEach((title) => expect(title).toBeInTheDocument());

    expect(buttonViewMore).toBeInTheDocument();

    expect(window.scroll).toHaveBeenCalled();
  });
});
