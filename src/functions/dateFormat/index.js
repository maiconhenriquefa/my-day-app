function dateFormat(created_at) {
  const date = new Date(created_at);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hoursFull = `${hours}:${minutes}`;

  const monthInYears = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const today = new Date().getDate();

  function isTodayOrTomorrow(dayValue, todayValue) {
    if (day === today) {
      return 'Hoje,';
    } else if (day === today - 1) {
      return 'Ontem,';
    } else {
      return '';
    }
  }
  const dateFull = `${isTodayOrTomorrow()} ${day} de ${monthInYears[month]}`;
  return {dateFull, hoursFull};
}

export default dateFormat;
