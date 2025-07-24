// components/common/Card.tsx

import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-gray-400 rounded-xl shadow-md p-6 max-w-sm text-gray-800">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default Card;
