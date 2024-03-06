import React, { Fragment, useEffect, useState } from 'react';
import { Pressable, Text, View, KeyboardAvoidingView } from 'react-native'
import ScrollView from '../../../components/scrollview';
import { ContainedButton, TextButton, } from '../../../components/buttons';
import { colors, FontStyle } from '../../../theme';
import TextInput from "../../../components/textinput"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import CountryPicker from '../../../components/countrypicker';
import { countrylist } from '../../../utils/countrylist';
import { emailvalidate } from '../../../utils/emailvalidate';
import { passwordvalidaate } from '../../../utils/passwordvalidate';
import { setUserdata } from '../../../store/reducer/AuthReducer';
import { useDispatch, useSelector } from "react-redux"

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userdata } = useSelector(state => state?.Auth)
  const [isPassword, setIsPassword] = useState({
    password: true,
    confirmpassword: true
  })
  const [inputValue, setInputValue] = useState({
    name: "",
    country: "",
    phone_code: "",
    mobile: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const onTextInput = (event) => {
    setInputValue({ ...inputValue, [event?.name]: event?.value })
  };

  const data = {
    name: inputValue?.name,
    country: inputValue?.country,
    phone_code: countrylist.find((item) => item?.name === inputValue?.country)?.dial_code,
    mobile: inputValue?.mobile,
    email: inputValue?.email,
    password: inputValue?.password,
  }

  useEffect(() => {
    if (userdata) {
      setInputValue({
        ...inputValue,
        name: userdata?.name,
        country: userdata?.country,
        phone_code: userdata?.phone_code,
        mobile: userdata?.mobile,
        email: userdata?.email,
        password: userdata?.password,
        confirmpassword: userdata?.password,
      })
    }
  }, [userdata])

  return (
    <Fragment>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <ScrollView>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <View style={{ alignItems: "center", paddingVertical: 50, gap: 5, width: "100%" }}>
              <FontAwesome name={"user"} color={colors?.primary?.blueGrey?.[400]} size={80} />
              <Text style={{ ...FontStyle(colors?.common?.black, 22, 500), }}>Sign Up</Text>
              <Text style={{ ...FontStyle(colors?.primary?.blueGrey?.[400], 16, 400), }}>Enter your credentials to continue</Text>
            </View>
            <View style={{ gap: 15, width: "100%", maxWidth: 500, }}>
              <TextInput
                startIcon={() =>
                  <Pressable style={{}}>
                    <FontAwesome name={"user"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                  </Pressable>
                }
                placeholder={"Name"}
                value={inputValue?.name}
                onChangeText={(text) => { onTextInput({ name: "name", value: text }) }}
                autoComplete={"name"}
              />

              <CountryPicker
                inputValue={inputValue}
                onChangeText={(text) => { onTextInput({ name: "country", value: text }) }}
              />

              <View style={{ gap: 5 }}>
                <TextInput
                  startIcon={() =>
                    <Pressable style={{}}>
                      <FontAwesome name={"phone"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                    </Pressable>
                  }
                  placeholder={"Phone"}
                  value={inputValue?.mobile}
                  onChangeText={(text) => { onTextInput({ name: "mobile", value: text }) }}
                  keyboardType={"phone-pad"}
                  inputMode={"numeric"}
                  maxLength={countrylist.find((item) => item?.name === inputValue?.country)?.lenght || 10}
                />
                {inputValue?.mobile && inputValue?.mobile?.length !== (countrylist.find((item) => item?.name === inputValue?.country)?.lenght || 10) &&
                  <Text style={{ ...FontStyle(colors?.error?.light, 14, 400) }}>Please enter {countrylist.find((item) => item?.name === inputValue?.country)?.lenght || 10} digit phone number</Text>
                }
              </View>

              <View style={{ gap: 5 }}>
                <TextInput
                  startIcon={() =>
                    <Pressable style={{}}>
                      <MaterialCommunityIcons name={"email"} color={colors?.primary?.blueGrey?.[400]} size={20} />
                    </Pressable>
                  }
                  placeholder={"email"}
                  value={inputValue?.email}
                  onChangeText={(text) => { onTextInput({ name: "email", value: text }) }}
                  keyboardType={"email-address"}
                  inputMode={"email"}
                  autoComplete={"email"}
                />
                {inputValue?.email && emailvalidate(inputValue?.email) &&
                  <Text style={{ ...FontStyle(colors?.error?.light, 14, 400) }}>Please enter valid email</Text>
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
                  title={"Sign Up"}
                  disabled={(
                    (!inputValue?.name) ||
                    (!inputValue?.country) ||
                    (!inputValue?.mobile) ||
                    (!inputValue?.email) ||
                    (!inputValue?.password || passwordvalidaate(inputValue?.password)) ||
                    (!inputValue?.confirmpassword || inputValue?.password !== inputValue?.confirmpassword)
                  )}
                  color={colors?.primary?.dark}
                  onPress={(event) => { dispatch(setUserdata({ userdata: data })); navigation.navigate("signup/verify") }}
                />

                <View style={{ paddingVertical: 15, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ ...FontStyle(colors?.common?.black, 14, 500) }}>Already have a account ? {" "}</Text>
                  <Text onPress={() => { navigation?.goBack() }} style={{ ...FontStyle(colors?.primary?.dark, 14, 500), textTransform: "uppercase" }}>Sign In</Text>
                </View>
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  )
}

export default SignUp;