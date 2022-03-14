import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../components/Style'

export default function Trending({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Trending Page!!!</Text>
      <Button
        onPress={() => navigation.navigate('Liked')}
        title="Go to Liked"
      />
    </View>
  )
}