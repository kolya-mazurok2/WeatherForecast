export interface HTTP_RESPONSE<Type> {
  data?: Type;
  code: number;
  message?: string;
}
