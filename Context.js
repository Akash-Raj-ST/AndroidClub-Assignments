import {createContext } from "react";
import {Appearance} from "react-native"

const Theme = {
    dark:{
       background:"black",
       text:"white",
    },
    light:{
        background:"white",
        text:"black",
    },
}

export const ThemeContext = createContext(Theme);

export default function ThemeContextApi({children}){
    const theme = Appearance.getColorScheme()=="light"?Theme.light:Theme.dark;

    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}