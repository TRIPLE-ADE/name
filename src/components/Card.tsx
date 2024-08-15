import { AccountAssistanceProps } from "@/types/accountAssistance";
import hourglass from "@/assets/hourglass.webp";

const Card = ({ title }: AccountAssistanceProps) => {
  return (
    <div className="flex items-center flex-col justify-center rounded-[20px] border border-indigo-400 px-4 py-10">
      <img src={hourglass} alt="hourglass" className="w-32" />
      <p className="text-xl">{title}</p>
    </div>
  );
};

export default Card;
