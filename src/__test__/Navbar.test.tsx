import { fireEvent, screen, render, within } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { listItemNav } from "../helpers/arrays";

describe("Testando Componente Navbar", () => {
  it("Navbar Menu Items", () => {
    render(<Navbar />);

    listItemNav.forEach((menuItem) =>
      expect(
        screen.getByRole("link", { name: menuItem.text })
      ).toBeInTheDocument()
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Funcionalidade de Abrir Menu Hambuguer e Click Menu Item", () => {
    render(<Navbar />);

    let buttonMenu = screen.getByRole("button");

    fireEvent.click(buttonMenu);

    function dropmenuItems() {
      let title;
      listItemNav.forEach((menuItem) => (title = menuItem.text));
      return title;
    }

    let ViewMenu = screen.getByTestId("grid-menu");
    within(ViewMenu).getByRole("link", {
      name: dropmenuItems(),
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
