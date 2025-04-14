"use client";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NewsfeedPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Mai Linh",
      avatar: "/avatars/mai-linh.jpg",
      time: "1 giờ trước",
      content: "Có ai định học cùng lớp Văn học với mình kỳ tới không?",
      tags: ["hỏi đáp"],
      likes: 3,
      comments: 2,
    },
    {
      id: 2,
      user: "Thanh Tùng",
      avatar: "/avatars/thanh-tung.jpg",
      time: "3 giờ trước",
      content: "Tìm người chơi board game vào cuối tuần",
      tags: ["tìm bạn"],
      likes: 1,
      comments: 1,
    },
    {
      id: 3,
      user: "Hoàng An",
      avatar: "/avatars/hoang-an.jpg",
      time: "6 giờ trước",
      content: "Cà phê Hàn có ai tí thích không?",
      tags: ["ẩm thực", "cà phê"],
      likes: 6,
      comments: 5,
    },
  ]);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setNewContent("");
  };

  const handlePost = () => {
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        user: "Phuc Pham",
        avatar: "/avatars/hoang-an.jpg",
        time: "Bây giờ",
        content: newContent,
        tags: ["ẩm thực", "cà phê"],
        likes: 6,
        comments: 5,
      },
    ]);
    setNewContent("");
    // You could push to `posts` here or send to API
    handleClosePopup();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleOpenPopup}
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-base px-6 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            ➕ Tạo bài đăng mới
          </button>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <AccountCircleIcon
                    fontSize="large"
                    className="text-gray-500"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    {post.user}
                  </p>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-base text-gray-800 mb-4">{post.content}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Reactions */}
              <div className="flex gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  <ThumbUpIcon className="w-5 h-5" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                  <CommentIcon className="w-5 h-5" />
                  {post.comments} bình luận
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-xl flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full relative">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              📝 Tạo bài đăng mới
            </h2>
            <textarea
              placeholder="Bạn đang nghĩ gì?"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
                onClick={handleClosePopup}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition"
                onClick={handlePost}
              >
                Đăng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
