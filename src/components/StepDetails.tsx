import { StepDetailsProps } from "@/types/setupProcess";
import { Button } from "./ui/button";

const StepDetails: React.FC<StepDetailsProps> = ({ title, description }) => {
  return (
    <div className="sm:px-9 pt-5 gap-5 pb-14 md:flex xl:gap-16">
      <div className="max-w-96 min-w-52 w-96 h-60 bg-neutral-800 border border-indigo-400" />
      <div className="max-w-[489px]">
        <p>{description}</p>
        <Button
          size="lg"
          variant="secondary"
          className="font-bold md:mt-16 text-wrap"
        >
          {title}
        </Button>
      </div>
    </div>
  );
};

export default StepDetails;
