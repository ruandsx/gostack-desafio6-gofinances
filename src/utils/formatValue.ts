const formatValue = (
  value: number,
  type: 'income' | 'outcome' | null = null,
): string => {
  if (!value) {
    return '------';
  }
  const valueString = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  let formatedValue = '';

  formatedValue = valueString;

  if (type === 'outcome') {
    formatedValue = `- ${valueString}`;
  }

  return formatedValue;
};

export default formatValue;
