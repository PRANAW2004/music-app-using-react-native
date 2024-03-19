import { View,Text,BackHandler } from "react-native";
import { useEffect } from "react";
export default function English({navigation}){
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            if(navigation.isFocused()){
                if(navigation.canGoBack()){
                    navigation.goBack();
                    return true;
                }
            }
            if(!navigation.isFocused()){
                if(navigation.canGoBack()){
                    BackHandler.exitApp();
                    return true;
                }
            }
        })
    },[])
    return(
        <View>
            <Text>This is the English songs page</Text>
        </View>
    )
}