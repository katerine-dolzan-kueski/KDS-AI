export const mobileFormat = (value = '') => {
  const onlyNumbers = value.replace(/\D/g, '').substring(0, 10);
  const match = onlyNumbers.match(/^(\d{2})(\d{4})(\d{4})$/);

  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`;
  }
  return onlyNumbers;
};
