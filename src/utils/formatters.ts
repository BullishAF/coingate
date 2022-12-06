export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

export const formatNumber = (value: number, prefersAbsoluteValue = false) => {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2
  }).format(value);

  if (prefersAbsoluteValue) return formattedNumber.replace('-', '');

  return formattedNumber;
};
