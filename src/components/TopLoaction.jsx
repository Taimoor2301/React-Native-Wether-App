import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function TopLoaction() {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.loactionHeading}>
        <Entypo name="location-pin" size={33} color="#046AF1" />
        Location
      </Text>
      <Text style={styles.locationSub}>Kotli Azad Kashmir</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: 50,
    paddingBottom: 10
  },
  loactionHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4476F0',
    textAlign: 'center'
  },
  locationSub: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center'
  }
})
