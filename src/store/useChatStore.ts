// src/store/useChatStore.ts
import { create } from "zustand";

interface ChatState {
    roomId: string | null;
    username: string;
    topic: string;
    setRoom: (id: string, topic: string) => void;
    setUsername: (name: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
    roomId: null,
    username: "",
    topic: "",
    setRoom: (id, topic) => set({ roomId: id, topic }),
    setUsername: (name) => set({ username: name }),
}));
