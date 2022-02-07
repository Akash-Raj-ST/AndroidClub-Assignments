import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from './screens/Home';
import Replenish from "./screens/Replenish";
import Transfer from "./screens/Transfer";
import Details from "./screens/Details";


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };

const Stack = createNativeStackNavigator()

export default function Navigation(){
    return(
        <NavigationContainer
            theme={MyTheme}
        >
            <Stack.Navigator 
                initialRouteName="Home"  
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Transfer" component={Transfer}/>
                <Stack.Screen name="Replenish" component={Replenish}/>
                <Stack.Screen name="Details" component={Details}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}