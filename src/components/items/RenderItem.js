import React, { Fragment, useEffect, useState } from 'react'
import { ActivityIndicator, Animated, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { colors, FontStyle, shape } from '../../theme';

const RenderItem = React.memo(({ item }) => {

    if (item?.empty === true) {
        return (
            <Fragment>
                <View style={[{ backgroundColor: colors.common?.transparent, gap: 10, borderRadius: shape.borderRadius / 2, flex: 1 }, styles.itemContainer]} />
            </Fragment>
        )
    }
    return (
        <Fragment>
            <View style={[{ backgroundColor: colors.primary.blueGrey[100], gap: 10, borderRadius: shape.borderRadius / 2, flex: 1 }, styles.itemContainer]}>
                <Text style={{ ...FontStyle(colors.common.black, 24, 700) }}>{item?.name || "Tag"}</Text>
                <View style={{ gap: 3 }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 10 }}>
                        <Text numberOfLines={1} style={{ ...FontStyle(colors?.primary?.[900], 18, 500) }}>Total articles:</Text>
                        <Text numberOfLines={1} style={{ ...FontStyle(colors?.primary?.[900], 18, 700) }}>{item?.totalarticles || 0}</Text>
                    </View>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 10 }}>
                        <Text style={{ ...FontStyle(colors?.primary?.[900], 18, 500) }}>Total questions:</Text>
                        <Text style={{ ...FontStyle(colors?.primary?.[900], 18, 700) }}>{item?.totalquestions || 0}</Text>
                    </View>

                    <Text style={{ ...FontStyle(colors?.primary?.[200], 18, 400), paddingVertical: 3 }}>
                        {moment(item?.createdAt).fromNow()}
                    </Text>
                </View>
            </View>
        </Fragment>
    )
});

export default RenderItem;


const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});