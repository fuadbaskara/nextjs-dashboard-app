import dayjs from 'dayjs';

export const DEFAULT_DATE = '0001-01-01';
export const DEFAULT_DATETIME = '0001-01-01T00:00:00Z';

export const DATE_VIEW_FORMAT = 'DD MMM YYYY';
export const COMPACT_DATE_FORMAT = 'MMMM D, YYYY';
export const COMPLETE_DATE_FORMAT = 'MMMM D, YYYY h:mm A';
export const DATETIME_VIEW_FORMAT = 'DD MMM YYYY HH:mm';
export const DATE_FORMAT_FILTER = 'DD-MM-YYYY';
export const DATE_FILTER_REPORT = 'YYYY-MM-DD';

export const dateToString = (date: string, format = COMPLETE_DATE_FORMAT): string => (date && dayjs(date).isValid() ? dayjs(date).format(format) : '');

export const parseCompleteDate = (date: string, format = COMPLETE_DATE_FORMAT): string => (date && dayjs(date).isValid() ? dayjs(date).format(format) : '');

export const dateToStringWithParseFormat = (
  date: string,
  format = DATE_VIEW_FORMAT,
  parseFormat = DATE_FILTER_REPORT,
): string => (date && dayjs(date, parseFormat).isValid() ? dayjs(date, parseFormat).format(format) : '');

export const dateTimeToString = (date: string, format = COMPLETE_DATE_FORMAT): string => (date && dayjs(date).isValid() ? dayjs(date).format(format) : '');

export const getAge = (date: string): number => dayjs().diff(date, 'year');
