import { View,Text,StyleSheet,TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import {MaterialIcons} from '@expo/vector-icons';

export default function Search({navigation}){

    console.log("search");

    useEffect(() => {
        
        BackHandler.addEventListener("hardwareBackPress", () => {
            console.log("inside search backhandler");
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
        <View style={styles.searchbox}>
        <View style={{backgroundColor: "grey",width:'10%',height: '70%',display:'flex',justifyContent: 'center',marginTop: 20}}>
        <MaterialIcons name="search" size={30} color="black" />
        </View>
        <TextInput 
        style={[{backgroundColor: "grey",width: '70%',height:'70%',color: "black",marginTop: 20}]}
        placeholder="Search"
        ></TextInput>
        </View>
        <View style={{display:"flex",width:'100%',flexDirection: "row",margin: 0,padding:10,columnGap: 30,height: 120}}>
            <TouchableOpacity style={{backgroundColor: "red",height: 100,width:'45%',display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 20}} onPress={() => navigation.navigate("Pop")}>
                <Text style={{color: "white"}}>Pop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "blue",height: 100,width:'45%',display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 20}} onPress={() => navigation.navigate("Rock")}>
                <Text style={{color: "white"}}>Rock</Text>
            </TouchableOpacity>
        </View>
        <View style={{display:"flex",width:'100%',flexDirection: "row",margin: 10,padding:10,columnGap: 30,height:120}}>
            <TouchableOpacity style={{backgroundColor: "orange",height: 100,width:'45%',display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 20}} onPress={() => navigation.navigate("Soul")}>
                <Text style={{color: "white"}}>Soul</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "green",height: 100,width:'45%',display:"flex",justifyContent:"center",alignItems:"center",borderRadius: 20}} onPress={() => navigation.navigate("Folk")}>
                <Text style={{color: "white"}}>Folk</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchcontainer: {
        display:"flex",
        flex:1,
        backgroundColor: "black",
        // justifyContent: "center",
        // alignItems: "center",
        // justifyContent: "center",
        alignItems: "center"
    },
    searchbox: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        // backgroundColor: "green",
        height: '10%'
    }
})