import { format } from "date-fns";
const formatDate = (date: Date, pattern?: string) =>
  format(date, pattern || "dd.MM.yyyy HH:mm");

export default formatDate;
