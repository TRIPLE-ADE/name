import { useState } from "react";

type useToggleStateReturnType = {
  openStep: null | number;
  handleToggle: (stepNumber: number) => void;
};

const useToggleState = (): useToggleStateReturnType => {
  const [openStep, setOpenStep] = useState<null | number>(null);
  
  const handleToggle = (stepNumber: number) => {
    setOpenStep((prevOpenStep: number | null) =>
      prevOpenStep === stepNumber ? null : stepNumber,
    );
  };

  return { openStep, handleToggle };
};

export default useToggleState;
