"use client";
import { useRouter } from "next/navigation";
import { useFakeTopicChatStore } from "@/store/fakeTopicChatStore";
import { useState } from "react";

const topics = ["Game", "Âm nhạc", "Phim ảnh", "Công nghệ", "Du lịch"];

export default function TopicsPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { findOrCreateRoom, joinRoom } = useFakeTopicChatStore();

  const handleJoin = (topic: string) => {
    const username = "Khách " + Math.floor(Math.random() * 10000);
    const roomId = findOrCreateRoom(topic);
    joinRoom(roomId, topic, username);
    router.push(`/chats/${roomId}`);
  };

  const handleIcebreaker = () => {
    const username = "Ẩn danh " + Math.floor(Math.random() * 10000);
    const roomId = findOrCreateRoom("Ngẫu nhiên");
    joinRoom(roomId, "Ngẫu nhiên", username);
    router.push(`/chats/${roomId}`);
  };

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-sky-700">
        🎯 Chọn chủ đề thảo luận
      </h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Tìm chủ đề..."
        className="w-full max-w-md p-3 border rounded-full mb-6 focus:outline-none focus:ring-2 focus:ring-sky-300"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
        {topics
          .filter((t) => t.toLowerCase().includes(search.toLowerCase()))
          .map((topic) => (
            <button
              key={topic}
              className="bg-white shadow-md text-sky-700 px-6 py-3 rounded-xl hover:bg-sky-100 transition text-lg font-medium"
              onClick={() => handleJoin(topic)}
            >
              {topic}
            </button>
          ))}
      </div>

      <button
        onClick={handleIcebreaker}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition"
      >
        🎉 Hoặc thử Ghép ngẫu nhiên
      </button>
    </div>
  );
}
