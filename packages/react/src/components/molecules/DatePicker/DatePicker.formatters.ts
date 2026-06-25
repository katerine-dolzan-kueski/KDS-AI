import { Formatters } from 'react-day-picker';

export const formatters: Partial<Formatters> = {
  formatWeekdayName: (date: Date) => {
    const weekdays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];
    return weekdays[date.getDay()];
  },
  formatMonthCaption: (date: Date) => {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  },
};
