import { View,Text,StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import MusicFiles from 'react-native-get-music-files';
import Permissions from 'react-native-permissions';
// import RNFS from 'react-native-fs';

export default function YourLibrary({navigation}){


    // useEffect(() => {
    //     const getMP3Files = async () => {
    //         RNFS.readdir(RNFS.DocumentDirectoryPath)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //         // const mp3Files = files.filter(file => file.endsWith('.mp3'));
    //         // setlocalsongs(mp3Files);
    //       };
      
    //       getMP3Files();
    // },[])

    console.log("inside local");

    // Permissions.request('storage').then((response) => {
    //     console.log(response);
    // })

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


    // MusicFiles.getAll({
    //     blured : true, // works only when 'cover' is set to true
    //     artist : true,
    //     duration : true, //default : true
    //     cover : false, //default : true,
    //     genre : true,
    //     title : true,
    //     cover : true,
    //     minimumSongDuration : 10000, // get songs bigger than 10000 miliseconds duration,
    //     fields : ['title','albumTitle','genre','lyrics','artwork','duration'] // for iOs Version
    // }).then((e)=>{
    //     console.log(e);
    // }).catch((err) => {
    //     console.log(err);
    // })
    return(
        <View style={styles.localcontainer}>
            <Text style={styles.localtext}>This is Your Library screen</Text>
            {/* <Text style={{color:"white"}}>{localsongs}</Text> */}
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