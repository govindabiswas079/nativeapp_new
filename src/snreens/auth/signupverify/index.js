import React, { Fragment, useRef, useState } from 'react';
import { Pressable, Text, View, KeyboardAvoidingView, TextInput as RNTextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ScrollView from '../../../components/scrollview';
import { ContainedButton, } from '../../../components/buttons';
import { colors, FontStyle } from '../../../theme';
import TextInput from "../../../components/textinput"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useSelector, useDispatch } from "react-redux"
import { setSnackbar } from '../../../store/reducer/SnackbarReducer';

const SignUpVerify = ({ }) => {
  let inputsRef = useRef();
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const { userdata } = useSelector(state => state?.Auth)
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [activeFocus, setActiveFocus] = useState();

  const onChangeInput = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // if (value && index < newOtp.length - 1) {
    if (newOtp[index]) {
      setActiveFocus(index + 1)
      inputsRef[index + 1]?.focus()
    } else {
      setActiveFocus(index - 1)
      inputsRef[index - 1]?.focus()
    }
  };

  return (
    <Fragment>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <ScrollView>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ alignItems: "center", paddingVertical: 50, gap: 5, width: "100%" }}>
              <MaterialIcons name={"verified"} color={colors?.primary?.blueGrey?.[400]} size={80} />
              <Text style={{ ...FontStyle(colors?.common?.black, 22, 500), }}>Verification</Text>
              <Text style={{ ...FontStyle(colors?.primary?.blueGrey?.[400], 16, 400), }}>Enter otp send to +{userdata?.phone_code} {userdata?.mobile}</Text>
            </View>
            <View style={{ gap: 15, width: "100%", maxWidth: 500, }}>

              <View style={{ gap: 5 }}>
                <TextInput
                  startIcon={() =>
                    <Pressable style={{}}>
                      <FontAwesome name={"phone"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                    </Pressable>
                  }
                  endIcon={() =>
                    <Pressable onPress={() => { navigation.goBack() }}>
                      <Text style={{ ...FontStyle(colors?.error?.main, 14, 500) }}>Change</Text>
                    </Pressable>
                  }
                  placeholder={"Phone"}
                  value={userdata?.mobile}
                  keyboardType={"phone-pad"}
                  inputMode={"numeric"}
                  editable={false}
                  readOnly={true}
                />
              </View>

              <View style={{ paddingVertical: 10, display: "flex", gap: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", /* width: "100%" */ }}>
                {otp?.map((value, index) => {

                  return (
                    <RNTextInput
                      // onLayout={(e) => setHeight(e?.nativeEvent?.layout?.width)}
                      key={index}
                      value={value}
                      onChangeText={(tetx) => { onChangeInput(index, tetx) }}
                      style={{
                        width: 60,
                        height: 60,
                        flex: 1,
                        backgroundColor: "#F1F1F1",
                        borderRadius: 10,
                        textAlign: "center",
                        ...FontStyle(colors?.common?.black, 14, 500),
                        ...(index === activeFocus ? {
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: colors?.primary?.blueGrey?.[100]
                        } : {
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: "transparent"
                        })
                      }}
                      autoFocus={index === activeFocus}
                      onFocus={() => { setActiveFocus(index) }}
                      maxLength={1}
                      ref={(ref) => { inputsRef[index] = ref }}
                      keyboardType={"numeric"}
                      textContentType={'password'}
                      onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent?.key === 'Backspace') {
                          // console.log(nativeEvent?.key)
                        }
                      }}
                    />
                  )
                })}
              </View>

              <View style={{ paddingVertical: 10, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...FontStyle(colors?.common?.black, 14, 500) }}>Don't receive the OTP ? {" "}</Text>
                <Text onPress={() => { dispatch(setSnackbar({ visible: true, variant: "success", message: "Successfully resend otp" })); }} style={{ ...FontStyle(colors?.primary?.dark, 14, 500), textTransform: "uppercase" }}>Resend otp</Text>
              </View>

              <ContainedButton
                title={"Verify"}
                disabled={(otp?.join('').length !== 6)}
                color={colors?.primary?.dark}
                onPress={(event) => {
                  dispatch(setSnackbar({ visible: true, variant: "success", message: "Successfully verified otp" }));
                  navigation.navigate("signin")
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  )
}

export default SignUpVerify