import { fireEvent, screen, render, within } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { listItemNav } from "../helpers/arrays";

describe("Testando Componente Navbar", () => {
  it("Navbar Menu Items", () => {
    render(<Navbar />);

    function menuItemsWeb() {
      let title;
      listItemNav.forEach((menuItem) => (title = menuItem.text));
      return title;
    }

    let ViewMenu = screen.getByTestId("menu-items-web");
    within(ViewMenu).getByRole("link", {
      name: menuItemsWeb(),
    });

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

it("Funcionalidade de Abrir Menu Hambuguer e Click Menu Item", () => {
  render(<Navbar />);

  let buttonMenu = screen.getByRole("button");
  let ViewMenu = screen.getByTestId("grid-menu");

  fireEvent.click(buttonMenu);

  function dropmenuItems() {
    let title;
    listItemNav.forEach((menuItem) => (title = menuItem.text));
    return title;
  }

  within(ViewMenu).getByRole("link", {
    name: dropmenuItems(),
  });

  fireEvent.click(
    within(ViewMenu).getByRole("link", {
      name: listItemNav[4].text,
    })
  );

  expect(ViewMenu).toHaveClass("false");
});

it("Funcionalidade de Fechar Menu Hambuguer", () => {
  render(<Navbar />);

  let buttonMenu = screen.getByRole("button");

  fireEvent.doubleClick(buttonMenu);

  let ViewMenu = screen.queryByTestId("grid-menu");

  expect(ViewMenu).toHaveClass("false");
});
