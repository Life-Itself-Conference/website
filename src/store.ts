import { create } from "zustand";
import { Speaker } from "./types";

interface NewsletterStore {
  isOpen: boolean;
  openNewsletterModal: VoidFunction;
  closeNewsletterModal: VoidFunction;
}

interface SpeakerStore {
  isOpen: boolean;
  speaker?: Speaker;
  openSpeakerModal: (speaker: Speaker) => void;
  closeSpeakerModal: VoidFunction;
}

export const useNewsletterModalStore = create<NewsletterStore>((set) => ({
  isOpen: false,
  openNewsletterModal: () => set(() => ({ isOpen: true })),
  closeNewsletterModal: () => set(() => ({ isOpen: false })),
}));

export const useSpeakerModalStore = create<SpeakerStore>((set) => ({
  isOpen: false,
  speaker: undefined,
  openSpeakerModal: (speaker: Speaker) =>
    set(() => ({ isOpen: true, speaker })),
  closeSpeakerModal: () => set(() => ({ isOpen: false })),
}));
