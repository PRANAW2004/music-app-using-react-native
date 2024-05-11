import { View, Text,StyleSheet,BackHandler,ScrollView,Image, Pressable,Modal } from 'react-native';
import { useEffect,useState,useCallback } from 'react';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from 'react-native-slider';
import { StatusBar } from 'expo-status-bar';
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

export default function Folk({navigation}){

    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');
    const [likedicon,setlikedicon] = useState("cards-heart-outline");
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

    // console.log("inside folk");

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
    let arr = [];
    let value;

    // console.log("song data is ",songdata);

      //setting the songdata
      
    //   useEffect(async () => {
    //     let value1 = await AsyncStorage.getItem("liked");
    //     console.log(value1);
    //   },[])

      useEffect(async () => {
        let value = await AsyncStorage.getItem("genre");
        let currentplayingnumber = await AsyncStorage.getItem("current-playing-num");
        setcurrentPlaying(currentplayingnumber*1);
        let songdata1 = [];
        songdata1 = JSON.parse(value) === 'folk'?folkdata:JSON.parse(value) === 'best'?bestdata:JSON.parse(value)==='english'?englishdata:JSON.parse(value)==='other'?otherdata:JSON.parse(value)==='hindi'?hindidata:JSON.parse(value)==='tamil'?tamildata:JSON.parse(value)==='telugu'?telugudata:JSON.parse(value)==='soul'?souldata:JSON.parse(value)==='rock'?rockdata:JSON.parse(value)==='pop'?popdata:[];
        setsongdata(songdata1)
    },[])


    useEffect(async () => {
        let value11 = await AsyncStorage.getItem("current-genre");
        if(value11 === "telugu"){
            const skipprevious = useCallback(async() => {
                let iconnum1 = await AsyncStorage.getItem("current-playing-num");
                if(JSON.parse(iconnum1) === 1){
                    setskippreviousbool(true);
                }
              })    
              useEffect(skipprevious,[]);
        
              const skipnext = useCallback(async() => {
                let iconnum1 = await AsyncStorage.getItem("current-playing-num");
                if(iconnum1 >= songdata.length){
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

        /*for(var i=0;i<telugudata.length;i++){
            telugudata[i]['liked'] = 'cards-heart-outline';
            telugudata[i]['color'] = 'white';
        }*/
        

        value = await AsyncStorage.getItem("liked");
        arr = JSON.parse(value);
        arr = [...new Set(arr)]
        for(var i=0;i<alldata.length;i++){
          for(var j=0;j<arr.length;j++){
            //   console.log("123");
           if(alldata[i]['title'] === arr[j]){
            //  alldata[i]['liked'] = 'cards-heart';
            //  alldata[i]['color'] = 'red';
            //  await AsyncStorage.setItem("liked",JSON.stringify(""));
             setlikedsong(current => [...current,alldata[i]['title']]);
          //   rr setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
           }
          }
        }  
        if(arr.length === 0){
            for(var i=0;i<telugudata.length;i++){
                if(telugudata[i]['liked'] === 'cards-heart'){
                    telugudata[i]['liked'] = 'cards-heart-outline';
                    telugudata[i]['color'] = 'white';
                }
            }
        }

        for(var i=0;i<telugudata.length;i++){
            for(var j=0;j<arr.length;j++){
                if(telugudata[i]['title'] === arr[j]){
                    telugudata[i]['liked'] = 'cards-heart';
                    telugudata[i]['color'] = 'red';
                    break;
                }else{
                    telugudata[i]['liked'] = 'cards-heart-outline';
                    telugudata[i]['color'] = 'white';
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
            if(JSON.parse(localartwork).length === 4){
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
                // setcurrentPlaying(data[i]['id']);
                // AsyncStorage.setItem("current-playing-num",JSON.stringify(data[i]['id']));
                setrenderimage(alldata[i]['artwork']);
                setrendername(alldata[i]['title']);
                setrenderauthor(alldata[i]['artist'])
                setlocalbool(true);
                break;
            }
        }
        for(var i=0;i<telugudata.length;i++){
            if(JSON.parse(currentplaying) === telugudata[i]['title']){
                setcurrentPlaying(telugudata[i]['id']);
                AsyncStorage.setItem("current-playing-num",JSON.stringify(telugudata[i]['id']));
            }
        }
    }
    });
    useEffect(currentPlaying,[]);

    if(likedsong.length > 0){
        AsyncStorage.setItem('liked',JSON.stringify(likedsong));
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


    const setUpTrackPlayer = async () => {try{await TrackPlayer.setupPlayer()}
        catch(err){
            // console.log(err);
        }
    }    

    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, [])

    async function play(id){


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
                    // AsyncStorage.setItem("current-genre",JSON.stringify('folk'));

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
                            // TrackPlayer.skipToPrevious();
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

        if(id >= telugudata.length){
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
            for(var i=0;i<telugudata.length;i++){
                if(telugudata[i]['id'] === id){
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(telugudata[i]['title']));
                    AsyncStorage.setItem("current-playing",JSON.stringify(telugudata[i]['title']));
                    //AsyncStorage.setItem("current-genre",JSON.stringify('folk'));

                    for(var o=0;o<alldata.length;o++){
                        if(telugudata[i]['title'] === alldata[o]['title']){
                            AsyncStorage.setItem("alldata-playing-num",JSON.stringify(alldata[o]['id']));
                        }
                    }

                    if(history.length > 50){
                        sethistory((telugudata) => telugudata.filter((_,index) => index !== 0));
                    }else{
                        let date = new Date().toLocaleDateString();
                        let date1 = date;
                        // console.log(date1);
                        let data11 = date1 + ":"+telugudata[i]['title']
                        sethistory((current) => [...current,data11]);
                    }
                    // await AsyncStorage.setItem("history",JSON.stringify(history));

                    let arr = [telugudata[i]];
                    try{
                        if(i === 0){
                            for(j=i+1;j<telugudata.length;j++){
                                arr.push(telugudata[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<telugudata.length-1;j++){
                            arr.push(telugudata[j+1]);
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

    TrackPlayer.addEventListener("playback-track-changed",async () => {
        // console.log("inside the add event listener in the folk");
        let likedvalue = await AsyncStorage.getItem("liked")
        // console.log(JSON.parse(likedvalue).length);
    
        let arr1 = [];
        arr1 = JSON.parse(likedvalue);
        arr1 = [...new Set(arr1)]
        let a = await TrackPlayer.getActiveTrack();

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
        let songdata = [];
        // if(JSON.parse(value) === 'best'){
        //     songdata = bestdata;
        // }
        // console.log(a['id']);
        songdata = JSON.parse(value) === 'folk'?folkdata:JSON.parse(value) === 'best'?bestdata:JSON.parse(value)==='english'?englishdata:JSON.parse(value)==='other'?otherdata:JSON.parse(value)==='hindi'?hindidata:JSON.parse(value)==='tamil'?tamildata:JSON.parse(value)==='telugu'?telugudata:JSON.parse(value)==='soul'?souldata:JSON.parse(value)==='rock'?rockdata:JSON.parse(value)==='pop'?popdata:[];
        setsongdata(songdata);
        if(a["artwork"] === undefined){
            // console.log("artwork is undefined");
        }else{
            setlocalbool(true);
        }
        if(a['id'] === 1){
            setskippreviousbool(true);
        }
        if(a['id'] >= songdata.length){
            setskipnextbool(true);
        }
        // console.log("playback track changed");
        setrenderimage(a['artwork']);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        // setlocalbool(true);
        AsyncStorage.setItem("current-playing", JSON.stringify(a['title']));
    })

    async function liked(genre,title){
        if(genre === "telugu"){
        for(var i=0;i<telugudata.length;i++){
            if(telugudata[i]['title'] === title){

                telugudata[i]['liked'] = telugudata[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                telugudata[i]['color'] = telugudata[i]['color'] === 'red'?'white':'red';
                if(telugudata[i]['liked'] === 'cards-heart'){
                    setlikedsong(current => [...current,telugudata[i]['title']]);
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
        } else if(genre === "songdata"){
            for(var i=0;i<songdata.length;i++){
                if(songdata[i]['title'] === title){
                    songdata[i]['liked'] = songdata[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                    songdata[i]['color'] = songdata[i]['color'] === 'red'?'white':'red';
                    if(songdata[i]['liked'] === 'cards-heart'){
                        setlikedsong(current => [...current,songdata[i]['title']]);
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
            <View style={{width:'100%',flex:1}}>
            <ScrollView style={{width:'100%',height:"100%"}}>
            {/* <Song_Render data={data} /> */}
            <View style={{width:'100%',flex:1}}>
            <View style={{flex:1}}>
            {telugudata.map((e)=>{
                return(
                <View style={{flex:1,width:'100%',display:"flex",justifyContent:"center"}}>
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={async ()=>{await AsyncStorage.setItem("genre",JSON.stringify("telugu"));play1(e['id']);setcurrentPlaying(e['id']);}}>
                    {/* <Pressable> */}
                    {/* {console.log(TrackPlayer.getProgress().then((e) => console.log(e)))}
                    {console.log(TrackPlayer.play())} */}
                    {/* <View style={{width:'100%',display:"flex",alignItems: "center",flex:1}}> */}
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
                    <Pressable onPress={() => {liked("telugu",e['title'])}}>
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
                    <Image source={localbool?{uri: renderimage}:localimagebool?{uri: renderimage}:require("../../images/song-cover.jpg")} style={{height: 300,width:300,marginBottom: 20}}/>
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
                    {songdata.map((e) => {
                        if(e['id'] === currentplayingsong){
                            return(
                            <Pressable onPress={() => {liked("songdata",e['title'])}}>
                                <MaterialCommunityIcons name={e['liked']} size={25} color={e['color']}/>
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
        height: 60,
        flexDirection: "row",
        alignItems: "center",
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
