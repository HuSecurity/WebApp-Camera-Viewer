import styled from 'styled-components';
import {View} from "react-native"; 

const StatusBarHeight = Constants.statusBarHeight;

// Colours
export const Colours = {
    primary: 'affffffff',
    secondary: "#E5E7EB",
    teritary:  "#1F2937", 
    darklight: "#9CA3AF",
    brand: "#6d2BD9",
    green: "#10B981",
    red: "#EF4444",
    
};


const {primary, secondary, teritary, darklight, brand, green, red} = Colours;

export const StyledContainer = styled.view({flex: 1, padding: "25px", "padding-top": `$(StatusBarHeight + 10)px`,
    "background-colour": `${primary}`})


export const InnerContainer = styled.view({
    flex: 1,
    width: "100%",
    "align-items": "center"})

export cosnt PageLogs = Styled.