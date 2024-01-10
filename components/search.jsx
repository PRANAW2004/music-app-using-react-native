import { View,Text,StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";

export default function Search({navigation}){

    console.log("search");

    useEffect(() => {
        
        BackHandler.addEventListener("hardwareBackPress", () => {
            console.log("inside search backhandler");
            let a =navigation.getState();
            // console.log(navigation.getState()['history']);
            // console.log(navigation.getState()['history'][1]["key"].split("-")[0]);
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
                if(backstring === "Local"){
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
        }}
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