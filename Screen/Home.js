import { View, Text,Image, StyleSheet,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'

export default function Home() {

    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);

    const api_key = 'd1b05a1527ce4bae9916d2335cc82efc';

    var url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${api_key}`

    const getArticlesFromApi = async () => {
        console.log("fetching...");
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
        setData(json.articles);
    };
    useEffect(() => {
        getArticlesFromApi().then(()=>{setLoading(false);});
    },[])
    
    if(loading){
        return(
            <View style={styles.center}>
                <Text>loading...</Text>
            </View>
        )
    }

    return (
            <View>    
                <ScrollView scrollEnabled={true} >
                    {data.map((source,i)=>(
                        <Article key={i} data={source}/>
                    ))}
                </ScrollView>
            </View>
    )
}


function Article(props){

    return(
        <View style={styles.container}>
            <Image 
                source={{uri:props.data.urlToImage}}
                style={styles.img}
            />

            <Text style={styles.title}>{props.data.title}</Text>

            <Text style={styles.content}>{props.data.description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    img:{
        // width:"100%",
        height:250
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        padding:5,
    },
    content:{
        fontSize:16,
        padding:5,
    },
   
    
})