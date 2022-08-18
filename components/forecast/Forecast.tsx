import { capitalize } from 'lodash';
import { Card, Paragraph, Subheading, Text, Title } from 'react-native-paper';
import { formatDate } from '../../utils/date';
import { styles } from './Forecast.styles';

interface Props {
  cityName: string;
  date: string;
  temp: number;
  tempFeelsLike?: number;
  weather_desc?: string;
  weather_icon?: string;
  windSpeed?: number;
  pressure?: number;
  humidity?: number;
  visibility?: number;
}

const Forecast = ({
  cityName,
  date,
  temp,
  tempFeelsLike,
  weather_desc,
  weather_icon,
  windSpeed,
  pressure,
  humidity,
  visibility
}: Props) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={cityName} subtitle={formatDate(date)} />

      <Card.Content>
        {weather_desc && (
          <Paragraph style={styles.cardItem}>
            <Text>{capitalize(weather_desc)}</Text>
          </Paragraph>
        )}

        <Paragraph style={styles.cardItem}>
          <Text>Temperature:</Text> <Text>{temp}°C</Text>
        </Paragraph>

        {tempFeelsLike && (
          <Paragraph style={styles.cardItem}>
            <Text>Feels like:</Text> <Text>{Math.round(tempFeelsLike)}°C</Text>
          </Paragraph>
        )}

        {windSpeed && (
          <Paragraph style={styles.cardItem}>
            <Text>Wind speed:</Text> <Text>{windSpeed} m/s</Text>
          </Paragraph>
        )}

        {pressure && (
          <Paragraph style={styles.cardItem}>
            <Text>Pressure:</Text> <Text>{pressure} hPa</Text>
          </Paragraph>
        )}

        {humidity && (
          <Paragraph style={styles.cardItem}>
            <Text>Humidity:</Text> <Text>{humidity}%</Text>
          </Paragraph>
        )}

        {visibility && (
          <Paragraph style={styles.cardItem}>
            <Text>Visibility:</Text> <Text>{visibility} m</Text>
          </Paragraph>
        )}
      </Card.Content>
    </Card>
  );
};

export default Forecast;
