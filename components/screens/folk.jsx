import { View, Text,StyleSheet,BackHandler,ScrollView,Image, Pressable,Modal } from 'react-native';
import { useEffect,useState,useCallback } from 'react';
import data from '../song_data';
import Song_Render from '../song-render';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from 'react-native-slider';
import { StatusBar } from 'expo-status-bar';

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

    console.log("inside folk ",icon);
    
    const events = [
        Event.PlaybackState,
        Event.PlaybackError,
      ];

    useTrackPlayerEvents(events, (event) => {
            if (event.type === Event.PlaybackState) {
                  if(event.state === 'paused'){
                    console.log("inside the folk paused")
                    AsyncStorage.setItem("song-playing-bool",JSON.stringify(false));
                    console.log("song playing bool is set to false inside the folk")
                      seticon('motion-play');
                  }
                  else if(event.state === 'playing'){
                    AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
                    console.log("song playing bool is set to true inside the folk");
                      seticon('motion-pause');
                  }
                  else if(event.state === 'stopped'){
                    console.log("inside the stopped");
                    AsyncStorage.setItem("song-playing-bool",JSON.stringify(false))
                    console.log("song-playing-bool is set to false inside the folk");
                    seticon('motion-play');
                }
            }
      })


    
     


    const progress = useProgress();

    let arr = [];

    let value;
   
    const skipprevious = useCallback(async() => {
        let iconnum1 = await AsyncStorage.getItem("current-playing-num");
        if(JSON.parse(iconnum1) === 1){
            setskippreviousbool(true);
        }
      })    
      useEffect(skipprevious,[]);

      const skipnext = useCallback(async() => {
        let iconnum1 = await AsyncStorage.getItem("current-playing-num");
        if(iconnum1 >= data.length){
            setskipnextbool(true);
        }
      })    
      useEffect(skipnext,[]);

      

    const likeddata = useCallback(async() => {
        let bool1 = await AsyncStorage.getItem('song-playing-bool');
        console.log("bool1 is ",bool1);
        if(bool1 === 'true'){
            console.log("inside the liked data true")
            seticon('motion-pause');
        }else{
            console.log("inside the liked data false");
            seticon('motion-play');
        }

        for(var i=0;i<data.length;i++){
            data[i]['liked'] = 'cards-heart-outline';
            data[i]['color'] = 'white';
        }

        value = await AsyncStorage.getItem("liked");
        arr = JSON.parse(value);
        for(var i=0;i<data.length;i++){
          for(var j=0;j<arr.length;j++){
              // console.log("123",data[i]['id'],arr[j]);
           if(data[i]['title'] === arr[j]){
             data[i]['liked'] = 'cards-heart';
             data[i]['color'] = 'red';
             setlikedsong(current => [...current,data[i]['title']]);
          //   rr setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
           }
  
          }
        }
        //     setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
  
        
    })
    useEffect(likeddata,[]);

    let currentplaying;

    const currentPlaying = useCallback(async () => {
        currentplaying = await AsyncStorage.getItem("current-playing");
        // console.log("currently playing song is",currentplaying*1);
        // currentplaying = currentplaying*1;
        console.log("inside current playing, current playing is ",currentplaying)
        for(var i = 0;i<data.length;i++){
            if(JSON.parse(currentplaying) === data[i]['title']){
                console.log(data[i]['id']);
                setcurrentPlaying(data[i]['id']);
                // if(data[i]['id'] === data.length){
                //     skipnextbool(true);
                // }
                
                AsyncStorage.setItem("current-playing-num",JSON.stringify(data[i]['id']));
                setrenderimage(data[i]['artwork']);
                setrendername(data[i]['title']);
                setrenderauthor(data[i]['artist'])
            }
        }
    });

    useEffect(currentPlaying,[]);
    // if(likedsong.length === 0){
    //     AsyncStorage.setItem('liked',JSON.stringify(""));
    // }
    if(likedsong.length > 0){
        AsyncStorage.setItem('liked',JSON.stringify(likedsong));
    }


    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
        // console.log(navigation.getState());

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


    const setUpTrackPlayer = async () => {
        try{
        await TrackPlayer.setupPlayer()


        }
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
        // seticon("motion-pause");

        // await AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
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

        if(id >= data.length){
            console.log("inside 2 in folk")
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
            for(var i=0;i<data.length;i++){
                if(data[i]['id'] === id){
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(data[i]['title']));

                    // setrenderimage(data[i]['artwork']);
                    // setrendername(data[i]['title']);
                    // setrenderauthor(data[i]['artist']);
                    AsyncStorage.setItem("current-playing",JSON.stringify(data[i]['title']));
                    AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                    // setrenderauthor(data[i]['author']);
                    let arr = [data[i]];
                    // console.log(arr);
                    // console.log(i);
                    try{
                        if(i === 0){
                            for(j=i+1;j<data.length;j++){
                                arr.push(data[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<data.length-1;j++){
                            // console.log(j+1);
                            // console.log(data[i+1])
                            arr.push(data[i+1]);
                            // console.log(arr);
                            // TrackPlayer.add([data[i]].push(data[i+j]));
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
                            // tracknum = tracknum+1;
                            // settracknum(tracknum+1);
                            // play(tracknum);
                            setcurrentPlaying(currentplayingsong+1);
                            let a = await TrackPlayer.getActiveTrack();
                            // console.log(a["id"]);
                            play(a["id"]+1);
                        })
                    // console.log(arr);
                    TrackPlayer.add(arr);
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
        // console.log("Playback track changed")
        // seticon("pause");
        let a = await TrackPlayer.getActiveTrack();
        if(a['id'] === 1){
            setskippreviousbool(true);
        }
        if(a['id'] >= data.length){
            setskipnextbool(true);
        }
        // console.log("playback track changed");
        setrenderimage(a['artwork']);
        setrendername(a['title']);
        setrenderauthor(a['artist'])
        AsyncStorage.setItem("current-playing", JSON.stringify(a['title']));
    })

  



    async function liked(title){
        // console.log("i am pressed")
        // let liked = []; 


        // console.log(likedsong);
        for(var i=0;i<data.length;i++){
            if(data[i]['title'] === title){
                // console.log(data[i]['liked']);

                // console.log("inside liked for if");
                data[i]['liked'] = data[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                data[i]['color'] = data[i]['color'] === 'red'?'white':'red';
                // console.log(data[i]['liked'])
                if(data[i]['liked'] === 'cards-heart'){
                    // liked.push(data[i]['id']);
                    // console.log(likedsong.includes(data[i]['id']));
                    // console.log("inside if liked song is ",likedsong);
                    setlikedsong(current => [...current,data[i]['title']]);

                    // AsyncStorage.setItem('liked',JSON.stringify(likedsong));

                    // setbool(true);
                    
                }
                else{
                    if(likedsong.length === 1){
                        setlikedsong([]);
                        AsyncStorage.setItem("liked",JSON.stringify(""));
                    }else{
                        for(var i=0;i<likedsong.length;i++){
                                if(title === likedsong[i]){
                                    // console.log("inside else and if");
                                    // console.log(likedsong[i],i);
                                    
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

    }

    function repeatmode(){
        console.log("inside repeat mode function")
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
    
    // let value = AsyncStorage.getItem('liked');
    // console.log("inside async",value);
   
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
            {data.map((e)=>{
                return(
                <View style={{flex:1,width:'100%',display:"flex",justifyContent:"center"}}>
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={()=>{play(e['id']);setcurrentPlaying(e['id']);}}>

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
                    <Pressable onPress={() => {liked(e['title'])}}>
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
                    {data.map((e) => {
                        if(e['id'] === currentplayingsong){
                            return(
                            <Pressable onPress={() => {liked(e['title'])}}>
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
                    <Image source={{uri: renderimage}} style={{height:60,width:60,borderRadius:36,marginRight: 10}}/>
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