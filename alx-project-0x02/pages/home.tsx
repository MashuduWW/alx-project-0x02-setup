import React, { useState } from "react";
import DarkBodyLayout from "@/components/layout/DarkBodyLayout";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const home: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <DarkBodyLayout>
      <Header />
      <main>
        <div className="text-center text-base">
          <h1>-----This is the HOME page-----</h1>
        </div>
        <div className=" mb-10  flex flex-col items-center text-4xl ">
          <p>Choose the one you like, then proceed to book it.</p>
          <p>Regardless of your preference, WE WILL HOUSE YOU!.</p>
        </div>

        {/* DEFINE CARDS */}

        <div className="flex flex-col items-center gap-6">
          <h1>CARDS BEGIN</h1>
          <Card
            title="Getting Started"
            content="Learn how to get started with our platform and tools."
          />
          <Card
            title="Features"
            content="Explore a variety of powerful features we offer to boost your productivity."
          />
          <Card
            title="Contact Us"
            content="Have questions? Reach out to our support team anytime."
          />
        </div>

        <div className="min-h-screen p-8 text-white">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Your Posts</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-white"
            >
              + New Post
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>

          <PostModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPost}
          />
        </div>
      </main>
    </DarkBodyLayout>
  );
};

export default home;
