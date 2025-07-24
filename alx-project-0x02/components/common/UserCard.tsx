// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-gray-800 max-w-sm w-full">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
