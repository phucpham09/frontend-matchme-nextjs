"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export default function AnonymousFriendChat() {
  const [showChat, setShowChat] = useState(false);
  const [showFriendPrompt, setShowFriendPrompt] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { from: "other", text: "Chào cậu!!!!" },
    { from: "me", text: "Hello!!!" },
  ]);
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5*60 minutes
  const handleSendMessage = () => {
    if (!text.trim()) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        from: "me",
        text: text,
      },
    ]);
    setText("");
  };
  useEffect(() => {
    if (showChat) {
      const timeout = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            from: "other",
            text: "Cậu học ngành nào thế?",
          },
        ]);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showChat]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showChat && !showFriendPrompt) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowFriendPrompt(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [showChat, showFriendPrompt]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  const handleLeaveRoom = () => {
    setShowChat(false);
  };
  return (
    <div className="relative h-[calc(100vh-6rem)] bg-gradient-to-br from-blue-50 to-sky-100 flex flex-col items-center justify-center gap-10 p-6 text-black">
      {/* Initial Card */}
      {!showChat && (
        <div className="border p-6 rounded-2xl bg-white shadow-xl max-w-md w-full text-center z-10">
          <h2 className="text-3xl font-bold mb-3 text-sky-600">
            🎉 Sự kiện Kết bạn giấu mặt
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Tham gia trò chuyện ẩn danh với một người lạ trong 5 phút. Sau đó,
            bạn có thể chọn kết bạn hay không!
          </p>
          <button
            onClick={() => {
              setShowChat(true);
              setTimeLeft(5 * 60);
            }}
            className="bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition"
          >
            🚀 Bắt đầu ghép đôi
          </button>
        </div>
      )}

      {/* Chat UI */}
      {showChat && (
        <div
          className={`flex flex-wrap justify-center gap-10 z-10 transition `}
        >
          <div className="border p-4 rounded-2xl w-80 bg-white shadow-md flex flex-col justify-between h-[420px] relative">
            <div className="flex justify-between">
              <div className="text-center mb-2 font-semibold border w-fit px-4 py-1 rounded-full text-sky-600 bg-sky-50 mx-auto shadow-sm">
                ⏳ {formatTime(timeLeft)}
              </div>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded-full cursor-pointer"
                onClick={handleLeaveRoom}
              >
                Rời khỏi phòng
              </button>
            </div>

            <div className="flex flex-col gap-2 flex-grow overflow-y-auto mb-2 px-1">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
                    msg.from === "me"
                      ? "self-end bg-sky-500 text-white rounded-br-none"
                      : "self-start bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-x-4">
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                className="border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-300"
                value={text}
                onChange={(e) => setText(e.target.value)}
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
          </div>
        </div>
      )}

      {/* Overlay and Popup */}
      {showFriendPrompt && (
        <>
          {/* Dark transparent overlay */}
          <div className="fixed inset-0  z-40 backdrop-blur-xs transition duration-300"></div>

          {/* Centered popup modal */}
          <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl w-[300px] shadow-xl text-center animate-fade-in">
            <p className="mb-4 px-4 py-2 rounded-lg bg-gray-50 border text-gray-700 leading-relaxed">
              ⏰ Hết giờ rồi! Bạn có muốn kết bạn với người này không?
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                <Link href={"/chats"}> Có 👍</Link>
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                <Link href={"/dashboard"}>Không ❌</Link>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
