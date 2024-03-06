import React, { Fragment } from 'react'
import { Text, Pressable, ActivityIndicator } from 'react-native'
import { colors, shape } from '../../theme'

const ContainedButton = (props) => {

    return (
        <Fragment>
            <Pressable onPress={props?.onPress} disabled={props?.disabled} style={{
                paddingVertical: props?.size === "small" ? 10 : props?.size === "medium" ? 13 : props?.size === "large" && 15,
                borderRadius: shape?.borderRadius,
                opacity: props?.disabled ? 0.7 : 1,
                backgroundColor: props?.backgroundColor
            }}>
                {props?.isLoading ?
                    <ActivityIndicator size={"small"} color={props?.loaderColor} />
                    :
                    <Text numberOfLines={1} style={{
                        color: props?.fontColor,
                        fontSize: props?.fontSize,
                        textAlign: "center",
                        textTransform: props?.textTransform,
                        fontFamily: "Roboto-Medium"
                    }}>
                        {props?.title}
                    </Text>
                }
            </Pressable>
        </Fragment >
    )
}

ContainedButton.defaultProps = {
    size: "medium", // "small", "large", "small",
    backgroundColor: colors?.primary?.main,
    fontColor: colors?.common?.white,
    fontSize: 16,
    disabled: false,
    textTransform: "capitalize",
    onPress: () => { },
    title: "button",
    isLoading: false,
    loaderColor: colors?.common?.white,
}
export default ContainedButton