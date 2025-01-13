import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

const CategoryItem: React.FC<Props> = ({ name, isActive, onClick }) => (
  <p
    className={cn(
      "uppercase font-bold border-b-2 border-b-transparent transition-colors cursor-pointer hover:border-b-red-400 active:border-b-2",
      isActive && "border-b-red-500"
    )}
    onClick={onClick}
  >
    {name}
  </p>
);

export default CategoryItem;
