import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'
import colors from '../constants/colors'

export default function WhiteBox() {
  const IconSize = 25
  const items = [
    {
      heading: '30%',
      text: 'Preception',
      Icon: () => (
        <FontAwesome name="umbrella" size={IconSize} color={colors.Honey} />
      )
    },
    {
      heading: '20%',
      text: 'Humidity',
      Icon: () => (
        <FontAwesome6 name="droplet" size={IconSize} color={colors.Honey} />
      )
    },
    {
      heading: '12km/h',
      text: 'Wind Speed',
      Icon: () => (
        <FontAwesome6 name="wind" size={IconSize} color={colors.Honey} />
      )
    }
  ]
  return (
    <View style={styles.mainBox}>
      <FlatList
        horizontal={true}
        data={items}
        renderItem={({ item }) => (
          <Item heading={item.heading} Icon={item.Icon} text={item.text} />
        )}
        contentContainerStyle={{
          justifyContent: 'space-between',
          gap: 5,
          width: 270
        }}
      />
    </View>
  )
}

// eslint-disable-next-line react/prop-types
const Item = ({ Icon, heading, text }) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert(`${heading} was pressed`)}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          paddingVertical: 5
        }}
      >
        <View style={{ alignItems: 'center' }}>{Icon()}</View>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: colors.Honey,
              textAlign: 'center'
            }}
          >
            {heading}
          </Text>
          <Text
            style={{ fontSize: 10, color: colors.blueOne, textAlign: 'center' }}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginVertical: 20,
    paddingVertical: 10,
    width: 300,
    alignItems: 'center'
  }
})
