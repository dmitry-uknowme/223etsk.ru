import axios from "axios";
import { ITenderMethodVariants, ITenderStatusVariants } from "../types/tender";
const API_URL = import.meta.env.VITE_API_URL;

interface IFilter {
  name: string;
  customer: { query_name: string };
  sections: ("FZ223" | "COMMERCIAL")[];
  methods: ITenderMethodVariants[];
  sort?: {
    name: "SORT_PRICE" | "SORT_PUBLISHED_AT" | "SORT_NUMBER";
    by: "SORT_ASC" | "SORT_DESC";
  };
  statuses: ITenderStatusVariants[];
}

export const defaultFilter = {
  name: "",
  customer: {
    query_name: "",
  },
  sections: ["SECTION_COMMERCIAL_PROCEDURES", "SECTION_223_FZ"],
  methods: [
    ITenderMethodVariants.AUCTION,
    ITenderMethodVariants.AUCTION_DOWN,
    ITenderMethodVariants.AUCTION_LOWER,
    ITenderMethodVariants.TWO_STAGE_AUCTION,
    ITenderMethodVariants.CONTEST,
    ITenderMethodVariants.REQUEST_QUOTATION,
    ITenderMethodVariants.REQUEST_OFFERS,
    ITenderMethodVariants.MAKE_OFFERS,
    ITenderMethodVariants.COMPETITIVE_SELECTION,
    ITenderMethodVariants.REQUEST_PRICE,
  ],
  // sort: {
  //   name: "SORT_PUBLISHED_AT",
  //   by: "DESC",
  // },
  statuses: [
    // ITenderStatusVariants.NEW,
    ITenderStatusVariants.ACTIVE,
    ITenderStatusVariants.ACCEPTING_APPLICATIONS,
    ITenderStatusVariants.REVIEW_APPLICATIONS,
    // ITenderStatusVariants.REVIEW_BIDS_DATE,
    // ITenderStatusVariants.WAITING_START_OF_TRADING,
    ITenderStatusVariants.BIDDING_PROCESS,
    ITenderStatusVariants.BIDDING_COMPLETED,
    ITenderStatusVariants.SUMMING_UP_APPLICATIONS,
  ],
};

const searchTenders = async (filters?: IFilter) => {
  if (!filters) {
    filters = defaultFilter;
  }

  const { data } = await axios.post(`${API_URL}/procedures/search`, filters);
  // const { data } = await axios.post(`${API_URL}/procedures/search`, filters);
  return data;
};

export default searchTenders;
