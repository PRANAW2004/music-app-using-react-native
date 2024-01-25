import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View,Text,StyleSheet,Button,BackHandler,TouchableOpacity, Pressable,Image } from "react-native";
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event} from 'react-native-track-player';
// import { Capability } from "react-native-track-player";
// import BottomNavigator from "./bottomtabnavigator";

export default function MainPage({navigation}){

    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",()=>{
            console.log("back button is pressed in home page");
            BackHandler.exitApp();
            return true;
        });
    },[]);

    

    // const setUpTrackPlayer = async () => {
    //     try{
    //     await TrackPlayer.setupPlayer()
    //     TrackPlayer.updateOptions({
    //         stopWithApp: true,
    //         capabilities: [
    //             Capability.Play,
    //             Capability.Pause,
    //             Capability.SkipToNext,
    //             Capability.SkipToPrevious,
    //         ],
    //         // compactCapabilities: [
    //         //     Capability.Play,
    //         //     Capability.Pause,
    //         //     Capability.SkipToNext,
    //         //     Capability.SkipToPrevious,
    //         // ]
    //     })

    //     TrackPlayer.addEventListener("remote-play", () => {
    //         TrackPlayer.play();
    //     })
    //     TrackPlayer.addEventListener("remote-pause", () => {
    //         TrackPlayer.pause();
    //     })
    //          TrackPlayer.addEventListener("remote-next", () => {
    //         TrackPlayer.skipToNext();
    //     })
    //      TrackPlayer.addEventListener("remote-previous", () => {
    //         TrackPlayer.skipToPrevious();
    //     })

        

    //     await TrackPlayer.add([{
    //         id:1,
    //         url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/alan-faded.mp3?alt=media&token=915dfb8f-2feb-40ba-8758-49201ce86ad5",
    //         title: "faded",
    //         artist: "alan-walker",
    //         artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/alan.jpeg?alt=media&token=3a50b284-f9e6-4e2a-9e7f-5c62fefd3930",
    //     },
    //     {
    //         id:2,
    //         url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/Believer.mp3?alt=media&token=09e723f5-c19a-46a0-9eee-5bbba68f237f",
    //         title: "Beleiver",
    //         artist: "Me",
    //         artwork: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/believer.jpeg?alt=media&token=1d7f892b-b20e-401f-a16f-d267c37df2bb",
    //     }
    // ])
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }    

    // useEffect(() => {
    //     setUpTrackPlayer();

    //     return () => TrackPlayer.destroy();
    // }, [])



    return(
        <View style={styles.maincontainer}>
            {/* <Text style={styles.maincontainertext}>This is main page</Text> */}
            {/* <TouchableOpacity style={{backgroundColor: "red",height:30,width:100}} onPress={() => TrackPlayer.play()}>
                <Text>Play song</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "red",height:30,width:100}} onPress={() => TrackPlayer.pause()}>
                <Text>Pause song</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "red",height:30,width:100}} onPress={() => TrackPlayer.skipToNext()}>
                <Text>Next song</Text>
            </TouchableOpacity> */}
            <View style={styles.firstsection}>
            <Pressable onPress={()=>console.log("liked songs button is pressed")}>
            <Image source={require("../images/main-page-icons/liked.png")} style={[{height: 70,width:70}]}/>
            </Pressable>
            <Pressable onPress={()=>console.log("history button is pressed")}>
            <Image source={require("../images/main-page-icons/history.png")} style={[{height: 70,width:70}]} />
            </Pressable>
            </View>

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
    firstsection: {
        display: "flex",
        flex:1,
        // backgroundColor: "green",
        margin: 20,
        flexDirection: "row",        
    }
})