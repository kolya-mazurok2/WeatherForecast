import { HTTP_RESPONSE } from './types';

export const BASE_URL = process.env.API_URL || '';

export const DEFAULT_SUCCESS_HTTP_RESPONSE: HTTP_RESPONSE<any> = {
  data: [],
  code: 200
};

export const DEFAULT_FAILURE_HTTP_RESPONSE: HTTP_RESPONSE<any> = {
  code: 500,
  message: 'Something went wrong!'
};

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'API-Key': process.env.API_KEY || ''
};
