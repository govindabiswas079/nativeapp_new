import { View, Text, Animated, Pressable } from 'react-native'
import React, { useRef } from 'react'

const AnimatedItem = ({ children, style }) => {
    const animation = useRef(new Animated.Value(0)).current;
    const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.9] })

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
        <Animated.View style={[{ transform: [{ scale }], }, { style }]}>
            <Pressable onPressIn={() => onPressIn()} onPressOut={() => onPressOut()}>
                {children}
            </Pressable>
        </Animated.View>
    )
}

export default AnimatedItem