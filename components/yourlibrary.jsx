import { View,Text,StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";

export default function YourLibrary({navigation}){

    console.log("inside local");

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            console.log("inside local backhandler");
            console.log(navigation.getState()['history']);
            // console.log(navigation.getState()['history'][1]["key"].split("-")[0]);
            console.log(navigation.getState()['history'].length)
            let backstring;
            if(navigation.getState()['history'].length === 2){
                backstring = navigation.getState()['history'][1]["key"].split("-")[0];
            }else{
                backstring = navigation.getState()['history'][0]["key"].split("-")[0];
            }
            if(navigation.isFocused()){
                if(navigation.canGoBack()){
                    navigation.goBack();
                    return true;
                }
            }
            if(!navigation.isFocused()){
                // if(navigation.getState()['history'][1]["key"] === "Search-Zw90Pnd8288cZL5RVLII1"){
                // if(navigation.canGoBack()){
                //     BackHandler.exitApp();
                //     return true;
                // }
                // }
                // else{
                //     if(navigation.canGoBack()){
                //         BackHandler.exitApp();
                //         return true;
                //     }
                // }
                if(backstring === "Search"){
                    if(navigation.canGoBack()){
                        navigation.goBack();
                        return true;
                    }
                }else if(backstring === "Home"){
                if(navigation.canGoBack()){
                    BackHandler.exitApp();
                    return true;
                }
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