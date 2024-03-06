import React from 'react'
import { View, Text, ScrollView as SView, StatusBar } from 'react-native'
import { colors } from '../../theme'

const ScrollView = (props) => {

    return (
        <SView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"} showsHorizontalScrollIndicator={false} style={{ backgroundColor: colors?.background?.main, }} contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 15, paddingVertical: StatusBar.currentHeight, width: "100%" }}>
            {props?.children}
        </SView>
    )
}

export default ScrollView