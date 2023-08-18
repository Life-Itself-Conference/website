import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAboutUsSkeleton } from "./TypeAboutUs";
import type { TypeLocationSkeleton } from "./TypeLocation";
import type { TypeModalSkeleton } from "./TypeModal";
import type { TypePartnerSkeleton } from "./TypePartner";
import type { TypeSpeakerSkeleton } from "./TypeSpeaker";

export interface TypeEventFields {
    year?: EntryFieldTypes.Symbol;
    startDate?: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    announcementModal?: EntryFieldTypes.EntryLink<TypeModalSkeleton>;
    hero?: EntryFieldTypes.AssetLink;
    tagline?: EntryFieldTypes.Text;
    partnershipLogo?: EntryFieldTypes.AssetLink;
    ticketStatus?: EntryFieldTypes.Symbol<"Coming Soon" | "On Sale" | "Sold Out">;
    registrationClosedText?: EntryFieldTypes.RichText;
    registrationRefundText?: EntryFieldTypes.RichText;
    registrationPaymentText?: EntryFieldTypes.RichText;
    registrationConfirmationText?: EntryFieldTypes.RichText;
    invitation?: EntryFieldTypes.Symbol;
    videoDetails?: EntryFieldTypes.RichText;
    schedule?: EntryFieldTypes.AssetLink;
    speakersSubtitle?: EntryFieldTypes.RichText;
    speakers?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSpeakerSkeleton>>;
    moreSpeakersComing?: EntryFieldTypes.Boolean;
    location?: EntryFieldTypes.EntryLink<TypeLocationSkeleton>;
    partners?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePartnerSkeleton>>;
    aboutUs?: EntryFieldTypes.EntryLink<TypeAboutUsSkeleton>;
    healthAndSafetyStatus?: EntryFieldTypes.Boolean;
    healthAndSafetyLabel?: EntryFieldTypes.Symbol;
    healthAndSafetyDescription?: EntryFieldTypes.RichText;
}

export type TypeEventSkeleton = EntrySkeletonType<TypeEventFields, "event">;
export type TypeEvent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeEventSkeleton, Modifiers, Locales>;
