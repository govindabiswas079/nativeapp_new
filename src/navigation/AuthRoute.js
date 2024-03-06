import React, { Fragment } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SignIn,
    SignUp,
    SignUpVerify,
    FindUser,
    UserVerify,
    ForgotPassword,
} from '../snreens/auth';
import { colors } from '../theme';

const AuthStack = createNativeStackNavigator()
const AuthRoute = () => {

    return (
        <Fragment>
            <AuthStack.Navigator screenOptions={{
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
                <AuthStack.Screen
                    name='signin'
                    component={SignIn}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true,
                        // orientation:"landscape"
                    }}
                />
                <AuthStack.Screen
                    name='signup'
                    component={SignUp}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true,
                        // orientation:"landscape"
                    }}
                />
                <AuthStack.Screen
                    name='signup/verify'
                    component={SignUpVerify}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true,
                        // orientation:"landscape"
                    }}
                />
                <AuthStack.Screen
                    name='find/user'
                    component={FindUser}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true
                    }}
                />
                <AuthStack.Screen
                    name='user/verify'
                    component={UserVerify}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true
                    }}
                />
                <AuthStack.Screen
                    name='forgot/password'
                    component={ForgotPassword}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: true
                    }}
                />
            </AuthStack.Navigator>
        </Fragment>
    )
}

export default AuthRoute