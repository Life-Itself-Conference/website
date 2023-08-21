import * as Contentful from "./contentful";

export enum TicketStatus {
  ComingSoon = "Coming Soon",
  OnSale = "On Sale",
  SoldOut = "Sold Out",
}

export type App = Contentful.TypeApp<"WITHOUT_UNRESOLVABLE_LINKS", string>;
export type Event = Contentful.TypeEvent<"WITHOUT_UNRESOLVABLE_LINKS", string>;
export type Speaker = Contentful.TypeSpeaker<
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;
export type Partner = Contentful.TypePartner<
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;
export type Modal = Contentful.TypeModal<"WITHOUT_UNRESOLVABLE_LINKS", string>;

export * from "./contentful";
