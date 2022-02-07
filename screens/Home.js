import { View, Text, StyleSheet, SafeAreaView,Platform, StatusBar, Modal } from 'react-native';
import React, { useState, createContext} from 'react';

import Balance from '../components/Home/Balance';
import Card from '../components/Home/Card';
import Info from '../components/Home/Info';

// import LottieView from 'lottie-react-native';

export default function Home() {

  return (
    
      <SafeAreaView style={styles.container}>
        <Balance balance="1,235.15"/>
        <Card cardNo="1234  5678  9012  3456" expiry="12/20" logo=""/>
        <Info/>
      </SafeAreaView>

  );
}


const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'black',
        flex:1,
    }
});
