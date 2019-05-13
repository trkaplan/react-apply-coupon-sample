const formatCurrency = amount => {
  const formatter = new Intl.NumberFormat('nl', {
    style: 'currency',
    currency: 'EUR'
  });
  return formatter.format(amount);
};

export default formatCurrency;
