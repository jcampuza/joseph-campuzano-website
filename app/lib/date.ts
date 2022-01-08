import format from 'date-fns/format';

export const formatDateLong = (date: Date | number) => {
  return format(new Date(date), 'MMMM dd yyyy');
};
