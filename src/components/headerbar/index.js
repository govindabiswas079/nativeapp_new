import React, { Fragment } from 'react'
import { View, Text, Pressable, StatusBar } from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';
import { FontStyle, colors } from '../../theme'

const HeaderBar = ({ title }) => {
    const navigation = useNavigation();

    return (
        <Fragment>
            <View style={{ paddingHorizontal: 15, height: 55, marginTop: StatusBar.currentHeight, display: "flex", alignItems: "center", flexDirection: "row", gap: 10 }}>
                <Pressable onPress={() => { navigation.goBack() }} style={{ height: 30, width: 30, alignItems: "center", justifyContent: "center" }}>
                    <Feather name={"chevron-left"} size={24} color={colors.common.black} />
                </Pressable>
                <Text style={{ ...FontStyle(colors?.common?.black, 16, 500) }}>
                    {title}
                </Text>
            </View>
        </Fragment>
    )
}

HeaderBar.defaultProps = {
    title: ""
}
export default HeaderBar