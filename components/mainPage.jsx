import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View,Text,StyleSheet,Button,BackHandler } from "react-native";
// import TrackPlayer from 'react-native-track-player';
// import BottomNavigator from "./bottomtabnavigator";

export default function MainPage({navigation}){

    console.log("This is main page");

    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",()=>{
            console.log("back button is pressed in home page");
            BackHandler.exitApp();
            return true;
        });
    },[]);


    return(
        <View style={styles.maincontainer}>
        {console.log("This is inside main page")}
            <Text style={styles.maincontainertext}>This is main page</Text>
            {/* <BottomNavigator /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "black",
        flex:1,
    },
    maincontainertext:{
        color:"white",
    }
})