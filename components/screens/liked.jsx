import { View,Text,BackHandler,StyleSheet,ScrollView,Pressable,Image,Modal } from 'react-native';
import {useEffect,useState,useCallback} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import alldata from '../AllData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from 'react-native-slider';
import { StatusBar } from 'expo-status-bar';

export default function Liked({navigation}){

    const [currentplayingsong,setcurrentPlaying] = useState(0);
    const [songname,setsongname] = useState([]);
    const [likedicon,setlikedicon] = useState("cards-heart-outline");
    const [likedsong,setlikedsong] = useState([]);
    const [bool,setbool] = useState(false);
    const [bool1,setbool1] = useState(false);
    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');
    const [icon,seticon] = useState("motion-play");
    const [visible,modalvisible] = useState(false);
    const [localbool,setlocalbool] = useState(null);
    const [localimagebool,setlocalimagebool] = useState(true);
    const [repeatMode,setRepeatMode] = useState('repeat');
    const [skipnextbool,setskipnextbool] = useState(false);
    const [skippreviousbool,setskippreviousbool] = useState(false);
    const [songdata,setsongdata] = useState([]);



    // console.log(songname);
    // console.log(likedsong);

    const progress = useProgress();

    useEffect(async () => {
        let value = await AsyncStorage.getItem("genre");
        let currentplayingnumber = await AsyncStorage.getItem("current-playing-num");
        setcurrentPlaying(currentplayingnumber*1);
        let songdata1 = [];
        songdata1 = JSON.parse(value) === 'folk'?folkdata:JSON.parse(value) === 'best'?bestdata:JSON.parse(value)==='english'?englishdata:JSON.parse(value)==='other'?otherdata:JSON.parse(value)==='hindi'?hindidata:JSON.parse(value)==='tamil'?tamildata:JSON.parse(value)==='telugu'?telugudata:JSON.parse(value)==='soul'?souldata:JSON.parse(value)==='rock'?rockdata:JSON.parse(value)==='pop'?popdata:[];
        setsongdata(songdata1)
    },[])

    

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


    if(bool){
        if(likedsong.length < songname.length){
            let arr1 = [];
            setsongname(arr1);
            for(var i=0;i<songname.length;i++){
                for(var j=0;j<likedsong.length;j++){
                    if(songname[i]['title'] === likedsong[j]){
                        arr1.push(songname[i]);
                    }
                }
            }
            setsongname(arr1);
        }
    }

    let arr1 = [];

    const setUpTrackPlayer = async () => {try{await TrackPlayer.setupPlayer()}catch(err){}}    

    useEffect(() => {setUpTrackPlayer();return () => TrackPlayer.destroy();}, [])
    

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

   

    

    const liked1 = useCallback(async () => {
        //AsyncStorage.setItem("liked",JSON.stringify(""));

        let bool1 = await AsyncStorage.getItem('song-playing-bool');
        if(bool1 === 'true'){
            seticon('motion-pause');
        }else{
            seticon('motion-play');
        }

        let value = await AsyncStorage.getItem("liked");
        let arr = JSON.parse(value);
        let arr1 = [];
        arr = [...new Set(arr)];
        let flag = false;
        for(var i=0;i<alldata.length;i++){
            for(var j=0;j<arr.length;j++){
                if(arr[j] === alldata[i]['title']){
                    arr1.push(alldata[i]);
                    
                }
            }
        }
        for(var i=0;i<arr1.length;i++){
            arr1[i]['liked'] = 'cards-heart';
            arr1[i]['color'] = 'red';
            setlikedsong(current => [...current,arr1[i]['title']]);
        }
        setsongname(arr1);
        setbool(true);

        for(var i=0;i<alldata.length;i++){
            let value1 = await AsyncStorage.getItem("current-playing");
            if(alldata[i]['title'] === JSON.parse(value1)){
                setrenderimage(alldata[i]['artwork']);
                setrendername(alldata[i]['title']);
                setrenderauthor(alldata[i]['artist']);
                break;
            }
        }
    })

    useEffect(liked1,[])

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

    async function play(id){

        await AsyncStorage.setItem("current-genre",JSON.stringify("liked"));
        
        await TrackPlayer.reset(); 
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));
            for(var i=0;i<songname.length;i++){
                if(songname[i]['id'] === id){
                    if(i === songname.length-1){
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
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(songname[i]['title']));
                    AsyncStorage.setItem("current-playing",JSON.stringify(songname[i]['title']));
                    // AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                    let arr = [songname[i]];
                    try{
                        if(i === 0 && songname.length > 1){
                            for(j=i+1;j<alldata.length;j++){
                                arr.push(songname[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<songname.length-1;j++){
                            arr.push(songname[i+1]);
                        }
                        }

                        TrackPlayer.addEventListener("remote-play", ()=>{
                            AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                            TrackPlayer.play();
                        })
                        
                        TrackPlayer.addEventListener("remote-pause", () => {
                        
                            AsyncStorage.setItem("song-playing-bool",JSON.stringify(false));
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
                        let arr1 = [];
                        for(var i=0;i<arr.length;i++){
                            if(arr[i]!==undefined){
                            arr1.push(arr[i]);
                            }
                        }
                    TrackPlayer.add(arr1);
                    // AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                    TrackPlayer.play();
                    // console.log(RepeatMode);
                    TrackPlayer.setRepeatMode(RepeatMode.Queue);
                    break;
                    }catch(err){
                        // console.log(1,err);
                    }
                }
            }
    }

    TrackPlayer.addEventListener("playback-track-changed",async () => {
        let a = await TrackPlayer.getActiveTrack();


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

        setrenderimage(a['artwork']);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        // seticon(icon === 'play-arrow'?'pause':'play-arrow');
        AsyncStorage.setItem("current-playing", JSON.stringify(a['title']));
    })

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


    async function liked(title){


        for(var i=0;i<songname.length;i++){
            if(songname[i]['title'] === title){
                songname[i]['liked'] = songname[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                songname[i]['color'] = songname[i]['color'] === 'red'?'white':'red';
                // console.log(data[i]['liked'])
                if(songname[i]['liked'] === 'cards-heart'){
                    setlikedsong(current => [...current,songname[i]['title']]);
                }
                else{
                    if(likedsong.length === 1){
                        setlikedsong([]);
                        //AsyncStorage.setItem("liked",JSON.stringify(""));
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
                break;
            }
        }
    }

    async function handlePlayback(){
        seticon(icon === 'motion-play'?'motion-pause':'motion-play');
        icon === 'motion-play'?TrackPlayer.play():TrackPlayer.pause();
        // console.log(icon);
        if(bool === false){
            if(icon === 'motion-play'){
                // console.log("inside motion play");
                let currentplayingsong = await AsyncStorage.getItem("current-playing-num");
                // setbool(true);
                currentplayingsong = currentplayingsong*1;
                play(currentplayingsong);
                setcurrentPlaying(currentplayingsong);
                setbool(true);

            }
        }
        if(icon === 'motion-pause'){
            // console.log("inside motion pause");
            await AsyncStorage.setItem('song-playing-bool',JSON.stringify('false'));
        }
        
    }

    return(
        <View style={[styles.likedview]}>
        <View style={{width:'100%',flex:1}}>
        <ScrollView style={{width:'100%',height:"100%"}}>
            {/* <Song_Render data={data} /> */}
            <View style={{width:'100%',flex:1}}>
            <View style={{flex:1}}>
            {songname.map((e)=>{
                return(
                <View style={{flex:1,width:'100%',display:"flex",justifyContent:"center"}}>
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={()=>{play(e['id']);setcurrentPlaying(e['id'])}}>

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
                    <Pressable onPress={() => {liked(e['title']),setsonglikedbool(true)}}>
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
                            <Pressable onPress={() => {liked("songdata",e['title']),setsonglikedbool(true)}}>
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
    likedview: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flex:1,
        width:'100%'
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