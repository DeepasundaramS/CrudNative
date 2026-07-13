import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import RouterNavigation from './src/navigations/routerNavigation';
import { store } from './src/store/store';
import React from 'react';
import './global.css'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <RouterNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;