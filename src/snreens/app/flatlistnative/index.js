import React, { Fragment } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { FontStyle, colors, shape } from '../../../theme';
import HeaderBar from '../../../components/headerbar';
import { countrylist } from '../../../utils/countrylist';

const FlatlistNative = () => {

    return (
        <Fragment>
            <HeaderBar title={"Flat List"} />
            <FlatList
                style={{}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 15 }}
                initialNumToRender={20}
                removeClippedSubviews={true}
                onEndReached={() => {
                    console.log("first")
                }}
                onEndReachedThreshold={0.5}
                data={countrylist.splice(0, 50)}
                renderItem={({ item }) => {

                    return (
                        <View style={[{ backgroundColor: colors.primary.light, borderRadius: shape.borderRadius / 2 }, styles.itemContainer]}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <SvgUri
                                        width={40}
                                        height={40}
                                        uri={item?.flag}
                                    />
                                </View>
                                <Text style={[{ ...FontStyle(colors.common.black, 14, 500) }, styles.item]}>{item?.name}</Text>
                            </View>
                        </View>
                    )
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ height: 10 }} />
                    )
                }}
            />
        </Fragment>
    )
}

export default FlatlistNative;

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});