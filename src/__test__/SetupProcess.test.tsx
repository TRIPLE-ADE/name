import { render, screen } from "@testing-library/react";
import SetupProcess from "@/components/SetupProcess";
import "@testing-library/jest-dom";

test("renders the setup process component", () => {
  render(<SetupProcess completedSteps={0} totalSteps={5} />);

  // Assert that the component renders the correct text
  const headingElement = screen.getByText("Let's get you up and running");
  expect(headingElement).toBeInTheDocument();

  const remainingStepsElement = screen.getByText("5/5 steps remaining");
  expect(remainingStepsElement).toBeInTheDocument();

  // Assert that the progress bar is rendered
  const progressBarElement = screen.getByRole("progressbar");
  expect(progressBarElement).toBeInTheDocument();
});

test("renders the correct number of collapsible menu items", () => {
  render(<SetupProcess completedSteps={0} totalSteps={5} />);

  // Assert that the correct number of menu items are rendered
  const menuItemElements = screen.getAllByRole("button");
  expect(menuItemElements.length).toBe(6);
});

test("calculates the progress percentage correctly", () => {
  render(<SetupProcess completedSteps={2} totalSteps={10} />);

  // Assert that the progress bar width is calculated correctly
  const progressBarElement = screen.getByRole("progressbar");
  expect(progressBarElement).toHaveStyle({ width: "20%" });
});
