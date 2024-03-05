import React from 'react'
import { View, Text, StyleSheet, Platform, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function MainWeather() {
  const styles = StyleSheet.create({
    mainBox: {
      overflow: 'hidden',
      borderRadius: 20,
      width: 300,
      height: 200,
      gap: 2,
      ...Platform.select({
        ios: {
          shadowColor: 'blue',
          shadowOffset: { height: 2, width: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 4
        },
        android: {
          elevation: 15,
          shadowColor: 'blue'
        }
      })
    },
    mainText: {
      fontSize: 35,
      color: 'white',
      fontWeight: '700',
      textAlign: 'center'
    },
    todayCondition: {
      color: 'white',
      fontSize: 14
    }
  })
  return (
    <View style={styles.mainBox}>
      <ImageBackground
        style={{
          width: 300,
          height: 200
        }}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/08/30/11/16/sunset-914148_1280.jpg'
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 20,
            width: 300,
            height: 200,
            backgroundColor: 'rgba(0,0,0,0.4)'
          }}
        >
          <Feather name="sun" size={60} color="white" />
          <Text style={styles.mainText}>
            22&deg;<Text style={{ fontSize: 20 }}>C</Text>
          </Text>
          <Text style={styles.todayCondition}>Mostly Clear</Text>
        </View>
      </ImageBackground>
    </View>
  )
}
