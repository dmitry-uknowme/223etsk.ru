export enum ITenderStatusVariants {
  ACTIVE = "STATUS_ACTIVE",
  NEW = "STATUS_NEW",
  ACCEPTING_APPLICATIONS = "STATUS_ACCEPTING_APPLICATIONS",
  REVIEW_APPLICATIONS = "STATUS_APPLICATIONS_RECEIVED",
  REVIEW_BIDS_DATE = "STATUS_REVIEW_BIDS_DATE",
  SUMMING_UP_APPLICATIONS = "STATUS_SUMMING_UP_APPLICATIONS",
  WAITING_START_OF_TRADING = "STATUS_START_OF_TRADING",
  BIDDING_PROCESS = "STATUS_BIDDING_PROCESS",
  BIDDING_COMPLETED = "STATUS_BIDDING_COMPLETED",
  CANCELLED = "STATUS_CANCEL",
}

export enum ITenderMethodVariants {
  REQUEST_OFFERS = "REQUEST_OFFERS",
  CONTEST = "CONTEST",
  AUCTION = "AUCTION",
  AUCTION_LOWER = "AUCTION_LOWER",
  AUCTION_DOWN = "AUCTION_DOWN",
  MAKE_OFFERS = "MAKE_OFFERS",
  REQUEST_QUOTATION = "REQUEST_QUOTATION",
  TWO_STAGE_AUCTION = "TWO_STAGE_AUCTION",
  COMPETITIVE_SELECTION = "COMPETITIVE_SELECTION",
}

export interface ITender {
  id: string;
  number: string;
  registry_number: string | null;
  title: string;
  type: ITenderMethodVariants;
  type_localized: string;
  price: string;
  price_original: string | null;
  price_currency: string | null;
  price_localized: string;
  status: ITenderStatusVariants;
  status_localized: string;
  organizer_inn: string;
  organizer_short_title: string;
  organizer_full_title: string;
  customer_short_title: string;
  customer_full_title: string;
  start_bid_date: string;
  close_bid_date: string;
  summing_bid_date: string;
  review_bid_date: string | null;
  start_trade_date: string | null;
  summing_up_date: string;
  platform_type: string;
  platform_type_localized: string;
}
