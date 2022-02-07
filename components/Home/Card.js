import { View, Text, StyleSheet,Image } from 'react-native';
import React from 'react';

import AgencyText from '../AgencyText';

export default function Card(props) {
  return (
    <View style={styles.container}>
        <View>
        </View>
        <View
            style={{
                height:"80%",
            }}
        >
            <AgencyText 
                styles={{
                    fontSize: 35,
                    textAlign:'center',
                    color:"black"
                }}
                weight="bold"
            >{props.cardNo}</AgencyText>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    paddingHorizontal:30,
                    alignItems:'center',
                    marginVertical:10,
                }}
            >
                <Text style={{fontSize:20,}}>{props.expiry}</Text>
                <Image source={require('../../assets/images/mastercard.png')} />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height:150,
        borderRadius:20,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#e4c3a1',
        marginVertical:10,

        flexDirection:'column',
        justifyContent:'space-between',
    }
})
