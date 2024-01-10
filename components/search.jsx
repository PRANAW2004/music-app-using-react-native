import { View,Text,StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";

export default function Search({navigation}){

    console.log("search");

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
        }
            )
    },[])

    



    return(
        <View style={styles.searchcontainer}>
            <Text style={styles.searchtext}>This is the search page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchcontainer: {
        display:"flex",
        flex:1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    searchtext: {
        color: "white",
    }
})