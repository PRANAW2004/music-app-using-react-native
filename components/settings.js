import { View,Text,StyleSheet,Button,Pressable,Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import { MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";


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
        })
    },[])

    AsyncStorage.setItem("homeback",JSON.stringify(true));

    function Data(){
        Alert.alert("Diagnostics","Version: 1.0.1\nAsynchronous Storage method\nSafe Login using Firebase")
    }
    function history1(){
        Alert.alert("Delete history","Are you sure you want to delete your listen history?",[
            {
              text: 'No',
            },
            {
                text: 'yes',
                onPress: () => {AsyncStorage.setItem("history",JSON.stringify("")),Alert.alert("History","History deleted")},
                style: 'cancel',
              },
          ])
    }

    function Logout(){
        Alert.alert("Logout","Are you sure you want to Logout?",[
            {
              text: 'No',
            },
            {
                text: 'yes',
                onPress: () => {AsyncStorage.setItem("check",JSON.stringify(true));AsyncStorage.removeItem("Login");navigation.navigate("Login"),Alert.alert("Logout","Account Logged out")},
                style: 'cancel',
              },
          ])
    }

    function About(){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        Alert.alert("Heafree","We provide songs to hear for free\n @ "+currentYear+" HearFree")
    }


    return(
        <View style={styles.settingcontainer}>
        <Text style={{color: "white",fontSize: 20,marginTop:20,marginLeft:10}}>
            About
        </Text> 
        <Pressable onPress={() => {About()}} style={{display:"flex",flexDirection:'row',marginBottom:20}}>
        <MaterialIcons name={'info-outline'} color={'grey'} style={{fontSize:20,marginTop: 20,marginLeft:10}} />
            <Text style={[styles.settingText,{marginTop:20,marginLeft:10}]}>About</Text>
        </Pressable>
        <Text style={{color: "white",fontSize: 20,marginTop:20,marginLeft:10}}>
            Data
        </Text> 
        <Pressable onPress={() => {Data()}} style={{display:"flex",flexDirection:'row'}}>
        <MaterialIcons name={'perm-device-information'} color={'grey'} style={{fontSize:20,marginTop: 20,marginLeft:10}} />
            <Text style={[styles.settingText,{marginTop:20,marginLeft:10}]}>Diagnostics</Text>
        </Pressable>
        <Pressable onPress={() => {history1()}} style={{display:"flex",flexDirection:'row',marginBottom:20}}>
        <MaterialCommunityIcons name={'trash-can-outline'} color={'grey'} style={{fontSize:20,marginTop: 20,marginLeft:10}} />
            <Text style={[styles.settingText,{marginTop:20,marginLeft:10}]}>clear History</Text>
        </Pressable>
        
        <Text style={{color: "white",fontSize: 20,marginTop:20,marginLeft:10}}>
            Account
        </Text> 
        <Pressable onPress={() => {Logout()}} style={{display:"flex",flexDirection:'row'}}>
        <MaterialIcons name={'logout'} color={'red'} style={{fontSize:20,marginTop: 20,marginLeft:10}} />
            <Text style={[{marginTop:20,marginLeft:10,color: "red",fontSize:15}]}>Logout</Text>
        </Pressable>
            {/* <Text style={styles.settingText}>About</Text>
            <Button title="Logout" onPress={()=>{AsyncStorage.setItem("check",JSON.stringify(true));AsyncStorage.removeItem("Login");navigation.navigate("Login")}}></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    settingcontainer:{
        display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        flex:1,
        backgroundColor:"black",
    },
    settingText:{
        color:"grey",
        fontSize: 15,
        
    }
})