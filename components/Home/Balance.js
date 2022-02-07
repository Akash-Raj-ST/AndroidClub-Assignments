import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import AgencyText from '../AgencyText';

export default function Balance(props) {
  return (
    <View style={styles.container}>
      <AgencyText styles={styles.text} weight="bold">BALANCE</AgencyText>
      <AgencyText styles={styles.amount} weight="bold">₹ {props.balance}</AgencyText>
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
        marginVertical:10,
        color:"white"
    }
})
