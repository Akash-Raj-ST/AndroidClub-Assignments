import { View, Text, Button } from 'react-native'
import React from 'react'

import { styles } from '../components/Style'
import { useNavigation } from '@react-navigation/native'

import TabNavigation from "../TabNavigation";

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Text>Home Page!!!</Text>
  
      <Button
        title='Feed'
        onPress={()=>navigation.navigate("Feed")}
      />
      <Button
        title='Profile'
        onPress={()=>navigation.navigate("Profile")}
      />
      
    </View>
  )
}
