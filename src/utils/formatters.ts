import { UNKNOWN_VALUE_CHAR } from '@/constants';

export const formatCurrency = (value: number, maximumFractionDigits = 6) => {
  if (!value || value === 0) return UNKNOWN_VALUE_CHAR;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits
  }).format(value);
};

export const formatNumber = (value: number, prefersAbsoluteValue = false) => {
  if (!value || value === 0) return UNKNOWN_VALUE_CHAR;

  const formattedNumber = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2
  }).format(value);

  if (prefersAbsoluteValue) return formattedNumber.replace('-', '');

  return formattedNumber;
};
