export interface City {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  forecasts?: Forecast[];
  createdAt: string;
  updatedAt: string;
}

export type ForecastType = 'current' | '5days3hours';

export interface Forecast {
  id: number;
  type: ForecastType;
  temp: number;
  temp_feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure?: number;
  humidity?: number;
  visibility?: number;
  weather_name?: string;
  weather_desc?: string;
  weather_icon?: string;
  wind_speed?: number;
  wind_deg?: number;
  wind_gust?: number;
  cloudiness?: number;
  for_date: string;
  city?: City;
  createdAt: string;
  updatedDate: string;
}
