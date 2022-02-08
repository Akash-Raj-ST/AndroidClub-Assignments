import React from 'react';
import { View, Text, FlatList,Image} from 'react-native';
import { Divider } from 'react-native-elements';

import AgencyText from "../AgencyText"

export default function Transactions() {

    var sum=0;

    const data = [
        {   id:1,
            logo:require("../../assets/images/bank.png"),
            name:"Macy's",
            bank:"Supermarktes",
            amount:-123.21,
        },
        {   id:2,
            logo:require("../../assets/images/bank.png"),
            name:"Shawn Kim",
            bank:"Chase Bank",
            amount:1250,
        },
        {   id:3,
            logo:require("../../assets/images/bank.png"),
            name:"Oscar Machiavelli",
            bank:"Bank of America",
            amount:-2300,
        },
        {   id:4,
            logo:require("../../assets/images/bank.png"),
            name:"Akash Raj",
            bank:"Indian Bank",
            amount:-3200,
        },
        {   id:5,
            logo:require("../../assets/images/bank.png"),
            name:"Macy's",
            bank:"Supermarktes",
            amount:-123.21,
        },
        {   id:6,
            logo:require("../../assets/images/bank.png"),
            name:"Shawn Kim",
            bank:"Chase Bank",
            amount:1250,
        },
        {   id:7,
            logo:require("../../assets/images/bank.png"),
            name:"Oscar Machiavelli",
            bank:"Bank of America",
            amount:-2300,
        },
        {   id:8,
            logo:require("../../assets/images/bank.png"),
            name:"Akash Raj",
            bank:"Indian Bank",
            amount:-3200,
        },
    ]

    data.forEach((d)=>{
        sum += d.amount;
    })

    return (
        <View
            style={{
                marginVertical:10,
                flex:0.7,
                paddingBottom:25
            }}
        >
            <Header total={sum}/>
            <Divider width={2} color='#eee' style={{marginHorizontal:10}}/>
            <TransactionsData data={data}/>
        </View>
    );
}

function Header(props){
    return(
        <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:20,
                marginVertical:5,

            }}
        >
            <Text style={{color:"grey",}}>Today</Text>
            <AgencyText 
                styles={{fontSize:22}}
                weight="bold"
            >
            {props.total>0?"+":"-"} ₹ {props.total>0?props.total:props.total*-1}</AgencyText>
        </View>
    )
}


function Item(props){

    return(
        <View>
        
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    width:"100%",
                    paddingHorizontal:20                
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        width:"75%"
                    }}
                >
                
                    <Image 
                        source={props.data.logo}
                        style={{
                            width:50,
                            height:50,
                            marginRight:10,
                        }}
                    />

                    <View>
                        <Text
                            style={{
                                fontWeight:'bold',
                                fontSize:17,
                                paddingVertical:2,
                            }}
                        >{props.data.name}</Text>
                        <Text
                            style={{
                                color:'grey',
                                fontSize:12
                            }}
                        >{props.data.bank}</Text>
                    </View>
                </View>

                <AgencyText
                    styles={{
                        fontSize:17,
                        color:props.data.amount>0?"#A1AC6D":"black",
                    }}
                    weight='bold'
                >{props.data.amount>0?"+":"-"} ₹ {props.data.amount>0?props.data.amount:props.data.amount*-1}</AgencyText>
            </View>
            <Divider style={{marginHorizontal:10}} color="#eee"/>
        </View>
    )
}

function TransactionsData(props){
    return(
        <View> 
            <FlatList
                data={props.data}
                renderItem={({item})=>(<Item data={item}/>)}
                keyExtractor={(item)=>item.id}
                
                style={{
                    // height:"65%",
                }}
            />
        </View>
    )
}
