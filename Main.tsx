import { isEmpty } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getData, storeData } from './async-storage';
import RootNavigator from './navigation';
import { AppDispatch } from './store';
import cityAsyncActions from './store/city/actions';
import { cityActions } from './store/city/reducer';
import { getActiveCityIdSelector, getCitiesSelector } from './store/city/selectors';

interface SelectOption<Type> {
  label: string;
  value: Type;
}

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cities = useSelector(getCitiesSelector);
  const activeCityId = useSelector(getActiveCityIdSelector);

  const [showDropDown, setShowDropDown] = useState(false);

  const cityOptionsList = useMemo(
    () =>
      [...cities]
        .sort((a, b) => a.name.localeCompare(b.name))
        .reduce((current, city) => {
          current.push({
            label: city.name,
            value: city.id
          });

          return current;
        }, [] as SelectOption<number>[]),
    [cities]
  );

  const handleChangeCityId = async (id: number) => {
    await storeData('selectedCityId', id.toString());
    dispatch(cityActions.setActiveId(id));
  };

  useEffect(() => {
    dispatch(cityAsyncActions.getAll());
  }, []);

  useEffect(() => {
    (async () => {
      if (!isEmpty(cityOptionsList)) {
        const selectedCityId = await getData('selectedCityId');

        const payloadId =
          selectedCityId &&
          cityOptionsList.findIndex(
            (cityOption) => cityOption.value === parseInt(selectedCityId)
          ) !== -1
            ? selectedCityId
            : cityOptionsList[0].value;

        dispatch(cityActions.setActiveId(payloadId as number));
      }
    })();
  }, [cityOptionsList]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <DropDown
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={activeCityId}
            setValue={(id) => handleChangeCityId(id)}
            list={cityOptionsList}
          />
        </View>

        <RootNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Main;
