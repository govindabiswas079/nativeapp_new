import React, { Fragment, useEffect, useState } from 'react';
import { Pressable, Text, View, KeyboardAvoidingView } from 'react-native'
import ScrollView from '../../../components/scrollview';
import { ContainedButton, } from '../../../components/buttons';
import { FontStyle, colors } from '../../../theme';
import TextInput from "../../../components/textinput"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import { setSnackbar } from '../../../store/reducer/SnackbarReducer';
import { useDispatch, useSelector } from 'react-redux';
import { setUserdata } from '../../../store/reducer/AuthReducer';

const FindUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userdata } = useSelector(state => state?.Auth)
  const [inputValue, setInputValue] = useState({
    username: "",
  });

  const onTextInput = (event) => {
    setInputValue({ ...inputValue, [event?.name]: event.value })
  };

  useEffect(() => {
    if (userdata) {
      setInputValue({ ...inputValue, username: userdata?.username })
    }
  }, [userdata])

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
                autoComplete={"email"}
              />

              <View>
                <ContainedButton
                  title={"Send OTP"}
                  textTransform={"uppercase"}
                  disabled={(
                    (!inputValue?.username)
                  )}
                  color={colors?.primary?.main}
                  onPress={(event) => {
                    dispatch(setUserdata({ userdata: inputValue }))
                    dispatch(setSnackbar({ visible: true, variant: "success", message: "Successfully sent otp" }));
                    navigation.navigate("user/verify")
                  }}

                />
                <View style={{ paddingVertical: 15, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name={"chevron-back"} size={20} color={colors?.primary?.dark} />
                  <Text onPress={() => { navigation.navigate("signin") }} style={{ ...FontStyle(colors?.primary?.dark, 14, 500), textTransform: "uppercase", }}>{" "}Back to sign in</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  )
}

export default FindUser