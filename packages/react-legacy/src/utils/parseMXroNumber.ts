export const parseMXToNumber = (number = '') => {
  const onlyNumbers = number.replace(/\D/g, '');

  return new Intl.NumberFormat('es-MX', {
    currency: 'MXN',
    style: 'currency',
  }).format(Number(onlyNumbers));
};

export const removeFloatZeros = (number: string) => (Number.isInteger(number) ? number : number);

export function removeFormatCurrency(currencyString: string) {
  if (currencyString === '') return currencyString;
  const numberString = currencyString.replace(/\$|,/g, '');
  const number = removeFloatZeros(numberString);

  return parseFloat(number);
}
