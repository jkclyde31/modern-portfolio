import { GiDiamondTrophy } from "react-icons/gi";

const TrustClientCard = ({ text }) => {
  return (
    <div className="max-w-[328px] w-[100%] bg-white shadow-md rounded-[25px] overflow-hidden mx-auto">
      <div className="px-6 py-7 flex items-center justify-between">
        <GiDiamondTrophy className="w-[45px] h-[45px]"/>
        <span className="text-xl font-bold">{text}</span>
      </div>
    </div>
  );
};

export default TrustClientCard;