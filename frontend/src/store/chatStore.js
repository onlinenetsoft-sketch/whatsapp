import { create } from 'zustand';

const useChatStore = create((set) => ({
  conversations: [],

  activeConversation: null,

  messages: [],

  setConversations: (conversations) =>
    set({ conversations }),

  setActiveConversation: (
    activeConversation
  ) => set({ activeConversation }),

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        message,
      ],
    })),
}));

export default useChatStore;