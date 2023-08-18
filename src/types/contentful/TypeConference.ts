import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeConferenceFields {
    id?: EntryFieldTypes.Integer;
    hotel?: EntryFieldTypes.Symbol;
    hotelLabel?: EntryFieldTypes.Symbol;
    hotelOverview?: EntryFieldTypes.RichText;
    hotelUrl?: EntryFieldTypes.Symbol;
    videoPoster?: EntryFieldTypes.AssetLink;
    video?: EntryFieldTypes.AssetLink;
    location?: EntryFieldTypes.Symbol;
    address?: EntryFieldTypes.Symbol;
    altLocation?: EntryFieldTypes.Location;
}

export type TypeConferenceSkeleton = EntrySkeletonType<TypeConferenceFields, "conference">;
export type TypeConference<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeConferenceSkeleton, Modifiers, Locales>;
