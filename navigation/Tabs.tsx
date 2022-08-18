import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from './constants';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabelStyle: {
              fontWeight: '700',
              fontSize: 15,
              lineHeight: 45
            },
            headerShown: false,
            tabBarIconStyle: { display: 'none' }
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;
