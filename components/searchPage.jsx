import {View,Text, TextInput,StyleSheet,KeyboardAvoidingView,ScrollView,Pressable,Image,BackHandler} from 'react-native';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useState,useEffect,useCallback,useRef } from 'react';
import alldata from './AllData';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SearchPage({navigation}) {


    const [songname,setsongname] = useState([]);
    const [currentplayingsong,setcurrentPlaying] = useState(0);
    const [likedsong,setlikedsong] = useState([]);
    const [likedicon,setlikedicon] = useState("cards-heart-outline");
    const textinputref = useRef(null);

    useEffect(() => {
        textinputref.current.focus();
    },[])



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

    console.log(songname);

    const setUpTrackPlayer = async () => {try{await TrackPlayer.setupPlayer()}catch(err){}}    

    useEffect(() => {setUpTrackPlayer();return () => TrackPlayer.destroy();}, [])

    let arr1 = [];
    let value1;

    const likeddata = useCallback(async() => {

        console.log("inside the search page callback");

            value1= await AsyncStorage.getItem("liked");
            arr1 = JSON.parse(value1);
            // console.log(arr1);
            for(var i=0;i<alldata.length;i++){
              for(var j=0;j<arr1.length;j++){
               if(alldata[i]['title'] === arr1[j]){
                 setlikedsong(current => [...current,alldata[i]['title']]);
               }
              }
            }
            
        })
        useEffect(likeddata,[]);

        if(likedsong.length > 0){
            AsyncStorage.setItem('liked',JSON.stringify(likedsong));
        }

    async function search(name){
        console.log(name);
        let arr = [];

        name = name.toLowerCase();

        value1= await AsyncStorage.getItem("liked");
            arr1 = JSON.parse(value1);
            console.log(arr1);

            for(var i=0;i<alldata.length;i++){
                if(alldata[i]['title'].toLowerCase().includes(name)){
                    console.log(alldata[i]['title']);
                    arr.push(alldata[i]);

                }
            }

            for(var i=0;i<arr.length;i++){
                arr[i]['liked'] = 'cards-heart-outline';
                arr[i]['color'] = 'white';
            }

            // console.log(arr.length);

            if(arr1 != null){
            for(var i=0;i<arr.length;i++){
                for(var j=0;j<arr1.length;j++){
                    if(arr[i]['title'] === arr1[j]){
                        arr[i]['liked'] = 'cards-heart';
                        arr[i]['color'] = 'red';
                        // setlikedsong(current => [...current,arr[i]['title']]);
                        
                    }
                }
            }
        }
            console.log("setting the songname");

            setsongname(arr);     

    }

    async function play(id){


        await TrackPlayer.reset(); 
        // seticon("motion-pause");

        // await AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));

        if(id >= alldata.length){
            console.log("inside 2 in folk")
            // setskipnextbool(true)
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
            for(var i=0;i<alldata.length;i++){
                if(alldata[i]['id'] === id){
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(alldata[i]['title']));
                    AsyncStorage.setItem("current-playing",JSON.stringify(alldata[i]['title']));
                    AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                    let arr = [alldata[i]];
                    try{
                        if(i === 0){
                            for(j=i+1;j<alldata.length;j++){
                                arr.push(alldata[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<alldata.length-1;j++){
                            // console.log(j+1);
                            // console.log(data[i+1])
                            arr.push(alldata[i+1]);
                            // console.log(arr);
                            // TrackPlayer.add([data[i]].push(data[i+j]));
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
                        console.log("inside the else in the liked songs");
                        for(var i=0;i<likedsong.length;i++){
                                if(title === likedsong[i]){
                                    console.log("inside the else if");
                                    setlikedsong((products) => products.filter(a => a !== likedsong[i]));
                                    console.log(likedsong);
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

   


    return(
        <View style={styles.searchmain}>
        <KeyboardAvoidingView style={styles.textinput} behavior='padding'>
        {/* <View  style={styles.textinput}> */}
            <View style={{display:"flex",justifyContent:"center"}}>
            <Pressable onPress={() => navigation.navigate("Search")}>
                <MaterialIcons name='arrow-back' size={30} color="black"/>
            </Pressable>
            </View>
            <View style={{justifyContent:"center",width:'100%',height: 50}}>
                <TextInput style={{height:50}} ref={textinputref} placeholder='what do you want to hear?' onChangeText={(e) => {search(e)}} ></TextInput>
            </View>
            {/* </View> */}
        </KeyboardAvoidingView>
        <View style={{width:'100%',flex:1}}>
            <ScrollView style={{width:'100%',height:"100%"}}>
            {/* <Song_Render data={data} /> */}
            <View style={{width:'100%',flex:1}}>
            <View style={{flex:1}}>
            {songname.map((e)=>{
                console.log("this is inside the rendering file");
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
                    <Text style={{color: "white",fontSize: 17}}>{e['title']}</Text>
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
    searchmain: {
        backgroundColor: "black",
        flex:1,
        display:"flex",
        alignItems:"center",
    },
    textinput:{
        backgroundColor: "grey",
        width: '100%',
        marginTop:50,
        height: 50,
        flexDirection:"row"
    },
    songblock: {
        display: "flex",
        backgroundColor: "#27496D",
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