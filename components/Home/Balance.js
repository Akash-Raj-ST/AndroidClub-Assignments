import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useContext } from 'react';

import AgencyText from '../AgencyText';

import {ThemeContext} from '../../Context';

export default function Balance(props) {
  const Theme = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <AgencyText styles={[styles.text,{color:Theme.text}]} weight="bold">BALANCE</AgencyText>
      <AgencyText styles={[styles.amount,{color:Theme.text}]} weight="bold">₹ {props.balance}</AgencyText>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding:15,
    },
    text:{
        fontSize: 15,
        fontWeight:'bold',
    },
    amount:{
        fontSize: 40,
        marginVertical:10,
    }
})
