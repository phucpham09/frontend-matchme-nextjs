"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Explore Community Section */}
        <section className="bg-white border rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <h2 className="font-bold text-3xl mb-4 border-b pb-2 text-indigo-700 flex items-center gap-2">
            <ExploreIcon className="text-indigo-700" /> Khám phá cộng đồng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <GroupIcon className="text-blue-600 w-8 h-8" />,
                title: "Thành viên nổi bật",
                desc: "Kết nối với các thành viên hoạt động tích cực.",
                href: "/topMembers",
              },
              {
                icon: <EmojiPeopleIcon className="text-purple-600 w-8 h-8" />,
                title: "Chủ đề phổ biến",
                desc: "Khám phá các chủ đề thảo luận đang hot nhất.",
                href: "/popularTopics",
              },
              {
                icon: <ExploreIcon className="text-green-600 w-8 h-8" />,
                title: "Khám phá phòng mới",
                desc: "Tìm kiếm các phòng trò chuyện phù hợp với bạn.",
                href: "/discoverRooms",
              },
            ].map((item, idx) => (
              <Link href={item.href} key={idx}>
                <div className="cursor-pointer p-4 border rounded-lg bg-gray-50 hover:bg-indigo-50 transition duration-200 shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </Link>
            ))}
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
                  <p className="font-semibold text-xl text-gray-800">{room.name}</p>
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
