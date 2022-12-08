import { screen, fireEvent, render } from "@testing-library/react";
import Project from "../components/ProjectUser";

window.scroll = jest.fn();

describe("Testando Component Project", () => {
  it("Titulos Cards e Botão Ver Mais", () => {
    render(<Project />);

    let project1 = screen.getByRole("heading", { name: /pokedex1/i });
    let project2 = screen.getByRole("heading", { name: /pokedex2/i });
    let project3 = screen.getByRole("heading", { name: /pokedex3/i });
    let buttonViewMore = screen.getByRole("button", { name: /ver mais/i });

    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
    expect(project3).toBeInTheDocument();
    expect(buttonViewMore).toBeInTheDocument();
  });

  it("Funcionalidade Ver Mais e Voltar", () => {
    render(<Project />);

    let buttonViewMore = screen.getByRole("button", { name: /ver mais/i });
    fireEvent.click(buttonViewMore);

    expect(window.scroll).toHaveBeenCalled();
    expect(window.scroll).toHaveBeenCalledWith({
      behavior: "smooth",
      left: 0,
      top: 1950,
    });

    let project1 = screen.getByRole("heading", { name: /pokedex1/i });
    let project2 = screen.getByRole("heading", { name: /pokedex2/i });
    let project3 = screen.getByRole("heading", { name: /pokedex3/i });
    let project4 = screen.getByRole("heading", { name: /pokedex4/i });
    let project5 = screen.getByRole("heading", { name: /pokedex5/i });
    let project6 = screen.getByRole("heading", { name: /pokedex6/i });
    let buttonComeBack = screen.getByRole("button", { name: /voltar/i });

    let elementsTitleCards = [
      project1,
      project2,
      project3,
      project4,
      project5,
      project6,
    ];

    elementsTitleCards.forEach((title) => expect(title).toBeInTheDocument());

    expect(buttonComeBack).toBeInTheDocument();

    fireEvent.click(buttonComeBack);
    elementsTitleCards
      .slice(0, 2)
      .forEach((title) => expect(title).toBeInTheDocument());

    expect(buttonViewMore).toBeInTheDocument();

    expect(window.scroll).toHaveBeenCalled();
    expect(window.scroll).toHaveBeenCalledWith({
      behavior: "smooth",
      left: 0,
      top: 1550,
    });
  });
});
