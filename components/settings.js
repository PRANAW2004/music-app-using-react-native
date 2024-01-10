import { View,Text,StyleSheet,Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";

export default function Settings({navigation}){

    console.log(navigation.isFocused());


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
            // if(navigation.canGoBack()){
            //     navigation.goBack();
            //     console.log("inside back handler settings");
            //     return true;
            // }else{
            //     BackHandler.exitApp();
            //     return true;
            // }   
            // navigation.goBack();
            // return true;
        })
    },[])

    AsyncStorage.setItem("homeback",JSON.stringify(true));


    return(
        <View style={styles.settingcontainer}>
            <Text style={styles.settingText}>This is a settings page</Text>
            <Button title="Logout" onPress={()=>{AsyncStorage.setItem("check",JSON.stringify(true));navigation.navigate("Login")}}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    settingcontainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"black",
    },
    settingText:{
        color:"white",
    }
})