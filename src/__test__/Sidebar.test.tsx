import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import "@testing-library/jest-dom";

test("renders Settings button", () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>,
  );
  const settingsButtonElement = screen.getByRole("link", {
    name: /Settings/i,
  });
  expect(settingsButtonElement).toBeInTheDocument();
});
