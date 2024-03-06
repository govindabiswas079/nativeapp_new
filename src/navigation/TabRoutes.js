import React, { Fragment } from 'react'
import { StatusBar, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
// import { SvgXml } from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard, Profile } from '../snreens/app'
import { colors } from '../theme';

const Tab = createBottomTabNavigator();
const TabRoutes = () => {

    return (
        <Fragment>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors?.common?.background} />

            <Tab.Navigator
                initialRouteName='app/dashboard'
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: colors?.primary?.main, height: 60, marginHorizontal: 15, marginVertical: 5, borderRadius: 18 },
                }}
            >
                <Tab.Screen
                    name="app/dashboard"
                    component={Dashboard}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ backgroundColor: focused ? "#4A5975" : "transparent", width: 45, height: 45, borderRadius: (45 / 2), alignItems: "center", justifyContent: "center", }}>
                                    {/* <SvgXml xml={home_icon} /> */}
                                    <Octicons name={"home"} size={20}  color={colors?.common?.white} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="user/profile"
                    component={Profile}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ backgroundColor: focused ? "#4A5975" : "transparent", width: 45, height: 45, borderRadius: (45 / 2), alignItems: "center", justifyContent: "center", }}>
                                    {/* <SvgXml xml={line_chart_overview} /> */}
                                    <Feather name={"user"} size={20}  color={colors?.common?.white} />
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </Fragment>
    )
}

export default TabRoutes