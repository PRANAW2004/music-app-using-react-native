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
   const [artworkbool,setartworkbool] = useState(true);
   const [coverbool,setcoverbool] = useState(true);
   const [cover,setcover] = useState("");
   const [artist,setartist] = useState("");


   if(!artworkbool){
    // console.log(coverbool);
    AsyncStorage.setItem("data-artwork",JSON.stringify(coverbool?cover:"null"));
    AsyncStorage.setItem("data-author",JSON.stringify(renderauthor));
    }

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

        let localsongsbool = await AsyncStorage.getItem("local-songs-bool");

        if(localsongsbool === "true"){
            let currentplaying1 = await AsyncStorage.getItem("current-playing");
            setrendername(JSON.parse(currentplaying1));
            let localauthor = await AsyncStorage.getItem("data-author");
            setrenderauthor(JSON.parse(localauthor));
            let localartwork = await AsyncStorage.getItem("data-artwork");
            if(JSON.parse(localartwork).length === 4){
                setcoverbool(false)
            }else{
                setrenderimage(JSON.parse(localartwork));
                // setlocalimagebool(true);
                setcoverbool(true);
                setrenderimage(JSON.parse(localartwork));            
            
            }

        }else{

        for(var i=0;i<alldata.length;i++){
            let value1 = await AsyncStorage.getItem("current-playing");
            if(alldata[i]['title'] === JSON.parse(value1)){
                setrenderimage(alldata[i]['artwork']);
                setrendername(alldata[i]['title']);
                setrenderauthor(alldata[i]['artist']);
                break;
            }
        }
    }
        // let value1 = await AsyncStorage.getItem()



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
        // console.log("artwork and cover is ",a['artwork']);
        // console.log(a["cover"].length);
        // console.log(a['title']);
        if(a["artwork"] === undefined){
            // console.log("a[cover].length is ",a["cover"].length);
            if(a["cover"].length === 0){
                // console.log("inside the a[cover].lengt is 0");
                setcoverbool(false)
                setcover("null");
            }else{
                // console.log("inside a[cover].length is not equal to 0")
                setcoverbool(true);
                setcover(a["cover"]);
            }
            // console.log("inside the artwork bool is false");
            setartworkbool(false);
            AsyncStorage.setItem("local-songs-bool",JSON.stringify(true));
        }else{
            // console.log("inside the artwork bool is true");
            setartworkbool(true);
            AsyncStorage.setItem("local-songs-bool",JSON.stringify(false));
        }
        setrenderimage(a['artwork']===undefined?coverbool?a["cover"]:null:a["artwork"]);
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
                <View style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",flexDirection: "row",marginTop:30}}>
                    <View style={{gap:10,display:"flex",flexDirection:"row"}}>
                        <Pressable style={{backgroundColor: "#222831",height:50,width:150,marginRight:30,display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/english_image.jpeg?alt=media&token=b1f49d25-e650-4a8e-8c3b-30fcfdf7198b"}} style={{height: 50,width:50,marginRight:10}}/>
                            <Text style={{color:"white",fontSize: 17}}>English</Text>
                        </Pressable>
                        <Pressable style={{backgroundColor: "#222831",height:50,width:150,display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/hindi-song-wallpaper.jpg?alt=media&token=ecb4aed9-5bcf-4f78-9a2b-3d40f81db590"}} style={{height: 50,width:50,marginRight:10}}/>
                            <Text style={{color:"white",fontSize:17}}>Hindi</Text>
                        </Pressable>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",gap:10,marginBottom:70}}>
                        <Pressable style={{backgroundColor: "#222831",height:50,width:150,marginRight:30,display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/telugu_wallpaper.jpg?alt=media&token=c79829f1-cd49-4552-8d70-8df3a5de5001"}} style={{height: 50,width:50,marginRight:10}}/>
                            <Text style={{color:"white",fontSize: 17}}>Telugu</Text>
                        </Pressable>
                        <Pressable style={{backgroundColor: "#222831",height:50,width:150,display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/tamil_wallpaper.jpeg?alt=media&token=1d741501-7607-449c-ac8a-7f83a2517d0e"}} style={{height: 50,width:50,marginRight:10}}/>
                            <Text style={{color:"white",fontSize: 17}}>Tamil</Text>
                        </Pressable>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",gap:10}}>
                        <Pressable style={{backgroundColor: "#222831",height:50,width:150,marginRight:30,display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/best-songs-cover.jpg?alt=media&token=68d63d2a-7d79-430f-b688-77b316bf1357"}} style={{height: 50,width:50,marginRight:7}}/>
                            <Text style={{color:"white",width:100}}>Best songs of all time</Text>
                        </Pressable>
                        <Pressable style={{backgroundColor: "#222831",height:50,width:150,display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/other-langauge-songs.jpeg?alt=media&token=2e44c0b7-456c-4ae8-b8e9-9d801b4ef8c7"}} style={{height: 50,width:50,marginRight:7}}/>
                            <Text style={{color:"white",width:90,fontSize: 13}}>Other langauge songs</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            

            <Modal visible={visible} animationType='slide'>
            <View style={styles.modalview}>
                <View>
                    <MaterialIcons name='keyboard-arrow-down' size={40} color='white' onPress={() => modalvisible(false)}/>
                </View>
                <View style={styles.modelcontent}>
                    {/* <Image source={{uri: renderimage}} style={{height: 300,width:300,marginBottom: 20}}/> */}
                <Image source={artworkbool?{uri:renderimage}:coverbool?{uri: renderimage}:require("../images/song-cover.jpg")} style={{height:300,width:300,marginBottom:20}}/>
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
                <Image source={artworkbool?{uri:renderimage}:coverbool?{uri: renderimage}:require("../images/song-cover.jpg")} style={{height:60,width:60,borderRadius:36,marginRight: 10}}/>
                <View style={{display:"flex",flexDirection: "column",justifyContent: "center"}}>
                    <Text style={{color: "white",fontSize: 15}}>{rendername === ''?'Press any song to play':rendername}</Text>
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
        gap:20, 
        justifyContent: "center",
        alignItems: "center"
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