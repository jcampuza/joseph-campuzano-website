export const formatDateLong = (date: Date | number) => {
  return new Date(date).toLocaleDateString(undefined, { dateStyle: 'long' });
};
