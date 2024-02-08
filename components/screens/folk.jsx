import { View, Text,StyleSheet,BackHandler,ScrollView,Image, Pressable,Modal } from 'react-native';
import { useEffect,useState,useCallback } from 'react';
import data from '../song_data';
import Song_Render from '../song-render';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event} from 'react-native-track-player';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";

export default function Folk({navigation}){
    console.log("inside folk");
    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');
    const [likedicon,setlikedicon] = useState("cards-heart-outline");
    const [likedsong,setlikedsong] = useState([]);
    const [bool,setbool] = useState(0);
    const [visible,modalvisible] = useState(false);

    console.log("likedsong is ",likedsong);

    // AsyncStorage.setItem('liked',JSON.stringify(likedsong));

    let arr = [];
    let arr1 = [];
    let arr2 = [];

    let value;
   
    const likeddata = useCallback(async() => {
    //   console.log("in async function");
        value = await AsyncStorage.getItem("liked");
      for(var k=0;k<value.length;k++){
        //   console.log(isNaN(value[k]));
          if(isNaN(value[k]) === false){
              arr.push(value[k]*1);
              arr1.push(value[k]*1);
          }
      }
      console.log(arr);
        for(var i=0;i<data.length;i++){
          for(var j=0;j<arr.length;j++){
              // console.log("123",data[i]['id'],arr[j]);
           if(data[i]['id'] === arr[j]){
              console.log(data[i]['id'],arr[j]);
              console.log("inside async if");
             console.log(i,j);
             console.log(data[i]['liked']);
             data[i]['liked'] = 'cards-heart';
             data[i]['color'] = 'red';
             setlikedsong(current => [...current,data[i]['id']]);
          //   rr setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
           }
  
          }
        }
        //     setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
  
        
    })
    useEffect(likeddata,[]);

        //   setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');

    if(likedsong.length > 0){
        AsyncStorage.setItem('liked',JSON.stringify(likedsong));
    }


    // console.log("likedsong is ",likedsong);

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
                    setrenderauthor(data[i]['artist']);
                    // setrenderauthor(data[i]['author']);
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
        setrenderauthor(a['artist'])
    })

    async function liked(id){
        // console.log("i am pressed")
        // let liked = []; 

        // console.log(likedsong);
        for(var i=0;i<data.length;i++){
            if(data[i]['id'] === id){
                // console.log(data[i]['liked']);

                // console.log("inside liked for if");
                data[i]['liked'] = data[i]['liked'] === 'cards-heart'?'cards-heart-outline':'cards-heart';
                data[i]['color'] = data[i]['color'] === 'red'?'white':'red';
                console.log(data[i]['liked'])
                if(data[i]['liked'] === 'cards-heart'){
                    // liked.push(data[i]['id']);
                    // console.log(likedsong.includes(data[i]['id']));
                    console.log("inside if liked song is ",likedsong);
                    setlikedsong(current => [...current,data[i]['id']]);

                    // AsyncStorage.setItem('liked',JSON.stringify(likedsong));

                    // setbool(true);
                    
                }
                else{
                    console.log("inside else",likedsong);
                        for(var i=0;i<likedsong.length;i++){
                                if(id === likedsong[i]){
                                    // console.log("inside else and if");
                                    // console.log(likedsong[i],i);
                                    setlikedsong((products) => products.filter((_,a) => a !== i));
                                    break;
                            }
                }
            }
                setlikedicon(likedicon === 'cards-heart-outline'?'cards-heart':'cards-heart-outline');
                // setbool(true);
                break;
            }
        }

    }

    async function position(){
        // const progress = useProgress();
        // console.log("progress is ",progress.duration);
        console.log("inside the position");
        let a = await TrackPlayer.getProgress();
        console.log(a['duration']/60);
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
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={()=>{play(e['id']);}}>

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

            <Modal visible={visible}>
            <View style={styles.modalview}>
                <View>
                    <MaterialIcons name='close' size={30} color='white' onPress={() => modalvisible(false)}/>
                </View>
                <View style={styles.modelcontent}>
                    <Image source={{uri: renderimage}} style={{height: 300,width:300,marginBottom: 20}}/>
                    <Text style={{color: "grey",fontSize: 40}}>{rendername}</Text>
                    <Text style={{color: "grey",fontSize:20}}>{renderauthor}</Text>
                </View>
                <View>

                </View>
                {/* <Image source={} /> */}
            </View>
            </Modal>

            <View style={{width:"90%",marginBottom: 20}}>
            <Pressable style={{width: "100%",borderRadius:36}} onPress={() => {position();modalvisible(true)}}>
            <View style={{backgroundColor: "#40A2E3",height:60,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",gap: 10,borderRadius:36}}>
                {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                <Image source={{uri: renderimage}} style={{height:60,width:60,borderRadius:36}}/>
                <View>
                <Text style={{color: "white",fontSize: 20}}>{rendername === ''?'Press any song to play':rendername}</Text>
                <Text style={{color: "white",fontSize: 15}}>{renderauthor === ''?'play':renderauthor}</Text>
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
    },
    modalview: {
        backgroundColor: "#0A1D56",
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
        // marginBottom: 40,
    }
})