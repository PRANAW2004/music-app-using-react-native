import { useEffect, useState,useCallback } from "react";
import { View,Text,StyleSheet,Button,BackHandler,TouchableOpacity, Pressable,Image, Modal } from "react-native";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from './song_data';
import alldata from './AllData';
import Souldata from './soul_data';
import TrackPlayer,{useProgress,useTrackPlayerEvents,Event,RepeatMode} from 'react-native-track-player';
import Slider from 'react-native-slider';
import {StatusBar} from 'expo-status-bar';

export default function MainPage({navigation}){

    const [visible,modalvisible] = useState(false);
    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');
    const [icon,seticon] = useState("motion-play");
    const [bool,setbool] = useState(false);
    const [repeatMode,setRepeatMode] = useState('repeat');
    const [skipnextbool,setskipnextbool] = useState(false);
    const [skippreviousbool,setskippreviousbool] = useState(false);
    const [likedicon,setlikedicon] = useState("cards-heart-outline");
    const [likedcolor,setlikedcolor] = useState("white");
    const [currentplayingsong,setcurrentPlaying] = useState(0);
   


    const events = [
        Event.PlaybackState,
        Event.PlaybackError,
      ];

    useTrackPlayerEvents(events, async (event) => {
          if (event.type === Event.PlaybackState) {
                if(event.state === 'paused'){
                    await AsyncStorage.setItem("song-playing-bool",JSON.stringify(false))
                    seticon('motion-play');
                }
                else if(event.state === 'playing'){
                    await AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));

                    seticon('motion-pause');
                }
                else if(event.state === 'stopped'){
                    await AsyncStorage.setItem("song-playing-bool",JSON.stringify(false));
                    seticon('motion-play');
                }
          }
    })

   


    let progress = useProgress();


    useEffect(()=>{
        BackHandler.addEventListener("hardwareBackPress",()=>{
            BackHandler.exitApp();
            return true;
        });

    },[]);



    const currentGenre = useCallback(async () => {

        let playBool = await AsyncStorage.getItem("song-playing-bool");
        if(playBool === "true"){
            seticon("motion-pause");
        }else{
            seticon("motion-play");
        }

        let value = await AsyncStorage.getItem("current-genre");
        let valuegenre = JSON.parse(value);
        let arr = []
        arr = valuegenre === 'folk'?data:valuegenre === 'soul'?Souldata:[];
        for(var i=0;i<arr.length;i++){
            let value1 = await AsyncStorage.getItem("current-playing");
            if(arr[i]['title'] === JSON.parse(value1)){
                setrenderimage(arr[i]['artwork']);
                setrendername(arr[i]['title']);
                setrenderauthor(arr[i]['artist']);
                break;
            }
        }



        let currentplaying = await AsyncStorage.getItem("current-playing");
        for(var i = 0;i<alldata.length;i++){
            if(JSON.parse(currentplaying) === alldata[i]['title']){
                setcurrentPlaying(alldata[i]['id']);
                // AsyncStorage.setItem("current-playing-num",JSON.stringify(alldata[i]['id']));
            }
        }
    })

    useEffect(currentGenre,[]);

    async function play(id){
        
        let genre1 = await AsyncStorage.getItem("current-genre");
        let value = JSON.parse(genre1);
        let arr = []
        arr = value === 'folk'?data:value==='soul'?Souldata:[];
        seticon(pause);
    }

    TrackPlayer.addEventListener("playback-track-changed",async () => {
        let a = await TrackPlayer.getActiveTrack();
        setrenderimage(a['artwork']);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        // seticon(icon === 'play-arrow'?'pause':'play-arrow');
        AsyncStorage.setItem("current-playing", JSON.stringify(a['title']));

        let value1 = await AsyncStorage.getItem("liked");
        let arr1 = JSON.parse(value1);
        let bool11 = false;
        for(var i=0;i<arr1.length;i++){
            if(a['title'] === arr1[i]){
                bool11 = true;
            }
        }
        if(bool11){
            setlikedicon('cards-heart');
            setlikedcolor('red');
        }else{
            setlikedicon('cards-heart-outline');
            setlikedcolor('white');
        }
    })

    async function handlePlayback(){
        seticon(icon === 'motion-play'?'motion-pause':'motion-play');
        icon === 'motion-play'?TrackPlayer.play():TrackPlayer.pause();
        if(bool === false){
            if(icon === 'motion-play'){
                let currentplayingsong = await AsyncStorage.getItem("current-playing");
                play(JSON.parse(currentplayingsong));
            }
        }
    }

    return(
        <View style={styles.maincontainer}>
            <View style={{display:"flex",flexDirection: "column",flex:1}}>
            <View style={styles.firstsection}>
                 <Pressable onPress={()=>{navigation.navigate("Liked Songs")}} style={{height: 60}}>
                    <View style={{height:60,width:150,borderColor: "grey",borderWidth: 1,flexDirection:'row',alignItems: "center",borderRadius: 36}}>
                        <Image source={require("../images/main-page-icons/liked.png")} style={[{height: 60,width:60,marginRight:10}]}/>
                        <View style={{}}>
                            <Text style={{color:"white",fontSize: 20}}>Liked</Text>
                            <Text style={{color:"white",fontSize:15}}>Songs</Text>
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate("History")} style={{height:60}}>
                    <View style={{height: 60,width:150,borderRadius:36,borderColor: "grey",borderWidth:1,flexDirection: "row",alignItems: "center"}}>
                        <Image source={require("../images/main-page-icons/history.png")} style={[{height: 60,width:60,marginRight:10}]} />
                        <View>
                            <Text style={{color:"white",fontSize: 20}}>History</Text>
                        </View>
                    </View>
                </Pressable>
                </View>
                <View style={{display:"flex",justifyContent:"center",alignItems: "center"}}>
                    <Text style={{color: "white"}}>This is the native language section</Text>
                </View>
            </View>
            

            <Modal visible={visible} animationType='slide'>
            <View style={styles.modalview}>
                <View>
                    <MaterialIcons name='keyboard-arrow-down' size={40} color='white' onPress={() => modalvisible(false)}/>
                </View>
                <View style={styles.modelcontent}>
                    <Image source={{uri: renderimage}} style={{height: 300,width:300,marginBottom: 20}}/>
                    <View style={{marginBottom: 30,display:"flex",alignItems: "center"}}>
                    <Text style={{color: "white",fontSize: 40}}>{rendername}</Text>
                    <Text style={{color: "white",fontSize:20}}>{renderauthor}</Text>
                    </View>

                    <Slider 
                        style={styles.progressBar}
                        value = {progress.position}
                        minimumValue = {0}
                        maximumValue = {progress.duration}
                        thumbTintColor = "grey"
                        minimumTrackTintColor="#006550"
                        maximumTrackTintColor="white"
                        onSlidingComplete = {async value => {
                            await TrackPlayer.seekTo(value);
                        }}
                    />
                </View>
                <View style={{display: "flex",alignItems: "center"}}>
                <View style={{width: '90%',flexDirection: "row"}}>
                <View style={{width: '50%'}}>
                <Text style={{color: "white",fontSize: 15}}>{new Date(progress.position*1000).toLocaleTimeString().substring(3).replace("am","").replace("pm","")}</Text>
                </View>
                <View style={{width: '50%',alignItems: 'flex-end'}}>
                <Text style={{color: "white",fontSize: 15}}>{new Date(progress.duration* 1000)
                .toLocaleTimeString()
                .substring(3).replace("am","").replace("pm","")}</Text>
                </View>
                </View>
                </View>
                <View style={{display:"flex",flexDirection: "row",justifyContent: "center",alignItems: "center",gap:20,marginTop:30}}>
                <View style={{marginRight: 30}}>
                <Pressable onPress={() => repeatmode()}>
                        <MaterialCommunityIcons name={repeatMode} size={25} color={'white'}/>
                    </Pressable>
                </View>
                      
                    <Pressable style={{opacity: skippreviousbool?0.5:1}} onPress={() => {play(currentplayingsong-1);setcurrentPlaying(currentplayingsong-1)}} disabled={skippreviousbool}>
                        <MaterialCommunityIcons name={'skip-previous'} size={40} color={'white'} />
                    </Pressable>
                    <Pressable onPress={() => handlePlayback()}>
                    <MaterialCommunityIcons name={icon} size={70} color={"white"} />
                    </Pressable>
                    <Pressable style={{opacity: skipnextbool?0.5:1}} onPress={async () => {play(currentplayingsong+1);setcurrentPlaying(currentplayingsong+1)}} disabled={skipnextbool}>
                        <MaterialCommunityIcons name={'skip-next'} size={40} color={"white"} />
                    </Pressable>
                    <View style={{marginLeft: 30}}>
                    {alldata.map((e) => {
                        
                        if(e['id'] === currentplayingsong){
                            return(
                            <Pressable >
                                <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor}/>
                            </Pressable>
                        )
                        }
                        
                    })}
                    </View>
                    
                    
                </View>

                    
                {/* <Image source={} /> */}
            </View>
                <StatusBar backgroundColor='#00898a' />
        
            </Modal>

            <View style={{width:"90%",marginBottom: 20}}>
            <Pressable style={{width: "100%",borderRadius:36}} onPress={() => {modalvisible(true)}}>
            <View style={{backgroundColor: "#40A2E3",height:60,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",borderRadius:36}}>
                {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                <View style={{display: "flex",flexDirection: "row",borderRadius: 36,width:'50%'}}>
                <Image source={{uri: renderimage}} style={{height:60,width:60,borderRadius:36,marginRight: 10}}/>
                <View style={{display:"flex",flexDirection: "column",justifyContent: "center"}}>
                    <Text style={{color: "white",fontSize: 20}}>{rendername === ''?'Press any song to play':rendername}</Text>
                <Text style={{color: "white",fontSize: 15}}>{renderauthor === ''?'play':renderauthor}</Text>
                </View>
                </View>
                <View style={{width: "50%",justifyContent: "center",alignItems: "flex-end",borderRadius: 36}}>
                <Pressable onPress={() => handlePlayback()}>
                    <MaterialCommunityIcons name={icon} color="white" size={40} style={{marginRight: 10}}/>
                </Pressable>
                </View>
            </View>
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
        // flex:1,
        // backgroundColor: "green",
        margin: 20,
        flexDirection: "row",       
        gap:20 
    },
    modalview: {
        backgroundColor: "#00898a",
        flex: 1,
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },
    modelcontent: {
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        marginTop: 70,
        marginBottom: 20
        // marginBottom: 40,
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