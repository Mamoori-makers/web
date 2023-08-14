import dayjs from 'dayjs';

export const calculateDaysFromDateString = (dateString: string) => {
  if (!dateString) {
    return 0;
  }

  const targetDate = dayjs(dateString);
  const today = dayjs();
  const daysDiff = today.diff(targetDate, 'day');
  return daysDiff;
};

export const formatDateToKorean = (dateString: string) => {
  const formattedDate = dayjs(dateString).format('YYYY년 M월 D일');
  return formattedDate;
};
