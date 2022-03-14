import { View, Text, Button } from 'react-native'
import React from 'react'

import { styles } from '../components/Style'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {

  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Text>Profile Page!!!</Text>
      <Button
         title='Home'
         onPress={()=>navigation.navigate("Home")}
      />
      <Button
         title='Feed'
         onPress={()=>navigation.navigate("Feed")}
      />
    </View>
  )
}