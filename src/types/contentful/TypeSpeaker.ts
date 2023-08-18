import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSpeakerFields {
    name: EntryFieldTypes.Symbol;
    titles?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    topic?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    headshot?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeSpeakerSkeleton = EntrySkeletonType<TypeSpeakerFields, "speaker">;
export type TypeSpeaker<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSpeakerSkeleton, Modifiers, Locales>;
