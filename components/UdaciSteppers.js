import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, gray, purple } from '../utils/colors'

export default function UdaciSteppers ({ max, unit, step, value, onIncrement, onDecrement }) {
  return (
    <View style={[styles.row, { justifyContent: 'space-between' }]}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity 
          style={[styles.andoirdBtn, {borderTopRightRadius: 0, borderBottomLeftRadius: 0}]}
          onPress={onDecrement}
        >
          <FontAwesome name='minus' size={30} color={white} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.andoirdBtn, {borderTopRightRadius: 0, borderBottomLeftRadius: 0}]}
          onPress={onIncrement}
        >
          <FontAwesome name='plus' size={30} color={white} />
        </TouchableOpacity>
      </View>
      <View style={styles.metricCounter}>
        <Text
        style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text
          style={{fontSize: 18, color: gray}}
        >{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  andoirdBtn: {
    margin: 5,
    backgroundColor: purple,
    padding:10,
    borderRadius: 2,
  }
})