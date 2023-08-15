import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

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

export const formatDateTime = (dateString: string) => {
  return dayjs(dateString).tz('Asia/Seoul').format('YYYY.MM.DD HH:mm:ss').toString();
};
