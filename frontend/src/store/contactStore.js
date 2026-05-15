import { create } from 'zustand';

const useContactStore = create((set) => ({
  contacts: [],

  setContacts: (contacts) =>
    set({ contacts }),

  addContact: (contact) =>
    set((state) => ({
      contacts: [
        ...state.contacts,
        contact,
      ],
    })),
}));

export default useContactStore;