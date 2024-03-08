// @ts-ignore
import React from 'react'
import { View, Text, StatusBar, Button, Share, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ScrollView from '../../../components/scrollview'
import { colors } from '../../../theme'
import Clipboard from '@react-native-clipboard/clipboard';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { solarizedDark, monoBlue, schoolBook } from 'react-syntax-highlighter/styles/prism';
import { atelierCaveDark } from 'react-syntax-highlighter/styles/hljs';
import { codesyntaxhilight } from '../../../utils/codehilight';

const Dashboard = () => {
  const navigation = useNavigation();
  const imageShare = require('../../../asset/image/istockphoto.jpg');

  const copyToClipboard = () => {
    Clipboard.setString(codesyntaxhilight);
    console.log("Code copied to clipboard!")
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Share via',
        message:
          `React Native | A framework for building native apps using React - 
        ${codesyntaxhilight}
        `,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.background?.main} />
      <View style={{ gap: 10 }}>
        <Button onPress={() => { navigation.navigate("app/flatlist") }} title='Flat List' />
        <Button onPress={() => { navigation.navigate("app/sectionlist") }} title='Section List' />

        <Button onPress={() => { copyToClipboard() }} title='Copy Code' />
        <Button onPress={() => { onShare() }} title='Share Code' />

        {/* <Text style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: `<h1>prem</h1>` }} >
          {`
          import React from 'react'
          import { View, Text, StatusBar, Button, } from 'react-native'
          import { useNavigation } from '@react-navigation/native';
          import ScrollView from '../../../components/scrollview'
          import { colors } from '../../../theme'
          
          const Dashboard = () => {
            const navigation = useNavigation();
          
            return (
              <ScrollView>
                <StatusBar barStyle={"dark-content"} backgroundColor={colors.background?.main} />
                <View style={{ gap: 10 }}>
                  <Button onPress={() => { navigation.navigate("app/flatlist") }} title='Flat List' />
                  <Button onPress={() => { navigation.navigate("app/sectionlist") }} title='Section List' />          
                </View>
              </ScrollView>
            )
          }
          
          export default Dashboard
          `}
        </Text> */}

        <SyntaxHighlighter language="javascript" style={monoBlue} highlighter={"prism" || "hljs"}>
          {/* {codeString} */}
          {codesyntaxhilight}
        </SyntaxHighlighter>

      </View>
    </ScrollView>
  )
}

export default Dashboard