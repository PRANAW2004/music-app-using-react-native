import {View,Text,StyleSheet,Image,Pressable} from 'react-native';
import { useState,useEffect } from 'react';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event} from 'react-native-track-player';
import data from './song_data';

export default function Song_Render(props){

    const [duration,setDuration] = useState(0);
    const [bool,setbool] = useState(false);

    const setUpTrackPlayer = async () => {
        try{
        await TrackPlayer.setupPlayer()
        TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
            ],
            // compactCapabilities: [
            //     Capability.Play,
            //     Capability.Pause,
            //     Capability.SkipToNext,
            //     Capability.SkipToPrevious,
            // ]
        })

        TrackPlayer.addEventListener("remote-play", () => {
            TrackPlayer.play();
        })
        TrackPlayer.addEventListener("remote-pause", () => {
            TrackPlayer.pause();
        })
             TrackPlayer.addEventListener("remote-next", () => {
            TrackPlayer.skipToNext();
        })
         TrackPlayer.addEventListener("remote-previous", () => {
            TrackPlayer.skipToPrevious();
        })

        // TrackPlayer.add(data);

        }
        catch(err){
            console.log(err);
        }
    }    

    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, [])

    async function play(id){
        // console.log(data);
        await TrackPlayer.reset(); 
        if(bool === false){
            console.log(bool);
            for(var i=0;i<data.length;i++){
                if(data[i]['id'] === id){
                    // console.log(data[i]);
                    try{
                    TrackPlayer.add([data[i],data[i+1]]);
                    // console.log(await TrackPlayer.add([data[i]]));
                    TrackPlayer.play();
                    setbool(true);
                    break;
                    }catch(err){
                        console.log(err);
                    }
                }
            }
        }else{
            console.log(bool);
            // TrackPlayer.pause();
            for(var i=0;i<data.length;i++){
                if(data[i]['id'] === id){
                    // console.log(data[i]);
                    console.log(i);
                    try{
                        if(i === data.length-1){
                            TrackPlayer.add([data[i],data[i-1]]);
                        }else{
                            TrackPlayer.add([data[i]]);
                        }
                        TrackPlayer.play();
                        setbool(false);
                        break;
                    }catch(err){
                        console.log(err);
                    }
                }
            }
        }
        
        
        // TrackPlayer.reset();
    }

    return(
        <View style={{width:'100%'}}>
            {/* <Text style={{color: "white"}}>{props.data}</Text> */}
            {props.data.map((e)=>{
                return(
            <Pressable onPress={()=>{TrackPlayer.pause();play(e['id'])}}>
                    {/* {console.log(TrackPlayer.getProgress().then((e) => console.log(e)))}
                    {console.log(TrackPlayer.play())} */}
                    <View style={{width:'100%',display:"flex",alignItems: "center"}}>
                    <View style={styles.songblock}>
                    <View style={{marginRight: 10}}>
                    <Image source={{uri: e['artwork']}} style={{height: 60,width:60,borderRadius:36}}/>
                    </View> 
                    <View>
                    
                    <Text style={{color: "white",fontSize: 20}}>{e['title']}</Text>
                    <Text style={{color: "white"}}>{e['artist']}</Text>
                    </View>

                    </View>
                    </View> 
                    </Pressable>
                )

            })}
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
        backgroundColor: "#492E87",
        // marginBottom: 10,
        // padding: 10,
        width: '90%',
        marginTop: 20,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        height: 60,
        // height: '100%',
    }
})