import Navigation from "./Navigation";
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    agencyFB: require("./assets/fonts/agencyFB.ttf"),
    agencyFBBold: require("./assets/fonts/agencyFBBold.ttf"),
  });
  
  if (!loaded) {
    return null;
  }


  return <Navigation />;
}