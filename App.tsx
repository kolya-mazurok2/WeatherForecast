import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <StatusBar />
  </SafeAreaProvider>
);
export default App;
