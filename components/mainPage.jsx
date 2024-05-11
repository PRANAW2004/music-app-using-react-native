import { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, Button, BackHandler, TouchableOpacity, Pressable, Image, Modal, PanResponder } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';
import Slider from 'react-native-slider';
import { StatusBar } from 'expo-status-bar';
import alldata from './AllData';
import bestdata from './language/bestdata';
import englishdata from './language/englishdata';
import hindidata from './language/hindidata';
import otherdata from './language/otherdata';
import tamildata from './language/tamildata';
import telugudata from './language/telugudata';
import folkdata from './screens/folkdata';
import popdata from './screens/popdata';
import souldata from './screens/souldata';
import rockdata from './screens/rockdata';

export default function MainPage({ navigation }) {

    const [visible, modalvisible] = useState(false);
    const [renderimage, setrenderimage] = useState(null);
    const [rendername, setrendername] = useState('');
    const [renderauthor, setrenderauthor] = useState('');
    const [icon, seticon] = useState("motion-play");
    const [bool, setbool] = useState(false);
    const [repeatMode, setRepeatMode] = useState('repeat');
    const [skipnextbool, setskipnextbool] = useState(false);
    const [skippreviousbool, setskippreviousbool] = useState(false);
    const [likedicon, setlikedicon] = useState("cards-heart-outline");
    const [likedcolor, setlikedcolor] = useState("white");
    const [currentplayingsong, setcurrentPlaying] = useState(0);
    const [currentplayingsongname,setcurrentplayingsongname] = useState("");
    const [artworkbool, setartworkbool] = useState(true);
    const [coverbool, setcoverbool] = useState(true);
    const [cover, setcover] = useState("");
    const [likedbool1, setlikedbool1] = useState(true);
    const [songdata,setsongdata] = useState([]);
    const [localimagebool,setlocalimagebool] = useState(true);
    const [localbool,setlocalbool] = useState(null);
    const [history,sethistory] = useState([]);
    const [likedsong,setlikedsong] = useState([]);
    const [allcurrentplayingnum,setallcurrentplayingnum] = useState(0);
    const [arraylength,setarraylength] = useState(0);

    console.log("inside the main page");

    const PanResponder1 = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx < 0) {
                navigation.navigate("Search");
            }
        },
    });

    async function likedvalueselect(){

        // console.log("inside the liked value select")

        console.log("likedsongs is ",[...new Set(likedsong)],likedbool1);

        //AsyncStorage.setItem("liked",JSON.stringify([]));

        let likedvalue = await AsyncStorage.getItem("liked");
        // console.log("liked value is ",likedvalue);
        let arr = [];
        arr = JSON.parse(likedvalue);
        // console.log(arr.length);
        // console.log([...new Set(likedsong)].length);
        arr = [...new Set(arr)]
        console.log(arr);

        if(arr.length > arraylength){
            // console.log("inside the arr.length > likedsong.length");
            setlikedbool1(true);

        }

        if(likedbool1){
            // console.log("inside the likedbool1 for loop")
            for(var i=0;i<alldata.length;i++){
                for(var j=0;j<arr.length;j++){
                    // console.log("123",data[i]['id'],arr[j]);
                 if(alldata[i]['title'] === arr[j]){
                //   console.log(alldata[i]['title'])
                   setlikedsong(current => [...current,alldata[i]['title']]);

                 }
                }
              }
            // for(var i=0;i<arr.length;i++){
            //     setlikedsong(current => [...current, arr[i]]);
            // }
              setarraylength(arr.length);
        }
        
        
        if(likedbool1){
            // console.log("inside the likedbool1 is set to true");
        // console.log("inside the likedvalue select function ",[...new Set(likedsong)]);
        AsyncStorage.setItem("liked",JSON.stringify([...new Set(likedsong)]))
        setlikedbool1(false);
        }

        if(arr.length > ([...new Set(likedsong)].length) || arr.length < ([...new Set(likedsong)].length)){
            // console.log("inside the arr.length < likedsong.length")
            AsyncStorage.setItem("liked",JSON.stringify([...new Set(likedsong)]));
        }
        // if(arr.length < ([...new Set(likedsong)].length)){
        //     // console.log("inside the arr.length < likedsong.length")
        //     AsyncStorage.setItem("liked",JSON.stringify([...new Set(likedsong)]));
        // }

        

        let a = await TrackPlayer.getActiveTrack();
        // console.log("arr is ",arr);
        let likedbool = false;
        
        // console.log("entering the for loop")
        for(var i=0;i<arr.length;i++){
            if(a['title'] === arr[i]){
                // console.log("inside the likedbool set to true");
                likedbool = true;

            }
        }
        if(likedbool){
            setlikedcolor('red');
            setlikedicon('cards-heart');
        }else{
            setlikedcolor('white');
            setlikedicon('cards-heart-outline');
        }
            // console.log(arr);     
    }
    likedvalueselect();

    // if(likedsong.length >0){
    //     AsyncStorage.setItem("liked",JSON.stringify([...new Set(likedsong)]));
    // }




    if (!artworkbool) {
        // console.log(coverbool);
        AsyncStorage.setItem("data-artwork", JSON.stringify(coverbool ? cover : "null"));
        AsyncStorage.setItem("data-author", JSON.stringify(renderauthor));
    }

    const events = [
        Event.PlaybackState,
        Event.PlaybackError,
    ];

    useTrackPlayerEvents(events, async (event) => {
        if (event.type === Event.PlaybackState) {
            if (event.state === 'paused') {
                await AsyncStorage.setItem("song-playing-bool", JSON.stringify(false))
                seticon('motion-play');
            }
            else if (event.state === 'playing') {
                await AsyncStorage.setItem("song-playing-bool", JSON.stringify(true));

                seticon('motion-pause');
            }
            else if (event.state === 'stopped') {
                await AsyncStorage.setItem("song-playing-bool", JSON.stringify(false));
                seticon('motion-play');
            }
        }
    })

    useEffect(async () => {
        let value = await AsyncStorage.getItem("genre");
        // console.log("current genre is ", value);
        let currentplayingnumber = await AsyncStorage.getItem("current-playing-num");
        // console.log("current playing number is ",currentplayingnumber);
        setcurrentPlaying(currentplayingnumber*1);
        let songdata1 = [];
        songdata1 = JSON.parse(value) === 'folk' ? folkdata : JSON.parse(value) === 'best' ? bestdata : JSON.parse(value) === 'english' ? englishdata : JSON.parse(value) === 'other' ? otherdata : JSON.parse(value) === 'hindi' ? hindidata : JSON.parse(value) === 'tamil' ? tamildata : JSON.parse(value) === 'telugu' ? telugudata : JSON.parse(value) === 'soul' ? souldata : JSON.parse(value) === 'rock' ? rockdata : JSON.parse(value) === 'pop' ? popdata : [];
        setsongdata(songdata1)
        let currentplayingsong = await AsyncStorage.getItem("current-playing");
        setcurrentplayingsongname(currentplayingsong);
        let allcurrentplayingnum = await AsyncStorage.getItem("alldata-playing-num");
        setallcurrentplayingnum(allcurrentplayingnum*1);
    }, [])

    let progress = useProgress();


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            BackHandler.exitApp();
            return true;
        });

    }, []);


    const currentGenre = useCallback(async () => {

        let playBool = await AsyncStorage.getItem("song-playing-bool");
        if (playBool === "true") {
            seticon("motion-pause");
        } else {
            seticon("motion-play");
        }

        let localsongsbool = await AsyncStorage.getItem("local-songs-bool");

        if (localsongsbool === "true") {
            let currentplaying1 = await AsyncStorage.getItem("current-playing");
            setrendername(JSON.parse(currentplaying1));
            let localauthor = await AsyncStorage.getItem("data-author");
            setrenderauthor(JSON.parse(localauthor));
            let localartwork = await AsyncStorage.getItem("data-artwork");
            if (JSON.parse(localartwork).length === 4) {
                setrenderimage("null")
                setlocalimagebool(false);
            } else {
                setrenderimage(JSON.parse(localartwork));
                // setlocalimagebool(true);
                setlocalimagebool(true);

            }

        } else {

            for (var i = 0; i < alldata.length; i++) {
                let value1 = await AsyncStorage.getItem("current-playing");
                if (alldata[i]['title'] === JSON.parse(value1)) {
                    setrenderimage(alldata[i]['artwork']);
                    setrendername(alldata[i]['title']);
                    setrenderauthor(alldata[i]['artist']);
                    break;
                }
            }
        }
    })
    useEffect(currentGenre, []);


    TrackPlayer.addEventListener("playback-track-changed", async () => {

        let likedvalue = await AsyncStorage.getItem("liked");
        let arr = [];
        arr = JSON.parse(likedvalue);
        arr = [...new Set(arr)]

        let a = await TrackPlayer.getActiveTrack();

        let value = await AsyncStorage.getItem("genre");
        let songdata1 = [];
        
        songdata1 = JSON.parse(value) === 'folk'?folkdata:JSON.parse(value) === 'best'?bestdata:JSON.parse(value)==='english'?englishdata:JSON.parse(value)==='other'?otherdata:JSON.parse(value)==='hindi'?hindidata:JSON.parse(value)==='tamil'?tamildata:JSON.parse(value)==='telugu'?telugudata:JSON.parse(value)==='soul'?souldata:JSON.parse(value)==='rock'?rockdata:JSON.parse(value)==='pop'?popdata:null;
        setsongdata(songdata1)

        let likedbool = false;

        for(var i=0;i<arr.length;i++){
            if(a['title'] === arr[i]){
                likedbool = true;

            }
        }

        if(likedbool){
            setlikedcolor('red');
            setlikedicon('cards-heart');
        }else{
            setlikedcolor('white');
            setlikedicon('cards-heart-outline');
        }

        if(a["artwork"] === undefined){
            // console.log("artwork is undefined");
        }else{
            setlocalbool(true);
        }
        if(a['id'] === 1){
            setskippreviousbool(true);
        }
        if(a['id'] >= songdata1.length){
            setskipnextbool(true);
        }
        setrenderimage(a['artwork'] === undefined ? coverbool ? a["cover"] : null : a["artwork"]);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        setcurrentplayingsongname(a['title'])
        AsyncStorage.setItem("current-playing", JSON.stringify(a['title']));

        let value1 = await AsyncStorage.getItem("liked");
        let arr1 = JSON.parse(value1);
        let bool11 = false;
        for (var i = 0; i < arr1.length; i++) {
            if (a['title'] === arr1[i]) {
                bool11 = true;
            }
        }
        if (bool11) {
            setlikedicon('cards-heart');
            setlikedcolor('red');
        } else {
            setlikedicon('cards-heart-outline');
            setlikedcolor('white');
        }
    })

    async function handlePlayback() {
        seticon(icon === 'motion-play' ? 'motion-pause' : 'motion-play');
        icon === 'motion-play' ? TrackPlayer.play() : TrackPlayer.pause();
        if (bool === false) {
            if (icon === 'motion-play') {
                let currentplayingsong = await AsyncStorage.getItem("current-playing");
                play(JSON.parse(currentplayingsong));
            }
        }
    }

    // const likeddata = useCallback(async() => {

    //     let value1234 = await AsyncStorage.getItem("liked");
    //     // console.log("liked value inside homepage is ",value1234);

    //     arr = JSON.parse(value1234);
    //     arr = [...new Set(arr)]
    //     for(var i=0;i<alldata.length;i++){
    //       for(var j=0;j<arr.length;j++){
    //           // console.log("123",data[i]['id'],arr[j]);
    //        if(alldata[i]['title'] === arr[j]){
    //         console.log(alldata[i]['title'])
    //          setlikedsong(current => [...current,alldata[i]['title']]);
    //        }
    //       }
    //     }
    // })
    // useEffect(likeddata,[]);

    // if(likedsong.length > 0){
    //     console.log("likedsong length is greater than 0")
    // }

    // console.log("likedsong in the home page is ",likedsong);

    // async function likedfunc(){
    //     console.log("likedsong inside the likedfunc is ",likedtitle);
    //     // AsyncStorage.setItem("liked",JSON.stringify())
    // }

    async function liked(title){
        console.log(likedicon);
        for(var i=0;i<songdata.length;i++){
            if(songdata[i]['title'] === title){

                songdata[i]['liked'] = songdata[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                songdata[i]['color'] = songdata[i]['color'] === 'red'?'white':'red';
                // console.log(data[i]['liked'])
                if(likedicon === 'cards-heart-outline'){
                    console.log("inside the if in the liked function");
                    setlikedsong(current =>[...current,songdata[i]['title']]);  
                    // likedfunc();
                }
                else{
                console.log("inside the else in the liked function");
                    if(likedsong.length === 1){
                        setlikedsong([]);
                        AsyncStorage.setItem("liked",JSON.stringify(""));
                    }else{
                        for(var i=0;i<likedsong.length;i++){
                                if(title === likedsong[i]){
                                    setlikedsong((products) => products.filter(a => a !== likedsong[i]));
                                    // likedfunc();
                                    break;
                            }      
                }
            }
            }
                setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
                // setbool(true);
                break;
            }
        }
    }


    async function play(id){

        console.log(id);

        await TrackPlayer.reset(); 
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));


        if(id === 1){
            setskippreviousbool(true);
            TrackPlayer.updateOptions({     
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext
                ]
            })
        }else{
            setskippreviousbool(false);
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    // Capability.SkipToPrevious,
                    Capability.SkipToNext
                ]
            })
        }

        if(id >= songdata.length){
            setskipnextbool(true)
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToPrevious
                ]
            })
        }else{
            setskipnextbool(false);
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToPrevious,
                    Capability.SkipToNext
                ]
            })
        }
            for(var i=0;i<songdata.length;i++){
                if(songdata[i]['id'] === id){
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(songdata[i]['title']));
                    AsyncStorage.setItem("current-playing",JSON.stringify(songdata[i]['title']));
                    AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                    if(history.length > 50){
                        sethistory((songdata) => songdata.filter((_,index) => index !== 0));
                    }else{
                        let date = new Date().toLocaleDateString();
                        let date1 = date;
                        // console.log(date1);
                        let data11 = date1 + ":"+songdata[i]['title']
                        sethistory((current) => [...current,data11]);
                    }
                    // await AsyncStorage.setItem("history",JSON.stringify(history));

                    let arr = [songdata[i]];
                    try{
                        if(i === 0){
                            for(j=i+1;j<songdata.length;j++){
                                arr.push(songdata[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<songdata.length-1;j++){
                            arr.push(songdata[j+1]);
                        }
                        }

                        TrackPlayer.addEventListener("remote-play", ()=>{
                            AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                            seticon("motion-pause");
                            TrackPlayer.play();
                        })
                        
                        TrackPlayer.addEventListener("remote-pause", () => {
                            AsyncStorage.setItem("song-playing-bool",JSON.stringify(false));
                            seticon("motion-play");
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
                    TrackPlayer.add(arr);
                    TrackPlayer.play();
                    TrackPlayer.setRepeatMode(RepeatMode.Queue);
                    break;
                    }catch(err){
                    }
                }
            }
    }

    return (
        <View style={styles.maincontainer} {...PanResponder1.panHandlers}>
            <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <View style={styles.firstsection} {...PanResponder1.panHandlers}>
                    <Pressable onPress={() => { navigation.navigate("Liked Songs") }} style={{ height: 60 }} >
                        <View style={{ height: 60, width: 150, borderColor: "grey", borderWidth: 1, flexDirection: 'row', alignItems: "center", borderRadius: 36 }}>
                            <Image source={require("../images/main-page-icons/liked.png")} style={[{ height: 60, width: 60, marginRight: 10 }]} />
                            <View style={{}} >
                                <Text style={{ color: "white", fontSize: 20 }}>Liked</Text>
                                <Text style={{ color: "white", fontSize: 15 }}>Songs</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("History")} style={{ height: 60 }}>
                        <View style={{ height: 60, width: 150, borderRadius: 36, borderColor: "grey", borderWidth: 1, flexDirection: "row", alignItems: "center" }} >
                            <Image source={require("../images/main-page-icons/history.png")} style={[{ height: 60, width: 60, marginRight: 10 }]} />
                            <View>
                                <Text style={{ color: "white", fontSize: 20 }}>History</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 30 }}>
                    <View style={{ gap: 10, display: "flex", flexDirection: "row" }} >
                        <Pressable onPress={() => navigation.navigate("English")} style={{ backgroundColor: "#222831", height: 50, width: 150, marginRight: 30, display: "flex", flexDirection: "row", alignItems: "center" }} {...PanResponder1.panHandlers}>
                            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/english_image.jpeg?alt=media&token=b1f49d25-e650-4a8e-8c3b-30fcfdf7198b" }} style={{ height: 50, width: 50, marginRight: 10 }} />
                            <Text style={{ color: "white", fontSize: 17 }}>English</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Hindi")} style={{ backgroundColor: "#222831", height: 50, width: 150, display: "flex", flexDirection: "row", alignItems: "center" }} >
                            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/hindi-song-wallpaper.jpg?alt=media&token=ecb4aed9-5bcf-4f78-9a2b-3d40f81db590" }} style={{ height: 50, width: 50, marginRight: 10 }} />
                            <Text style={{ color: "white", fontSize: 17 }}>Hindi</Text>
                        </Pressable>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10, marginBottom: 70 }}>
                        <Pressable onPress={() => navigation.navigate("Telugu")} style={{ backgroundColor: "#222831", height: 50, width: 150, marginRight: 30, display: "flex", flexDirection: "row", alignItems: "center" }}>

                            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/telugu_wallpaper.jpg?alt=media&token=c79829f1-cd49-4552-8d70-8df3a5de5001" }} style={{ height: 50, width: 50, marginRight: 10 }} />
                            <Text style={{ color: "white", fontSize: 17 }}>Telugu</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Tamil")} style={{ backgroundColor: "#222831", height: 50, width: 150, display: "flex", flexDirection: "row", alignItems: "center" }}>

                            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/tamil_wallpaper.jpeg?alt=media&token=1d741501-7607-449c-ac8a-7f83a2517d0e" }} style={{ height: 50, width: 50, marginRight: 10 }} />
                            <Text style={{ color: "white", fontSize: 17 }}>Tamil</Text>
                        </Pressable>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                        <Pressable onPress={() => navigation.navigate("Best Songs of all time")} style={{ backgroundColor: "#222831", height: 50, width: 150, marginRight: 30, display: "flex", flexDirection: "row", alignItems: "center" }}>

                            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/best-songs-cover.jpg?alt=media&token=68d63d2a-7d79-430f-b688-77b316bf1357" }} style={{ height: 50, width: 50, marginRight: 7 }} />
                            <Text style={{ color: "white", width: 100 }}>Best songs of all time</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("Other Language")} style={{ backgroundColor: "#222831", height: 50, width: 150, display: "flex", flexDirection: "row", alignItems: "center" }}>

                            <Image source={{ uri: "https://firebasestorage.googleapis.com/v0/b/musicapp-c920a.appspot.com/o/other-langauge-songs.jpeg?alt=media&token=2e44c0b7-456c-4ae8-b8e9-9d801b4ef8c7" }} style={{ height: 50, width: 50, marginRight: 7 }} />
                            <Text style={{ color: "white", width: 90, fontSize: 13 }}>Other langauge songs</Text>

                        </Pressable>
                    </View>
                </View>
            </View>


            <Modal visible={visible} animationType='slide'>
                <View style={styles.modalview}>
                    <View>
                        <MaterialIcons name='keyboard-arrow-down' size={40} color='white' onPress={() => modalvisible(false)} />
                    </View>
                    <View style={styles.modelcontent}>
                        {/* <Image source={{uri: renderimage}} style={{height: 300,width:300,marginBottom: 20}}/> */}
                    <Image source={localbool?{uri: renderimage}:localimagebool?{uri: renderimage}:require("../images/song-cover.jpg")} style={{height: 300,width:300,marginBottom: 20}}/>
                    
                        <View style={{ marginBottom: 30, display: "flex", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 40 }}>{rendername}</Text>
                            <Text style={{ color: "white", fontSize: 20 }}>{renderauthor}</Text>
                        </View>

                        <Slider
                            style={styles.progressBar}
                            value={progress.position}
                            minimumValue={0}
                            maximumValue={progress.duration}
                            thumbTintColor="grey"
                            minimumTrackTintColor="#006550"
                            maximumTrackTintColor="white"
                            onSlidingComplete={async value => {
                                await TrackPlayer.seekTo(value);
                            }}
                        />
                    </View>
                    <View style={{ display: "flex", alignItems: "center" }}>
                        <View style={{ width: '90%', flexDirection: "row" }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ color: "white", fontSize: 15 }}>{new Date(progress.position * 1000).toLocaleTimeString().substring(3).replace("am", "").replace("pm", "")}</Text>
                            </View>
                            <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                <Text style={{ color: "white", fontSize: 15 }}>{new Date(progress.duration * 1000)
                                    .toLocaleTimeString()
                                    .substring(3).replace("am", "").replace("pm", "")}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20, marginTop: 30 }}>
                        <View style={{ marginRight: 30 }}>
                            <Pressable onPress={() => repeatmode()}>
                                <MaterialCommunityIcons name={repeatMode} size={25} color={'white'} />
                            </Pressable>
                        </View>

                        <Pressable style={{ opacity: skippreviousbool ? 0.5 : 1 }} onPress={() => { play(currentplayingsong - 1); setcurrentPlaying(currentplayingsong - 1) }} disabled={skippreviousbool}>
                            <MaterialCommunityIcons name={'skip-previous'} size={40} color={'white'} />
                        </Pressable>
                        <Pressable onPress={() => handlePlayback()}>
                            <MaterialCommunityIcons name={icon} size={70} color={"white"} />
                        </Pressable>
                        <Pressable style={{ opacity: skipnextbool ? 0.5 : 1 }} onPress={async () => { play(currentplayingsong + 1); setcurrentPlaying(currentplayingsong + 1) }} disabled={skipnextbool}>
                            <MaterialCommunityIcons name={'skip-next'} size={40} color={"white"} />
                        </Pressable>
                        <View style={{ marginLeft: 30 }}>
                            {alldata.map((e) => {
                                if (e['id'] === allcurrentplayingnum) {                                    
                                    return (
                                        <Pressable onPress={() => {liked(rendername)}}>
                                            <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor} />
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

            <View style={{ width: "90%", marginBottom: 20 }}>
                <Pressable style={{ width: "100%", borderRadius: 36 }} onPress={() => { modalvisible(true) }}>
                    <View style={{ backgroundColor: "#40A2E3", height: 60, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 36 }}>
                        {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                        <View style={{ display: "flex", flexDirection: "row", borderRadius: 36, width: '50%' }}>
                            <Image source={artworkbool ? { uri: renderimage } : coverbool ? { uri: renderimage } : require("../images/song-cover.jpg")} style={{ height: 60, width: 60, borderRadius: 36, marginRight: 10 }} />
                            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <Text style={{ color: "white", fontSize: 15 }}>{rendername === '' ? 'Press any song to play' : rendername}</Text>
                                <Text style={{ color: "white", fontSize: 15 }}>{renderauthor === '' ? 'play' : renderauthor}</Text>
                            </View>
                        </View>
                        <View style={{ width: "50%", justifyContent: "center", alignItems: "flex-end", borderRadius: 36 }}>
                            <Pressable onPress={() => handlePlayback()}>
                                <MaterialCommunityIcons name={icon} color="white" size={40} style={{ marginRight: 10 }} />
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flex: 1,
    },
    firstsection: {
        display: "flex",
        // flex:1,
        // backgroundColor: "green",
        margin: 20,
        flexDirection: "row",
        gap: 20,
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        backgroundColor: "white"
    },
})