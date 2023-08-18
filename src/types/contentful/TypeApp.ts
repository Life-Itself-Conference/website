import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeEventSkeleton } from "./TypeEvent";

export interface TypeAppFields {
    currentEvent: EntryFieldTypes.EntryLink<TypeEventSkeleton>;
}

export type TypeAppSkeleton = EntrySkeletonType<TypeAppFields, "app">;
export type TypeApp<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAppSkeleton, Modifiers, Locales>;
