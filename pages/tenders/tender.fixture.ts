import {
  ITender,
  ITenderMethodVariants,
  ITenderStatusVariants,
} from "../../renderer/types/tender";

const tenderFixture: ITender = {
  id: "66c53b89-3a32-4617-bf09-bff1b2cb1304",
  number: "48",
  registry_number: null,
  status: ITenderStatusVariants.ACCEPTING_APPLICATIONS,
  status_localized: "Идёт прием заявок",
  type: ITenderMethodVariants.AUCTION_DOWN,
  type_localized: "Запрос предложений",
  title: "zapros",
  price: "20000000 RUB",
  price_original: null,
  price_localized: "200 000,00 ₽",
  price_currency: "RUB",
  organizer_inn: "000275904346",
  organizer_short_title: "ООО ЕТП РБ",
  organizer_full_title: "ООО ЕТП РБ",
  customer_short_title: "ООО ЕТП РБ",
  customer_full_title: "ООО ЕТП РБ",
  start_bid_date: "2022-07-18 09:53:00",
  close_bid_date: "2022-07-18 09:58:00",
  summing_bid_date: "2022-07-18 09:59:00",
  review_bid_date: "2022-07-18 09:59:00",
  start_trade_date: null,
  summing_up_date: "2022-07-18 10:09:00",
  platform_type: "FZ223",
  platform_type_localized: "223-ФЗ и Коммерческие торги",
};

export default tenderFixture;
