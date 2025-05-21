// store/fakeTopicChatStore.ts
import { create } from "zustand";

export interface Message {
    from: string;
    text: string;
    time?: string;
}

export interface User {
    id: string;
    name: string;
    avatar: string;
    isOwner?: boolean;
}

interface RoomState {
    topic: string;
    roomId: string;
    username: string;
    userId: string;
    messages: Message[];
    users: User[];
    activeRooms: Record<string, string[]>;
    joinRoom: (roomId: string, topic: string, username: string) => void;
    sendMessage: (msg: string) => void;
    findOrCreateRoom: (topic: string) => string;
    resetChat: () => void;
}

const topicResponses: Record<string, string[]> = {
    "Game": ["Bạn có chơi Liên Minh không?", "Game offline hay bạn thích nhất là gì?"],
    "Âm nhạc": ["Gần đây bạn nghe bài nào hay?", "Bạn thích nhạc Hàn hay nhạc US-UK hơn?"],
    "Phim ảnh": ["Bạn đã xem 'Dune 2' chưa?", "Bạn thích thể loại phim nào nhất?"],
    "Công nghệ": ["Bạn nghĩ gì về AI gần đây?", "Bạn dùng hệ điều hành nào chính?"],
    "Du lịch": ["Bạn thích đi biển hay núi?", "Điểm đến mơ ước của bạn là gì?"],
    "Ngẫu nhiên": ["Kể về một trải nghiệm thú vị gần đây", "Nếu có 1 tỷ, bạn sẽ làm gì đầu tiên?"],
};

const generateFakeUsers = (limit = 10): User[] => {
    const names = [
        "An", "Bình", "Chi", "Dũng", "Em", "Phúc", "Giang", "Hà", "Hùng", "Khánh",
        "Linh", "Minh", "Nga", "Quân", "Tú"
    ];
    return names.slice(0, limit).map((name, index) => ({
        id: `user-${index + 1}`,
        name,
        avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
        isOwner: index === 0,
    }));
};

export const useFakeTopicChatStore = create<RoomState>((set, get) => ({
    topic: "",
    roomId: "",
    username: "",
    userId: "",
    messages: [],
    users: [],
    activeRooms: {},

    joinRoom: (roomId, topic, username) => {
        const allUsers = generateFakeUsers(10);
        const myId = allUsers[Math.floor(Math.random() * allUsers.length)].id;
        set((state) => {
            const updatedRooms = { ...state.activeRooms };
            if (!updatedRooms[topic]) updatedRooms[topic] = [];
            if (!updatedRooms[topic].includes(roomId)) {
                updatedRooms[topic].push(roomId);
            }
            return {
                roomId,
                topic,
                username,
                userId: myId,
                messages: [],
                users: allUsers,
                activeRooms: updatedRooms,
            };
        });

        setTimeout(() => {
            set((state) => ({
                messages: [
                    ...state.messages,
                    { from: "system", text: `Chào mừng đến với chủ đề ${topic}!` },
                ],
            }));
        }, 500);
    },

    sendMessage: (msgText) => {
        const { username, topic } = get();
        const newMsg: Message = { from: username, text: msgText };
        set((state) => ({ messages: [...state.messages, newMsg] }));

        const replyOptions = topicResponses[topic] || ["Thật thú vị đó!"];
        const randomReply = replyOptions[Math.floor(Math.random() * replyOptions.length)];

        setTimeout(() => {
            set((state) => ({
                messages: [
                    ...state.messages,
                    {
                        from: "other",
                        text: randomReply,
                    },
                ],
            }));
        }, 1200);
    },

    findOrCreateRoom: (topic) => {
        const state = get();
        const existing = state.activeRooms[topic] || [];
        if (existing.length > 0) {
            return existing[Math.floor(Math.random() * existing.length)];
        }
        const newRoomId = `${topic}-${Math.floor(Math.random() * 10000)}`;
        set((s) => ({
            activeRooms: {
                ...s.activeRooms,
                [topic]: [newRoomId],
            },
        }));
        return newRoomId;
    },

    resetChat: () => set({
        roomId: "",
        topic: "",
        username: "",
        userId: "",
        messages: [],
        users: []
    }),
}));
