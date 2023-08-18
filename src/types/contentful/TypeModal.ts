import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeModalFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
    primaryButton?: EntryFieldTypes.Boolean;
    primaryButtonText?: EntryFieldTypes.Symbol<"Join Newsletter" | "On Sale" | "Save the Date" | "View Speakers">;
    secondaryButton?: EntryFieldTypes.Boolean;
    secondaryButtonText?: EntryFieldTypes.Symbol<"Join Newsletter" | "On Sale" | "Save the Date" | "View Speakers">;
}

export type TypeModalSkeleton = EntrySkeletonType<TypeModalFields, "modal">;
export type TypeModal<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeModalSkeleton, Modifiers, Locales>;
