import { formatISO } from 'date-fns';
export function formatDate(date: Date): string | null {
  if (!date || date === null || date === undefined) {
    return null;
  }
  date = new Date(date);
  return formatISO(date, { representation: 'complete' });
}
