import { View, Text, BackHandler, StyleSheet, ScrollView, Pressable, Image, Modal,Dimensions } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import alldata from '../AllData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrackPlayer, { useProgress, Capability, AppKilledPlaybackBehavior, Event, RepeatMode, useTrackPlayerEvents } from 'react-native-track-player';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from 'react-native-slider';
import { StatusBar } from 'expo-status-bar';
// import alldata from '../AllData';
import bestdata from '../language/bestdata';
import englishdata from '../language/englishdata';
import hindidata from '../language/hindidata';
import otherdata from '../language/otherdata';
import tamildata from '../language/tamildata';
import telugudata from '../language/telugudata';
import folkdata from './folkdata';
import popdata from './popdata';
import souldata from './souldata';
import rockdata from './rockdata';

export default function Liked({ navigation }) {

  let width = Dimensions.get('window').width;


    const [currentplayingsong, setcurrentPlaying] = useState(0);
    const [songname, setsongname] = useState([]);
    const [likedicon, setlikedicon] = useState("cards-heart-outline");
    const [likedsong, setlikedsong] = useState([]);
    const [bool, setbool] = useState(false);
    const [bool1, setbool1] = useState(false);
    const [renderimage, setrenderimage] = useState(null);
    const [rendername, setrendername] = useState('');
    const [renderauthor, setrenderauthor] = useState('');
    const [icon, seticon] = useState("motion-play");
    const [visible, modalvisible] = useState(false);
    const [localbool, setlocalbool] = useState(null);
    const [localimagebool, setlocalimagebool] = useState(true);
    const [repeatMode, setRepeatMode] = useState('repeat');
    const [skipnextbool, setskipnextbool] = useState(false);
    const [skippreviousbool, setskippreviousbool] = useState(false);
    const [songdata, setsongdata] = useState([]);
    const [songlikedbool, setsonglikedbool] = useState(false);
    const [likedcolor, setlikedcolor] = useState("white");
    const [allcurrentplayingnum, setallcurrentplayingnum] = useState(0);





    // console.log(songname);
    // console.log(likedsong);

    const progress = useProgress();

    useEffect(async () => {
        let value = await AsyncStorage.getItem("genre");
        let currentplayingnumber = await AsyncStorage.getItem("current-playing-num");
        setcurrentPlaying(currentplayingnumber * 1);
        let songdata1 = [];
        songdata1 = JSON.parse(value) === 'folk' ? folkdata : JSON.parse(value) === 'best' ? bestdata : JSON.parse(value) === 'english' ? englishdata : JSON.parse(value) === 'other' ? otherdata : JSON.parse(value) === 'hindi' ? hindidata : JSON.parse(value) === 'tamil' ? tamildata : JSON.parse(value) === 'telugu' ? telugudata : JSON.parse(value) === 'soul' ? souldata : JSON.parse(value) === 'rock' ? rockdata : JSON.parse(value) === 'pop' ? popdata : [];
        setsongdata(songdata1)
        let allcurrentplayingnum = await AsyncStorage.getItem("alldata-playing-num");
        setallcurrentplayingnum(allcurrentplayingnum * 1);
    }, [])

    async function likedvalueselect() {
        let likedvalue1 = await AsyncStorage.getItem("liked");
        let arr1 = [];
        arr1 = JSON.parse(likedvalue1);
        arr1 = [...new Set(arr1)]
        let a = await TrackPlayer.getActiveTrack();
        let likedbool = false;
        for (var i = 0; i < arr1.length; i++) {
            if (a['title'] === arr1[i]) {
                likedbool = true;

            }
        }
        if (likedbool) {
            setlikedcolor('red');
        } else {
            setlikedcolor('white');
            setlikedicon('cards-heart-outline');
        }
        if(likedbool){
            setlikedicon('cards-heart');
        }
        let localsongsbool = await AsyncStorage.getItem("local-songs-bool");

        if (localsongsbool === "true") {
            let currentplaying1 = await AsyncStorage.getItem("current-playing");
            console.log(currentplaying1);
            setrendername(JSON.parse(currentplaying1));
            let localauthor = await AsyncStorage.getItem("data-author");
            setrenderauthor(JSON.parse(localauthor));
            let localartwork = await AsyncStorage.getItem("data-artwork");
            if (JSON.parse(localartwork).length === 0) {
                setrenderimage("null")
                setlocalimagebool(false);
            } else {
                setrenderimage(JSON.parse(localartwork));
                setlocalimagebool(true);

            }
            // await AsyncStorage.setItem("local-songs-bool",JSON.stringify(false));
        }
    }
    likedvalueselect();

    const events = [
        Event.PlaybackState,
        Event.PlaybackError,
    ];


    useTrackPlayerEvents(events, (event) => {
        if (event.type === Event.PlaybackState) {
            if (event.state === 'paused') {
                AsyncStorage.setItem("song-playing-bool", JSON.stringify(false));
                seticon('motion-play');
            }
            else if (event.state === 'playing') {
                AsyncStorage.setItem("song-playing-bool", JSON.stringify(true));
                seticon('motion-pause');
            }
            else if (event.state === 'stopped') {
                AsyncStorage.setItem("song-playing-bool", JSON.stringify(false))
                seticon('motion-play');
            }
        }
    })


    if (bool) {
        if (likedsong.length < songname.length) {
            let arr1 = [];
            setsongname(arr1);
            for (var i = 0; i < songname.length; i++) {
                for (var j = 0; j < likedsong.length; j++) {
                    if (songname[i]['title'] === likedsong[j]) {
                        arr1.push(songname[i]);
                    }
                }
            }
            setsongname(arr1);
            setbool(false);
        }
    }

    let arr1 = [];

    const setUpTrackPlayer = async () => { try { await TrackPlayer.setupPlayer() } catch (err) { } }

    useEffect(() => { setUpTrackPlayer(); return () => TrackPlayer.destroy(); }, [])


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
            if (navigation.isFocused()) {
                if (navigation.canGoBack()) {
                    navigation.goBack();
                    return true;
                }
            }
            if (!navigation.isFocused()) {
                if (navigation.canGoBack()) {
                    BackHandler.exitApp();
                    return true;
                }
            }
        })
    }, [])

    useEffect(async () => {
        // let currentplayinvalue = await AsyncStorage.getItem("current-playing-num");
        let currentplaying = await AsyncStorage.getItem("current-playing")
        for (var i = 0; i < songdata.length; i++) {
            if (JSON.parse(currentplaying) === songdata[i]['title']) {
                setcurrentPlaying(songdata[i]['id']);
                AsyncStorage.setItem("current-playing-num", JSON.stringify(songdata[i]['id']));
            }
        }
    }, [])





    const liked1 = useCallback(async () => {
        //AsyncStorage.setItem("liked",JSON.stringify(""));

        let bool1 = await AsyncStorage.getItem('song-playing-bool');
        if (bool1 === 'true') {
            seticon('motion-pause');
        } else {
            seticon('motion-play');
        }

        let value = await AsyncStorage.getItem("liked");
        let arr = JSON.parse(value);
        let arr1 = [];
        arr = [...new Set(arr)];
        let flag = false;
        for (var i = 0; i < alldata.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === alldata[i]['title']) {
                    arr1.push(alldata[i]);

                }
            }
        }
        for (var i = 0; i < arr1.length; i++) {
            arr1[i]['liked'] = 'cards-heart';
            arr1[i]['color'] = 'red';
            setlikedsong(current => [...current, arr1[i]['title']]);
        }
        setsongname(arr1);
        setbool(true);

        for (var i = 0; i < alldata.length; i++) {
            let value1 = await AsyncStorage.getItem("current-playing");
            if (alldata[i]['title'] === JSON.parse(value1)) {
                setrenderimage(alldata[i]['artwork']);
                setrendername(alldata[i]['title']);
                setrenderauthor(alldata[i]['artist']);
                break;
            }
        }
    })

    useEffect(liked1, [])

    if (songlikedbool) {
        if (likedsong.length > 0) {
            let arr = [];
            for (var i = 0; i < likedsong.length; i++) {
                arr.push(likedsong[i]);
            }
            AsyncStorage.setItem("liked", JSON.stringify(arr));
            AsyncStorage.setItem("liked-change", JSON.stringify(true));
            setsonglikedbool(false);
        }
    }

    async function play(id) {

        await AsyncStorage.setItem("current-genre", JSON.stringify("liked"));
        await AsyncStorage.setItem("local-songs-bool",JSON.stringify(false));

        await TrackPlayer.reset();
        await AsyncStorage.setItem("current-playing-num", JSON.stringify(id));
        for (var i = 0; i < songname.length; i++) {
            if (songname[i]['id'] === id) {
                if (i === songname.length - 1) {
                    TrackPlayer.updateOptions({
                        capabilities: [
                            Capability.Play,
                            Capability.Pause,
                            Capability.SkipToPrevious
                        ]
                    })
                } else {
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
                await AsyncStorage.setItem('current-playing-song', JSON.stringify(songname[i]['title']));
                AsyncStorage.setItem("current-playing", JSON.stringify(songname[i]['title']));
                // AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                let arr = [songname[i]];
                try {
                    if (i === 0 && songname.length > 1) {
                        for (j = i + 1; j < alldata.length; j++) {
                            arr.push(songname[i + j]);
                        }
                    }
                    else {
                        for (j = i; j < songname.length - 1; j++) {
                            arr.push(songname[i + 1]);
                        }
                    }

                    TrackPlayer.addEventListener("remote-play", () => {
                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(true));
                        TrackPlayer.play();
                    })

                    TrackPlayer.addEventListener("remote-pause", () => {

                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(false));
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
                    let arr1 = [];
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] !== undefined) {
                            arr1.push(arr[i]);
                        }
                    }
                    TrackPlayer.add(arr1);
                    // AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                    TrackPlayer.play();
                    // console.log(RepeatMode);
                    TrackPlayer.setRepeatMode(RepeatMode.Queue);
                    break;
                } catch (err) {
                    // console.log(1,err);
                }
            }
        }
    }

    async function play1(id) {

        await AsyncStorage.setItem("current-genre", JSON.stringify("liked"));

        await TrackPlayer.reset();
        await AsyncStorage.setItem("current-playing-num", JSON.stringify(id));
        for (var i = 0; i < songdata.length; i++) {
            if (songdata[i]['id'] === id) {
                if (i === songdata.length - 1) {
                    TrackPlayer.updateOptions({
                        capabilities: [
                            Capability.Play,
                            Capability.Pause,
                            Capability.SkipToPrevious
                        ]
                    })
                } else {
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
                await AsyncStorage.setItem('current-playing-song', JSON.stringify(songdata[i]['title']));
                AsyncStorage.setItem("current-playing", JSON.stringify(songdata[i]['title']));
                // AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                let arr = [songdata[i]];
                try {
                    if (i === 0 && songdata.length > 1) {
                        for (j = i + 1; j < alldata.length; j++) {
                            arr.push(songdata[i + j]);
                        }
                    }
                    else {
                        for (j = i; j < songdata.length - 1; j++) {
                            arr.push(songdata[i + 1]);
                        }
                    }

                    TrackPlayer.addEventListener("remote-play", () => {
                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(true));
                        TrackPlayer.play();
                    })

                    TrackPlayer.addEventListener("remote-pause", () => {

                        AsyncStorage.setItem("song-playing-bool", JSON.stringify(false));
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
                    let arr1 = [];
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] !== undefined) {
                            arr1.push(arr[i]);
                        }
                    }
                    TrackPlayer.add(arr1);
                    // AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                    TrackPlayer.play();
                    // console.log(RepeatMode);
                    TrackPlayer.setRepeatMode(RepeatMode.Queue);
                    break;
                } catch (err) {
                    // console.log(1,err);
                }
            }
        }
    }

    TrackPlayer.addEventListener("playback-track-changed", async () => {
        let a = await TrackPlayer.getActiveTrack();


        songdata = JSON.parse(value) === 'folk' ? folkdata : JSON.parse(value) === 'best' ? bestdata : JSON.parse(value) === 'english' ? englishdata : JSON.parse(value) === 'other' ? otherdata : JSON.parse(value) === 'hindi' ? hindidata : JSON.parse(value) === 'tamil' ? tamildata : JSON.parse(value) === 'telugu' ? telugudata : JSON.parse(value) === 'soul' ? souldata : JSON.parse(value) === 'rock' ? rockdata : JSON.parse(value) === 'pop' ? popdata : [];
        setsongdata(songdata);
        if (a["artwork"] === undefined) {
            // console.log("artwork is undefined");
        } else {
            setlocalbool(true);
        }
        if (a['id'] === 1) {
            setskippreviousbool(true);
        }
        if (a['id'] >= songdata.length) {
            setskipnextbool(true);
        }

        setrenderimage(a['artwork']);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        // seticon(icon === 'play-arrow'?'pause':'play-arrow');
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

    function repeatmode() {
        if (repeatMode === 'repeat-once') {
            // console.log("inside repeat once")
            TrackPlayer.setRepeatMode(RepeatMode.Queue);
            setRepeatMode('repeat')
        }
        if (repeatMode === 'repeat') {
            // console.log("inside repeat")
            TrackPlayer.setRepeatMode(RepeatMode.Off);
            setRepeatMode('repeat-off')
        }
        if (repeatMode === 'repeat-off') {
            // console.log("inside repeat off")
            TrackPlayer.setRepeatMode(RepeatMode.Track);
            setRepeatMode('repeat-once');
        }

    }


    async function liked(name,title) {
        // console.log(title);
        if(name === "songdata"){
        if (likedicon === 'cards-heart-outline') {
            // console.log(songdata);
            for (var i = 0; i < alldata.length; i++) {
                if (alldata[i]['title'] === title) {
                    console.log("inside the likedicon cards-heart-outline");
                    // console.log(songdata[i])
                    setlikedsong(current => [...current, alldata[i]['title']]);
                    setsongname(current => [...current,alldata[i]]);
                    break;
                }
            }
            colorchange(title);
        } else {


            if (likedsong.length === 1) {
                setlikedsong([]);
                //AsyncStorage.setItem("liked",JSON.stringify(""));
            } else {
                for (var i = 0; i < likedsong.length; i++) {
                    if (title === likedsong[i]) {
                        console.log("inside the if in else in if");
                        setlikedsong((products) => products.filter(a => a !== likedsong[i]));
                        break;
                    }
                }
            }        // setbool(true);

        }
        setlikedicon(likedicon === 'cards-heart-outline' ? 'cards-heart' : 'cards-heart-outline');
        setbool(true);

    } else if(name === "songname"){
        if (likedsong.length === 1) {
            console.log("inside the likedsong.length === 1");
            setlikedsong([]);
        } else {
            console.log("inside the else in else")
            for (var i = 0; i < songname.length; i++) {
                if (title === songname[i]['title']) {
                    console.log("inside the else in else in if");
                    setlikedsong((products) => products.filter(a => a !== songname[i]['title']));
                    break;
                }
            }
        }
        setlikedicon(likedicon === 'cards-heart-outline' ? 'cards-heart' : 'cards-heart-outline');
        setbool(true);
    }
        // setlikedsongbool1(true);
    }


    async function handlePlayback() {
        seticon(icon === 'motion-play' ? 'motion-pause' : 'motion-play');
        icon === 'motion-play' ? TrackPlayer.play() : TrackPlayer.pause();
        // console.log(icon);
        if (bool1 === false) {
            if (icon === 'motion-play') {
                // console.log("inside motion play");
                let currentplayingsong = await AsyncStorage.getItem("current-playing-num");
                // setbool(true);
                currentplayingsong = currentplayingsong * 1;
                play(currentplayingsong);
                setcurrentPlaying(currentplayingsong);
                setbool1(true);

            }
        }
        if (icon === 'motion-pause') {
            // console.log("inside motion pause");
            await AsyncStorage.setItem('song-playing-bool', JSON.stringify('false'));
        }

    }

    return (
        <View style={[styles.likedview]}>
            <View style={{ width: '100%', flex: 1 }}>
                <ScrollView style={{ width: '100%', height: "100%" }}>
                    {/* <Song_Render data={data} /> */}
                    <View style={{ width: '100%', flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            {songname.map((e) => {
                                return (
                                    <View style={{ flex: 1, width: '100%', display: "flex", justifyContent: "center" }}>
                                        <Pressable style={{ width: '100%', display: "flex", alignItems: "center" }} onPress={() => { play(e['id']); setcurrentPlaying(e['id']) }}>

                                            {/* <Pressable> */}
                                            {/* {console.log(TrackPlayer.getProgress().then((e) => console.log(e)))}
                    {console.log(TrackPlayer.play())} */}
                                            {/* <View style={{width:'100%',display:"flex",alignItems: "center",flex:1}}> */}
                                            <View style={styles.songblock}>
                                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: '50%' }}>
                                                    <View style={{ marginRight: 10 }}>
                                                        <Image source={{ uri: e['artwork'] }} style={{ height: 60, width: 60, borderRadius: 36 }} />
                                                    </View>
                                                    <View>
                                                        <Text style={{ color: "white", fontSize: 20 }}>{e['title']}</Text>
                                                        <Text style={{ color: "white" }}>{e['artist']}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ display: "flex", alignItems: 'flex-end', width: '50%', padding: 10 }} >
                                                    <Pressable onPress={() => { liked("songname",e['title']), setsonglikedbool(true) }}>
                                                        <MaterialCommunityIcons name={'cards-heart'} size={30} color={'red'} />
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </Pressable>

                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Modal visible={visible} animationType='slide'>
                <View style={styles.modalview}>
                    <View>
                        <MaterialIcons name='keyboard-arrow-down' size={40} color='white' onPress={() => modalvisible(false)} />
                    </View>
                    <View style={styles.modelcontent}>
                        <Image source={localbool ? { uri: renderimage } : localimagebool ? { uri: renderimage } : require("../../images/song-cover.jpg")} style={{ height: 380, width: width-30, marginBottom: 20 }} />
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

                        <Pressable style={{ opacity: skippreviousbool ? 0.5 : 1 }} onPress={() => { play1(currentplayingsong - 1); setcurrentPlaying(currentplayingsong - 1) }} disabled={skippreviousbool}>
                            <MaterialCommunityIcons name={'skip-previous'} size={40} color={'white'} />
                        </Pressable>
                        <Pressable onPress={() => handlePlayback()}>
                            <MaterialCommunityIcons name={icon} size={70} color={"white"} />
                        </Pressable>
                        <Pressable style={{ opacity: skipnextbool ? 0.5 : 1 }} onPress={async () => { play1(currentplayingsong + 1); setcurrentPlaying(currentplayingsong + 1) }} disabled={skipnextbool}>
                            <MaterialCommunityIcons name={'skip-next'} size={40} color={"white"} />
                        </Pressable>
                        <View style={{ marginLeft: 30 }}>
                            {/* {alldata.map((e) => {
                        if(e['id'] === allcurrentplayingnum){
                            return(
                            <Pressable onPress={() => {liked(rendername),setsonglikedbool(true)}}>
                                <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor}/>
                            </Pressable>
                        )
                        }
                    })} */}
                            <Pressable onPress={() => { liked("songdata",rendername), setsonglikedbool(true) }}>
                                <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor} />
                            </Pressable>
                        </View>
                    </View>


                    {/* <Image source={} /> */}
                </View>
                <StatusBar backgroundColor='#212529' />

            </Modal>
            <View style={{ width: "90%", marginBottom: 20 }}>
                <Pressable style={{ width: "100%", borderRadius: 36 }} onPress={() => { modalvisible(true) }}>
                    <View style={{ backgroundColor: "#205295", height: 60, width: "100%", display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 36 }}>
                        {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                        <View style={{ display: "flex", flexDirection: "row", borderRadius: 36, width: '50%' }}>
                            <Image source={{ uri: renderimage }} style={{ height: 60, width: 60, borderRadius: 36, marginRight: 10 }} />
                            <View style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <Text style={{ color: "white", fontSize: 20 }}>{rendername === '' ? 'Press any song to play' : rendername}</Text>
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
    likedview: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flex: 1,
        width: '100%'
    },
    songblock: {
        display: "flex",
        backgroundColor: "#50C4ED",
        // marginBottom: 10,
        // padding: 10,
        width: '90%',
        marginTop: 20,
        borderRadius: 30,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
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