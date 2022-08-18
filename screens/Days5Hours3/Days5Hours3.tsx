import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveCityIdSelector, getCitySelector } from '../../store/city/selectors';
import Forecast from '../../components/forecast/Forecast';
import { isEmpty } from 'lodash';
import { ScrollView } from 'react-native';
import { styles } from './Days5Hours3.style';
import { AppDispatch } from '../../store';
import cityAsyncActions from '../../store/city/actions';

const Days5Hours3 = () => {
  const dispatch = useDispatch<AppDispatch>();

  const activeCityId = useSelector(getActiveCityIdSelector);
  const city = useSelector(getCitySelector);

  useEffect(() => {
    if (activeCityId !== 0) {
      dispatch(cityAsyncActions.get({ id: activeCityId, type: '5days3hours' }));
    }
  }, [activeCityId]);

  return (
    <ScrollView style={styles.container}>
      {city &&
        !isEmpty(city.forecasts) &&
        city.forecasts.map((forecast) => (
          <Forecast
            cityName={city.name}
            date={forecast.for_date}
            temp={forecast.temp}
            tempFeelsLike={forecast.temp_feels_like}
            windSpeed={forecast.wind_speed}
            pressure={forecast.pressure}
            humidity={forecast.humidity}
            visibility={forecast.visibility}
          />
        ))}
    </ScrollView>
  );
};

export default Days5Hours3;
