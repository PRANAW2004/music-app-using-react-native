import { View,Text,BackHandler,StyleSheet,ScrollView,Pressable,Image } from 'react-native';
import {useEffect,useState,useCallback} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import alldata from '../AllData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';


export default function Liked({navigation}){

    const [currentplayingsong,setcurrentPlaying] = useState(0);
    const [songname,setsongname] = useState([]);
    const [likedicon,setlikedicon] = useState("cards-heart-outline");
    const [likedsong,setlikedsong] = useState([]);
    const [bool,setbool] = useState(false);
    const [bool1,setbool1] = useState(false);

    console.log(songname);
    console.log(likedsong);

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

    if(likedsong.length > 0){
        AsyncStorage.setItem('liked',JSON.stringify(likedsong));
    }

    

    const liked1 = useCallback(async () => {
        // AsyncStorage.setItem("liked",JSON.stringify(""));
        console.log("inside the use callback");
        let value = await AsyncStorage.getItem("liked");
        let arr = JSON.parse(value);
        let arr1 = [];

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
    })

    useEffect(liked1,[])

    async function play(id){

        console.log(id);
        console.log(songname.length);

        await TrackPlayer.reset(); 
        // seticon("motion-pause");

        await AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));

        
            for(var i=0;i<songname.length;i++){
                if(songname[i]['id'] === id){
                    console.log("i value is ",i);
                    
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
                    AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                    let arr = [songname[i]];
                    try{
                        console.log("inside the try");
                        if(i === 0 && songname.length > 1){
                            console.log("inside the first if in play in liked");
                            for(j=i+1;j<alldata.length;j++){
                                arr.push(songname[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<songname.length-1;j++){
                            console.log("insid the second if in play in liked");
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
                            // console.log("i value is ",i);
                            try{
                                console.log("inside the remote pause not equal to 0")
                                setcurrentPlaying(currentplayingsong-1);
                                let a = await TrackPlayer.getActiveTrack();
                                play(a["id"]-1); 
                            }catch(err){
                                console.log(err);
                            }
                                
                            
                            
                            
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
                    console.log(arr1);
                    TrackPlayer.add(arr1);
                    AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
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




    async function liked(title){


        for(var i=0;i<alldata.length;i++){
            if(alldata[i]['title'] === title){
                alldata[i]['liked'] = alldata[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                alldata[i]['color'] = alldata[i]['color'] === 'red'?'white':'red';
                // console.log(data[i]['liked'])
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
                    }
                }

            // let value = await AsyncStorage.getItem("liked");
            // let arr = JSON.parse(value);
            // let arr1 = [];
            // for(var i=0;i<alldata.length;i++){
            //     for(var j=0;j<arr.length;j++){
            //         if(arr[j] === alldata[i]['title']){
            //             arr1.push(alldata[i]);
            //         }
            //     }
            // }
            // for(var i=0;i<arr1.length;i++){
            //     arr1[i]['liked'] = 'cards-heart';
            //     arr1[i]['color'] = 'red';
            //     setlikedsong(current => [...current,arr1[i]['title']]);
            // }
                setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
                break;
            }
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
})