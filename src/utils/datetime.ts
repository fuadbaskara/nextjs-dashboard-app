import dayjs from 'dayjs';

export const DATETIME_VIEW_FORMAT = 'DD-MM-YYYY HH:mm';

export const dateToString = (
  date: string,
  format = DATETIME_VIEW_FORMAT,
): string => (date && dayjs(date).isValid() ? dayjs(date).format(format) : '');
