import { useState } from "react";

type useToggleStateReturnType = {
  openStep: null | number;
  handleToggle: (stepNumber: number) => void;
};

const useToggleState = (): useToggleStateReturnType => {
  const [openStep, setOpenStep] = useState<null | number>(null);

  /**
   * Handles the click event of a menu item to toggle the open state of the collapsible menu item.
   * @param stepNumber - The index of the menu item.
   */
  const handleToggle = (stepNumber: number) => {
    setOpenStep((prevOpenStep: number | null) =>
      prevOpenStep === stepNumber ? null : stepNumber,
    );
  };

  return { openStep, handleToggle };
};

export default useToggleState;
