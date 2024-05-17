import { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, Dimensions,ImageBackground,Button, BackHandler, TouchableOpacity, Pressable, Image, Modal, PanResponder, ScrollView } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TrackPlayer, { useProgress, Capability, AppKilledPlaybackBehavior, Event, RepeatMode, useTrackPlayerEvents } from 'react-native-track-player';
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
import { NetInfoCellularGeneration, addEventListener } from "@react-native-community/netinfo";
import Toast from "react-native-root-toast";

export default function MainPage({ navigation }) {

    

  let width = Dimensions.get('window').width;


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
    const [currentplayingsongname, setcurrentplayingsongname] = useState("");
    const [artworkbool, setartworkbool] = useState(true);
    const [coverbool, setcoverbool] = useState(true);
    const [cover, setcover] = useState("");
    const [likedbool1, setlikedbool1] = useState(true);
    const [songdata, setsongdata] = useState([]);
    const [localimagebool, setlocalimagebool] = useState(true);
    const [localbool, setlocalbool] = useState(null);
    const [history, sethistory] = useState([]);
    const [likedsong, setlikedsong] = useState([]);
    const [allcurrentplayingnum, setallcurrentplayingnum] = useState(0);
    const [likedsongbool1, setlikedsongbool1] = useState(false);
    const [recentdata, setrecentdata] = useState([]);
    const [connectionStatus,setconnectionStatus] = useState(null);

    // console.log("inside the main page");

    const PanResponder1 = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx < 0) {
                navigation.navigate("Search");
            }
        },
    });

    useEffect(async () => {
        let likedvalue = await AsyncStorage.getItem("liked");
        let arr = [];
        arr = JSON.parse(likedvalue);
        arr = [...new Set(arr)]
        setlikedsong(arr);
    }, [])

    

    async function likedvalueselect() {

        addEventListener(state => {
            // console.log(state);
            if(connectionStatus === null){
            if(state.isConnected === false){
                Toast.show("No Connection",Toast.durations.LONG);
                setconnectionStatus(false);
            }
            }
            if (connectionStatus === false){
                if(state.isConnected === true){
                    Toast.show("Back Online",Toast.durations.LONG);
                    setconnectionStatus(null);
                }
            }
        })

        

        let likedchangebool = await AsyncStorage.getItem("liked-change");
        let likedchangebool1 = await AsyncStorage.getItem("liked-change1");

        if (likedchangebool1 === "true") {
            AsyncStorage.setItem("liked", JSON.stringify([...new Set(likedsong)]))
            AsyncStorage.setItem("liked-change1", JSON.stringify(false));
        }

        if (likedchangebool === "true") {
            // console.log("inside likedchangebool")
            let likedvalue = await AsyncStorage.getItem("liked");
            let arr = [];
            arr = JSON.parse(likedvalue);

            arr = [...new Set(arr)]

            if (arr.length > [...new Set(likedsong)].length || arr.length < [...new Set(likedsong)].length) {
                setlikedsong(arr);
            }



            AsyncStorage.setItem("liked", JSON.stringify([...new Set(likedsong)]));
            AsyncStorage.setItem("liked-change", JSON.stringify(false));
        }

        let likedvalue1 = await AsyncStorage.getItem("liked");
        let arr1 = [];
        arr1 = JSON.parse(likedvalue1);

        arr1 = [...new Set(arr1)]
        let a = await TrackPlayer.getActiveTrack();
        // console.log("arr is ",arr);
        let likedbool = false;

        // console.log("entering the for loop")
        for (var i = 0; i < arr1.length; i++) {
            if (a['title'] === arr1[i]) {
                // console.log("inside the likedbool set to true");
                likedbool = true;

            }
        }
        if (likedbool) {
            setlikedicon('cards-heart');
        } else {
            setlikedcolor('white');
            setlikedicon('cards-heart-outline');
        }
        if (likedbool) {
            setlikedcolor('red');
        }
        // console.log(arr); 

        let localsongsbool = await AsyncStorage.getItem("local-songs-bool");

        if (localsongsbool === "true") {
            let currentplaying1 = await AsyncStorage.getItem("current-playing");
            setrendername(JSON.parse(currentplaying1));
            let localauthor = await AsyncStorage.getItem("data-author");
            setrenderauthor(JSON.parse(localauthor));
            let localartwork = await AsyncStorage.getItem("data-artwork");
            // console.log("localartowrk length is ",JSON.parse(localartwork).length);
            if (JSON.parse(localartwork).length === 0) {
                setrenderimage("null")
                setlocalimagebool(false);
            } else {
                setrenderimage(JSON.parse(localartwork));
                // setlocalimagebool(true);
                setlocalimagebool(true);

            }
            // await AsyncStorage.setItem("local-songs-bool",JSON.stringify(false));
        }
    }
    likedvalueselect();

    if (!artworkbool) {
        // console.log(coverbool);
        // AsyncStorage.setItem("data-artwork", JSON.stringify(coverbool ? cover : "null"));
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
        setcurrentPlaying(currentplayingnumber * 1);
        let songdata1 = [];
        songdata1 = JSON.parse(value) === 'folk' ? folkdata : JSON.parse(value) === 'best' ? bestdata : JSON.parse(value) === 'english' ? englishdata : JSON.parse(value) === 'other' ? otherdata : JSON.parse(value) === 'hindi' ? hindidata : JSON.parse(value) === 'tamil' ? tamildata : JSON.parse(value) === 'telugu' ? telugudata : JSON.parse(value) === 'soul' ? souldata : JSON.parse(value) === 'rock' ? rockdata : JSON.parse(value) === 'pop' ? popdata : [];
        setsongdata(songdata1)
        let currentplayingsong = await AsyncStorage.getItem("current-playing");
        setcurrentplayingsongname(currentplayingsong);
        let allcurrentplayingnum = await AsyncStorage.getItem("alldata-playing-num");
        setallcurrentplayingnum(allcurrentplayingnum * 1);
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
            if (JSON.parse(localartwork).length === 0) {
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

        console.log("inside the add event listener in the main page");

        let likedvalue = await AsyncStorage.getItem("liked");
        let arr = [];
        arr = JSON.parse(likedvalue);
        arr = [...new Set(arr)]

        let a = await TrackPlayer.getActiveTrack();
        console.log(a);

        setrenderimage(a['artwork'] === undefined ? coverbool ? a["cover"] : null : a["artwork"]);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        setcurrentplayingsongname(a['title'])

        let value = await AsyncStorage.getItem("genre");
        let songdata1 = [];

        songdata1 = JSON.parse(value) === 'folk' ? folkdata : JSON.parse(value) === 'best' ? bestdata : JSON.parse(value) === 'english' ? englishdata : JSON.parse(value) === 'other' ? otherdata : JSON.parse(value) === 'hindi' ? hindidata : JSON.parse(value) === 'tamil' ? tamildata : JSON.parse(value) === 'telugu' ? telugudata : JSON.parse(value) === 'soul' ? souldata : JSON.parse(value) === 'rock' ? rockdata : JSON.parse(value) === 'pop' ? popdata : [];
        setsongdata(songdata1)

        let likedbool = false;

        for (var i = 0; i < arr.length; i++) {
            if (a['title'] === arr[i]) {
                likedbool = true;

            }
        }

        if (likedbool) {
            setlikedcolor('red');
            setlikedicon('cards-heart');
        } else {
            setlikedcolor('white');
            setlikedicon('cards-heart-outline');
        }

        if (a["artwork"] === undefined) {
            // console.log("artwork is undefined");
        } else {
            setlocalbool(true);
        }
        if (a['id'] === 1) {
            setskippreviousbool(true);
        }
        if (a['id'] >= songdata1.length) {
            setskipnextbool(true);
        }
        
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

    const setUpTrackPlayer = async () => { try { await TrackPlayer.setupPlayer() } catch (err) { } }

    useEffect(() => { setUpTrackPlayer(); return () => TrackPlayer.destroy(); }, [])

    async function liked(title) {
        let likedvalue = await AsyncStorage.getItem("liked");
        let arr = [];
        arr = JSON.parse(likedvalue);
        arr = [...new Set(arr)]
        // console.log(arr);
        setlikedsong(arr);
        // console.log(likedicon);
        for (var i = 0; i < alldata.length; i++) {
            if (alldata[i]['title'] === title) {

                alldata[i]['liked'] = alldata[i]['liked'] === 'cards-heart' ? 'cards-heart-outline' : 'cards-heart';
                alldata[i]['color'] = alldata[i]['color'] === 'red' ? 'white' : 'red';
                // console.log(data[i]['liked'])
                if (likedicon === 'cards-heart-outline') {
                    console.log("inside the if in the liked function");
                    setlikedsong(current => [...current, alldata[i]['title']]);
                    // likedfunc();
                }
                else {
                    console.log("inside the else in the liked function");
                    if (arr.length === 1) {
                        console.log("inside the likedsong length === 1");
                        setlikedsong([]);
                        AsyncStorage.setItem("liked", JSON.stringify(""));
                    } else {
                        for (var i = 0; i < arr.length; i++) {
                            if (title === arr[i]) {
                                console.log("inside the title === likedsong[i]");
                                setlikedsong((products) => products.filter(a => a !== arr[i]));
                                // likedfunc();
                                break;
                            }
                        }
                    }
                }
                setlikedicon(likedicon === 'cards-heart-outline' ? 'cards-heart' : 'cards-heart-outline');
                // setbool(true);
                break;
            }
        }
        // AsyncStorage.setItem("liked-change",JSON.stringify(true));
        setlikedsongbool1(true);
        AsyncStorage.setItem("liked-change1", JSON.stringify(true));

    }

   
    // BackHandler.addEventListener("hardwareBackPress", () => {
    //     modalvisible(false);
    //     })


    async function play(id) {

        if(connectionStatus === false){
            Toast.show("No Connection",Toast.durations.LONG);
        }

        console.log(id);

        await TrackPlayer.reset();
        await AsyncStorage.setItem("current-playing-num", JSON.stringify(id));


        if (id === 1) {
            setskippreviousbool(true);
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext
                ]
            })
        } else {
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

        if (id >= songdata.length) {
            setskipnextbool(true)
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToPrevious
                ]
            })
        } else {
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
        for (var i = 0; i < songdata.length; i++) {
            if (songdata[i]['id'] === id) {
                await AsyncStorage.setItem('current-playing-song', JSON.stringify(songdata[i]['title']));
                AsyncStorage.setItem("current-playing", JSON.stringify(songdata[i]['title']));
                AsyncStorage.setItem("current-genre", JSON.stringify('folk'));
                if (history.length > 50) {
                    sethistory((songdata) => songdata.filter((_, index) => index !== 0));
                } else {
                    let date = new Date().toLocaleDateString();
                    let date1 = date;
                    // console.log(date1);
                    let data11 = date1 + ":" + songdata[i]['title']
                    sethistory((current) => [...current, data11]);
                }
                // await AsyncStorage.setItem("history",JSON.stringify(history));

                let arr = [songdata[i]];
                try {
                    if (i === 0) {
                        for (j = i + 1; j < songdata.length; j++) {
                            arr.push(songdata[i + j]);
                        }
                    }
                    else {
                        for (j = i; j < songdata.length - 1; j++) {
                            arr.push(songdata[j + 1]);
                        }
                    }

                    TrackPlayer.addEventListener("remote-play", () => {
                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(true));
                        seticon("motion-pause");
                        TrackPlayer.play();
                    })

                    TrackPlayer.addEventListener("remote-pause", () => {
                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(false));
                        seticon("motion-play");
                        TrackPlayer.pause();
                    })

                    TrackPlayer.addEventListener("remote-previous", async () => {
                        setcurrentPlaying(currentplayingsong - 1);
                        let a = await TrackPlayer.getActiveTrack();
                        play(a["id"] - 1);
                    })

                    TrackPlayer.addEventListener("remote-next", async () => {
                        setcurrentPlaying(currentplayingsong + 1);
                        let a = await TrackPlayer.getActiveTrack();
                        play(a["id"] + 1);
                    })
                    TrackPlayer.add(arr);
                    TrackPlayer.play();
                    TrackPlayer.setRepeatMode(RepeatMode.Queue);
                    break;
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
    async function play1(id) {

        if(connectionStatus === false){
            Toast.show("No Connection",Toast.durations.LONG);
        }

        console.log(id);

        await TrackPlayer.reset();
        await AsyncStorage.setItem("current-playing-num", JSON.stringify(id));


        if (id === 1) {
            setskippreviousbool(true);
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext
                ]
            })
        } else {
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

        if (id >= alldata.length) {
            setskipnextbool(true)
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToPrevious
                ]
            })
        } else {
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
        for (var i = 0; i < alldata.length; i++) {
            if (alldata[i]['id'] === id) {
                await AsyncStorage.setItem('current-playing-song', JSON.stringify(alldata[i]['title']));
                AsyncStorage.setItem("current-playing", JSON.stringify(alldata[i]['title']));
                AsyncStorage.setItem("current-genre", JSON.stringify('folk'));
                if (history.length > 50) {
                    sethistory((alldata) => alldata.filter((_, index) => index !== 0));
                } else {
                    let date = new Date().toLocaleDateString();
                    let date1 = date;
                    // console.log(date1);
                    let data11 = date1 + ":" + alldata[i]['title']
                    sethistory((current) => [...current, data11]);
                }
                // await AsyncStorage.setItem("history",JSON.stringify(history));

                let arr = [alldata[i]];
                try {
                    if (i === 0) {
                        for (j = i + 1; j < alldata.length; j++) {
                            arr.push(alldata[i + j]);
                        }
                    }
                    else {
                        for (j = i; j < alldata.length - 1; j++) {
                            arr.push(alldata[j + 1]);
                        }
                    }

                    TrackPlayer.addEventListener("remote-play", () => {
                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(true));
                        seticon("motion-pause");
                        TrackPlayer.play();
                    })

                    TrackPlayer.addEventListener("remote-pause", () => {
                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(false));
                        seticon("motion-play");
                        TrackPlayer.pause();
                    })

                    TrackPlayer.addEventListener("remote-previous", async () => {
                        setcurrentPlaying(currentplayingsong - 1);
                        let a = await TrackPlayer.getActiveTrack();
                        play1(a["id"] - 1);
                    })

                    TrackPlayer.addEventListener("remote-next", async () => {
                        setcurrentPlaying(currentplayingsong + 1);
                        let a = await TrackPlayer.getActiveTrack();
                        play1(a["id"] + 1);
                    })
                    TrackPlayer.add(arr);
                    TrackPlayer.play();
                    TrackPlayer.setRepeatMode(RepeatMode.Queue);
                    break;
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }

    async function handlePlayback() {
        seticon(icon === 'motion-play' ? 'motion-pause' : 'motion-play');
        icon === 'motion-play' ? TrackPlayer.play() : TrackPlayer.pause();
        // console.log(icon);
        if (bool === false) {
            if (icon === 'motion-play') {
                let currentplayingsong = await AsyncStorage.getItem("current-playing-num");
                currentplayingsong = currentplayingsong * 1;
                play(currentplayingsong);
                setcurrentPlaying(currentplayingsong);
                setbool(true);
            }
        }
        if (icon === 'motion-pause') {
            await AsyncStorage.setItem('song-playing-bool', JSON.stringify('false'));
        }
    }

    // useEffect(async () => {
    //     let historydata = await AsyncStorage.getItem("history");
    //     historydata = JSON.parse(historydata);
    //     let arr = []
    //     for(var i=0;i<5;i++){
    //         arr = historydata[i].split(":");
    //         console.log(arr[1]);
    //     }
    // },[])

    useEffect(async () => {
        let arr = [];
        let arr1 = [];
        for (var i = 0; i < 5; i++) {
            let value = Math.floor(Math.random() * 470);
            arr.push(value);
        }
        console.log(arr);

        for (var j = 0; j < alldata.length; j++) {
            for (var k = 0; k < arr.length; k++) {
                if (alldata[j]['id'] === arr[k]) {
                    arr1.push(alldata[j]);
                }
            }
        }
        console.log(arr1);
        setrecentdata(arr1);
    }, [])

    return (
        <View style={styles.maincontainer}>
            <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <View style={styles.firstsection}>
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
                <View style={[{ marginTop: 30, gap: 10, display: "flex" }]}>
                    <Text style={[{ color: "white", marginBottom: 20,marginLeft: 20,fontSize: 20 }]}>Suggested for You</Text>
                    <ScrollView horizontal={true} style={[{ howsHorizontalScrollIndicator: false }]}>
                    {recentdata.map((e) => {
                        {/* console.log(e['title']) */}
                        return (
                                <Pressable style={{display:"flex",marginRight: 10,marginLeft: 20}} onPress={() => {play1(e['id']);console.log(e['id'])}}>
                                    <Image source={{ uri: e['artwork'] }} style={{ height: 140, width: 140, marginRight: 7 }}/>
                                    <Text style={{ color: "white" }}>{e['title']}</Text>
                                    <Text style={{ color: "white" }}>{e['artist']}</Text>
                                </Pressable>
                        )
                    })}
                    </ScrollView>
                </View>
            </View>



            <Modal visible={visible} animationType='slide'>
                <View style={[styles.modalview]}>
                
                {/* <ImageBackground source={{uri: renderimage}} style={{height:height+50,opacity: 1}}> */}

                    <View>
                        <MaterialIcons name='keyboard-arrow-down' size={40} color='white' onPress={() => modalvisible(false)} />
                    </View>
                    <View style={styles.modelcontent}>
                        {/* <Image source={{uri: renderimage}} style={{height: 300,width:300,marginBottom: 20}}/> */}
                        <Image source={localbool ? { uri: renderimage } : localimagebool ? { uri: renderimage } : require("../images/song-cover.jpg")} style={{ height: 380, width: width-30, marginBottom: 20 }} />

                        <View style={{ marginBottom: 30, display: "flex", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 20}}>{rendername}</Text>
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
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20}}>
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
                            {/* {alldata.map((e) => {
                                if (e['id'] === allcurrentplayingnum) {                                    
                                    return (
                                        <Pressable onPress={() => {liked(rendername)}}>
                                            <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor} />
                                        </Pressable>
                                    )
                                }

                            })} */}
                            <Pressable onPress={() => { liked(rendername) }}>
                                <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor} />
                            </Pressable>
                        </View>


                    </View>

                    {/* </ImageBackground> */}
                    {/* <Image source={} /> */}
                </View>
                <StatusBar backgroundColor='transparent' />
            </Modal>

            <View style={{ width: "90%", marginBottom: 20 }}>
                <Pressable style={{ width: "100%", borderRadius: 36 }} onPress={() => { modalvisible(true) }}>
                    <View style={{ backgroundColor: "#205295", height: 60, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 36 }}>
                        {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                        <View style={{ display: "flex", flexDirection: "row", borderRadius: 36, width: '50%' }}>
                            <Image source={localbool ? { uri: renderimage } : localimagebool ? { uri: renderimage } : require("../images/song-cover.jpg")} style={{ height: 60, width: 60, borderRadius: 36, marginRight: 10 }} />
                            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <Text style={{ color: "white", fontSize: 15,width:'100%' }}>{rendername === '' ? '' : rendername.length>20?rendername.substring(0,20)+"...":rendername}</Text>
                                <Text style={{ color: "white", fontSize: 15 }}>{renderauthor === '' ? '' : renderauthor.length>20?renderauthor.substring(0,20)+"...":renderauthor}</Text>
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
            {/* {console.log(connectionStatus)}
            {connectionStatus && <Toast message='No internt connection'/>} */}


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
        backgroundColor: "#212529",
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