import { test, expect } from "bun:test";
import { render } from "@testing-library/react";
import Page from "./page";

test("renders the about page with title", () => {
  const { getByText } = render(<Page />);

  expect(
    getByText("Turn Your Thoughts Into Tasks - Instantly with AI"),
  ).toBeInTheDocument();
});
