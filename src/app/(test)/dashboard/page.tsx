"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Upcoming Event */}
        <section className="bg-white border rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <h2 className="font-bold text-3xl mb-4 border-b pb-2 text-blue-700">
            📅 Sự kiện sắp tới
          </h2>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              🎭 Sự kiện kết bạn giấu mặt
            </h3>
            <p className="text-lg text-gray-600 mt-2">⏰ Ngày mai, 14:00</p>
            <p className="text-lg text-gray-600 mb-4">
              ✨ Tự tin kết bạn trong 10 phút
            </p>
            <Link href="/eventDetail">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-lg transition duration-300 shadow">
                Xem chi tiết
              </button>
            </Link>
          </div>
        </section>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Chat Rooms */}
          <section className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-2xl mb-4 text-purple-700">
              💬 Phòng chat nổi bật
            </h3>
            <div className="space-y-4">
              {[
                { name: "#IT", desc: "Nơi trao đổi kiến thức công nghệ." },
                { name: "#Du lịch", desc: "Chia sẻ trải nghiệm khám phá." },
                { name: "#Game", desc: "Thảo luận, chiến hữu và giải trí." },
              ].map((room, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-xl text-gray-800">
                    {room.name}
                  </p>
                  <p className="text-md text-gray-600">{room.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured News */}
          <section className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="font-bold text-2xl mb-4 text-red-600">
              🔥 Tin nổi bật
            </h3>
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-gray-50 border p-4 rounded-lg mb-4 hover:bg-gray-100 transition duration-200"
              >
                <p className="text-lg text-gray-800">
                  📢 Nội dung hot trend đang thảo luận...
                </p>
                <div className="flex gap-4 mt-3 text-gray-600">
                  <FavoriteBorderIcon className="w-6 h-6 hover:text-red-500 cursor-pointer" />
                  <ChatBubbleOutlineIcon className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
                  <ShareIcon className="w-6 h-6 hover:text-green-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
