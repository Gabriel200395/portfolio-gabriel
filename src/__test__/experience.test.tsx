import { fireEvent, screen, render, within } from "@testing-library/react";
import exp from "constants";
import Experience from "../components/Experience";

describe("Testando Componente Experience", () => {
  it("Butões", () => {
    render(<Experience />);

    let ButtonGnSystems = screen.getByRole("button", { name: /gnsystems/i });
    let ButtonIntellectx = screen.getByRole("button", { name: /intellectx/i });
    let ButtonAthan = screen.getByRole("button", { name: /athan/i });
    let ButtonBRB = screen.getByRole("button", {
      name: /BRB - Banco de Brasília/i,
    });

    expect(ButtonGnSystems).toBeInTheDocument();
    expect(ButtonIntellectx).toBeInTheDocument();
    expect(ButtonAthan).toBeInTheDocument();
    expect(ButtonBRB).toBeInTheDocument();
  });

  it("Clique Button BRB", () => {
    render(<Experience />);

    let ButtonBRB = screen.getByRole("button", {
      name: /BRB - Banco de Brasília/i,
    });

    fireEvent.click(ButtonBRB);

    let BrbHeader = screen.getByRole("heading", {
      name: /BRB - Banco de Brasília/i,
    });

    expect(BrbHeader).toBeInTheDocument();
  });

  it("Clique Button GNsystems", () => {
    render(<Experience />);

    let buttonGnSystems = screen.getByRole("button", { name: /gnsystems/i });

    fireEvent.click(buttonGnSystems);

    let headerGnSystems = screen.getByRole("heading", { name: /gnsystems/i });
    expect(headerGnSystems).toBeInTheDocument();
  });

     it("Clique Button Intellectx", () => {
    render(<Experience />);

    let buttonIntellectx = screen.getByRole("button", { name: /intellectx/i });
    fireEvent.click(buttonIntellectx);

    let headerIntellectx = screen.getByRole("heading", { name: /intellectx/i });
    expect(headerIntellectx).toBeInTheDocument();
  });

  it("Clique Button Athan", () => {
    render(<Experience />);

    let buttonAthan = screen.getByRole("button", { name: /athan/i });
    fireEvent.click(buttonAthan);

    let headerAthan = screen.getByRole("heading", { name: /athan/i });
    expect(headerAthan).toBeInTheDocument();
  }); 
});
