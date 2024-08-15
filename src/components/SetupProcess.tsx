import { useEffect, useState } from "react";
import { SetupProcessProps } from "@/types/setupProcess";
import CollapsibleMenuItem from "./custom/CollapsibleMenuItem";
import useToggleState from "@/hooks/useToggleState";
import { steps } from "@/constant/data";
import { cn } from "@/lib/utils";
import StepDetails from "./StepDetails";

/**
 * Represents a setup process component.
 * @param completedSteps - The number of completed steps.
 * @param totalSteps - The total number of steps.
 */

const SetupProcess: React.FC<SetupProcessProps> = ({
  completedSteps,
  totalSteps,
}) => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  const { openStep, handleToggle } = useToggleState();
  /**
   * Handles settings the progress percentage based on the number of completed steps and total steps.
   * Dependencies: completedSteps, totalSteps
   */
  useEffect(() => {
    setProgressPercentage((completedSteps / totalSteps) * 100);
  }, [completedSteps, totalSteps]);
  return (
    <section className="shadow-sm rounded-2xl overflow-hidden">
      {/* Render the setup process component */}
      <div className="justify-between items-center bg-white py-10 px-14 sm:flex">
        <p className="text-lg sm:text-2xl">Let's get you up and running</p>
        <p className="text-sm">
          {totalSteps - completedSteps}/{totalSteps} steps remaining
        </p>
      </div>
      <div className="bg-zinc-100 h-4 w-full relative">
        <div
          role="progressbar"
          aria-valuenow={completedSteps}
          aria-valuemin={0}
          aria-valuemax={totalSteps}
          className="bg-indigo-400 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <ul className="bg-white">
        {steps.map((step) => (
          <CollapsibleMenuItem
            key={step.stepNumber}
            label={step.title}
            isOpen={openStep === step.stepNumber}
            onToggle={() => handleToggle(step.stepNumber)}
            buttonProps={{
              className:
                "w-full text-left pr-2 pl-5 text-black text-wrap sm:text-xl hover:bg-slate-50 sm:mx-2.5 sm:pr-10 sm:pl-[30px]",
              children: (
                <span
                  className={cn(
                    "my-4 w-10 transition-all flex justify-center items-center h-10 rounded-full border-[0.1px] bg-indigo-400 text-white border-black",
                    openStep === step.stepNumber && "bg-white text-black",
                  )}
                >
                  {step.stepNumber}
                </span>
              ),
            }}
          >
            <StepDetails title={step.title} description={step.description} />
          </CollapsibleMenuItem>
        ))}
      </ul>
    </section>
  );
};

export default SetupProcess;
