import React, { useState } from 'react';
import { Pressable, Text, View, KeyboardAvoidingView } from 'react-native'
import ScrollView from '../../../components/scrollview';
import { ContainedButton, } from '../../../components/buttons';
import { colors, FontStyle } from '../../../theme';
import TextInput from "../../../components/textinput"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import { passwordvalidaate } from '../../../utils/passwordvalidate';
import { useDispatch } from "react-redux"
import { setSnackbar } from '../../../store/reducer/SnackbarReducer';

const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState({
    password: true,
    confirmpassword: true
  })
  const [inputValue, setInputValue] = useState({
    password: "",
    confirmpassword: ""
  });

  const onTextInput = (event) => {
    setInputValue({ ...inputValue, [event?.name]: event?.value })
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
          <View style={{ alignItems: "center", paddingVertical: 50, gap: 5, width: "100%" }}>
            <FontAwesome name={"user"} color={colors?.primary?.blueGrey?.[400]} size={80} />
            <Text style={{ ...FontStyle(colors?.common?.black, 22, 500), }}>Sign Up</Text>
            <Text style={{ ...FontStyle(colors?.primary?.blueGrey?.[400], 16, 400), }}>Enter your credentials to continue</Text>
          </View>
          <View style={{ gap: 15, width: "100%", maxWidth: 500, }}>
            <View style={{ gap: 5 }}>
              <TextInput
                startIcon={() =>
                  <Pressable style={{}}>
                    <FontAwesome name={"lock"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                  </Pressable>
                }
                endIcon={() =>
                  <Pressable onPress={() => { setIsPassword({ ...isPassword, password: !isPassword?.password }) }} style={{}}>
                    <Ionicons name={isPassword ? "eye-off" : "eye"} color={colors?.primary?.blueGrey?.[500]} size={20} />
                  </Pressable>
                }
                placeholder={"Password"}
                value={inputValue?.password}
                onChangeText={(text) => { onTextInput({ name: "password", value: text }) }}
                secureTextEntry={isPassword?.password}
                keyboardType={"visible-password"}
              />
              {inputValue?.password && passwordvalidaate(inputValue?.password) &&
                <Text style={{ ...FontStyle(colors?.error?.light, 14, 400) }}>* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</Text>
              }
            </View>

            <View style={{ gap: 5 }}>
              <TextInput
                startIcon={() =>
                  <Pressable style={{}}>
                    <FontAwesome name={"lock"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                  </Pressable>
                }
                endIcon={() =>
                  <Pressable onPress={() => { setIsPassword({ ...isPassword, confirmpassword: !isPassword?.confirmpassword }) }} style={{}}>
                    <Ionicons name={isPassword ? "eye-off" : "eye"} color={colors?.primary?.blueGrey?.[500]} size={20} />
                  </Pressable>
                }
                placeholder={"Confirm Password"}
                value={inputValue?.confirmpassword}
                onChangeText={(text) => { onTextInput({ name: "confirmpassword", value: text }) }}
                secureTextEntry={isPassword?.confirmpassword}
                keyboardType={"visible-password"}
                autoComplete={"new-password"}
              />
              {inputValue?.confirmpassword && inputValue?.password !== inputValue?.confirmpassword &&
                <Text style={{ ...FontStyle(colors?.error?.light, 14, 400) }}>Password not match</Text>
              }
            </View>

            <View>
              <ContainedButton
                title={"Forgot Password"}
                disabled={(
                  (!inputValue?.password || passwordvalidaate(inputValue?.password)) ||
                  (!inputValue?.confirmpassword || inputValue?.password !== inputValue?.confirmpassword)
                )}
                color={colors?.primary?.dark}
                onPress={(event) => {
                  dispatch(setSnackbar({ visible: true, variant: "success", message: "Successfully forgot password" }));
                  navigation.navigate("signin")
                }}
              />

              <View style={{ paddingVertical: 15, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
                <Ionicons name={"chevron-back"} size={20} color={colors?.primary?.dark} />
                <Text onPress={() => { navigation?.push("signin") }} style={{ ...FontStyle(colors?.primary?.dark, 14, 500), textTransform: "uppercase", }}>{" "}Back to sign in</Text>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ForgotPassword