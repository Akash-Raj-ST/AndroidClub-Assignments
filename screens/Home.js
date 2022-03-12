import { View, Text, StyleSheet, SafeAreaView,Platform, StatusBar, Modal } from 'react-native';
import React, { useState, createContext, useContext} from 'react';

import Balance from '../components/Home/Balance';
import Card from '../components/Home/Card';
import Info from '../components/Home/Info';
import BottomTabs from '../components/BottomTabs'

// import LottieView from 'lottie-react-native';
import {ThemeContext} from '../Context';

export default function Home() {
  const Theme = useContext(ThemeContext);

  return (
    
      <SafeAreaView style={[styles.container,{backgroundColor: Theme.background,}]}>
        <Balance balance="1,235.15"/>
        <Card cardNo="1234  5678  9012  3456" expiry="12 / 20" logo=""/>
        <Info/>
        <BottomTabs/>
      </SafeAreaView>

  );
}


const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1,
    }
});
