import { DEFAULT_FORMAT } from './constants';
import dayjs from 'dayjs';

export const formatDate = (date: string, format = DEFAULT_FORMAT) => dayjs(date).format(format);
