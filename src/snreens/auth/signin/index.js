import React, { Fragment, useId, useState } from 'react';
import { Pressable, Text, View, KeyboardAvoidingView } from 'react-native'
import ScrollView from '../../../components/scrollview';
import { ContainedButton, } from '../../../components/buttons';
import { FontStyle, colors } from '../../../theme';
import TextInput from "../../../components/textinput"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import { AsyncStorageManager } from '../../../utils/AsyncStorageManager';
import { useDispatch } from "react-redux"
import { setIsLogin } from '../../../store/reducer/AuthReducer';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch()
  const randomid = useId()
  const [isPassword, setIsPassword] = useState(true)
  const [inputValue, setInputValue] = useState({
    username: "",
    password: ""
  });

  const onTextInput = (event) => {
    setInputValue({ ...inputValue, [event?.name]: event?.value })
  };

  const onLogin = async () => {
    await AsyncStorageManager.setToken(randomid)
    dispatch(setIsLogin({ isLogin: null }))
  }

  return (
    <Fragment>
      <KeyboardAvoidingView style={{ flex: 1, }} behavior="padding" enabled>
        <ScrollView>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <View style={{ alignItems: "center", paddingVertical: 50, gap: 5, width: "100%" }}>
              <FontAwesome name={"user"} color={colors?.primary?.blueGrey?.[400]} size={80} />
              <Text style={{ color: colors?.common?.black, fontSize: 22, fontFamily: "Roboto-Medium" }}>Sign In</Text>
              <Text style={{ color: colors?.primary?.blueGrey?.[400], fontSize: 16, fontFamily: "Roboto-Regular" }}>Enter your credentials to continue</Text>
            </View>
            <View style={{ gap: 15, width: "100%", maxWidth: 500, }}>
              <TextInput
                startIcon={() =>
                  <Pressable style={{}}>
                    <FontAwesome name={"user"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                  </Pressable>
                }
                placeholder={"Username"}
                value={inputValue?.username}
                onChangeText={(text) => { onTextInput({ name: "username", value: text }) }}
                keyboardType={"email-address"}
                inputMode={"email"}
                autoComplete={"username"}
              />
              <TextInput
                startIcon={() =>
                  <Pressable style={{}}>
                    <FontAwesome name={"lock"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                  </Pressable>
                }
                endIcon={() =>
                  <Pressable onPress={() => { setIsPassword(!isPassword) }} style={{}}>
                    <Ionicons name={isPassword ? "eye-off" : "eye"} color={colors?.primary?.blueGrey?.[500]} size={20} />
                  </Pressable>
                }
                placeholder={"Password"}
                value={inputValue?.password}
                onChangeText={(text) => { onTextInput({ name: "password", value: text }) }}
                secureTextEntry={isPassword}
                keyboardType={"visible-password"}
              />

              <Text onPress={() => { navigation?.navigate("find/user") }} style={{ color: colors?.common?.black, textAlign: "right", fontFamily: "Roboto-Medium" }}>Forgot Password?</Text>

              <View>
                <ContainedButton
                  title={"Sign In"}
                  disabled={(
                    !inputValue?.username || !inputValue?.password
                  )}
                  color={colors?.primary?.main}
                  onPress={(event) => { onLogin() }}
                />
                <View style={{ paddingVertical: 15, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ ...FontStyle(colors?.common?.black, 14, 500) }}>Don't have an account ? {" "}</Text>
                  <Text onPress={() => { navigation?.navigate("signup") }} style={{ ...FontStyle(colors?.primary?.dark, 14, 500), textTransform: "uppercase" }}>Sign Up</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  )
}

export default SignIn