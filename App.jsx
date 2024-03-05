import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import MainWeather from './src/components/MainWeather'
import WhiteBox from './src/components/WhiteBox'
import TopLoaction from './src/components/TopLoaction'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopLoaction />
      <MainWeather />
      <WhiteBox />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start'
  }
})
