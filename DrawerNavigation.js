
import { createDrawerNavigator } from '@react-navigation/drawer';


import Trending from './Screens/Trending';
import Liked from './Screens/Liked';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {


  return (
        <Drawer.Navigator initialRouteName='Trending'>
          <Drawer.Screen name="Trending" component={Trending} />
          <Drawer.Screen name="Liked" component={Liked} />
        </Drawer.Navigator>
     
  )
}