import React,{useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import BottomTabs from '../BottomTabs';
import Transactions from './Transactions';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import LottieView from 'lottie-react-native';


export default function Info() {
  return (
    <View
        style={{
            backgroundColor:'white',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            flex:1,
            flexDirection:'column',
            justifyContent:'space-between',
        }}
    >
        <Options />
        <Transactions/>
        <BottomTabs/>
    </View>
  );
}

function Options(){
    const navigation = useNavigation();

    const [loading,setLoading]  =useState(false);


    const navigate = (page)=>{
        setTimeout(()=>{
            setLoading(false);
            navigation.navigate(page);
        },3000)
    }

    const options = [
        //makesure to add navigation to the component
        {
            name:"Transfer",
            icon:<Feather name="send" size={30} />,
        },
        {
            name:"Replenish",
            icon:<Ionicons name="add-circle-outline" size={30} />,
        },{
            name:"Details",
            icon:<AntDesign name="creditcard" size={30} />,
        }
    ]

    if(loading) return <Loading/>

    return(
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center',
                width:"90%",
                alignSelf:'center',
                borderWidth:2,
                borderRadius:10,
                marginVertical:10,
                borderColor:'#eee',            
            }}
        >

            {options.map((option,index)=>(
                <TouchableOpacity
                    key={index}
                    style={{
                        margin:10, 
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                    onPress={()=>{
                        setLoading(true);
                        navigate(option.name);
                        
                    }}
                >
                    {option.icon}
                    <Text style={{fontWeight:'bold'}}>{option.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

function Loading(){
    return(
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={true}
            >
               <LottieView source={require("../../assets/animation/loading.json")} autoPlay loop/> 
            </Modal>
        </View>
    )
}
