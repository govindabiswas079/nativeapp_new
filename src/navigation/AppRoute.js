import React, { Fragment } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Setting
} from '../snreens/app';
import { colors } from '../theme';
import TabRoutes from './TabRoutes';

const AppStack = createNativeStackNavigator()
const AppRoute = () => {
    return (
        <Fragment>
            <AppStack.Navigator screenOptions={{
                animationEnabled: true,
                animationTypeForReplace: "push",
                presentation: "modal",
                headerShown: false,
                animation: "slide_from_right",
                gestureDirection: "horizontal",
                fullScreenGestureEnabled: true,
                orientation: "portrait",
                contentStyle: {
                    backgroundColor: colors?.background?.main,
                }
            }}>
                <AppStack.Screen
                    name='app'
                    component={TabRoutes}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true,
                        // orientation:"landscape"
                    }}
                />
                <AppStack.Screen
                    name='user/setting'
                    component={Setting}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true,
                        // orientation:"landscape"
                    }}
                />
            </AppStack.Navigator>
        </Fragment>
    )
}

export default AppRoute