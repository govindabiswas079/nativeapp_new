import React, { Fragment } from 'react'
import { Text, Pressable } from 'react-native'
import { colors, shape } from '../../theme'

const OutlinedButton = (props) => {

  return (
    <Fragment>
      <Pressable onPress={props?.onPress} disabled={props?.disabled} style={{
        borderWidth: 1,
        borderStyle: "solid",
        paddingVertical: props?.size === "small" ? 10 : props?.size === "medium" ? 13 : props?.size === "large" && 15,
        borderRadius: shape?.borderRadius,
        borderColor: props?.color,
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

OutlinedButton.defaultProps = {
  size: "medium", // "small", "large", "small",
  color: colors?.primary?.dark,
  disabled: false,
  textTransform: "capitalize",
  onPress: () => { },
  title: "button"
}
export default OutlinedButton