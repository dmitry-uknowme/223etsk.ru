import { format } from "date-fns";
const formatDate = (date: string, pattern?: string) =>
  !date || !new Date(date) ? null:format(new Date(date), pattern || "dd.MM.yyyy HH:mm");

export default formatDate;
