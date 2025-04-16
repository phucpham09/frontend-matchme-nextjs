"use client";
import { useState } from "react";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import SendIcon from "@mui/icons-material/Send";

export default function MessagePage() {
  const [messages, setMessages] = useState([
    {
      sender: "me",
      time: "10:10 AM",
      text: "Chào Thanh Tùng, bạn khỏe không? Dự án tiến triển thế nào rồi?",
    },
    {
      sender: "aiden",
      time: "10:12 AM",
      text: "Hôm nay chúng ta có gặp không?",
    },
    {
      sender: "aiden",
      time: "10:15 AM",
      text: "Dự án đã hoàn thành rồi và mình có kết quả muốn cho bạn xem.",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        text: newMessage,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex sm:grid sm:grid-cols-5 bg-gray-100 h-[calc(100vh-70px)] text-[18px]">
      {/* Sidebar */}
      <aside className="max-sm:hidden sm:col-span-1 bg-white p-4 border-r shadow-sm">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm..."
          className="w-full p-2 rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ul className="space-y-2">
          {[
            { name: "#IT", status: "Mai Linh, Thanh Tung + 4 nguoi khac" },
            { name: "Thanh Tùng", status: "đang hoạt động", active: true },
            { name: "Hoàng An", status: "đang hoạt động" },
            { name: "#Du lich", status: "rời đi 10 giờ trước" },
            { name: "Chí Dũng", status: "đang hoạt động" },
            { name: "#Game", status: "ngoại tuyến từ 28/10" },
          ].map((user, idx) => (
            <li
              key={idx}
              className={`p-3 rounded-lg cursor-pointer transition ${
                user.active
                  ? "bg-blue-100 border border-blue-300"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="font-semibold text-gray-800">{user.name}</div>
              <div className="text-sm text-gray-500">{user.status}</div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Area */}
      <main className="col-span-4 p-6 flex flex-col justify-between">
        <div className="overflow-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <div>
              <h2 className="font-bold text-2xl text-gray-800">Thanh Tùng</h2>
              <p className="text-gray-500 text-sm">
                Hoạt động lần cuối: 2 giờ trước
              </p>
            </div>
            <div className="flex gap-4 text-gray-500">
              <LocalSeeIcon
                className="cursor-pointer hover:text-blue-500 transition"
                fontSize="large"
              />
              <HelpIcon
                className="cursor-pointer hover:text-blue-500 transition"
                fontSize="large"
              />
              <SettingsIcon
                className="cursor-pointer hover:text-blue-500 transition"
                fontSize="large"
              />
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-xl shadow-sm text-base ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`text-xs ${
                      msg.sender === "me" ? "text-gray-200" : "text-gray-400"
                    }  block mt-1`}
                  >
                    {msg.time}, Hôm nay
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="mt-6 pt-4 border-t flex items-center gap-4">
          <input
            type="text"
            value={newMessage}
            placeholder="Nhập tin nhắn..."
            className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base"
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow transition"
            onClick={handleSendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </main>
    </div>
  );
}
