import { create } from "zustand";

interface NewsletterStore {
  isOpen: boolean;
  openNewsletterModal: VoidFunction;
  closeNewsletterModal: VoidFunction;
}

export const useNewsletterModalStore = create<NewsletterStore>((set) => ({
  isOpen: false,
  openNewsletterModal: () => set(() => ({ isOpen: true })),
  closeNewsletterModal: () => set(() => ({ isOpen: false })),
}));
