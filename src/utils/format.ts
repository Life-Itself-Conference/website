const getOrdinal = (n: number) => {
  var s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const formatDate = (input: Date | string) => {
  const date = new Date(input);
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = getOrdinal(date.getDate());
  const year = date.toLocaleDateString('en-US', { year: 'numeric' });
  return `${month} ${day}, ${year}`;
};
