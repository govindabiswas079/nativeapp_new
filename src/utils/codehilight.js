export const codesyntaxhilight = `
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { SectionList, Image, StyleSheet, Text, View, Animated, Pressable } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { FontStyle, colors, shape } from '../../../theme';
import HeaderBar from '../../../components/headerbar';
import { goupedlist } from '../../../utils/goupedlist';

const SetcionlistNative = () => {
    const animation = useRef(new Animated.Value(0)).current;
    const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.9] })
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }, []);

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true
        }).start();
    }

    const onPressOut = () => {
        setTimeout(() => {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true
            }).start();
        }, 200)
    };

    return (
        <Fragment>
            <HeaderBar title={"Section List"} />
            <SectionList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 15, }}
                sections={goupedlist?.sections || []}
                renderItem={({ item }) => {
                    return (
                        <Fragment>
                            <Animated.View style={[{ backgroundColor: colors.primary.light, transform: [{ scale }], opacity: fadeAnim, borderRadius: shape.borderRadius / 2 }, styles.itemContainer]}>
                                <Pressable onPressIn={() => onPressIn()} onPressOut={() => onPressOut()}>
                                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                                        <Text style={[{ ...FontStyle(colors.common.black, 14, 500) }]}>{item?.name}</Text>
                                    </View>
                                </Pressable>
                            </Animated.View>
                        </Fragment>
                    )
                }}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background.main }}>
                        <View style={{ marginVertical: 10, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: colors.primary.blueGrey[100], borderRadius: shape.borderRadius / 2 }}>
                            <Text style={[{ ...FontStyle(colors.common.black, 16, 700) }]}>{section.title}</Text>
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ height: 10 }} />
                    )
                }}
                stickySectionHeadersEnabled={true}
                keyExtractor={item => item.id}
/>
        </Fragment >
    )
}

export default SetcionlistNative;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    itemContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
});
`