"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useFakeTopicChatStore } from "@/store/fakeTopicChatStore";

export default function ChatRoomPage() {
    const { roomId } = useParams();
    const {
        topic,
        username,
        userId,
        users,
        messages,
        joinRoom,
        sendMessage,
        resetChat,
    } = useFakeTopicChatStore();

    const [text, setText] = useState("");
    const [showMenu, setShowMenu] = useState<string | null>(null);

    useEffect(() => {
        if (typeof roomId === "string" && !topic) {
            const randomName = "Khách " + Math.floor(Math.random() * 10000);
            joinRoom(roomId, "Không xác định", randomName);
        }
    }, [roomId]);

    const handleSend = () => {
        if (!text.trim()) return;
        sendMessage(text);
        setText("");
    };

    return (
        <div className="h-screen flex">
            {/* Member List */}
            <div className="w-1/4 border-r bg-white p-4 overflow-y-hidden h-[700px]">
                <h3 className="font-bold text-lg mb-4">👥 Thành viên ({users.length})</h3>
                <div className="grid grid-cols-2 gap-4">
                    {users.slice(0, 10).map((u) => (
                        <div key={u.id} className="text-center relative">
                            <img
                                src={u.avatar}
                                alt={u.name}
                                className="w-12 h-12 mx-auto rounded-full cursor-pointer"
                                onClick={() => setShowMenu(showMenu === u.id ? null : u.id)}
                            />
                            <div className="text-sm mt-1">
                                {u.name} {u.isOwner && <span className="text-yellow-500">👑</span>}
                            </div>
                            {showMenu === u.id && (
                                <div className="absolute left-16 top-2 bg-white border rounded shadow p-2 text-sm z-10">
                                    <button className="block hover:bg-gray-100 px-2 py-1 w-full text-left">
                                        🤝 Kết bạn
                                    </button>
                                    {users.find((me) => me.id === userId)?.isOwner && userId !== u.id && (
                                        <button className="block hover:bg-red-100 px-2 py-1 w-full text-left text-red-600">
                                            🚪 Mời rời phòng
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button
                        onClick={() => {
                            resetChat();
                            window.location.href = "/topics";
                        }}
                        className="w-full text-center bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200 transition"
                    >
                        🚪 Rời phòng
                    </button>
                </div>
            </div>

            {/* Chat box */}
            <div className="w-3/4 flex flex-col p-6 bg-gradient-to-br from-sky-50 to-blue-100">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">💬 Chủ đề: {topic}</h2>
                    <p className="text-sm text-gray-500">Bạn: {username}</p>
                </div>

                <div className="h-[500px] overflow-y-auto bg-white rounded-xl shadow p-4 mb-4 space-y-2">
                    {messages.map((msg, idx) => (
                        <div key={idx}>
                            {msg.from !== "system" && (
                                <div className="text-xs text-gray-600 mb-1">{msg.from}</div>
                            )}
                            <div
                                className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm whitespace-pre-line ${msg.from === username
                                    ? "self-end bg-blue-500 text-white ml-auto rounded-br-none"
                                    : msg.from === "system"
                                        ? "text-center text-gray-500 italic bg-transparent shadow-none"
                                        : "self-start bg-gray-100 text-gray-800 rounded-bl-none"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        className="flex-grow border px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-300"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Nhập tin nhắn..."
                    />
                    <button
                        onClick={handleSend}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                    >
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
}