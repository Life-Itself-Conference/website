import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLocationFields {
    label?: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    address?: EntryFieldTypes.Symbol;
    location?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    url?: EntryFieldTypes.Symbol;
    video?: EntryFieldTypes.AssetLink;
    videoPoster?: EntryFieldTypes.AssetLink;
}

export type TypeLocationSkeleton = EntrySkeletonType<TypeLocationFields, "location">;
export type TypeLocation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLocationSkeleton, Modifiers, Locales>;
