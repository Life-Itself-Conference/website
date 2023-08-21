import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeEventSkeleton } from "./TypeEvent";
import type { TypeModalSkeleton } from "./TypeModal";

export interface TypeAppFields {
    currentEvent: EntryFieldTypes.EntryLink<TypeEventSkeleton>;
    announcementModal?: EntryFieldTypes.EntryLink<TypeModalSkeleton>;
}

export type TypeAppSkeleton = EntrySkeletonType<TypeAppFields, "app">;
export type TypeApp<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAppSkeleton, Modifiers, Locales>;
