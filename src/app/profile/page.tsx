"use client";

import Image from "next/image";
import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images.png" // đặt avatar vào public/images.png
              alt="Ảnh đại diện"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">Nguyễn Văn A</h2>
          <p className="text-gray-500">Sinh viên ngành Công nghệ thông tin</p>
          <p className="text-sm text-gray-400 mb-4">
            Đại học Bách Khoa, TP.HCM
          </p>
          <div className="flex justify-center gap-2 mb-4">
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
              Kết bạn
            </button>
            <button className="border px-4 py-1 rounded text-blue-500">
              Nhắn tin
            </button>
          </div>
          <div className="space-y-2 text-left text-sm">
            <div className="flex items-center gap-2">
              🌐{" "}
              <a href="https://nguyenvana.dev" className="text-blue-600">
                https://nguyenvana.dev
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-gray-700" /> nguyenvana
            </div>
            <div className="flex items-center gap-2">
              <FaTwitter className="text-blue-400" /> @nguyenvana
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram className="text-pink-500" /> nguyenvana
            </div>
            <div className="flex items-center gap-2">
              <FaFacebook className="text-blue-700" /> nguyenvana
            </div>
          </div>
        </div>

        {/* Thông tin cá nhân */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Thông tin sinh viên</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong>Họ tên:</strong> Nguyễn Văn A
              </div>
              <div>
                <strong>Email:</strong> nguyenvana@gmail.com
              </div>
              <div>
                <strong>Số điện thoại:</strong> 0909 123 456
              </div>
              <div>
                <strong>MSSV:</strong> 20123456
              </div>
              <div className="col-span-2">
                <strong>Địa chỉ:</strong> Quận 10, TP.HCM
              </div>
              <div className="col-span-2">
                <strong>Sở thích:</strong> Lập trình web, chơi game, đọc sách
                công nghệ
              </div>
            </div>
            <button className="mt-4 flex items-center gap-1 bg-teal-500 text-white px-4 py-1 rounded">
              <MdEdit /> Chỉnh sửa
            </button>
          </div>

          {/* Trạng thái học tập */}
          <div className="grid md:grid-cols-2 gap-4">
            {[1].map((section) => (
              <div key={section}>
                <h4 className="italic font-medium mb-2">Tiến độ học tập</h4>
                {[
                  ["Lập trình Web", "w-4/5"],
                  ["Cơ sở dữ liệu", "w-3/4"],
                  ["Mạng máy tính", "w-2/3"],
                  ["Hệ điều hành", "w-3/4"],
                  ["Kỹ năng mềm", "w-5/6"],
                ].map(([title, width], idx) => (
                  <div key={idx} className="mb-3">
                    <p className="text-sm font-medium text-gray-700">{title}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`bg-blue-600 h-2.5 rounded-full ${width}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
