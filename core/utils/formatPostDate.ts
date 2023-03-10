import {
  differenceInBusinessDays,
  format,
  formatDistanceToNow,
} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatPostDate(postCreationDate: string) {
  const postDate = new Date(postCreationDate);
  const today = new Date();

  const dayDiff = differenceInBusinessDays(today, postDate);

  if (dayDiff > 3) {
    return format(postDate, "dd/MM/yyyy");
  }

  return `há ${formatDistanceToNow(postDate, { locale: ptBR })}`;
}
