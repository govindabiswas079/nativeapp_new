/**
 * @format
 */

import { ActivityIndicator, AppRegistry, StatusBar, View } from 'react-native';
import App from './src';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { Fragment } from 'react';
import { store } from './src/store';
import { colors } from './src/theme';
import { linking } from './src/utils/linking';

const Main = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer linking={linking} fallback={
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors?.background?.main, }}>
                    <StatusBar translucent={false} barStyle={'dark-content'} backgroundColor={colors?.background?.main} />
                    <ActivityIndicator size={'large'} color={'#F25555'} />
                </View>
            }>
                <Provider store={store}>
                    <App />
                </Provider>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
AppRegistry.registerComponent(appName, () => Main);
