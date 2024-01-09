import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View,Text,StyleSheet,Button,BackHandler } from "react-native";
import TrackPlayer from 'react-native-track-player';
// import BottomNavigator from "./bottomtabnavigator";

export default function MainPage({navigation}){



    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",()=>{
            BackHandler.exitApp();
            return true;
        });
    },[]);


    return(
        <View style={styles.maincontainer}>
            <Text style={styles.maincontainertext}>This is main page</Text>
            <Button title="Logout" onPress={()=>{AsyncStorage.setItem("check",JSON.stringify(true));navigation.navigate("Login")}}></Button>
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