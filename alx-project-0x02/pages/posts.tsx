import React from "react";
import DarkBodyLayout from "@/components/layout/DarkBodyLayout";
import Header from "@/components/layout/Header";


import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
     <DarkBodyLayout>
      <Header />
    <div className="min-h-screen p-8 bg-gray-500">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body ?? post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
    </DarkBodyLayout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    content: post.body,
  }));

  return {
    props: { posts },
  };
}

export default Posts;
