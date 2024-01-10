import { View,Text,StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";

export default function YourLibrary({navigation}){

    console.log("inside local");

    // useEffect(() => {
    //     BackHandler.addEventListener("hardwareBackPress", () => {
    //         console.log("back button is pressed in local");
    //         AsyncStorage.setItem("local",JSON.stringify("local"));
    //         AsyncStorage.setItem("homeback",JSON.stringify(true));
    //         navigation.navigate("Home");
    //         return true;
    //     })
    // },[])

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
        <View style={styles.localcontainer}>
            <Text style={styles.localtext}>This is Your Library screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    localcontainer:{ 
        backgroundColor: "black",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        flex: 1

    },
    localtext:{
        color: "white",
    }
})