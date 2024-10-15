import { LuMoreHorizontal } from "react-icons/lu";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AiFillCloseCircle, AiFillWarning } from "react-icons/ai";
import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";
import { RiProgress8Line } from "react-icons/ri";
import { TbCircleDashed } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";


export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return <LuMoreHorizontal color="#797d84" size={14} />;
    case "Low":
      return <BiSignal2 color="#6b6f76" size={14} />;
    case "Medium":
      return <BiSignal3 color="#6b6f76" size={14} />;
    case "High":
      return <BiSignal4 color="#6b6f76" size={14} />;
    case "Urgent":
      return <AiFillWarning color="#fc7840" size={14} />;
    default:
      return <AiFillWarning color="#fc7840" size={14} />;
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "Backlog":
      return <TbCircleDashed color="#686c6e" size={18} />;
    case "Todo":
      return <FaRegCircle color="#686c6e" size={18} />;
    case "In progress":
      return <RiProgress8Line color="#deae10" size={20} />;
    case "Done":
      return <IoCheckmarkDoneCircle color="#4a61eb" size={16} />;
    case "Canceled":
      return <AiFillCloseCircle color="#9da9f0" size={16} />;
    default:
      return <AiFillCloseCircle color="#94a2b3" size={16} />;
  }
};
