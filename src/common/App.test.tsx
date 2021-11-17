import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Middle section", () => {
  render(<App />);
  const linkElement = screen.getByText(/Middle/i);
  expect(linkElement).toBeInTheDocument();
});
