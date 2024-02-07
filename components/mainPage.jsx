import { useEffect, useState } from "react";
import { View,Text,StyleSheet,Button,BackHandler,TouchableOpacity, Pressable,Image, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MainPage({navigation}){

    const [visible,modalvisible] = useState(false);

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

            <Modal visible={visible}>
            <View style={styles.modalview}>
                <MaterialIcons name='close' size={30} onPress={() => modalvisible(false)}/>
                {/* <Image source={} /> */}
            </View>
            </Modal>

            <Pressable style={{width: "100%"}} onPress={() => modalvisible(true)}>
            <View style={{backgroundColor: "#83C0C1",height:50,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",gap: 60}}>
                <Image source={''} />
                <Text>This is a text</Text>
                <View style={{height: 50,width: "50%",justifyContent: "center",alignItems: "flex-end"}}>
                <MaterialIcons name="play-arrow" color="black" size={40}/>
                </View>
                
            </View>
            </Pressable>
            

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
    },
    modalview: {
        backgroundColor: "#83C0C1",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})