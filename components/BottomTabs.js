import React,{useState} from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTabs() {
    const [activeTab,setActiveTab] = useState("wallet");

    const tabs = [
        {
            name:"all",
            icon:<AntDesign name='appstore-o' size={25} color="grey"/>,
            selectedIcon:<AntDesign name='appstore-o' size={25} color="#E4C3A1"/>,  
        },
        {
            name:"basket",
            icon:<Ionicons name='basket-outline' size={25} color="grey"/>,
            selectedIcon:<Ionicons name='basket-outline' size={25} color="#E4C3A1"/>,
        },
        {
            name:"favourites",
            icon:<FontAwesome name="bookmark-o" size={25} color="grey"/>,
            selectedIcon:<FontAwesome name="bookmark-o" size={25} color="#E4C3A1"/>,
        },
        {
            name:"wallet",
            icon:<AntDesign name='wallet' size={25} color="grey"/>,
            selectedIcon:<AntDesign name='wallet' size={25} color="#E4C3A1"/>,
        }
    ]

    return (
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-around',
                borderTopLeftRadius:15,
                borderTopRightRadius:15,
                backgroundColor:'black',
                marginTop:'auto',
            }}
        >
            {tabs.map((tab,index)=>(
                <TouchableOpacity
                    key={index}
                    onPress={()=>{setActiveTab(tab.name)}}
                    style={{
                        margin:10
                    }}
                >
                    {tab.name==activeTab?tab.selectedIcon:tab.icon}
                </TouchableOpacity>
            ))}
        </View>
    );
}


