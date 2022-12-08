import { fireEvent, screen, render, within } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { listItemNav } from "../helpers/arrays";

describe("Testando Componente Navbar", () => {
  it("Navbar Menu Items", () => {
    render(<Navbar />);

    expect(
      screen.getByRole("link", { name: listItemNav[0].text })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: listItemNav[1].text })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: listItemNav[2].text })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: listItemNav[3].text })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: listItemNav[4].text })
    ).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Funcionalidade de Abrir Menu Hambuguer e Click Menu Item", () => {
    render(<Navbar />);

    let buttonMenu = screen.getByRole("button");

    fireEvent.click(buttonMenu);

    let ViewMenu = screen.getByTestId("grid-menu");
    within(ViewMenu).getByRole("link", {
      name: listItemNav[0].text,
    });
    within(ViewMenu).getByRole("link", {
      name: listItemNav[1].text,
    });
    within(ViewMenu).getByRole("link", {
      name: listItemNav[2].text,
    });
    within(ViewMenu).getByRole("link", {
      name: listItemNav[3].text,
    });
    within(ViewMenu).getByRole("link", {
      name: listItemNav[4].text,
    });

    fireEvent.click(
      within(ViewMenu).getByRole("link", {
        name: listItemNav[4].text,
      })
    );

    expect(ViewMenu).not.toBeInTheDocument();
  });

  it("Funcionalidade de Fechar Menu Hambuguer", () => {
    render(<Navbar />);

    let buttonMenu = screen.getByRole("button");

    fireEvent.doubleClick(buttonMenu);

    let ViewMenu = screen.queryByTestId("grid-menu");

    expect(ViewMenu).not.toBeInTheDocument();
  });
});
