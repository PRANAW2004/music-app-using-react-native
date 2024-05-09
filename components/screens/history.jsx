import { View,Text,BackHandler,StyleSheet,ScrollView,Pressable,Image } from "react-native";
import { useEffect,useCallback,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import alldata from "../AllData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event,RepeatMode,useTrackPlayerEvents} from 'react-native-track-player';


export default function History({navigation}){

    const [historydate,sethistorydate] = useState([]);
    const [history,sethistory] = useState([]);
    const [likedsong,setlikedsong] = useState([]);
    const [currentplayingsong,setcurrentPlaying] = useState(0);



    console.log("inside the history");

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

    const likeddata = useCallback(async () => {
        for(var i=0;i<alldata.length;i++){
            alldata[i]['liked'] = 'cards-heart-outline';
            alldata[i]['color'] = 'white';
        }
        let value = await AsyncStorage.getItem("liked");
        let arr = JSON.parse(value);
        for(var i=0;i<alldata.length;i++){
          for(var j=0;j<arr.length;j++){
              // console.log("123",data[i]['id'],arr[j]);
           if(alldata[i]['title'] === arr[j]){
             alldata[i]['liked'] = 'cards-heart';
             alldata[i]['color'] = 'red';
             setlikedsong(current => [...current,alldata[i]['title']]);
          //   rr setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
           }
          }
        }
    })
    useEffect(likeddata,[]);

    const historydata = useCallback(async () => {
        let histdata = await AsyncStorage.getItem("history");
        console.log(histdata);
        let arr1 = JSON.parse(histdata);
        let arr3 = [];
        let arr4 = [];
        let arr5 = [];
        let arr6 = [];
        let arr7 = [];
        let flag = true;
        for(var i=0;i<arr1.length;i++){
            arr3 = arr1[i].split(":");
            arr4.push(arr3);
        }
        for(var i=0;i<arr4.length;i++){
            if(arr5.length === 0){
                arr5.push(arr4[i][0]);
            }else{
                for(var j=0;j<arr5.length;j++){
                    if(arr5[j] === arr4[i][0]){
                        flag = false;
                    }
                }
                if(flag){
                    arr5.push(arr4[i][0]);
                }
                if(flag === false){
                    flag = true;
                }
            }
        }
        for(var i=0;i<arr4.length;i++){
            arr6.push(arr4[i]);
        }
        for(var i=0;i<arr4.length;i++){
            for(var j=0;j<alldata.length;j++){
                if(alldata[j]['title'] == arr4[i][1]){
                    console.log("inside the alldata if")
                    arr7.push([arr4[i][0],alldata[j]])
                }
            }
        }
        sethistorydate(arr5.reverse());
        sethistory(arr7.reverse());
    });
    useEffect(historydata,[]);

    async function play(id){

        await TrackPlayer.reset(); 
        await AsyncStorage.setItem("current-playing-num",JSON.stringify(id));
            for(var i=0;i<alldata.length;i++){
                if(alldata[i]['id'] === id){
                    if(i === alldata.length-1){
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
                    await AsyncStorage.setItem('current-playing-song',JSON.stringify(alldata[i]['title']));
                    AsyncStorage.setItem("current-playing",JSON.stringify(alldata[i]['title']));
                    AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
                    let arr = [alldata[i]];
                    try{
                        console.log("inside the try");
                        if(i === 0 && alldata.length > 1){
                            console.log("inside the first if in play in liked");
                            for(j=i+1;j<alldata.length;j++){
                                arr.push(alldata[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<alldata.length-1;j++){
                            console.log("insid the second if in play in liked");
                            arr.push(alldata[i+1]);
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


    async function liked(title){
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
            }
            }
                // setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
                break;
            }
        }
    }


    return(
        <View style={{display:"flex",flex:1,backgroundColor: "black"}}>
        <ScrollView>
        {historydate.map((q) => {
            return(
                <View>
                <Text style={{color: "white",marginLeft: 20,marginTop: 20,fontSize:20}}>{q}</Text>
                {
                    history.map(([a,b]) => {
                        if(a === q){
                            return(
                                <View style={{flex:1,width:'100%',display:"flex",justifyContent:"center"}}>
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={()=>{play(b['id']);setcurrentPlaying(b['id']);}}>

                    {/* <Pressable> */}
                    {/* {console.log(TrackPlayer.getProgress().then((e) => console.log(e)))}
                    {console.log(TrackPlayer.play())} */}
                    {/* <View style={{width:'100%',display:"flex",alignItems: "center",flex:1}}> */}
                    <View style={styles.songblock}>
                    <View style={{display: "flex",flexDirection: "row",alignItems: "center",width:'50%'}}>
                    <View style={{marginRight: 10}}>
                    <Image source={{uri: b['artwork']}} style={{height: 60,width:60,borderRadius:36}}/>
                    </View> 
                    <View>
                    <Text style={{color: "white",fontSize: 20}}>{b['title']}</Text>
                    <Text style={{color: "white"}}>{b['artist']}</Text>
                    </View>
                    </View>
                    <View style={{display:"flex",alignItems: 'flex-end',width:'50%',padding: 10}} >
                    <Pressable onPress={() => {liked(b['title'])}}>
                        <MaterialCommunityIcons name={b['liked']} size={30} style={{color: b['color']}}/>
                    </Pressable>
                    </View>
                    </View> 
                    </Pressable>
                   
                    </View>
                        )
                        }                       
                    })
                }

                </View> 
            )
        })  
        }
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
})