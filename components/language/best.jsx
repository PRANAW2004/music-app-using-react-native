import { View,Text,BackHandler,StyleSheet,Pressable,Image,ScrollView,Modal,Dimensions } from "react-native";
import { useEffect,useState,useCallback } from "react";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from 'react-native-slider';
import { StatusBar } from "expo-status-bar";
import alldata from '../AllData';
import bestdata from './bestdata';
import englishdata from './englishdata';
import hindidata from './hindidata';
import otherdata from './otherdata';
import tamildata from './tamildata';
import telugudata from './telugudata';
import folkdata from '../screens/folkdata';
import popdata from '../screens/popdata';
import souldata from '../screens/souldata';
import rockdata from '../screens/rockdata';

export default function Best({navigation}){

  let width = Dimensions.get('window').width;


    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');
    const [likedicon,setlikedicon] = useState("cards-heart-outline");
    const [likedcolor, setlikedcolor] = useState("white");
    const [likedsong,setlikedsong] = useState([]);
    const [bool,setbool] = useState(false);
    const [visible,modalvisible] = useState(false);
    const [icon,seticon] = useState("motion-play");
    const [currentplayingsong,setcurrentPlaying] = useState(0);
    const [repeatMode,setRepeatMode] = useState('repeat');
    const [skipnextbool,setskipnextbool] = useState(false);
    const [skippreviousbool,setskippreviousbool] = useState(false);
    const [history,sethistory] = useState([]);
    const [localbool,setlocalbool] = useState(null);
    const [localimagebool,setlocalimagebool] = useState(true);
    const [songdata,setsongdata] = useState([]);
    const [coverbool, setcoverbool] = useState(true);
    const [artworkbool, setartworkbool] = useState(true);
    const [songlikedbool,setsonglikedbool] = useState(false);


    
    const events = [
        Event.PlaybackState,
        Event.PlaybackError,
      ];

    useTrackPlayerEvents(events, (event) => {
            if (event.type === Event.PlaybackState) {
                  if(event.state === 'paused'){
                    AsyncStorage.setItem("song-playing-bool",JSON.stringify(false));
                      seticon('motion-play');
                  }
                  else if(event.state === 'playing'){
                    AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                      seticon('motion-pause');
                  }
                  else if(event.state === 'stopped'){
                    AsyncStorage.setItem("song-playing-bool",JSON.stringify(false))
                    seticon('motion-play');
                }
            }
      })

    const progress = useProgress();

    async function bestlikedvalueselect(){
        let likedvalue1 = await AsyncStorage.getItem("liked");
        let arr1 = [];
        arr1 = JSON.parse(likedvalue1);

        arr1 = [...new Set(arr1)]
        let a = await TrackPlayer.getActiveTrack();
        // console.log("arr is ",arr);
        let likedbool = false;
        
        // console.log("entering the for loop")
        for(var i=0;i<arr1.length;i++){
            if(a['title'] === arr1[i]){
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
    bestlikedvalueselect();

    useEffect(async () => {
        let value = await AsyncStorage.getItem("genre");
        let currentplayingnumber = await AsyncStorage.getItem("current-playing-num");
        setcurrentPlaying(currentplayingnumber*1);
        let songdata1 = [];
        songdata1 = JSON.parse(value) === 'folk'?folkdata:JSON.parse(value) === 'best'?bestdata:JSON.parse(value)==='english'?englishdata:JSON.parse(value)==='other'?otherdata:JSON.parse(value)==='hindi'?hindidata:JSON.parse(value)==='tamil'?tamildata:JSON.parse(value)==='telugu'?telugudata:JSON.parse(value)==='soul'?souldata:JSON.parse(value)==='rock'?rockdata:JSON.parse(value)==='pop'?popdata:[];
        setsongdata(songdata1)
    },[])

    const setUpTrackPlayer = async () => {try{await TrackPlayer.setupPlayer()}catch(err){}}    

    useEffect(() => {setUpTrackPlayer();return () => TrackPlayer.destroy();}, [])
    useEffect(async () => {
        let value11 = await AsyncStorage.getItem("current-genre");
        if(value11 === "best"){
            const skipprevious = useCallback(async() => {
                let iconnum1 = await AsyncStorage.getItem("current-playing-num");
                if(JSON.parse(iconnum1) === 1){
                    setskippreviousbool(true);
                }
              })    
              useEffect(skipprevious,[]);
        
              const skipnext = useCallback(async() => {
                let iconnum1 = await AsyncStorage.getItem("current-playing-num");
                if(iconnum1 >= bestdata.length){
                    setskipnextbool(true);
                }
              })    
              useEffect(skipnext,[]);
        }else{
        }
    },[]);

    const historydata = useCallback(async() => {
        let historydata = await AsyncStorage.getItem("history");
        let data = JSON.parse(historydata);
        for(var i=0;i<data.length;i++){
            sethistory(current => [...current,data[i]]);
        }
      })
      useEffect(historydata,[]);

    const likeddata = useCallback(async() => {

        let bool1 = await AsyncStorage.getItem('song-playing-bool');
        if(bool1 === 'true'){
            seticon('motion-pause');
        }else{
            seticon('motion-play');
        }

        value = await AsyncStorage.getItem("liked");
        arr = JSON.parse(value);
        arr = [...new Set(arr)];
        for(var i=0;i<alldata.length;i++){
          for(var j=0;j<arr.length;j++){
           if(alldata[i]['title'] === arr[j]){
             setlikedsong(current => [...current,alldata[i]['title']]);
           }
          }
        }
        if(arr.length === 0){
            for(var i=0;i<bestdata.length;i++){
                if(bestdata[i]['liked'] === 'cards-heart'){
                    bestdata[i]['liked'] = 'cards-heart-outline';
                    bestdata[i]['color'] = 'white';
                }
            }
        }

        for(var i=0;i<bestdata.length;i++){
            for(var j=0;j<arr.length;j++){
                if(bestdata[i]['title'] === arr[j]){
                    bestdata[i]['liked'] = 'cards-heart';
                    bestdata[i]['color'] = 'red';
                    break;
                }else{
                    bestdata[i]['liked'] = 'cards-heart-outline';
                    bestdata[i]['color'] = 'white';
                }
            }
        }  
    })
    useEffect(likeddata,[]);


    let currentplaying;

    const currentPlaying = useCallback(async () => {

        let localsongsbool = await AsyncStorage.getItem("local-songs-bool");
    
        if(localsongsbool === "true"){
            let currentplaying1 = await AsyncStorage.getItem("current-playing");
            setrendername(JSON.parse(currentplaying1));
            let localauthor = await AsyncStorage.getItem("data-author");
            setrenderauthor(JSON.parse(localauthor));
            let localartwork = await AsyncStorage.getItem("data-artwork");
            if(JSON.parse(localartwork).length === 0){
                setrenderimage("null")
                setlocalimagebool(false);
            }else{
                setrenderimage(JSON.parse(localartwork));
                setlocalimagebool(true);
            }
        }else{
        currentplaying = await AsyncStorage.getItem("current-playing");
        let flag = false;
        for(var i = 0;i<alldata.length;i++){
            if(JSON.parse(currentplaying) === alldata[i]['title']){
                setrenderimage(alldata[i]['artwork']);
                setrendername(alldata[i]['title']);
                setrenderauthor(alldata[i]['artist'])
                setlocalbool(true);
                break;
            }
        }
        for(var i=0;i<bestdata.length;i++){
            if(JSON.parse(currentplaying) === bestdata[i]['title']){
                setcurrentPlaying(bestdata[i]['id']);
                AsyncStorage.setItem("current-playing-num",JSON.stringify(bestdata[i]['id']));
            }
        }
    }
    });
    useEffect(currentPlaying,[]);

    // if(likedsong.length > 0){
    //     // console.log("inside the likedsong.length>0 in best",likedsong);
    //     AsyncStorage.setItem('liked',JSON.stringify(likedsong));
    //     AsyncStorage.setItem("liked-change",JSON.stringify(true));

    // }
    if(songlikedbool){
        if(likedsong.length > 0){
            let arr = [];
            for(var i=0;i<likedsong.length;i++){
                arr.push(likedsong[i]);
            }
            AsyncStorage.setItem("liked",JSON.stringify(arr));
            AsyncStorage.setItem("liked-change",JSON.stringify(true));
            setsonglikedbool(false);
        }
    }
    if(history.length > 0){
        AsyncStorage.setItem('history',JSON.stringify(history));
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
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

    async function play(id){


        await TrackPlayer.reset(); 
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));
            await AsyncStorage.setItem("local-songs-bool",JSON.stringify(false));


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
                    //AsyncStorage.setItem("current-genre",JSON.stringify('folk'));

                    for(var o=0;o<alldata.length;o++){
                        if(songdata[i]['title'] === alldata[o]['title']){
                            AsyncStorage.setItem("alldata-playing-num",JSON.stringify(alldata[o]['id']));
                        }
                    }


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

    async function play1(id){

        console.log(id);


        await TrackPlayer.reset(); 
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));
        await AsyncStorage.setItem("local-songs-bool",JSON.stringify(false));




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

        if(id >= bestdata.length){
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
            for(var i=0;i<bestdata.length;i++){
                if(bestdata[i]['id'] === id){
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(bestdata[i]['title']));
                    AsyncStorage.setItem("current-playing",JSON.stringify(bestdata[i]['title']));
                    AsyncStorage.setItem("current-genre",JSON.stringify('folk'));

                    for(var o=0;o<alldata.length;o++){
                        if(bestdata[i]['title'] === alldata[o]['title']){
                            AsyncStorage.setItem("alldata-playing-num",JSON.stringify(alldata[o]['id']));
                        }
                    }


                    if(history.length > 50){
                        sethistory((bestdata) => bestdata.filter((_,index) => index !== 0));
                    }else{
                        let date = new Date().toLocaleDateString();
                        let date1 = date;
                        // console.log(date1);
                        let data11 = date1 + ":"+bestdata[i]['title']
                        sethistory((current) => [...current,data11]);
                    }
                    // await AsyncStorage.setItem("history",JSON.stringify(history));

                    let arr = [bestdata[i]];
                    try{
                        if(i === 0){
                            for(j=i+1;j<bestdata.length;j++){
                                arr.push(bestdata[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<bestdata.length-1;j++){
                            arr.push(bestdata[j+1]);
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
                            play1(a["id"]-1); 
                        })

                        TrackPlayer.addEventListener("remote-next", async () => {
                            setcurrentPlaying(currentplayingsong+1);
                            let a = await TrackPlayer.getActiveTrack();
                            play1(a["id"]+1);
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

    TrackPlayer.addEventListener("playback-track-changed",async () => {
        let likedvalue = await AsyncStorage.getItem("liked")
        // console.log(JSON.parse(likedvalue).length);
    
        let arr1 = [];
        arr1 = JSON.parse(likedvalue);
        arr1 = [...new Set(arr1)]
        let a = await TrackPlayer.getActiveTrack();
        console.log(a);

        let likedbool = false;

        for(var i=0;i<arr1.length;i++){
            // console.log(arr[i]);
            if(a['title'] === arr1[i]){
                // AsyncStorage.setItem("likedcolor", JSON.stringify("red"));
                likedbool = true;
                break;
            }
        }

        // console.log(a['title']);

        if(likedbool){
            // console.log("inside the likedbool true")
            AsyncStorage.setItem("likedcolor",JSON.stringify("red"))
        }else{
            // console.log("inside the likedbool false");
            AsyncStorage.setItem("likedcolor",JSON.stringify("white"));
        }
        let value = await AsyncStorage.getItem("genre");
        let songdata1 = [];
        // if(JSON.parse(value) === 'best'){
        //     songdata = bestdata;
        // }
        // console.log(a['id']);
        songdata1 = JSON.parse(value) === 'folk'?folkdata:JSON.parse(value) === 'best'?bestdata:JSON.parse(value)==='english'?englishdata:JSON.parse(value)==='other'?otherdata:JSON.parse(value)==='hindi'?hindidata:JSON.parse(value)==='tamil'?tamildata:JSON.parse(value)==='telugu'?telugudata:JSON.parse(value)==='soul'?souldata:JSON.parse(value)==='rock'?rockdata:JSON.parse(value)==='pop'?popdata:[];
        setsongdata(songdata1)
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
        // console.log("playback track changed");
        setrenderimage(a['artwork'] === undefined ? coverbool ? a["cover"] : null : a["artwork"]);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        // setlocalbool(true);
        // console.log("exiting the add event listener");
        AsyncStorage.setItem("current-playing", JSON.stringify(a['title']));
    })

    async function liked(genre,title){
        if(genre === "best"){
        for(var i=0;i<bestdata.length;i++){
            if(bestdata[i]['title'] === title){

                bestdata[i]['liked'] = bestdata[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                bestdata[i]['color'] = bestdata[i]['color'] === 'red'?'white':'red';
                // console.log(data[i]['liked'])
                if(bestdata[i]['liked'] === 'cards-heart'){
                    setlikedsong(current => [...current,bestdata[i]['title']]);
                }
                else{
                    if(likedsong.length === 1){
                        setlikedsong([]);
                        AsyncStorage.setItem("liked",JSON.stringify(""));
                    }else{
                        for(var i=0;i<likedsong.length;i++){
                                if(title === likedsong[i]){
                                    setlikedsong((products) => products.filter(a => a !== likedsong[i]));
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
        }else if(genre === "songdata"){
            for(var i=0;i<alldata.length;i++){
                if(alldata[i]['title'] === title){
    
                    alldata[i]['liked'] = alldata[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                    alldata[i]['color'] = alldata[i]['color'] === 'red'?'white':'red';
                    if(alldata[i]['liked'] === 'cards-heart'){
                        setlikedsong(current => [...current,alldata[i]['title']]);
                    }
                    else{
                        if(likedsong.length === 1){
                            setlikedsong([]);
                            AsyncStorage.setItem("liked",JSON.stringify(""));
                        }else{
                            for(var i=0;i<likedsong.length;i++){
                                    if(title === likedsong[i]){
                                        setlikedsong((products) => products.filter(a => a !== likedsong[i]));
                                        break;
                                }         
                    }
                }}
                    setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
                    break;
                }
        }
    }

    }

    function repeatmode(){
        if(repeatMode === 'repeat-once'){
            // console.log("inside repeat once")
            TrackPlayer.setRepeatMode(RepeatMode.Queue);
            setRepeatMode('repeat')
        }
        if(repeatMode === 'repeat'){
            // console.log("inside repeat")
            TrackPlayer.setRepeatMode(RepeatMode.Off);
            setRepeatMode('repeat-off')
        }
        if(repeatMode === 'repeat-off'){
            // console.log("inside repeat off")
            TrackPlayer.setRepeatMode(RepeatMode.Track);
            setRepeatMode('repeat-once');
        }

    }

    async function handlePlayback(){
        seticon(icon === 'motion-play'?'motion-pause':'motion-play');
        icon === 'motion-play'?TrackPlayer.play():TrackPlayer.pause();
        // console.log(icon);
        if(bool === false){
            if(icon === 'motion-play'){
                let currentplayingsong = await AsyncStorage.getItem("current-playing-num");
                currentplayingsong = currentplayingsong*1;
                play(currentplayingsong);
                setcurrentPlaying(currentplayingsong);
                setbool(true);
            }
        }
        if(icon === 'motion-pause'){
            await AsyncStorage.setItem('song-playing-bool',JSON.stringify('false'));
        } 
    }



    return(
        <View style={styles.bestview}>
            <View style={{width:'100%',flex:1}}>
            <ScrollView style={{width:'100%',height:"100%"}}>
            {/* <Song_Render data={data} /> */}
            <View style={{width:'100%',flex:1}}>
            <View style={{flex:1}}>
            {bestdata.map((e)=>{
                return(
                <View style={{flex:1,width:'100%',display:"flex",justifyContent:"center"}}>
                <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={async ()=>{await AsyncStorage.setItem("genre",JSON.stringify("best"));play1(e['id']);setcurrentPlaying(e['id']);}}>

                    <View style={styles.songblock}>
                    <View style={{display: "flex",flexDirection: "row",alignItems: "center",width:'50%'}}>
                    <View style={{marginRight: 10}}>
                    <Image source={{uri: e['artwork']}} style={{height: 60,width:60,borderRadius:36}}/>
                    </View> 
                    <View>
                    <Text style={{color: "white",fontSize: 20}}>{e['title']}</Text>
                    <Text style={{color: "white"}}>{e['artist']}</Text>
                    </View>
                    </View>
                    <View style={{display:"flex",alignItems: 'flex-end',width:'50%',padding: 10}} >
                    <Pressable onPress={() => {liked("best",e['title']),setsonglikedbool(true)}}>
                        <MaterialCommunityIcons name={e['liked']} size={30} style={{color: e['color']}}/>
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
                    <MaterialIcons name='keyboard-arrow-down' size={40} color='white' onPress={() => modalvisible(false)}/>
                </View>
                <View style={styles.modelcontent}>
                    <Image source={localbool?{uri: renderimage}:localimagebool?{uri: renderimage}:require("../../images/song-cover.jpg")} style={{height: 380,width:width-30,marginBottom: 20}}/>
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
                    {/* {songdata.map((e) => {
                        if(e['id'] === currentplayingsong){
                            return(
                            <Pressable onPress={() => {liked("songdata",e['title']),setsonglikedbool(true)}}>
                                <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor}/>
                            </Pressable>
                        )
                        }
                    })} */}
                    <Pressable onPress={() => {liked("songdata",rendername),setsonglikedbool(true)}}>
                                <MaterialCommunityIcons name={likedicon} size={25} color={likedcolor}/>
                            </Pressable>
                    </View>
                </View>

                    
                {/* <Image source={} /> */}
            </View>
                <StatusBar backgroundColor='#212529' />
        
            </Modal>


            <View style={{width:"90%",marginBottom: 20,marginTop:10}}>
            <Pressable style={{width: "100%",borderRadius:36}} onPress={() => {modalvisible(true)}}>
            <View style={{backgroundColor: "#40A2E3",height:60,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",borderRadius:36}}>
                {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                <View style={{display: "flex",flexDirection: "row",borderRadius: 36,width:'50%'}}>
                    {/* <Image source={{uri: renderimage}} style={{height:60,width:60,borderRadius:36,marginRight: 10}}/> */}
                    <Image source={localbool?{uri: renderimage}:localimagebool?{uri: renderimage}:require("../../images/song-cover.jpg")} style={{height:60,width:60,borderRadius:36,marginRight: 10}}/>
                    <View style={{display:"flex",flexDirection: "column",justifyContent: "center"}}>
                        <Text style={{color: "white",fontSize: 20}}>{rendername === ''?'Press any song to play':rendername}</Text>
                        <Text style={{color: "white",fontSize: 15}}>{renderauthor === ''?'play':renderauthor}</Text>
                    </View>
                </View>
                <View style={{width: "50%",justifyContent: "center",alignItems: "flex-end"}}>
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
    bestview: {
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
