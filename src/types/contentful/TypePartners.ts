import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePartnersFields {
    id?: EntryFieldTypes.Integer;
    year?: EntryFieldTypes.Symbol;
    partner?: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    url?: EntryFieldTypes.Symbol;
}

export type TypePartnersSkeleton = EntrySkeletonType<TypePartnersFields, "partners">;
export type TypePartners<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePartnersSkeleton, Modifiers, Locales>;
