interface INotice {
  id: string;
  type: string;
  version: number;
  is_active: boolean;
  title: string;
  price: { amount: string; currency: string };
  price_localized: { amount: string; currency: string };
  organizer_full_name: string;
  organizer_short_name: string;
  organizer_inn: string;
  organizer_phone: string;
  organizer_add_phone?: string;
  organizer_email: string;
  organizer_legal_address: string;
  organizer_postal_address: string;
  start_bid_date: Date;
  close_bid_date: Date;
  summing_bid_date: Date;
}

export default INotice;
