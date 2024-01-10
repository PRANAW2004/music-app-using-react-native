import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { View,Text,StyleSheet,Button,BackHandler,TouchableOpacity } from "react-native";
import TrackPlayer,{useProgress,Capability} from 'react-native-track-player';
// import BottomNavigator from "./bottomtabnavigator";

export default function MainPage({navigation}){

    const progress = useProgress();

    console.log("This is main page");

    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",()=>{
            console.log("back button is pressed in home page");
            BackHandler.exitApp();
            return true;
        });
    },[]);



    

    const setUpTrackPlayer = async () => {
        try{
        await TrackPlayer.setupPlayer();
        TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [Capability.Play,Capability.Pause,Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop],
            compactCapabilities: [Capability.Play,Capability.Pause,Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop],
        })
        await TrackPlayer.add([{
            id:1,
            url: require("../songs/Animal-Maroon5.mp3"),
            title: "Animal-Maroon5",
            artist: "Maroon5"
        },
        {
            id:2,
            url: require("../songs/Love-Me-Like-You-Do.mp3"),
            title: "Love me like you do",
            artist: "Me"
        }])
        }
        catch(err){

        }
    }    

    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, [])



    return(
        <View style={styles.maincontainer}>
        {console.log("This is inside main page")}
            <Text style={styles.maincontainertext}>This is main page</Text>
            <TouchableOpacity style={{backgroundColor: "red",height:30,width:100}} onPress={() => TrackPlayer.play()}>
                <Text>Play song</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "red",height:30,width:100}} onPress={() => TrackPlayer.pause()}>
                <Text>Pause song</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: "red",height:30,width:100}} onPress={() => TrackPlayer.skipToNext()}>
                <Text>Next song</Text>
            </TouchableOpacity>
            {/* <Text>{formatTime()}</Text> */}
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