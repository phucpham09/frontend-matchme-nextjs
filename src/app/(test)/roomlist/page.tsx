"use client";
import React from "react";
import { useRouter } from "next/navigation";

const events = [
  {
    id: 1,
    title: "Friendship Meetup",
    time: "Hôm nay, 18:00",
    registered: 92,
    location: "TP. Hồ Chí Minh",
  },
  {
    id: 2,
    title: "Virtual Meet & Chat",
    time: "Hôm nay, 20:00",
    registered: 120,
    location: "Trực tuyến",
  },
  {
    id: 3,
    title: "Online Friendship Group",
    time: "Ngày mai, 17:00",
    registered: 105,
    location: "Trực tuyến",
  },
  {
    id: 4,
    title: "Speed Friending Event",
    time: "Ngày mai, 19:00",
    registered: 62,
    location: "Đà Nẵng",
  },
  {
    id: 5,
    title: "Coffee & Conversation",
    time: "Ngày mai, 10:00",
    registered: 88,
    location: "Hà Nội",
  },
];

export default function AllEventsPage() {
  const router = useRouter();

  const handleViewDetails = (id: number) => {
    router.push(`/eventDetail?id=${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">
          🌟 Danh sách sự kiện kết nối bạn bè
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-xl rounded-2xl border border-blue-100 hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 flex items-center mb-1">
                  🕒 <span className="ml-2">{event.time}</span>
                </p>
                <p className="text-gray-600 flex items-center mb-1">
                  👥{" "}
                  <span className="ml-2">
                    {event.registered} người đã đăng ký
                  </span>
                </p>
                <p className="text-gray-600 flex items-center mb-4">
                  📍 <span className="ml-2">{event.location}</span>
                </p>
              </div>
              <button
                onClick={() => handleViewDetails(event.id)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl transition duration-200"
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
