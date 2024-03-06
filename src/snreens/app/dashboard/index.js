import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import ScrollView from '../../../components/scrollview'
import { colors } from '../../../theme'

const Dashboard = () => {
  return (
    <ScrollView>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.background?.main} />
    </ScrollView>
  )
}

export default Dashboard