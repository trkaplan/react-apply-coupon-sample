const formatCurrency = amount => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR'
  });
  return formatter.format(amount);
};

export default formatCurrency;
