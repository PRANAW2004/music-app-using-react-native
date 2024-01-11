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
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop
        ],
        compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop
        ]
    })

        await TrackPlayer.add([{
            id:1,
            url: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/alan-faded.mp3?alt=media&token=915dfb8f-2feb-40ba-8758-49201ce86ad5",
            title: "faded",
            artist: "alan-walker"
        },
        {
            id:2,
            url: "https://drive.google.com/file/d/1zI3eNMtmMwG0KKu0aBLvr0gZpJ7HTjiy/view?usp=drive_link",
            title: "Love me like you do",
            artist: "Me"
        }])
        }
        catch(err){
            console.log(err);
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