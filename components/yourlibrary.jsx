import { View,Text,StyleSheet,Platform,Image, ScrollView,Pressable,PanResponder,ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import { getAll,SortSongFields,SortSongOrder,searchSongs } from "react-native-get-music-files";
import Toast from 'react-native-root-toast';
import { check, PERMISSIONS, request, RESULTS, requestMultiple } from 'react-native-permissions';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';
import { useState } from "react";
import Slider from 'react-native-slider';

export default function YourLibrary({navigation}){

    const [song,setsong] = useState([]);
    const [currentplayingsong,setcurrentPlaying] = useState(0);

    const PanResponder1 =  PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: (evt, gestureState) => {
          if(gestureState.dx < 0){
          }else{
            navigation.navigate("Search");
          }
        },
      });
 

    const hasPermissions = async () => {
        if (Platform.OS === 'android') {
          let hasPermission =
            (await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)) ===
            RESULTS.GRANTED || (await check(PERMISSIONS.ANDROID.READ_MEDIA_AUDIO)) ===
            RESULTS.GRANTED;
    
          if (!hasPermission) {
            hasPermission = await requestMultiple([
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
            ]);
          }
    
          return hasPermission;
        }
    
        if (Platform.OS === 'ios') {
          let hasPermission =
            (await check(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
          if (!hasPermission) {
            hasPermission =
              (await request(PERMISSIONS.IOS.MEDIA_LIBRARY)) === RESULTS.GRANTED;
          }
    
          return hasPermission;
        }
    
        return false;
      };

    // console.log("inside local");

    const setUpTrackPlayer = async () => {try{await TrackPlayer.setupPlayer()}catch(err){}}    

    useEffect(() => {setUpTrackPlayer();return () => TrackPlayer.destroy();}, [])
    


    useEffect(async () => {
        console.log("inside the music files getall");
        const permissions = await hasPermissions();
        if(permissions){
            const songsResults = await getAll({
                limit: 100000,
                offset: 0,
                coverQuality: 50,
                minSongDuration: 1000,
                sortOrder: SortSongOrder.DESC,
                sortBy: SortSongFields.TITLE,
              }).then((res,time) => {
                // console.log(res);
                setsong(res);

            }).catch((err) => {
                console.log(err);
            })
        }
        
    },[])

    if(song.length !== 0){
        AsyncStorage.setItem("local", JSON.stringify("local data"));
            for(var i=0;i<song.length;i++){
                song[i]['id'] = i+1;
            }
        
        

    } 

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

    
    async function play(id){
        await TrackPlayer.reset(); 
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));
        await AsyncStorage.setItem("local-songs-bool",JSON.stringify(true));

        if(id === 1){
            // setskippreviousbool(true);
            TrackPlayer.updateOptions({     
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext
                ]
            })
        }else{
            // setskippreviousbool(false);
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    // Capability.SkipToPrevious,
                    Capability.SkipToNext
                ]
            })
        }

        if(id >= song.length){
            // setskipnextbool(true)
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToPrevious
                ]
            })
        }else{
            // setskipnextbool(false);
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToPrevious,
                    Capability.SkipToNext
                ]
            })
        }
            for(var i=0;i<song.length;i++){
                if(song[i]['id'] === id){
                    // console.log(song[i]);
                    await AsyncStorage.setItem("data-author",JSON.stringify(song[i]['artist']));
                    await AsyncStorage.setItem("data-artwork",JSON.stringify(song[i]['cover']));
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(song[i]['title']));
                    AsyncStorage.setItem("current-playing",JSON.stringify(song[i]['title']));
                    AsyncStorage.setItem("current-genre",JSON.stringify('local'));

                    let arr = [song[i]];
                    try{
                        if(i === 0){
                            for(j=i+1;j<song.length;j++){
                                
                                arr.push(song[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<song.length-1;j++){
                            arr.push(song[j+1]);
                            // console.log("array is ",arr);
                        }
                        }

                        TrackPlayer.addEventListener("remote-play", ()=>{
                            AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                            // seticon("motion-pause");
                            TrackPlayer.play();
                        })
                        
                        TrackPlayer.addEventListener("remote-pause", () => {
                            AsyncStorage.setItem("song-playing-bool",JSON.stringify(false));
                            // seticon("motion-play");
                            TrackPlayer.pause();
                        })
                        
                        TrackPlayer.addEventListener("remote-previous",async () => {
                            setcurrentPlaying(currentplayingsong-1);
                            let a = await TrackPlayer.getActiveTrack();
                            play(a["id"]-1); 
                        })

                        TrackPlayer.addEventListener("remote-next", async () => {
                            setcurrentPlaying(currentplayingsong+1);
                            let a = await TrackPlayer.getActiveTrack();
                            play(a["id"]+1);
                        })
                        // for(var i=0;i<arr.length;i++){
                        //     console.log(arr[i]);
                        // }
                    TrackPlayer.add(arr);
                    TrackPlayer.play();
                    TrackPlayer.setRepeatMode(RepeatMode.Queue);
                    break;
                    }
                catch(err){
                    console.log(err);
                }
            }}
    }



    if(song.length === 0){
        return(
            <View style={styles.localcontainer}>
                <Text style={{color: "white",marginBottom: 10}}>Scanning for Local MP3 files, please wait...</Text>
                <ActivityIndicator size="large" color="white"/>
            </View>
        )
    }else{

    return(
        <View style={styles.localcontainer} {...PanResponder1.panHandlers}>
            <ScrollView>
            {song.map((e) => {
                return(
                    <View style={{flex:1,width:'100%',display:"flex",justifyContent:"center"}} {...PanResponder1.panHandlers}>
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={()=>{play(e['id']);setcurrentPlaying(e['id'])}}>
                    <View style={styles.songblock}>
                    <View style={{display: "flex",flexDirection: "row",alignItems: "center",width:'100%'}}>
                    <View style={{marginRight: 10}}>
                    <Image source={e['cover'].length===0?require("../images/song-cover.jpg"):{uri:e['cover']}} style={{height: 60,width:60,borderRadius:36}}/>
                    </View> 
                    <View>
                    <Text style={{color: "white",fontSize: 15,width:250}}>{e['title']}</Text>
                    </View>
                    </View>
                    </View> 
                    </Pressable>
                   
                    </View>
                )
            })}
            </ScrollView>
        </View>
    )
}
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
    },
    songblock: {
        display: "flex",
        backgroundColor: "#492E87",
        // marginBottom: 10,
        // padding: 10,
        width: '95%',
        marginTop: 20,
        borderRadius: 30,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    progressBar: {
        width: '90%',
        height: 1,
        // marginTop: 25,
        // flexDirection: 'row',
        color: 'white',
        backgroundColor :"white"
      },
})