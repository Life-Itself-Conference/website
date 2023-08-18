import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAboutUsFields {
    id?: EntryFieldTypes.Integer;
    year?: EntryFieldTypes.Symbol;
    overview?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    sanjay?: EntryFieldTypes.Symbol;
    sanjayTitle?: EntryFieldTypes.Symbol;
    sanjayBio?: EntryFieldTypes.RichText;
    marc?: EntryFieldTypes.Symbol;
    marcTitle?: EntryFieldTypes.Symbol;
    marcBio?: EntryFieldTypes.RichText;
}

export type TypeAboutUsSkeleton = EntrySkeletonType<TypeAboutUsFields, "aboutUs">;
export type TypeAboutUs<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAboutUsSkeleton, Modifiers, Locales>;
