import React from 'react'
import { View, Text, StatusBar, Button } from 'react-native'
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