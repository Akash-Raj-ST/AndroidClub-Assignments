import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Balance(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BALANCE</Text>
      <Text style={styles.amount}>₹ {props.balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding:15,
    },
    text:{
        fontSize: 15,
        color:'#6e6b6a',
        fontWeight:'bold',
    },
    amount:{
        fontSize: 40,
        color:'white',
        marginVertical:10,
        fontWeight:'bold',
    }
})
