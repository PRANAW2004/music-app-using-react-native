import { View, Text,StyleSheet,BackHandler,ScrollView,Image } from 'react-native';
import { useEffect,useState } from 'react';
import data from '../song_data';
import Song_Render from '../song-render';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event} from 'react-native-track-player';

export default function Folk({navigation}){

    const [duration,setDuration] = useState(0);

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
        // console.log(navigation.getState());

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

    //  const setUpTrackPlayer = async () => {
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
    
    //           await TrackPlayer.add([data]);

    //     TrackPlayer.getProgress().then((e) => setDuration(e));

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
        <View style={styles.folkview}>
            {/* {data.map((e)=>{
                console.log(e['id']);
                return(            
                    <ScrollView>
                    <View style={styles.songblock}>
                            <Text style={{color: "black"}}>{e['id']}</Text>
                    </View>
                    </ScrollView>  
                )

            })} */}
            <ScrollView style={{width:'100%'}}>
                <Song_Render data={data}/>
            </ScrollView>
            <Image source={require("C:\Users\TOSHIBA\Pictures\kitten.png")} />
            </View>
    )
}

const styles = StyleSheet.create({
    folkview: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flex:1,
        width:'100%'
    },
    songblock: {
        display: "flex",
        backgroundColor: "red",
        // marginBottom: 10,
        padding: 10,
        width: '90%',
        marginTop: 20,
        borderRadius: 20,
        height: '10%',
    }
})