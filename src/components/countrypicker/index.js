import React, { Fragment, useState } from 'react';
import {  Modal, Pressable, Text, View, ScrollView } from 'react-native'
import { FontStyle, colors, shape } from '../../theme';
import TextInput from "../textinput"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons";
import { countrylist } from '../../utils/countrylist';
import { TextButton } from '../buttons';

const CountryPicker = ({ inputValue, onChangeText }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")


    const searchResults = countrylist?.filter(item => {
        return (
            item?.name?.toLowerCase().includes(search.toLowerCase())
        );
    })

    return (
        <Fragment>
            <TextInput
                // startIcon={() => {
                //     countrylist.find((item) => item?.name === inputValue?.country)?.flag &&
                //         <Pressable style={{ width: 60, height: 10 }}>
                //             <Image source={{ uri: countrylist.find((item) => item?.name === inputValue?.country)?.flag }} resizeMode="contain" style={{ width: 20, height: 10 }} />
                //         </Pressable>
                // }}
                endIcon={() =>
                    <Pressable onPress={() => { setIsOpen(!isOpen) }} style={{}}>
                        <FontAwesome name={"angle-down"} color={colors?.primary?.blueGrey?.[400]} size={25} />
                    </Pressable>
                }
                placeholder={"Country"}
                value={inputValue?.country}
                onChangeText={(text) => { onChangeText(text) }}
                editable={false}
                readOnly={true}
                onPress={() => { setIsOpen(!isOpen) }}
            />

            <Modal
                visible={isOpen}
                onRequestClose={() => { setIsOpen(!isOpen); setSearch("") }}
                transparent
                statusBarTranslucent={false}
                animationType="slide"
            >
                <View style={{ backgroundColor: colors?.background?.main, paddingHorizontal: 15, paddingVertical: 10, display: "flex", flexDirection: "row", gap: 10 }}>
                    <TextInput
                        startIcon={() =>
                            <Pressable style={{}}>
                                <Feather name={"search"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                            </Pressable>
                        }
                        endIcon={() =>
                            search &&
                            <Pressable onPress={() => { setSearch("") }} style={{}}>
                                <Ionicons name={"close"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                            </Pressable>
                        }
                        placeholder={"Search"}
                        value={search}
                        onChangeText={(text) => { setSearch(text) }}
                    />
                    <TextButton
                        onPress={() => { setIsOpen(!isOpen); setSearch("") }}
                        title={"cancel"}
                        color={colors?.error?.dark}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"} showsHorizontalScrollIndicator={false} style={{ backgroundColor: colors?.background?.main, }} contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 15, paddingVertical: 10, width: "100%" }}>
                    {searchResults?.slice(0, 50).map((value, index) => {
                        return (
                            <Pressable onPress={() => {
                                onChangeText(value?.name)
                                setIsOpen(!isOpen);
                                setSearch("")
                            }} key={index} style={{ borderRadius: shape?.borderRadius, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: value?.name === inputValue?.country ? colors?.primary?.main : "transparent" }}>
                                <Text style={{ ...FontStyle(value?.name === inputValue?.country ? colors?.common?.white : colors?.common?.black, 16, 500) }}>{value?.name}</Text>
                            </Pressable>
                        )
                    })}
                </ScrollView>
            </Modal>
        </Fragment>
    )
}

export default CountryPicker