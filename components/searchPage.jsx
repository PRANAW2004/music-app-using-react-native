import {View,Text, TextInput,StyleSheet,KeyboardAvoidingView,ScrollView,Pressable,Image,BackHandler} from 'react-native';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { useState,useEffect } from 'react';
import alldata from './AllData';
import TrackPlayer from 'react-native-track-player';

export default function SearchPage({navigation}) {

    
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

    const [songname,setsongname] = useState([]);

    const setUpTrackPlayer = async () => {try{await TrackPlayer.setupPlayer()}catch(err){}}    

    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, [])

    function search(name){
        let arr = [];
        for(var i=0;i<alldata.length;i++){
            if(alldata[i]['title'].includes(name)){
                arr.push(alldata[i]);
            }
        }
        setsongname(arr);
    }

    // async function play(title){

    //     await TrackPlayer.reset(); 

    //     await AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
    //     await AsyncStorage.setItem('current-playing-song',JSON.stringify(id));

    //     if(id === data.length-(data.length-1)){
    //         console.log("inside 1");
    //         setskippreviousbool(true);
    //         TrackPlayer.updateOptions({     
    //             capabilities: [
    //                 Capability.Play,
    //                 Capability.Pause,
    //                 Capability.SkipToNext
    //             ]
    //         })
    //     }else{
    //         console.log("inside 1 else");
    //         setskippreviousbool(false);
    //         TrackPlayer.updateOptions({
    //             capabilities: [
    //                 Capability.Play,
    //                 Capability.Pause,
    //                 // Capability.SkipToPrevious,
    //                 Capability.SkipToNext
    //             ]
    //         })
    //     }

    //     if(id >= data.length){
    //         console.log("inside 2 in folk")
    //         setskipnextbool(true)
    //         TrackPlayer.updateOptions({
    //             capabilities: [
    //                 Capability.Play,
    //                 Capability.Pause,
    //                 Capability.SkipToPrevious
    //             ]
    //         })
    //     }else{
    //         setskipnextbool(false);
    //         TrackPlayer.updateOptions({
    //             capabilities: [
    //                 Capability.Play,
    //                 Capability.Pause,
    //                 Capability.SkipToPrevious,
    //                 Capability.SkipToNext
    //             ]
    //         })
    //     }
    //         for(var i=0;i<data.length;i++){
    //             if(data[i]['id'] === id){
    //                 AsyncStorage.setItem("current-playing",JSON.stringify(data[i]['id']));
    //                 AsyncStorage.setItem("current-genre",JSON.stringify('folk'));
    //                 let arr = [data[i]];
    //                 try{
    //                     if(i === 0){
    //                         for(j=i+1;j<data.length;j++){
    //                             arr.push(data[i+j]);
    //                         }
    //                     }
    //                     else{
    //                     for(j=i;j<data.length-1;j++){
    //                         // console.log(j+1);
    //                         // console.log(data[i+1])
    //                         arr.push(data[i+1]);
    //                         // console.log(arr);
    //                         // TrackPlayer.add([data[i]].push(data[i+j]));
    //                     }
    //                     }

    //                     TrackPlayer.addEventListener("remote-play", ()=>{
    //                         AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
    //                         TrackPlayer.play();
    //                     })
                        
    //                     TrackPlayer.addEventListener("remote-pause", () => {
    //                         AsyncStorage.setItem("song-playing-bool",JSON.stringify(false));
    //                         TrackPlayer.pause();
    //                     })
                        
    //                     TrackPlayer.addEventListener("remote-previous",async () => {
    //                         // setcurrentPlaying(currentplayingsong-1);
    //                         let a = await TrackPlayer.getActiveTrack();
    //                         play(a["id"]-1); 
                            
    //                     })

    //                     TrackPlayer.addEventListener("remote-next", async () => {
    //                         // setcurrentPlaying(currentplayingsong+1);
    //                         let a = await TrackPlayer.getActiveTrack();
    //                         play(a["id"]+1);
    //                     })
    //                 // console.log(arr);
    //                 TrackPlayer.add(arr);
    //                 AsyncStorage.setItem("song-playing-bool",JSON.stringify(true));
    //                 TrackPlayer.play();
    //                 console.log(RepeatMode);
    //                 TrackPlayer.setRepeatMode(RepeatMode.Queue);
    //                 break;
    //                 }catch(err){
    //                     // console.log(1,err);
    //                 }
    //             }
    //         }
    // }
    


    return(
        <View style={styles.searchmain}>
        <KeyboardAvoidingView style={styles.textinput} behavior='padding'>
        {/* <View  style={styles.textinput}> */}
            <View style={{display:"flex",justifyContent:"center"}}>
                <MaterialIcons name='search' size={30} color="black"/>
            </View>
            <View style={{justifyContent:"center",width:'100%'}}>
                <TextInput placeholder='what do you want to hear?' onChangeText={(e) => {search(e)}}></TextInput>
            </View>
            {/* </View> */}
        </KeyboardAvoidingView>
        <View style={{width:'100%',flex:1}}>
            <ScrollView style={{width:'100%',height:"100%"}}>
            {/* <Song_Render data={data} /> */}
            <View style={{width:'100%',flex:1}}>
            <View style={{flex:1}}>
            {songname.map((e)=>{
                return(
                <View style={{flex:1,width:'100%',display:"flex",justifyContent:"center"}}>
                    <Pressable style={{width:'100%',display:"flex",alignItems:"center"}} onPress={()=>{play(e['title']);setcurrentPlaying(e['id'])}}>

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
    searchmain: {
        backgroundColor: "black",
        flex:1,
        display:"flex",
        alignItems:"center",
    },
    textinput:{
        backgroundColor: "grey",
        width: '90%',
        marginTop:20,
        height: '7%',
        flexDirection:"row"
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