import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import store from './store';
import RootNavigator from './navigation';
import Main from './Main';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Main />

        <StatusBar />
      </PaperProvider>
    </Provider>
  );
};
export default App;
