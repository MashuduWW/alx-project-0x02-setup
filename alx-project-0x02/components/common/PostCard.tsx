// components/common/PostCard.tsx

import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-gray-400 rounded-lg shadow p-6 text-gray-800">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{content}</p>
      <div className="text-xs text-right text-gray-500">User ID: {userId}</div>
    </div>
  );
};

export default PostCard;
