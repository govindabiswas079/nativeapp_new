import React, { Fragment } from 'react'
import { Text, Pressable } from 'react-native'
import { colors } from '../../theme'

const TextButton = (props) => {

    return (
        <Fragment>
            <Pressable onPress={props?.onPress} disabled={props?.disabled} style={{
                paddingVertical: props?.size === "small" ? 10 : props?.size === "medium" ? 13 : props?.size === "large" && 15,
                opacity: props?.disabled ? 0.4 : 1
            }}>
                <Text numberOfLines={1} style={{
                    color: props?.color,
                    fontSize: 16,
                    textAlign: "center",
                    textTransform: props?.textTransform,
                    fontFamily: "Roboto-Medium"
                }}>
                    {props?.title}
                </Text>
            </Pressable>
        </Fragment >
    )
}

TextButton.defaultProps = {
    size: "medium", // "small", "large", "small",
    color: colors?.primary?.dark,
    disabled: false,
    textTransform: "capitalize",
    onPress: () => { },
    title: "button"
}
export default TextButton