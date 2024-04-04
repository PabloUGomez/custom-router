import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { Router } from "./Router";
import { Route } from "./Route";
import { Link } from "./Link";
import { getCurrentPath } from "./utils";

vi.mock("./utils", () => ({
  getCurrentPath: vi.fn(),
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });
  it("should render without problems", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });
  it("should render 404 page if no routes match", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    expect(screen.getByText("404")).toBeTruthy();
  });
  it("should render the component of the first route that matches", () => {
    getCurrentPath.mockReturnValue("/about");
    const routes = [
      { path: "/", Component: () => <h1>Home</h1> },
      { path: "/about", Component: () => <h1>About</h1> },
    ];
    render(<Router routes={routes} />);
    expect(screen.getByText("About")).toBeTruthy();
  });
  it("should navigate using Link", async () => {
    getCurrentPath.mockReturnValueOnce("/");
    render(
      <Router>
        <Route
          path="/"
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="/about">Ir a sobre nosotros</Link>
              </>
            );
          }}
        />
        <Route
          path="/about"
          Component={() => {
            return <h1>About</h1>;
          }}
        />
      </Router>
    );
    const button = screen.getByText(/Ir a sobre nosotros/);
    fireEvent.click(button);
    
    const title = await screen.findByText('About');

    expect(title).toBeTruthy();
  });
});
