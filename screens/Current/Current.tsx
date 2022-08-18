import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { getActiveCityIdSelector, getCitySelector } from '../../store/city/selectors';
import Forecast from '../../components/forecast/Forecast';
import { isEmpty } from 'lodash';
import { View } from 'react-native';
import { styles } from './Current.style';
import cityAsyncActions from '../../store/city/actions';

const Current = () => {
  const dispatch = useDispatch<AppDispatch>();

  const activeCityId = useSelector(getActiveCityIdSelector);
  const city = useSelector(getCitySelector);

  const currentForecast = useMemo(() => {
    const [forecast] = isEmpty(city) ? [] : city.forecasts.slice(-1);

    return forecast;
  }, [city]);

  useEffect(() => {
    if (activeCityId !== 0) {
      dispatch(cityAsyncActions.get({ id: activeCityId }));
    }
  }, [activeCityId]);

  return (
    <View style={styles.container}>
      {city && currentForecast && (
        <Forecast
          cityName={city.name}
          date={currentForecast.for_date}
          temp={currentForecast.temp}
          tempFeelsLike={currentForecast.temp_feels_like}
          windSpeed={currentForecast.wind_speed}
          pressure={currentForecast.pressure}
          humidity={currentForecast.humidity}
          visibility={currentForecast.visibility}
        />
      )}
    </View>
  );
};

export default Current;
