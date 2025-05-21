// src/app/(test)/icebreaker/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useChatStore } from "@/store/useChatStore";
import { useEffect } from "react";

const prompts = [
    "Kể một trải nghiệm vui trong đời bạn?",
    "Nếu được du hành thời gian, bạn sẽ đi đâu?",
    "Bạn có niềm đam mê đặc biệt nào không?"
];

export default function IcebreakerPage() {
    const { setRoom, setUsername } = useChatStore();
    const router = useRouter();

    useEffect(() => {
        const id = "ice-" + Math.floor(Math.random() * 100000);
        setRoom(id, "Ngẫu nhiên");
        setUsername("Ẩn danh " + Math.floor(Math.random() * 10000));
        setTimeout(() => router.push(`/test/chat/${id}`), 1000);
    }, []);

    return (
        <div className="text-center p-10">
            <h2 className="text-xl font-bold mb-2">Đang tìm người ghép...</h2>
            <p className="text-gray-600 italic">
                "{prompts[Math.floor(Math.random() * prompts.length)]}"
            </p>
        </div>
    );
}
