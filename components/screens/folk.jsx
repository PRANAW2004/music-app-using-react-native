import { View, Text,StyleSheet,BackHandler,ScrollView,Image, Pressable } from 'react-native';
import { useEffect,useState } from 'react';
import data from '../song_data';
import Song_Render from '../song-render';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event} from 'react-native-track-player';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Folk({navigation}){

    const [duration,setDuration] = useState(0);
    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');
    const [likedicon,setlikedicon] = useState("cards-heart-outline");

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
        TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
            ],
            // compactCapabilities: [
            //     Capability.Play,
            //     Capability.Pause,
            //     Capability.SkipToNext,
            //     Capability.SkipToPrevious,
            // ]
        })

        TrackPlayer.addEventListener("remote-play", () => {
            TrackPlayer.play();
        })
        TrackPlayer.addEventListener("remote-pause", () => {
            TrackPlayer.pause();
        })
        //      TrackPlayer.addEventListener("remote-next", () => {
        //     TrackPlayer.skipToNext();
        // })
        //  TrackPlayer.addEventListener("remote-previous", () => {
        //     TrackPlayer.skipToPrevious();
        // })

        // TrackPlayer.add(data);

        }
        catch(err){
            console.log(err);
        }
    }    

    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, [])

    async function play(id){
        await TrackPlayer.reset(); 

        if(id === data.length){
            TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToPrevious
                ]
            })
        }else{
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
                    setrenderimage(data[i]['artwork']);
                    setrendername(data[i]['title']);
                    let arr = [data[i]];
                    try{
                        if(i === 0){
                            for(j=i+1;j<data.length;j++){
                                arr.push(data[i+j]);
                            }
                        }
                        else{
                        for(j=i;j<data.length-1;j++){
                            arr.push(data[i+j]);
                            // TrackPlayer.add([data[i]].push(data[i+j]));
                        }
                        }
                        
                        TrackPlayer.addEventListener("remote-previous",async () => {
                            let a = await TrackPlayer.getActiveTrack();
                            play(a["id"]-1); 
                            
                        })

                        TrackPlayer.addEventListener("remote-next", async () => {
                            // tracknum = tracknum+1;
                            // settracknum(tracknum+1);
                            // play(tracknum);
                            let a = await TrackPlayer.getActiveTrack();
                            // console.log(a["id"]);
                            play(a["id"]+1);
                        })
                    TrackPlayer.add(arr);
                    TrackPlayer.play();
                    break;
                    }catch(err){
                        console.log(1,err);
                    }
                }
            }
    }
    TrackPlayer.addEventListener("playback-track-changed",async () => {
        // console.log("Playback track changed");
        let a = await TrackPlayer.getActiveTrack();
        setrenderimage(a['artwork']);
        setrendername(a['title']);
    })

    // TrackPlayer.getProgress().then((e) => {
    //     console.log(e/60);
    // })

    function liked(id){
        // setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
        console.log("inside liked",id);
        let liked = [];
        // setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
        for(var i=0;i<data.length;i++){
            if(data[i]['id'] === id){
                data[i]['liked'] = data[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                data[i]['color'] = data[i]['color'] === 'red'?'white':'red';
                if(data[i]['liked'] === 'cards-heart'){
                    liked.push(data[i]['id']);
                    break;
                }else{
                    for(var i=0;i<liked.length;i++){
                        if(data[i]['id'] === liked[i]){
                            liked.splice(i,1);
                            break;
                        }
                    }
                }
                AsyncStorage.setItem('liked',JSON.stringify(liked));
                setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
                
                break;
            }
        }

    }
    
    useEffect(async () => {
        let value = AsyncStorage.getItem('liked');
        console.log("inside async",JSON.parse(value));
    })
   
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
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={()=>{TrackPlayer.pause();play(e['id']);setrenderauthor(e['artist']);}}>

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
                    <Pressable onPress={() => {liked(e['id'])}}>
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
            <View style={{width:"90%",marginBottom: 20}}>
            <Pressable style={{width: "100%",borderRadius:36}}>
            <View style={{backgroundColor: "#40A2E3",height:60,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",gap: 10,borderRadius:36}}>
                {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                <Image source={{uri: renderimage}} style={{height:60,width:60,borderRadius:36}}/>
                <View>
                <Text style={{color: "white",fontSize: 20}}>{rendername === ''?'Press any song to play':rendername}</Text>
                <Text style={{color: "white",fontSize: 15}}>{renderauthor === ''?'':renderauthor}</Text>
                </View>
                <View style={{height: 50,width: "50%",justifyContent: "center",alignItems: "flex-end"}}>
                <MaterialIcons name="play-arrow" color="white" size={40}/>
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
    }
})