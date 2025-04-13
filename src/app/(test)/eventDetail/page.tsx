"use client";
export default function EventDetailPage() {
  const participants = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Thị D",
    "Ẩn danh", // example of someone who didn't agree to show
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 space-y-6">
        {/* Event Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Sự kiện giấu mặt</h1>
        </div>

        {/* Time & Participants */}
        <div className="border p-4 rounded-lg bg-gray-50">
          <p className="text-gray-600">
            <strong>⏰ Thời gian:</strong> 20:00 - 21:00, 20/04/2025
          </p>
          <p className="text-gray-600 mt-2">
            <strong>👥 Số người tham gia:</strong> 30
          </p>
        </div>

        {/* Description */}
        <div className="border p-4 rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">📄 Mô tả</h2>
          <p>
            Đây là sự kiện kết bạn ẩn danh. Bạn sẽ được ghép đôi ngẫu nhiên để
            trò chuyện trong vòng 5 phút. Sau đó bạn có thể quyết định kết bạn
            hoặc không. Đây là cơ hội tuyệt vời để gặp gỡ người mới!
          </p>
        </div>

        {/* Participant List */}
        <div className="border p-4 rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold text-center mb-2">
            👤 Danh sách người tham gia (những người đồng ý hiển thị)
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-center text-gray-700">
            {participants.map((name, index) => (
              <li key={index} className="border rounded p-2 bg-white shadow-sm">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Join Button */}
        <div className="text-center">
          <button className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition">
            ✅ Tham gia
          </button>
        </div>
      </div>
    </div>
  );
}
