import { fireEvent, screen, render, within } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { listItemNav } from "../helpers/arrays";

describe("Testing Navbar Component", () => {
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

it("Functionality of Open Menu Hamburger and Click Menu Item", () => {
  render(<Navbar />);

  let buttonMenu = screen.getByRole("button");
  let ViewMenu = screen.getByTestId("grid-menu");

  fireEvent.click(buttonMenu);

  function menuItemsMobile() {
    let title;
    listItemNav.forEach((menuItem) => (title = menuItem.text));
    return title;
  }

  within(ViewMenu).getByRole("link", {
    name: menuItemsMobile(),
  });

  fireEvent.click(
    within(ViewMenu).getByRole("link", {
      name: listItemNav[4].text,
    })
  );

  expect(ViewMenu).toHaveClass("close-menu");
});

it("Hamburger Menu Closing Functionality", () => {
  render(<Navbar />);

  let buttonMenu = screen.getByRole("button");

  fireEvent.doubleClick(buttonMenu);

  let ViewMenu = screen.queryByTestId("grid-menu");

  expect(ViewMenu).toHaveClass("close-menu");
});
