import { ReactNode } from "react";
import { FaMoneyBillAlt } from "react-icons/fa";

type MoneyProps = {
  time: string;
  icon: ReactNode;
};

export const time: MoneyProps[] = [
  {
    time: "Diária",
    icon: <FaMoneyBillAlt />,
  },
  {
    time: "Semanal",
    icon: <FaMoneyBillAlt />,
  },
  {
    time: "Mensal",
    icon: <FaMoneyBillAlt />,
  },
];
