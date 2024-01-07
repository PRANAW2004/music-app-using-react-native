import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View,Text,StyleSheet,Button,BackHandler } from "react-native";


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
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#212529",
        flex:1,
    },
    maincontainertext:{
        color:"white",
    }
})