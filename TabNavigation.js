
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Account from './Screens/Account';
import Settings from './Screens/Settings';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {


  return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Account" component={Account} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
     
  )
}