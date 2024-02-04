import { View, Text,StyleSheet,BackHandler,ScrollView,Image, Pressable } from 'react-native';
import { useEffect,useState } from 'react';
import data from '../song_data';
import Song_Render from '../song-render';
import TrackPlayer,{useProgress,Capability, AppKilledPlaybackBehavior,Event} from 'react-native-track-player';
import { MaterialIcons } from '@expo/vector-icons';
export default function Folk({navigation}){

    const [duration,setDuration] = useState(0);
    const [renderimage,setrenderimage] = useState(null);
    const [rendername,setrendername] = useState('');
    const [renderauthor,setrenderauthor] = useState('');
    // const [tracknum,settracknum] = useState(0);

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


    const [bool,setbool] = useState(false);

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

        // }else{
        //     console.log(bool);
        //     // TrackPlayer.pause();
        //     for(var i=0;i<data.length;i++){
        //         if(data[i]['id'] === id){
        //             // console.log(data[i]);
        //             console.log(i);
        //             try{
        //                let arr = [data[i]];
        //                for(j=i+1;j<data.length;j++){
        //                 arr.push(data[i+j]);
        //                }
        //                TrackPlayer.add(arr);
        //                 TrackPlayer.play();
        //                 setbool(false);
        //                 break;
        //             }catch(err){
        //                 console.log(err);
        //             }
        //         }
        //     }
        // }
        
        
        // TrackPlayer.reset();
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
                <View style={{flex:1}}>
                    <Pressable onPress={()=>{TrackPlayer.pause();play(e['id']);setrenderauthor(e['artist']);}}>

                    {/* <Pressable> */}
                    {/* {console.log(TrackPlayer.getProgress().then((e) => console.log(e)))}
                    {console.log(TrackPlayer.play())} */}
                    <View style={{width:'100%',display:"flex",alignItems: "center",flex:1}}>
                    <View style={styles.songblock}>
                    <View style={{marginRight: 10}}>
                    <Image source={{uri: e['artwork']}} style={{height: 60,width:60,borderRadius:36}}/>
                    </View> 
                    <View>
                    <Text style={{color: "white",fontSize: 20}}>{e['title']}</Text>
                    <Text style={{color: "white"}}>{e['artist']}</Text>
                    </View>

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
            <View style={{backgroundColor: "grey",width:"100%"}}>
            <Pressable style={{width: "100%"}}>
            <View style={{backgroundColor: "#83C0C1",height:50,width: "100%",display:"flex",flexDirection: "row",alignItems: "center",gap: 60}}>
                {/* {console.log(<Image source={{uri: renderimage}} />)} */}
                <Image source={{uri: renderimage}} style={{height:50,width:50}}/>
                <Text>{rendername === ''?'Press any song to play':rendername}</Text>
                <View style={{height: 50,width: "50%",justifyContent: "center",alignItems: "flex-end"}}>
                <MaterialIcons name="play-arrow" color="black" size={40}/>
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