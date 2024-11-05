import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact Us/ContactUs";
import "@testing-library/jest-dom";

test("Page have headings", () => {
  render(<ContactUs />);
  const heading = screen.getAllByRole("heading");
  expect(heading.length).toBeGreaterThan(0);
});
