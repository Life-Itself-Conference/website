import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePartnerFields {
    name: EntryFieldTypes.Symbol;
    logos?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    url?: EntryFieldTypes.Symbol;
}

export type TypePartnerSkeleton = EntrySkeletonType<TypePartnerFields, "partner">;
export type TypePartner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePartnerSkeleton, Modifiers, Locales>;
