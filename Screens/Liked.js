import { View, Text, Button } from 'react-native'
import React from 'react'

import { styles } from '../components/Style'

export default function Liked({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Liked Page!!!</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  )
}